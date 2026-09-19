import { canonicalCatalog } from "@/data/canonical-catalog";
import demo from "@/data/demo-content.json";
import type { StoreProduct } from "@/types/storefront";
export const slugify = (value: string) => value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// Workbook values override historical display mappings in this demo projection.
const grouped = new Map<string, StoreProduct>();
for (const variant of canonicalCatalog.variants) {
    const row = variant.provenance.sourceValues;
    if (!variant.SKU || !variant.SIZE || !variant.START_PRICE || !variant.FINAL_PRICE || !row.COLLECTION || !row.SUB_COLLECTION || !row.PRODUCT || !row.CATEGORY || !row.COLOR)
        throw new Error("Incomplete storefront source row");
    const id = JSON.stringify([row.COLLECTION, row.SUB_COLLECTION, row.PRODUCT, row.CATEGORY]);
    let product = grouped.get(id);
    if (!product) {
        product = { id, slug: [row.COLLECTION, row.SUB_COLLECTION, row.PRODUCT].map(slugify).join("--"), name: row.PRODUCT, collection: row.COLLECTION, subCollection: row.SUB_COLLECTION, category: row.CATEGORY, description: row.DESCRIPTION || demo.productDescription, descriptionSource: row.DESCRIPTION ? "REAL" : "DEMO", variants: [] };
        grouped.set(id, product);
    }
    product.variants.push({ sku: variant.SKU, size: variant.SIZE, color: row.COLOR, colorCode: row.COLOR_CODE, fabric: variant.FABRIC, startPrice: variant.START_PRICE, finalPrice: variant.FINAL_PRICE, status: row.STATUS, media: canonicalCatalog.media.filter(m => m.productId === variant.productId && m.colorPatternId === variant.colorPatternId).map(m => ({ src: m.reference, alt: m.alt, width: m.width, height: m.height })) });
}
export const products = [...grouped.values()];
if (new Set(products.map(p => p.slug)).size !== products.length)
    throw new Error("Product URL collision");
export const collections = [...new Set(products.map(p => p.collection))];
export const categories = [...new Set(products.map(p => p.category))];
export const findProduct = (slug: string) => products.find(p => p.slug === slug);
