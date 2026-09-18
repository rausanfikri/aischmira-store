/** Versioned, exact PRODUCTS columns. Source values are never display-normalized. */
export const SOURCE_COLUMNS = {
  COLLECTION: "A", SUB_COLLECTION: "B", PRODUCT: "C", CATEGORY: "D",
  FABRIC: "E", COLOR: "F", COLOR_CODE: "G", SIZE: "H", SKU: "I",
  START_PRICE: "J", FINAL_PRICE: "K", DESCRIPTION: "L", MATERIAL: "M", STATUS: "N",
} as const;
export type SourceField = keyof typeof SOURCE_COLUMNS;
export type SourceValues = Record<SourceField, string | null>;
export interface SourceRecord {
  row: number;
  fields: SourceValues;
  cells: Record<SourceField, string>;
  formulas: Record<SourceField, string | null>;
}
export interface SourceWorkbook {
  version: "products-workbook-v1";
  workbook: "data/MASTER PRODUCTS.xlsx";
  sheet: "PRODUCTS";
  sha256: string;
  rows: SourceRecord[];
}
export interface ReconciliationIssue {
  code: string;
  severity: "error" | "warning" | "info";
  source: string;
  sourceValue: unknown;
  canonicalValue: unknown;
  conflict: string;
  recommendedAction: string;
}
