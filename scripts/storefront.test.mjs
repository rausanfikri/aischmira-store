import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadTs } from './canonical-support.mjs';

const { products, categories } = loadTs('services/storefront.ts');
const { parseBag, resolveBag, money } = loadTs('lib/commerce.ts');
const { checkoutMessage } = loadTs('lib/whatsapp.ts');
const snapshot = JSON.parse(fs.readFileSync('data/generated/canonical-catalog.json', 'utf8')).catalog;
const customer = { name: 'Demo customer', phone: '+6281234567890', address: 'Demo address — not a delivery request' };

test('all 497 exact source SKUs are exposed once across 30 raw workbook product groups', () => {
  assert.equal(products.length, 30);
  const variants = products.flatMap(p => p.variants);
  assert.equal(variants.length, 497);
  assert.equal(new Set(variants.map(v => v.sku)).size, 497);
  for (const original of snapshot.variants) {
    const product = products.find(p => p.variants.some(v => v.sku === original.SKU));
    const current = product.variants.find(v => v.sku === original.SKU);
    const source = original.provenance.sourceValues;
    for (const [field, sourceField] of [['name','PRODUCT'],['collection','COLLECTION'],['subCollection','SUB_COLLECTION'],['category','CATEGORY']]) assert.equal(product[field], source[sourceField]);
    assert.deepEqual([current.size,current.color,current.colorCode,current.fabric,current.startPrice,current.finalPrice,current.status], [source.SIZE,source.COLOR,source.COLOR_CODE,original.FABRIC,original.START_PRICE,original.FINAL_PRICE,source.STATUS]);
  }
  assert.ok(categories.includes('Pants'));
  assert.ok(categories.includes('Long Pyjama Set'));
  assert.ok(snapshot.products.every(p => p.publication === 'draft'));
});

test('media stays attached to exact source variant context; missing stays an empty array', () => {
  for (const product of products) for (const variant of product.variants) {
    const original = snapshot.variants.find(v => v.SKU === variant.sku);
    assert.deepEqual(variant.media.map(m => m.src), snapshot.media.filter(m => m.productId === original.productId && m.colorPatternId === original.colorPatternId).map(m => m.reference));
  }
  assert.deepEqual(products.flatMap(p => p.variants).find(v => v.sku === 'SHE-DRESS-BUTTERYELLOW-M').media, []);
});

test('untrusted saved bags reject malformed, duplicate and fractional quantities', () => {
  for (const invalid of [null, {}, [{sku:'X',quantity:0}], [{sku:'X',quantity:1.5}], [{sku:'X',quantity:1000}], [{sku:'X',quantity:1},{sku:'X',quantity:2}]]) assert.throws(() => parseBag(invalid));
  assert.deepEqual(parseBag([{sku:'X',quantity:2,price:1,customer:'discard'}]), [{sku:'X',quantity:2}]);
  assert.throws(() => resolveBag([{sku:'UNKNOWN-SKU',quantity:1}],products), /cannot be ordered/);
});

test('checkout re-resolves exact canonical selling prices with integer totals', () => {
  const lines = [{sku:'SHE-DRESS-BUTTERYELLOW-M',quantity:2}];
  const result = checkoutMessage(lines,products,customer);
  assert.match(result.message,/DEMO ORDER REQUEST/);
  assert.match(result.message,/SHE-DRESS-BUTTERYELLOW-M/);
  assert.match(result.message,/Butter Yellow/);
  assert.match(result.message,/Rp 1\.718\.000/);
  assert.equal(new URL(result.url).pathname,'/6285121344848');
  assert.equal(new URL(result.url).searchParams.get('text'),result.message);
  assert.equal(money('9007199254740993000'),'Rp 9.007.199.254.740.993.000');
  const inactive = structuredClone(products); inactive.find(p=>p.variants.some(v=>v.sku===lines[0].sku)).variants.find(v=>v.sku===lines[0].sku).status='INACTIVE';
  assert.throws(()=>checkoutMessage(lines,inactive,customer),/cannot be ordered/);
});

test('checkout blocks empty cart and incomplete or invalid contact fields', () => {
  const lines = [{sku:'SHE-DRESS-BUTTERYELLOW-M',quantity:1}];
  assert.throws(()=>checkoutMessage([],products,customer),/empty/);
  for (const override of [{name:' '},{address:''},{phone:'123'},{phone:'not-a-phone'}]) assert.throws(()=>checkoutMessage(lines,products,{...customer,...override}));
});

test('Bazaar rejects unsafe links, invalid dates and reversed event times', () => {
  const { bazaarSchema } = loadTs('lib/bazaar.ts');
  const demo = JSON.parse(fs.readFileSync('data/demo-content.json','utf8')).bazaar;
  assert.equal(bazaarSchema.safeParse(demo).success,true);
  for (const override of [{date:'2026-02-30'},{endTime:'09:00'},{mapsLink:'javascript:alert(1)'},{mapsEmbed:'https://example.com/maps/embed'}]) assert.equal(bazaarSchema.safeParse([{...demo[0],...override}]).success,false);
});
