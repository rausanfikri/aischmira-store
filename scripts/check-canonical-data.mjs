import { createEvidenceSnapshot, loadTs } from './canonical-support.mjs';

const { catalog, workbook, extractionIssues, skuMasterData } = createEvidenceSnapshot();
const { validateCanonicalCatalog } = loadTs('lib/catalog-contract.ts');
const result = validateCanonicalCatalog(catalog);
const counts = (rows, key) => Object.fromEntries([...new Set(rows.map((r) => r[key]))].map((value) => [value, rows.filter((r) => r[key] === value).length]));
const summary = {
  sourceRows: workbook.rows.length,
  sourceUniqueSKUs: new Set(workbook.rows.map((r) => r.fields.SKU).filter(Boolean)).size,
  tsRows: skuMasterData.length, tsUniqueSKUs: new Set(skuMasterData.map((r) => r.skuCode)).size,
  workbookSkusMissingFromTS: extractionIssues.filter((i) => i.code === 'WORKBOOK_SKU_MISSING_FROM_TS').length,
  tsSkusMissingFromWorkbook: extractionIssues.filter((i) => i.code === 'TS_SKU_NOT_IN_WORKBOOK').length,
  pricePairDifferences: extractionIssues.filter((i) => i.code === 'PRICE_PAIR_DIFFERENCE').length,
  unverifiedFormulaPriceRows: catalog.variants.filter((v) => v.provenance.priceEvidence === 'cached-unverified').length,
  distinctFormulaPriceCells: new Set(workbook.rows.flatMap((r) => ['START_PRICE', 'FINAL_PRICE'].filter((k) => r.formulas[k]).map((k) => r.cells[k]))).size,
  duplicateSourceSKUs: workbook.rows.length - new Set(workbook.rows.map((r) => r.fields.SKU)).size,
  missingSKU: catalog.variants.filter((v) => v.SKU === null).length,
  missingPriceRows: workbook.rows.filter((r) => r.fields.START_PRICE === null || r.fields.FINAL_PRICE === null).length,
  invalidSourcePrices: extractionIssues.filter((i) => i.code === 'INVALID_SOURCE_PRICE').length,
  missingProductIdentity: catalog.variants.filter((v) => v.productId === null).length,
  missingHierarchy: result.issues.filter((i) => i.code === 'HIERARCHY').length,
  fabricConflicts: result.issues.filter((i) => i.code === 'FABRIC_CONFLICT'),
  missingFabric: catalog.variants.filter((v) => v.FABRIC === null).length,
  literalDashSize: catalog.variants.filter((v) => v.SIZE === '-').length,
  missingSize: catalog.variants.filter((v) => v.SIZE === null).length,
  patternAmbiguities: result.issues.filter((i) => i.code === 'PATTERN_AMBIGUOUS'),
  productsWithoutSKU: catalog.products.filter((p) => !catalog.variants.some((v) => v.productId === p.id)).map((p) => p.name),
  colorPatterns: catalog.colorPatterns.length,
  patternedGroups: catalog.colorPatterns.filter((g) => g.PATTERN !== null).length,
  mediaGroups: new Set(catalog.media.map((m) => m.colorPatternId)).size,
  mediaMissingGroups: result.issues.filter((i) => i.code === 'MEDIA_MISSING').length,
  dataEligibleVariants: result.variants.filter((v) => v.dataEligible).length,
  orderableVariants: result.variants.filter((v) => v.orderable).length,
  publication: counts(catalog.products, 'publication'),
  issues: counts(result.issues, 'code'),
  extractionIssueCounts: counts(extractionIssues, 'code'),
  extractionIssues,
};
console.log(JSON.stringify(summary, null, 2));
// Expected draft definitions/media gaps are warnings, not reasons to manufacture data.
// Source-category differences are visible for review; never silently normalize them.
if (extractionIssues.some((i) => i.code !== 'SOURCE_CATEGORY_ALIAS') || result.issues.some((i) => i.severity === 'error')) process.exitCode = 1;
