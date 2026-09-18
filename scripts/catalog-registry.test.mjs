import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import ts from 'typescript';
import { root, loadTs, readWorkbook, createEvidenceSnapshot } from './canonical-support.mjs';
import { checkMediaFiles, assessRegistries } from './check-catalog-registries.mjs';

const baseline = 'aedee1eb416ab9022c61cd88a8267a646f3f156e';
const require = createRequire(import.meta.url);
const baselineCache = new Map();
function baselineModule(file) {
  file = file.replaceAll('\\', '/');
  if (baselineCache.has(file)) return baselineCache.get(file).exports;
  const source = execFileSync('git', ['show', `${baseline}:${file}`], { cwd: root, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024, windowsHide: true });
  const loaded = { exports: {} }; baselineCache.set(file, loaded);
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  const localRequire = (name) => name.startsWith('@/') ? baselineModule(name.slice(2) + '.ts')
    : name.startsWith('.') ? baselineModule(path.posix.join(path.posix.dirname(file), name) + '.ts') : require(name);
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`)(localRequire, loaded, loaded.exports);
  return loaded.exports;
}
const registry = JSON.parse(fs.readFileSync(path.join(root, 'data/catalog-mapping.json'), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/product-media.json'), 'utf8'));
const workbook = readWorkbook();
const rows = workbook.rows.map((r) => r.fields);
const { validateCatalogRegistries: validate, resolveProductMapping } = loadTs('lib/catalog-registry.ts');
const { canonicalCatalogSchema } = loadTs('lib/catalog-contract.ts');
const snapshot = createEvidenceSnapshot(workbook);
const copy = (value) => structuredClone(value);
const has = (issues, code) => issues.some((i) => i.code === code);

test('actual workbook and registry relations/files validate without publication claims', () => {
  assert.deepEqual(assessRegistries().issues, []);
  assert.deepEqual([registry.collections.length, registry.subCollections.length, registry.categories.length, registry.products.length, snapshot.catalog.colorPatterns.length, snapshot.catalog.variants.length, manifest.media.length], [2, 16, 6, 27, 106, 369, 5]);
  assert.equal(new Set(snapshot.catalog.variants.map((v) => v.SKU)).size, 369);
});

test('compatibility output, every legacy SKU/price and exact naming equal the starting checkpoint', () => {
  const before = baselineModule('data/catalog.ts'); const after = loadTs('data/catalog.ts');
  for (const key of ['collections', 'subCollections', 'categories', 'products']) assert.deepEqual(after[key], before[key], key);
  assert.deepEqual(loadTs('data/sku-master.ts').skuMasterData, baselineModule('data/sku-master.ts').skuMasterData);
  assert.deepEqual(loadTs('data/product-media.ts').productMedia, baselineModule('data/product-media.ts').productMedia);
  assert.deepEqual(fs.readFileSync(path.join(root, 'data/MASTER PRODUCTS.xlsx')), execFileSync('git', ['show', `${baseline}:data/MASTER PRODUCTS.xlsx`], { cwd: root, maxBuffer: 8 * 1024 * 1024, windowsHide: true }));
});

test('all workbook source groups map without requiring membership in legacy SKU data', () => {
  for (const row of rows) assert.ok(resolveProductMapping(registry, row.COLLECTION, row.TYPE));
  const legacy = loadTs('data/sku-master.ts').skuMasterData;
  const held = legacy.splice(0, legacy.length);
  try {
    const result = createEvidenceSnapshot(workbook);
    assert.equal(result.catalog.variants.length, 369);
    assert.ok(result.catalog.variants.every((v) => v.productId !== null));
    assert.equal(result.extractionIssues.filter((i) => i.code === 'WORKBOOK_SKU_MISSING_FROM_TS').length, 369);
  } finally { legacy.push(...held); }
});

test('three unsupported definitions stay draft without manufactured variants', () => {
  const empty = snapshot.catalog.products.filter((p) => !snapshot.catalog.variants.some((v) => v.productId === p.id));
  assert.deepEqual(empty.map((p) => p.name), ['Femme Skirt Maxi', 'Her Top Sleeve Less', 'She Dress Hijab Friendly']);
  assert.ok(empty.every((p) => p.publication === 'draft'));
  assert.ok(registry.products.every((p) => p.DESCRIPTION === null));
  assert.deepEqual(registry.colorMetadata, []);
});

test('duplicate IDs/source mappings and invalid hierarchy fail with actionable locations', () => {
  let r = copy(registry); r.products[1].id = r.products[0].id;
  assert.ok(has(validate(r, manifest, rows), 'DUPLICATE'));
  r = copy(registry); r.products[1].sourceGroups.push(copy(r.products[0].sourceGroups[0]));
  assert.ok(has(validate(r, manifest), 'DUPLICATE'));
  assert.throws(() => resolveProductMapping(r, r.products[0].sourceGroups[0].collection, r.products[0].sourceGroups[0].type), /Ambiguous/);
  r = copy(registry); r.products[0].collectionId = r.collections[1].id;
  assert.ok(has(validate(r, manifest), 'HIERARCHY'));
  r = copy(registry); r.products[0].subCollectionId = 'missing';
  assert.ok(has(validate(r, manifest), 'HIERARCHY'));
  r = copy(registry); r.products[0].categoryId = 'missing';
  const issues = validate(r, manifest); assert.ok(has(issues, 'HIERARCHY'));
  assert.ok(issues.every((i) => i.source && i.field && i.problem && i.severity === 'error'));
});

test('unknown source groups and invalid statuses fail; SKU/price fields cannot be authored in registry', () => {
  let r = copy(registry); r.products[0].sourceGroups = [];
  assert.ok(has(validate(r, manifest, rows), 'UNMAPPED_SOURCE'));
  r = copy(registry); r.products[0].sourceGroups[0].type = 'Unmapped source type';
  assert.ok(has(validate(r, manifest, rows), 'ORPHAN_SOURCE_GROUP'));
  for (const extra of [{ SKU: rows[0].SKU }, { START_PRICE: rows[0].START_PRICE }, { MATERIAL: rows[0].FABRIC }, { publication: 'in-stock' }]) {
    r = copy(registry); Object.assign(r.products[0], extra); assert.ok(has(validate(r, manifest), 'SCHEMA'));
  }
});

test('media duplication, orphans, wrong color/pattern, order, primary and missing files are rejected', () => {
  let m = copy(manifest); m.media.push(copy(m.media[0])); assert.ok(has(validate(registry, m, rows), 'DUPLICATE'));
  m = copy(manifest); m.media[0].productId = 'missing'; assert.ok(has(validate(registry, m, rows), 'MEDIA_PARENT'));
  m = copy(manifest); m.media[0].COLOR = 'unmapped'; assert.ok(has(validate(registry, m, rows), 'UNKNOWN_COLOR_PATTERN'));
  m = copy(manifest); m.media[0].PATTERN = 'Am Monogram'; assert.ok(has(validate(registry, m, rows), 'MEDIA_PARENT'));
  m = copy(manifest); m.media[4].sortOrder = m.media[3].sortOrder; assert.ok(has(validate(registry, m), 'MEDIA_ORDER'));
  m = copy(manifest); m.media[0].primary = false; assert.ok(has(validate(registry, m), 'MEDIA_PRIMARY'));
  m = copy(manifest); m.media[0].reference = '/images/not-present.jpg'; assert.ok(has(checkMediaFiles(m), 'MEDIA_FILE_MISSING'));
  m.media[0].reference = '/images/../package.json'; assert.ok(has(validate(registry, m), 'SCHEMA'));
});

test('exact media lookup never falls back across color or pattern', () => {
  const { getProductMedia } = loadTs('data/product-media.ts');
  assert.equal(getProductMedia('she-dress', 'Black', null).length, 1);
  assert.deepEqual(getProductMedia('she-dress', 'Butter Yellow', null), []);
  assert.deepEqual(getProductMedia('she-dress', 'Black', 'Am Monogram'), []);
  assert.deepEqual(getProductMedia('she-dress', 'black', null), []);
});

test('metadata is product/group scoped, missing by default and deterministic', () => {
  const catalog = copy(snapshot.catalog);
  assert.equal(canonicalCatalogSchema.safeParse(catalog).success, true);
  catalog.products[0].DESCRIPTION = ''; catalog.colorPatterns[0].COLOR_CODE = null;
  assert.equal(canonicalCatalogSchema.safeParse(catalog).success, true);
  catalog.variants[0].DESCRIPTION = ''; assert.equal(canonicalCatalogSchema.safeParse(catalog).success, false);
  assert.equal(JSON.stringify(createEvidenceSnapshot(workbook)), JSON.stringify(snapshot));
});
