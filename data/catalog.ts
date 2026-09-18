import { getProductMedia, getEditorialMedia } from "@/data/product-media";
import { catalogMapping } from "@/data/catalog-registry";
import type { ProductMapping } from "@/types/catalog-registry";
import { skuMasterData, type SKUMasterItem } from "@/data/sku-master";
import type { Category, Collection, Product, ProductColor, SubCollection } from "@/types/catalog";

/** Compatibility view only: registry owns metadata; legacy TS rows remain transitional. */
export const collections: Collection[] = catalogMapping.collections.map(({ mediaId, ...entry }) => ({
  ...entry, ...(mediaId ? { media: getEditorialMedia(mediaId) } : {}),
}));
export const subCollections: SubCollection[] = catalogMapping.subCollections.map(({ mediaId, ...entry }) => ({
  ...entry, ...(mediaId ? { media: getEditorialMedia(mediaId) } : {}),
}));
export const categories: Category[] = catalogMapping.categories.map(({ mediaId, ...entry }) => ({
  ...entry, ...(mediaId ? { media: getEditorialMedia(mediaId) } : {}),
}));

function validPrice(value: number): number | null {
  return Number.isSafeInteger(value) && value >= 0 ? value : null;
}

function toProduct(definition: ProductMapping): Product {
  const parent = subCollections.find((entry) => entry.id === definition.subCollectionId);
  if (!parent) throw new Error(`Unknown sub-collection: ${definition.subCollectionId}`);

  const records = skuMasterData.filter((row) => definition.sourceGroups.some(
    (group) => row.collection === group.collection && row.type === group.type,
  ));
  const colorGroups = new Map<string, SKUMasterItem[]>();
  for (const row of records) {
    const key = `${row.collection}:${row.color}`;
    const group = colorGroups.get(key) ?? [];
    group.push(row);
    colorGroups.set(key, group);
  }

  const colors: ProductColor[] = Array.from(colorGroups, ([id, rows]) => {
    const group = definition.sourceGroups.find((g) => g.collection === rows[0].collection && g.type === rows[0].type);
    if (!group) throw new Error(`Unmapped legacy source group: ${id}`);
    return {
      id,
      name: rows[0].color,
      ...(group.PATTERN !== null ? { pattern: group.PATTERN } : {}),
      media: getProductMedia(definition.id, rows[0].color, group.PATTERN),
      variants: rows.map((row) => ({
        sku: row.skuCode,
        size: row.size,
        originalPrice: validPrice(row.marketplaceDefaultPrice),
        finalPrice: validPrice(row.marketplaceFinalPrice),
      })),
    };
  });
  const materials = [...new Set(records.map((row) => row.fabric).filter((value) => value && value !== "-"))];

  return {
    id: definition.id,
    slug: definition.slug,
    name: definition.name,
    ...(definition.DESCRIPTION != null ? { description: definition.DESCRIPTION } : {}),
    collectionId: parent.collectionId,
    subCollectionId: definition.subCollectionId,
    categoryId: definition.categoryId,
    ...(materials.length === 1 ? { material: materials[0] } : {}),
    colors,
  };
}

export const products: Product[] = catalogMapping.products.map(toProduct);

// Fail at the data boundary if a new source group has not been mapped, or if a
// mapping would silently duplicate a SKU. Updating catalog data never needs UI edits.
const mappedSkus = products.flatMap((product) => product.colors.flatMap((color) => color.variants.map((variant) => variant.sku)));
if (mappedSkus.length !== skuMasterData.length || new Set(mappedSkus).size !== skuMasterData.length) {
  throw new Error("Catalog mapping must include every master SKU exactly once.");
}
