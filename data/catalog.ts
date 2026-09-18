import { getProductMedia, getEditorialMedia } from "@/data/product-media";
import { catalogMapping } from "@/data/catalog-registry";
import { canonicalCatalog, canonicalAssessment } from "@/data/canonical-catalog";
import type { Category, Collection, Product, SubCollection } from "@/types/catalog";

/** Compatibility projection, never a second SKU/price source. Draft variants stay unavailable. */
export const collections: Collection[] = catalogMapping.collections.map(({ mediaId, ...entry }) => ({
  ...entry, ...(mediaId ? { media: getEditorialMedia(mediaId) } : {}),
}));
export const subCollections: SubCollection[] = catalogMapping.subCollections.map(({ mediaId, ...entry }) => ({
  ...entry, ...(mediaId ? { media: getEditorialMedia(mediaId) } : {}),
}));
export const categories: Category[] = catalogMapping.categories.map(({ mediaId, ...entry }) => ({
  ...entry, ...(mediaId ? { media: getEditorialMedia(mediaId) } : {}),
}));
function compatibilityPrice(value: string | null): number | null {
  if (value === null) return null;
  const result = Number(value);
  // Legacy numeric fields cannot represent arbitrary exact amounts; never round.
  if (!Number.isSafeInteger(result) || BigInt(result).toString() !== value) throw new Error("Price exceeds legacy adapter precision");
  return result;
}
const orderable = new Set(canonicalAssessment.variants.filter((v) => v.orderable).map((v) => v.id));
export const products: Product[] = canonicalCatalog.products.map((p) => ({
  id: p.id, slug: p.slug, name: p.name, collectionId: p.collectionId, subCollectionId: p.subCollectionId, categoryId: p.categoryId,
  ...(p.DESCRIPTION != null ? { description: p.DESCRIPTION } : {}),
  colors: canonicalCatalog.colorPatterns.filter((g) => g.productId === p.id).map((g) => ({
    id: g.id, name: g.COLOR!, ...(g.PATTERN !== null ? { pattern: g.PATTERN } : {}),
    media: getProductMedia(p.id, g.COLOR!, g.PATTERN),
    variants: canonicalCatalog.variants.filter((v) => v.colorPatternId === g.id && orderable.has(v.id)).map((v) => ({
      sku: v.SKU!, size: v.SIZE!, originalPrice: compatibilityPrice(v.START_PRICE), finalPrice: compatibilityPrice(v.FINAL_PRICE),
    })),
  })),
}));
