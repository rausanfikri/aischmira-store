/** Canonical metadata contract. types/catalog.ts remains the legacy compatibility boundary. */
export const CATEGORY_NAMES = ["Outerwear", "Tops", "Bottoms", "Dress", "Pyjamas", "Accessories"] as const;
export type CategoryName = typeof CATEGORY_NAMES[number];

/** Whole rupiah, serialized as decimal digits (no float, exponent, separators or sign). */
export type Rupiah = string;
export interface Price {
  START_PRICE: Rupiah | null;
  FINAL_PRICE: Rupiah | null;
}
export type PublicationStatus = "draft" | "published" | "archived";
export type DataValidity = "valid" | "incomplete" | "conflict";
export interface Collection { id: string; slug: string; name: string }
export interface SubCollection extends Collection { collectionId: string }
export interface Category { id: string; slug: string; name: CategoryName }
export interface Product {
  id: string;
  slug: string;
  name: string;
  collectionId: string;
  subCollectionId: string;
  categoryId: string;
  publication: PublicationStatus;
  /** Product-level supplied copy only; missing description is not synthesized. */
  DESCRIPTION?: string | null;
  /** Definition evidence is independent of SKU evidence; empty products are representable. */
  definitionSource: string;
}
export interface ProductColorPattern {
  id: string;
  productId: string;
  COLOR: string | null;
  PATTERN: string | null;
  /** Optional opaque source code, not a guessed CSS/hex color. No source exists yet. */
  COLOR_CODE?: string | null;
  patternStatus: "known" | "not-applicable" | "ambiguous";
}
export type SourceField = "COLLECTION" | "FABRIC" | "CATEGORY" | "TYPE" | "COLOR" | "SIZE" | "SKU_NO" | "SKU" | "SKU_NAME" | "START_PRICE" | "FINAL_PRICE";
export interface Provenance {
  workbook: "data/MASTER PRODUCTS.xlsx";
  sheet: "DASHBOARD";
  row: number;
  cells: Record<SourceField, string>;
  sourceSKU: string | null;
  sourceSIZE: string | null;
  sourceFABRIC: string | null;
  sourceCOLOR: string | null;
  sourceNumber: string | null;
  sourceName: string | null;
  sourceCollection: string | null;
  sourceCategory: string | null;
  sourceType: string | null;
  mappingVersion: "catalog-mapping-v1";
  /** Raw formula XML, including shared-formula references; null means a literal cell. */
  formulas: Record<SourceField, string | null>;
  priceEvidence: "literal" | "cached-unverified" | "cached-approved";
}
/** One row per actual source variant. Missing fields remain representable for assessment. */
export interface SkuVariant extends Price {
  id: string;
  productId: string | null;
  colorPatternId: string | null;
  SKU: string | null;
  SIZE: string | null;
  FABRIC: string | null;
  provenance: Provenance;
}
export interface Media {
  id: string;
  productId: string;
  colorPatternId: string;
  type: "image";
  reference: string;
  sortOrder: number;
  primary: boolean;
  alt: string;
  width: number;
  height: number;
  mappingSource: string;
}
export interface CanonicalCatalog {
  version: "phase-2-v1";
  collections: Collection[];
  subCollections: SubCollection[];
  categories: Category[];
  products: Product[];
  colorPatterns: ProductColorPattern[];
  variants: SkuVariant[];
  media: Media[];
}
export interface ValidationIssue {
  code: string;
  severity: "error" | "warning";
  kind: "incomplete" | "conflict";
  entity: string;
  message: string;
}
export interface EntityAssessment {
  id: string;
  validity: DataValidity;
  publication: PublicationStatus;
  /** Data eligibility is separate from actual permission to sell. */
  dataEligible: boolean;
  orderable: boolean;
  mediaStatus: "present" | "missing";
  reasons: string[];
}
export interface CatalogAssessment {
  issues: ValidationIssue[];
  products: EntityAssessment[];
  variants: EntityAssessment[];
  /** A publication batch with any error must be rejected; no silent row dropping. */
  canPublishBatch: boolean;
}
