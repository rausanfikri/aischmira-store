import type { Category, Collection, Product, SubCollection } from "./canonical-catalog";

export interface SourceGroup {
  collection: string;
  type: string;
  PATTERN: string | null;
  sourceCategories: string[];
}
export interface ProductMapping extends Omit<Product, "definitionSource"> {
  sourceGroups: SourceGroup[];
}
export interface ColorMetadata {
  productId: string;
  COLOR: string;
  PATTERN: string | null;
  COLOR_CODE?: string | null;
}
export interface CatalogMapping {
  version: "catalog-mapping-v1";
  collections: (Collection & { mediaId?: string })[];
  subCollections: (SubCollection & { mediaId?: string })[];
  categories: (Category & { mediaId?: string })[];
  products: ProductMapping[];
  colorMetadata: ColorMetadata[];
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
export interface SourceIdentity { COLLECTION: string | null; TYPE: string | null; COLOR: string | null }
