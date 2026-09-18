// Read-only validation harness, not a production import/publish service.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';
import ts from 'typescript';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nodeRequire = createRequire(import.meta.url);
const cache = new Map();
export function loadTs(relative) {
  const filename = path.resolve(root, relative);
  if (filename.endsWith('.json')) return JSON.parse(fs.readFileSync(filename, 'utf8'));
  if (cache.has(filename)) return cache.get(filename).exports;
  const loaded = { exports: {} };
  cache.set(filename, loaded);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    fileName: filename,
  }).outputText;
  const localRequire = (specifier) => {
    const suffix = specifier.endsWith('.json') ? '' : '.ts';
    if (specifier.startsWith('@/')) return loadTs(`${specifier.slice(2)}${suffix}`);
    if (specifier.startsWith('.')) return loadTs(path.resolve(path.dirname(filename), `${specifier}${suffix}`));
    return nodeRequire(specifier);
  };
  vm.runInThisContext(`(function(require, exports, module) {${code}\n})`, { filename })(localRequire, loaded.exports, loaded);
  return loaded.exports;
}

export function readWorkbook() {
  return JSON.parse(execFileSync('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(root, 'scripts/read-product-workbook.ps1')], {
    encoding: 'utf8', maxBuffer: 8 * 1024 * 1024, windowsHide: true,
  }));
}

/** Current data is evidence, never an automatic publication instruction. */
export function createEvidenceSnapshot(workbook = readWorkbook()) {
  const { catalogMapping: registry, mediaManifest } = loadTs('data/catalog-registry.ts');
  const { resolveProductMapping } = loadTs('lib/catalog-registry.ts');
  const { skuMasterData } = loadTs('data/sku-master.ts');
  const { colorPatternIdentity, readRupiah } = loadTs('lib/catalog-contract.ts');
  const extractionIssues = [];
  const named = ({ id, slug, name }) => ({ id, slug, name });
  const catalog = {
    version: 'phase-2-v1',
    collections: registry.collections.map(named),
    subCollections: registry.subCollections.map((sub) => ({ ...named(sub), collectionId: sub.collectionId })),
    categories: registry.categories.map(named),
    products: registry.products.map((p) => ({ ...named(p), collectionId: p.collectionId, subCollectionId: p.subCollectionId, categoryId: p.categoryId,
      DESCRIPTION: p.DESCRIPTION ?? null, publication: p.publication, definitionSource: `data/catalog-mapping.json#${p.id}` })),
    colorPatterns: [], variants: [], media: [],
  };
  for (const record of workbook.rows) {
    const f = record.fields;
    const mapped = resolveProductMapping(registry, f.COLLECTION, f.TYPE);
    if (!mapped) extractionIssues.push({ code: 'UNMAPPED_SOURCE_GROUP', row: record.row, collection: f.COLLECTION, type: f.TYPE });
    // Pattern is explicit in the approved existing mapping, not inferred from color text.
    const PATTERN = mapped?.group.PATTERN ?? null;
    const colorId = mapped ? colorPatternIdentity(mapped.product.id, f.COLOR, PATTERN) : null;
    if (mapped && !catalog.colorPatterns.some((g) => g.id === colorId)) catalog.colorPatterns.push({
      id: colorId, productId: mapped.product.id, COLOR: f.COLOR, PATTERN,
      patternStatus: PATTERN === null ? 'not-applicable' : 'known',
      ...(() => {
        const metadata = registry.colorMetadata.find((m) => colorPatternIdentity(m.productId, m.COLOR, m.PATTERN) === colorId);
        return metadata && metadata.COLOR_CODE !== undefined ? { COLOR_CODE: metadata.COLOR_CODE } : {};
      })(),
    });
    const prices = {};
    for (const field of ['START_PRICE', 'FINAL_PRICE']) {
      const parsed = readRupiah(f[field]); prices[field] = parsed.value;
      if (parsed.invalid) extractionIssues.push({ code: 'INVALID_SOURCE_PRICE', row: record.row, field, raw: f[field] });
    }
    catalog.variants.push({
      id: `DASHBOARD:${record.row}`, productId: mapped?.product.id ?? null, colorPatternId: colorId,
      SKU: f.SKU, SIZE: f.SIZE, FABRIC: f.FABRIC, ...prices,
      provenance: { workbook: workbook.workbook, sheet: workbook.sheet, row: record.row, cells: record.cells,
        sourceSKU: f.SKU, sourceSIZE: f.SIZE, sourceFABRIC: f.FABRIC, sourceCOLOR: f.COLOR,
        sourceNumber: f.SKU_NO, sourceName: f.SKU_NAME, sourceCollection: f.COLLECTION,
        sourceCategory: f.CATEGORY, sourceType: f.TYPE, mappingVersion: registry.version, formulas: record.formulas,
        priceEvidence: record.formulas.START_PRICE || record.formulas.FINAL_PRICE ? 'cached-unverified' : 'literal' },
    });
    const tsRow = skuMasterData.find((r) => r.skuCode === f.SKU);
    if (!tsRow) extractionIssues.push({ code: 'WORKBOOK_SKU_MISSING_FROM_TS', row: record.row, SKU: f.SKU });
    else {
      const pairs = { collection: 'COLLECTION', fabric: 'FABRIC', category: 'CATEGORY', type: 'TYPE', color: 'COLOR', size: 'SIZE', skuName: 'SKU_NAME' };
      for (const [key, field] of Object.entries(pairs)) if (tsRow[key] !== f[field]) extractionIssues.push({ code: 'SOURCE_TS_FIELD_DIFFERENCE', SKU: f.SKU, field, workbook: f[field], dataset: tsRow[key] });
      if (String(tsRow.marketplaceDefaultPrice) !== prices.START_PRICE || String(tsRow.marketplaceFinalPrice) !== prices.FINAL_PRICE)
        extractionIssues.push({ code: 'PRICE_PAIR_DIFFERENCE', SKU: f.SKU });
    }
    if (mapped) {
      const category = catalog.categories.find((c) => c.id === mapped.product.categoryId);
      if (category?.name !== f.CATEGORY) {
        const approved = mapped.group.sourceCategories.includes(f.CATEGORY);
        extractionIssues.push({ code: approved ? 'SOURCE_CATEGORY_ALIAS' : 'SOURCE_CATEGORY_CONFLICT', SKU: f.SKU, source: f.CATEGORY, canonical: category?.name });
      }
    }
  }
  for (const row of skuMasterData) if (!workbook.rows.some((r) => r.fields.SKU === row.skuCode)) extractionIssues.push({ code: 'TS_SKU_NOT_IN_WORKBOOK', SKU: row.skuCode });
  for (const m of mediaManifest.media) {
    const { COLOR, PATTERN, ...fields } = m;
    catalog.media.push({ ...fields, colorPatternId: colorPatternIdentity(m.productId, COLOR, PATTERN) });
  }
  return { catalog, workbook, extractionIssues, skuMasterData };
}
