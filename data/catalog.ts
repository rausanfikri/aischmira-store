import { productMedia } from "@/data/product-media";
import { skuMasterData, type SKUMasterItem } from "@/data/sku-master";
import type { Category, Collection, Product, ProductColor, SubCollection } from "@/types/catalog";

export const collections: Collection[] = [
  { id: "that-woman", slug: "that-woman", name: "That Woman", media: productMedia["she-dress"].Black[0] },
  { id: "rempah-revival", slug: "rempah-revival", name: "Rempah Revival" },
];

export const subCollections: SubCollection[] = [
  { id: "femme", slug: "femme", name: "Femme", collectionId: "that-woman" },
  { id: "her", slug: "her", name: "Her", collectionId: "that-woman" },
  { id: "she", slug: "she", name: "She", collectionId: "that-woman", media: productMedia["she-dress"].Black[0] },
  { id: "amara", slug: "amara", name: "Amara", collectionId: "rempah-revival" },
  { id: "aveline", slug: "aveline", name: "Aveline", collectionId: "rempah-revival" },
  { id: "bianca", slug: "bianca", name: "Bianca", collectionId: "rempah-revival" },
  { id: "briana", slug: "briana", name: "Briana", collectionId: "rempah-revival" },
  { id: "dasya", slug: "dasya", name: "Dasya", collectionId: "rempah-revival" },
  { id: "gendis", slug: "gendis", name: "Gendis", collectionId: "rempah-revival" },
  { id: "jolly", slug: "jolly", name: "Jolly", collectionId: "rempah-revival" },
  { id: "luna", slug: "luna", name: "Luna", collectionId: "rempah-revival" },
  { id: "priscilla", slug: "priscilla", name: "Priscilla", collectionId: "rempah-revival" },
  { id: "safira", slug: "safira", name: "Safira", collectionId: "rempah-revival" },
  { id: "scarf", slug: "scarf", name: "Scarf", collectionId: "rempah-revival" },
  { id: "tiffany", slug: "tiffany", name: "Tiffany", collectionId: "rempah-revival" },
  { id: "zamira", slug: "zamira", name: "Zamira", collectionId: "rempah-revival" },
];

export const categories: Category[] = [
  { id: "outerwear", slug: "outerwear", name: "Outerwear" },
  { id: "tops", slug: "tops", name: "Tops" },
  { id: "bottoms", slug: "bottoms", name: "Bottoms" },
  { id: "dress", slug: "dress", name: "Dress", media: productMedia["she-dress"].Black[0] },
  { id: "pyjamas", slug: "pyjamas", name: "Pyjamas" },
  { id: "accessories", slug: "accessories", name: "Accessories" },
];

interface ProductDefinition {
  slug: string;
  name: string;
  subCollectionId: string;
  categoryId: string;
  /** Explicit identity mapping; visible names never come from case conversion. */
  sourceGroups: [collection: string, type: string][];
}

const productDefinitions: ProductDefinition[] = [
  { slug: "femme-outer", name: "Femme Outer", subCollectionId: "femme", categoryId: "outerwear", sourceGroups: [["Femme", "Outer"]] },
  { slug: "femme-skirt", name: "Femme Skirt", subCollectionId: "femme", categoryId: "bottoms", sourceGroups: [["Femme", "Skirt"]] },
  { slug: "femme-skirt-maxi", name: "Femme Skirt Maxi", subCollectionId: "femme", categoryId: "bottoms", sourceGroups: [] },
  { slug: "femme-tank-top", name: "Femme Tank Top", subCollectionId: "femme", categoryId: "tops", sourceGroups: [["Femme", "Tank Top"]] },
  { slug: "her-pants", name: "Her Pants", subCollectionId: "her", categoryId: "bottoms", sourceGroups: [["Her", "Pants"]] },
  { slug: "her-top-long-sleeve", name: "Her Top Long Sleeve", subCollectionId: "her", categoryId: "tops", sourceGroups: [["Her", "Long Sleeve Top"]] },
  { slug: "her-top-short-sleeve", name: "Her Top Short Sleeve", subCollectionId: "her", categoryId: "tops", sourceGroups: [["Her", "Short Sleeve Top"]] },
  { slug: "her-top-sleeve-less", name: "Her Top Sleeve Less", subCollectionId: "her", categoryId: "tops", sourceGroups: [] },
  { slug: "she-dress", name: "She Dress", subCollectionId: "she", categoryId: "dress", sourceGroups: [["She", "Dress"]] },
  { slug: "she-dress-hijab-friendly", name: "She Dress Hijab Friendly", subCollectionId: "she", categoryId: "dress", sourceGroups: [] },
  { slug: "amara-skirt", name: "Amara Skirt", subCollectionId: "amara", categoryId: "bottoms", sourceGroups: [["Amara", "Skirt"]] },
  { slug: "aveline-shirt", name: "Aveline Shirt", subCollectionId: "aveline", categoryId: "tops", sourceGroups: [["Aveline", "Shirt"]] },
  { slug: "bianca-blazer", name: "Bianca Blazer", subCollectionId: "bianca", categoryId: "outerwear", sourceGroups: [["Bianca", "Blazer"]] },
  { slug: "bianca-obie", name: "Bianca Obie", subCollectionId: "bianca", categoryId: "accessories", sourceGroups: [["Bianca", "Obie"]] },
  { slug: "briana-blouse", name: "Briana Blouse", subCollectionId: "briana", categoryId: "tops", sourceGroups: [["Briana", "Blouse"]] },
  { slug: "dasya-top", name: "Dasya Top", subCollectionId: "dasya", categoryId: "tops", sourceGroups: [["Dasya", "Blouse"]] },
  { slug: "dasya-trousers", name: "Dasya Trousers", subCollectionId: "dasya", categoryId: "bottoms", sourceGroups: [["Dasya", "Trousers"]] },
  { slug: "gendis-top", name: "Gendis Top", subCollectionId: "gendis", categoryId: "tops", sourceGroups: [["Gendis", "Top"]] },
  { slug: "jolly-pyjama-long-set", name: "Jolly Pyjama Long Set", subCollectionId: "jolly", categoryId: "pyjamas", sourceGroups: [["Jolly", "Long Sleeve Top + Pants"]] },
  { slug: "jolly-pyjama-short-set", name: "Jolly Pyjama Short Set", subCollectionId: "jolly", categoryId: "pyjamas", sourceGroups: [["Jolly", "Short Sleeve Top + Shorts"]] },
  { slug: "luna-pants-belt", name: "Luna Pants & Belt", subCollectionId: "luna", categoryId: "bottoms", sourceGroups: [["Luna", "Pants"]] },
  { slug: "priscilla-pants", name: "Priscilla Pants", subCollectionId: "priscilla", categoryId: "bottoms", sourceGroups: [["Priscila", "Pleated Pants"]] },
  { slug: "safira-skirt", name: "Safira Skirt", subCollectionId: "safira", categoryId: "bottoms", sourceGroups: [["Safira", "Skirt"]] },
  { slug: "safira-top", name: "Safira Top", subCollectionId: "safira", categoryId: "tops", sourceGroups: [["Safira", "Top"]] },
  { slug: "scarf", name: "Scarf", subCollectionId: "scarf", categoryId: "accessories", sourceGroups: [["Am Monogram", "Scarf"], ["Floral Meadow", "Scarf"], ["Chili Chic", "Scarf"], ["Garlic Bloom", "Scarf"], ["Spice Blossom", "Scarf"]] },
  { slug: "tiffany-trousers", name: "Tiffany Trousers", subCollectionId: "tiffany", categoryId: "bottoms", sourceGroups: [["Tifani", "Trousers"]] },
  { slug: "zamira-dress", name: "Zamira Dress", subCollectionId: "zamira", categoryId: "dress", sourceGroups: [["Zamira", "Long Dress"]] },
];

function validPrice(value: number): number | null {
  return Number.isSafeInteger(value) && value >= 0 ? value : null;
}

function toProduct(definition: ProductDefinition): Product {
  const parent = subCollections.find((entry) => entry.id === definition.subCollectionId);
  if (!parent) throw new Error(`Unknown sub-collection: ${definition.subCollectionId}`);

  const records = skuMasterData.filter((row) => definition.sourceGroups.some(
    ([collection, type]) => row.collection === collection && row.type === type,
  ));
  const colorGroups = new Map<string, SKUMasterItem[]>();
  for (const row of records) {
    const key = `${row.collection}:${row.color}`;
    const group = colorGroups.get(key) ?? [];
    group.push(row);
    colorGroups.set(key, group);
  }

  const colors: ProductColor[] = Array.from(colorGroups, ([id, rows]) => ({
    id,
    name: rows[0].color,
    ...(definition.slug === "scarf" ? { pattern: rows[0].collection } : {}),
    media: productMedia[definition.slug]?.[rows[0].color] ?? [],
    variants: rows.map((row) => ({
      sku: row.skuCode,
      size: row.size,
      originalPrice: validPrice(row.marketplaceDefaultPrice),
      finalPrice: validPrice(row.marketplaceFinalPrice),
    })),
  }));
  const materials = [...new Set(records.map((row) => row.fabric).filter((value) => value && value !== "-"))];

  return {
    id: definition.slug,
    slug: definition.slug,
    name: definition.name,
    collectionId: parent.collectionId,
    subCollectionId: definition.subCollectionId,
    categoryId: definition.categoryId,
    ...(materials.length === 1 ? { material: materials[0] } : {}),
    colors,
  };
}

export const products: Product[] = productDefinitions.map(toProduct);

// Fail at the data boundary if a new source group has not been mapped, or if a
// mapping would silently duplicate a SKU. Updating catalog data never needs UI edits.
const mappedSkus = products.flatMap((product) => product.colors.flatMap((color) => color.variants.map((variant) => variant.sku)));
if (mappedSkus.length !== skuMasterData.length || new Set(mappedSkus).size !== skuMasterData.length) {
  throw new Error("Catalog mapping must include every master SKU exactly once.");
}
