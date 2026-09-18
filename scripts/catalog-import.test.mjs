import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { root, loadTs, readRawWorkbook } from './canonical-support.mjs';
import { runImport, serialize, writeImportBatch, checkGeneratedFiles, fingerprint } from './import-catalog.mjs';

const { extractProductSource, reconcileCatalog } = loadTs('lib/catalog-import.ts');
const raw = readRawWorkbook();
const hash = 'a'.repeat(64);
const mapping = JSON.parse(fs.readFileSync(path.join(root, 'data/catalog-mapping.json'), 'utf8'));
const media = JSON.parse(fs.readFileSync(path.join(root, 'data/product-media.json'), 'utf8'));
const clone = (value) => structuredClone(value);
const run = (input = raw, registry = mapping, manifest = media) => {
  const extracted = extractProductSource(input, hash);
  return { ...reconcileCatalog(extracted.workbook, registry, manifest, extracted.issues), workbook: extracted.workbook };
};
const set = (input, ref, value, sheet = 'PRODUCTS') => {
  const cells = input.sheets.find((s) => s.name === sheet).cells;
  const cell = cells.find((c) => c.ref === ref);
  if (cell) cell.value = value;
  else cells.push({ ref, value, formula: null, cellType: 's', error: false });
};
const has = (result, code) => result.issues.some((i) => i.code === code);
const rejected = (result) => result.issues.some((i) => i.severity === 'error');

test('source schema drift, unknown columns/sheets and merged rows fail with locations', () => {
  let x = clone(raw); x.sheets[0].name = 'DASHBOARD'; assert.ok(has(run(x), 'SOURCE_SHEET'));
  x = clone(raw); set(x, 'J1', 'OFFLINE_PRICE'); assert.ok(has(run(x), 'SOURCE_HEADER'));
  x = clone(raw); set(x, 'O2', 'unmapped'); assert.ok(has(run(x), 'UNKNOWN_COLUMN'));
  x = clone(raw); x.sheets.push({ name: 'UNMAPPED', cells: [], merges: [] }); assert.ok(has(run(x), 'UNKNOWN_SHEET'));
  x = clone(raw); x.sheets[0].merges.push('E2:E3'); assert.ok(has(run(x), 'SOURCE_MERGES'));
  for (const i of run(x).issues) assert.ok(i.source && i.conflict && i.recommendedAction && 'sourceValue' in i && 'canonicalValue' in i);
});
test('formulas including blank cached values, Excel errors and external links are rejected', () => {
  let x = clone(raw); const cell = x.sheets[0].cells.find((c) => c.ref === 'J2'); cell.formula = '<f>1+1</f>'; cell.value = null;
  assert.ok(has(run(x), 'SOURCE_FORMULA'));
  x = clone(raw); x.sheets[0].cells.find((c) => c.ref === 'K2').error = true; assert.ok(has(run(x), 'SOURCE_CELL_ERROR'));
  x = clone(raw); x.externalLinks.push('externalLink1.xml'); assert.ok(has(run(x), 'EXTERNAL_WORKBOOK_LINK'));
  x = clone(raw); const booleanPrice = x.sheets[0].cells.find((c) => c.ref === 'K2'); booleanPrice.value = '1'; booleanPrice.cellType = 'b';
  assert.ok(has(run(x), 'SOURCE_CELL_TYPE'));
});
test('partially filled rows survive extraction; blank/duplicate SKU and selection fail', () => {
  let x = clone(raw); set(x, 'I2', null); let r = run(x);
  assert.equal(r.workbook.rows.length, 497); assert.equal(r.catalog.variants.length, 497); assert.ok(has(r, 'SKU_MISSING'));
  x = clone(raw); set(x, 'I3', x.sheets[0].cells.find((c) => c.ref === 'I2').value); assert.ok(has(run(x), 'DUPLICATE_SKU'));
  x = clone(raw); set(x, 'H3', 'S'); assert.ok(has(run(x), 'VARIANT_IDENTITY_CONFLICT'));
  x = clone(raw); set(x, 'E499', 'Satin'); r = run(x); assert.equal(r.workbook.rows.length, 498); assert.ok(rejected(r));
});
test('invalid/missing/zero/inverted prices fail without rounding or legacy substitutions', () => {
  for (const amount of ['759000.1', '-1', '1e6', null, '0', '999999999']) {
    const x = clone(raw); set(x, 'K2', amount); assert.ok(rejected(run(x)), String(amount));
  }
  const r = run(); const row = r.catalog.variants.find((v) => v.SKU === 'BIANCA-BLAZER-REDCHILI-S');
  assert.equal(row.START_PRICE, '859000'); assert.equal(row.FINAL_PRICE, '759000');
});
test('official hex stays exact, differs by product and rejects invalid or within-group conflict', () => {
  const r = run(); const navy = r.catalog.colorPatterns.filter((g) => g.COLOR === 'Navy');
  assert.deepEqual(new Set(navy.map((g) => g.COLOR_CODE)), new Set(['#0C1758', '#0E1855']));
  let x = clone(raw); set(x, 'G2', '#abc'); assert.ok(has(run(x), 'COLOR_CODE_FORMAT'));
  x = clone(raw); set(x, 'G3', '#ABCDEF'); assert.ok(has(run(x), 'COLOR_CODE_CONFLICT'));
});
test('nullable FABRIC warnings do not block catalog; descriptions and material are not invented', () => {
  const r = run(); assert.equal(rejected(r), false);
  assert.equal(r.catalog.variants.filter((v) => v.FABRIC === null).length, 55);
  assert.ok(r.issues.filter((i) => i.code === 'FABRIC_MISSING').every((i) => i.severity === 'warning'));
  assert.ok(r.catalog.products.every((p) => p.DESCRIPTION === null && p.publication === 'draft'));
  assert.equal(r.assessment.variants.filter((v) => v.dataEligible).length, 497);
  assert.equal(r.assessment.variants.filter((v) => v.orderable).length, 0);
  let x = clone(raw); set(x, 'L2', 'unapproved source description'); assert.ok(has(run(x), 'DESCRIPTION_OWNERSHIP'));
  x = clone(raw); set(x, 'M2', 'Satin'); assert.ok(has(run(x), 'UNMAPPED_MATERIAL'));
});
test('hierarchy corrections are explicit, Scarf stays one product with patterns', () => {
  const r = run(); const beMe = r.catalog.products.find((p) => p.id === 'be-me-satin-pants');
  assert.equal(beMe.name, 'Satin Pants'); assert.equal(beMe.collectionId, 'rempah-revival'); assert.equal(beMe.categoryId, 'bottoms');
  assert.equal(r.issues.filter((i) => i.code === 'COLLECTION_OVERRIDE').length, 18);
  const scarves = r.catalog.colorPatterns.filter((g) => g.productId === 'scarf');
  assert.equal(scarves.length, 23); assert.equal(new Set(scarves.map((g) => g.PATTERN)).size, 5);
  const registry = clone(mapping); delete registry.products.find((p) => p.id === beMe.id).sourceGroups[0].collectionOverrideReason;
  assert.ok(rejected(run(raw, registry)));
  const x = clone(raw); set(x, 'D2', 'Pants'); assert.ok(has(run(x), 'CATEGORY_CONFLICT'));
});
test('empty MEDIA preserves registry, new metadata-sheet content requires reconciliation', () => {
  assert.equal(run().catalog.media.length, 5);
  const x = clone(raw); set(x, 'A2', 'Scarf', 'MEDIA'); assert.ok(has(run(x), 'UNOWNED_SHEET_DATA'));
});
test('unknown identity and unsupported status fail; active source is not publication', () => {
  let x = clone(raw); set(x, 'C2', 'unmapped product'); assert.ok(has(run(x), 'UNMAPPED_SOURCE'));
  x = clone(raw); set(x, 'N2', 'published'); assert.ok(has(run(x), 'SOURCE_STATUS'));
  x = clone(raw); set(x, 'N2', 'INACTIVE'); const r = run(x);
  assert.equal(rejected(r), false); assert.ok(r.catalog.products.every((p) => p.publication === 'draft'));
});
test('repeat import is byte deterministic, fresh, and leaves workbook unchanged', () => {
  const before = fs.readFileSync(path.join(root, 'data/MASTER PRODUCTS.xlsx'));
  const a = runImport({ check: true }); const b = runImport({ check: true });
  assert.equal(a.report.success, true); assert.equal(b.report.success, true);
  assert.equal(serialize(a), serialize(b));
  assert.deepEqual(fs.readFileSync(path.join(root, 'data/MASTER PRODUCTS.xlsx')), before);
});
test('registry fingerprints ignore checkout line endings but preserve business string values', () => {
  const text = fs.readFileSync(path.join(root, 'data/catalog-mapping.json'), 'utf8');
  assert.equal(fingerprint('registry.json', Buffer.from(text.replaceAll('\r\n', '\n'))), fingerprint('registry.json', Buffer.from(text.replaceAll('\r\n', '\n').replaceAll('\n', '\r\n'))));
  const changed = JSON.parse(text); changed.products[0].DESCRIPTION = 'Supplied description';
  assert.notEqual(fingerprint('registry.json', Buffer.from(text)), fingerprint('registry.json', Buffer.from(JSON.stringify(changed))));
});
test('rejected output cannot replace the previous accepted catalog', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'aischmira-import-test-'));
  try {
    const accepted = JSON.parse(fs.readFileSync(path.join(root, 'data/generated/canonical-catalog.json'), 'utf8'));
    writeImportBatch({ output: accepted, report: { success: true, issues: [] } }, directory);
    const before = fs.readFileSync(path.join(directory, 'canonical-catalog.json'));
    assert.deepEqual(checkGeneratedFiles(accepted, { success: true, issues: [] }, directory), []);
    const changed = clone(accepted); changed.catalog.variants[0].FINAL_PRICE = '1';
    assert.equal(checkGeneratedFiles(changed, { success: true, issues: [] }, directory)[0].code, 'STALE_GENERATED_OUTPUT');
    writeImportBatch({ output: null, report: { success: false, issues: run({}).issues } }, directory);
    assert.deepEqual(fs.readFileSync(path.join(directory, 'canonical-catalog.json')), before);
    assert.equal(JSON.parse(fs.readFileSync(path.join(directory, 'reconciliation-report.json'))).success, false);
    assert.equal(checkGeneratedFiles(accepted, { success: true, issues: [] }, directory)[0].source, 'data/generated/reconciliation-report.json');
  } finally {
    // Only these known test files are removed. No recursive filesystem operation.
    for (const name of ['canonical-catalog.json', 'reconciliation-report.json']) fs.unlinkSync(path.join(directory, name));
    fs.rmdirSync(directory);
  }
});
