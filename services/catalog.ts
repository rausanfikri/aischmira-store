import { categories, collections, products, subCollections } from "@/data/catalog";
import type { CatalogFilters, CatalogVariant, Product } from "@/types/catalog";

/** Replace this read boundary when a validated remote product source is ready. */
export function getProducts(filters: CatalogFilters = {}): Product[] {
  return products.filter((product) =>
    (!filters.collectionId || product.collectionId === filters.collectionId) &&
    (!filters.subCollectionId || product.subCollectionId === filters.subCollectionId) &&
    (!filters.categoryId || product.categoryId === filters.categoryId),
  );
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductBySku(sku: string): CatalogVariant | undefined {
  for (const product of products) {
    for (const color of product.colors) {
      const variant = color.variants.find((entry) => entry.sku === sku);
      if (variant) return { product, color, variant };
    }
  }
  return undefined;
}

export function getCollections() { return collections; }
export function getCollectionBySlug(slug: string) { return collections.find((entry) => entry.slug === slug); }
export function getCollectionById(id: string) { return collections.find((entry) => entry.id === id); }

export function getSubCollections(collectionId?: string) {
  return subCollections.filter((entry) => !collectionId || entry.collectionId === collectionId);
}
export function getSubCollectionBySlug(slug: string) { return subCollections.find((entry) => entry.slug === slug); }
export function getSubCollectionById(id: string) { return subCollections.find((entry) => entry.id === id); }

export function getCategories() { return categories; }
export function getCategoryBySlug(slug: string) { return categories.find((entry) => entry.slug === slug); }
export function getCategoryById(id: string) { return categories.find((entry) => entry.id === id); }
