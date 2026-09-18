import type { Category, Collection, Product, SubCollection } from "./canonical-catalog";

export interface SourceGroup {
  collection: string;
  subCollection: string;
  product: string;
  PATTERN: string | null;
  sourceCategories: string[];
  /** Explicit owner decision permitting a source/canonical collection difference. */
  collectionOverrideReason?: string;
}
export interface ProductMapping extends Omit<Product, "definitionSource"> {
  sourceGroups: SourceGroup[];
}
export interface CatalogMapping {
  version: "catalog-mapping-v2";
  collections: (Collection & { mediaId?: string })[];
  subCollections: (SubCollection & { mediaId?: string })[];
  categories: (Category & { mediaId?: string })[];
  products: ProductMapping[];
}
export interface MediaMapping {
  id: string;
  productId: string;
  COLOR: string;
  PATTERN: string | null;
  type: "image";
  reference: string;
  sortOrder: number;
  primary: boolean;
  alt: string;
  width: number;
  height: number;
  mappingSource: string;
}
export interface MediaManifest { version: "product-media-v1"; media: MediaMapping[] }
export interface RegistryIssue { code: string; field: string; source: string; problem: string; severity: "error" }
export interface SourceIdentity { COLLECTION: string | null; SUB_COLLECTION: string | null; PRODUCT: string | null; COLOR: string | null }
