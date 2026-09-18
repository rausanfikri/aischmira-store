import test from 'node:test';
import assert from 'node:assert/strict';
import { createEvidenceSnapshot, loadTs } from './canonical-support.mjs';

const { catalog, workbook, extractionIssues } = createEvidenceSnapshot();
const { validateCanonicalCatalog: validate, readRupiah, colorPatternIdentity } = loadTs('lib/catalog-contract.ts');
// Negative tests mutate in-memory copies of actual source records; no demo data is saved.
const copy = () => structuredClone(catalog);
const has = (result, code) => result.issues.some((i) => i.code === code);
function firstProductApprovedFixture() {
  const c = copy();
  // This test-only evidence flag models a future verified source; it is not business approval.
  c.variants.forEach((v) => { v.provenance.priceEvidence = 'cached-approved'; });
  return c;
}

test('source baseline and approved naming remain intact', () => {
  assert.equal(workbook.rows.length, 497);
  assert.equal(new Set(catalog.variants.map((v) => v.SKU)).size, 497);
  assert.equal(catalog.variants.filter((v) => v.SIZE === '-').length, 23);
  assert.equal(extractionIssues.filter((i) => ['PRICE_PAIR_DIFFERENCE', 'WORKBOOK_SKU_MISSING_FROM_TS', 'TS_SKU_NOT_IN_WORKBOOK'].includes(i.code)).length, 0);
  assert.ok(catalog.products.some((p) => p.name === 'Jolly Pyjama Long Set'));
  assert.ok(catalog.products.some((p) => p.name === 'Jolly Pyjama Short Set'));
});
test('snapshot remains draft despite literal approved source prices', () => {
  const result = validate(catalog);
  assert.equal(result.variants.length, 497);
  assert.equal(result.variants.filter((v) => v.orderable).length, 0);
  assert.equal(result.issues.filter((i) => i.code === 'PRICE_SOURCE_UNVERIFIED').length, 0);
  assert.equal(result.canPublishBatch, true);
});
test('unsupported definitions remain present, incomplete and nonorderable', () => {
  const result = validate(catalog);
  const ids = ['femme-skirt-maxi', 'her-top-sleeve-less', 'she-dress-hijab-friendly'];
  for (const id of ids) {
    assert.equal(result.products.find((p) => p.id === id).orderable, false);
    assert.equal(result.products.find((p) => p.id === id).validity, 'incomplete');
  }
  const c = copy(); c.products.find((p) => p.id === ids[0]).publication = 'published';
  assert.ok(has(validate(c), 'PUBLICATION_BLOCKED'));
});
test('duplicate and transformed SKU, missing SKU and duplicate source row fail', () => {
  let c = copy(); c.variants[1].SKU = c.variants[0].SKU;
  assert.ok(has(validate(c), 'DUPLICATE_SKU')); assert.ok(has(validate(c), 'SKU_CHANGED'));
  c = copy(); c.variants[0].SKU = null; assert.ok(has(validate(c), 'SKU_MISSING'));
  c = copy(); c.variants[1].provenance.row = c.variants[0].provenance.row;
  assert.ok(has(validate(c), 'DUPLICATE_SOURCE_ROW'));
});
test('money conversion is exact and rejects fractions, negatives, exponent and missing substitutes', () => {
  assert.deepEqual(readRupiah('900719925474099312345.0'), { value: '900719925474099312345', invalid: false });
  for (const raw of ['1.5', '-1', '1e6', 'Rp1.000', 'NaN', 'Infinity']) assert.equal(readRupiah(raw).invalid, true);
  assert.deepEqual(readRupiah(null), { value: null, invalid: false });
  for (const amount of ['1.5', '-1', 1000]) {
    const c = copy(); c.variants[0].FINAL_PRICE = amount; assert.ok(has(validate(c), 'SCHEMA'));
  }
  const c = copy(); c.variants[0].START_PRICE = null; assert.ok(has(validate(c), 'PRICE_MISSING'));
});
test('offline/extra price and MATERIAL fields are rejected, not silently stripped', () => {
  for (const field of ['OFFLINE_PRICE', 'offlineBazaarPrice', 'MATERIAL']) {
    const c = copy(); c.variants[0][field] = '100'; assert.ok(has(validate(c), 'SCHEMA'));
  }
});
test('invalid hierarchy and mismatched variant parents cannot be orderable', () => {
  const c = firstProductApprovedFixture(); c.products[0].collectionId = c.collections.find((x) => x.id !== c.products[0].collectionId).id;
  assert.ok(has(validate(c), 'HIERARCHY'));
  c.variants[0].productId = null;
  const result = validate(c); assert.ok(has(result, 'VARIANT_PARENT'));
  assert.equal(result.variants[0].orderable, false);
});
test('literal dash survives; missing or transformed size is rejected', () => {
  const dash = catalog.variants.findIndex((v) => v.SIZE === '-');
  assert.ok(!has(validate(catalog), 'SIZE_MISSING'));
  const c = copy(); c.variants[dash].SIZE = null;
  assert.ok(has(validate(c), 'SIZE_MISSING')); assert.ok(has(validate(c), 'SIZE_CHANGED'));
});
test('FABRIC conflicts retain both values and block product variants', () => {
  const c = firstProductApprovedFixture();
  c.variants[0].FABRIC = c.variants.find((v) => v.FABRIC !== c.variants[0].FABRIC).FABRIC;
  c.variants[0].provenance.sourceValues.FABRIC = c.variants[0].FABRIC;
  const result = validate(c); assert.ok(has(result, 'FABRIC_CONFLICT'));
  assert.equal(result.variants[0].dataEligible, false);
});
test('pattern is separate, tuple identity is collision safe and ambiguity is explicit', () => {
  assert.notEqual(colorPatternIdentity('a:b', 'c', null), colorPatternIdentity('a', 'b:c', null));
  const c = copy(); const scarf = c.colorPatterns.find((g) => g.productId === 'scarf');
  assert.ok(scarf.PATTERN); scarf.patternStatus = 'ambiguous';
  assert.ok(has(validate(c), 'PATTERN_AMBIGUOUS'));
});
test('no media fallback and no published draft conversion by existence alone', () => {
  const c = firstProductApprovedFixture(); const she = c.products.find((p) => p.id === 'she-dress');
  const before = validate(c); assert.equal(before.variants.filter((v) => v.orderable).length, 0);
  she.publication = 'published'; const result = validate(c);
  const yellow = c.colorPatterns.find((g) => g.productId === she.id && g.COLOR === 'Butter Yellow');
  const yellowIds = c.variants.filter((v) => v.colorPatternId === yellow.id).map((v) => v.id);
  assert.ok(result.variants.filter((v) => yellowIds.includes(v.id)).every((v) => !v.orderable && v.mediaStatus === 'missing'));
  assert.equal(result.variants.filter((v) => v.orderable).length, 24);
});
test('media parent, primary and sort-order conflicts fail', () => {
  let c = copy(); c.media[0].productId = c.products.find((p) => p.id !== c.media[0].productId).id;
  assert.ok(has(validate(c), 'MEDIA_PARENT'));
  c = copy(); c.media[0].primary = false; assert.ok(has(validate(c), 'MEDIA_PRIMARY'));
  c = copy(); const pair = c.media.filter((m) => c.media.some((other) => other.id !== m.id && other.colorPatternId === m.colorPatternId)); pair[1].sortOrder = pair[0].sortOrder;
  assert.ok(has(validate(c), 'MEDIA_ORDER'));
});
test('unknown malformed data fails closed rather than throwing or returning success', () => {
  for (const value of [null, [], {}, { ...catalog, variants: 'invalid' }]) {
    const result = validate(value); assert.equal(result.canPublishBatch, false); assert.ok(has(result, 'SCHEMA'));
  }
});
