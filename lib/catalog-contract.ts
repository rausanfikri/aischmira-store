import { z } from "zod";
import { CATEGORY_NAMES } from "../types/canonical-catalog";
import type { CanonicalCatalog, CatalogAssessment, DataValidity, ValidationIssue } from "../types/canonical-catalog";

const text = z.string().min(1).refine((value) => value.trim().length > 0, "Blank text");
const optionalSource = text.nullable();
const price = z.string().regex(/^(0|[1-9][0-9]*)$/, "Whole rupiah digits required").nullable();
const named = z.strictObject({ id: text, slug: text, name: text });
const fields = ["COLLECTION", "FABRIC", "CATEGORY", "TYPE", "COLOR", "SIZE", "SKU_NO", "SKU", "SKU_NAME", "START_PRICE", "FINAL_PRICE"] as const;

/** Runtime gate for externally supplied canonical data. Unknown fields (including prices) fail. */
export const canonicalCatalogSchema: z.ZodType<CanonicalCatalog> = z.strictObject({
  version: z.literal("phase-1-v1"),
  collections: z.array(named),
  subCollections: z.array(named.extend({ collectionId: text })),
  categories: z.array(named.extend({ name: z.enum(CATEGORY_NAMES) })),
  products: z.array(named.extend({
    collectionId: text, subCollectionId: text, categoryId: text,
    publication: z.enum(["draft", "published", "archived"]), definitionSource: text,
  })),
  colorPatterns: z.array(z.strictObject({
    id: text, productId: text, COLOR: optionalSource, PATTERN: optionalSource,
    patternStatus: z.enum(["known", "not-applicable", "ambiguous"]),
  })),
  variants: z.array(z.strictObject({
    id: text, productId: optionalSource, colorPatternId: optionalSource,
    SKU: optionalSource, SIZE: optionalSource, FABRIC: optionalSource,
    START_PRICE: price, FINAL_PRICE: price,
    provenance: z.strictObject({
      workbook: z.literal("data/MASTER PRODUCTS.xlsx"), sheet: z.literal("DASHBOARD"),
      row: z.number().int().min(3), cells: z.record(z.enum(fields), text),
      sourceSKU: optionalSource, sourceSIZE: optionalSource, sourceFABRIC: optionalSource, sourceCOLOR: optionalSource,
      sourceNumber: optionalSource, sourceName: optionalSource,
      sourceCollection: optionalSource, sourceCategory: optionalSource, sourceType: optionalSource,
      mappingVersion: z.literal("phase-1-v1"),
      formulas: z.record(z.enum(fields), text.nullable()),
      priceEvidence: z.enum(["literal", "cached-unverified", "cached-approved"]),
    }),
  })),
  media: z.array(z.strictObject({
    id: text, productId: text, colorPatternId: text, type: z.literal("image"), reference: text,
    sortOrder: z.number().int().nonnegative(), primary: z.boolean(), alt: text,
    width: z.number().int().positive(), height: z.number().int().positive(), mappingSource: text,
  })),
});

/** Tuple encoding is injective; no slug/case normalization of identity components. */
export function colorPatternIdentity(productId: string, COLOR: string | null, PATTERN: string | null): string {
  return JSON.stringify([productId, COLOR, PATTERN]);
}

/** XML number text may contain .0; only zero fractional digits can become integer rupiah. */
export function readRupiah(value: string | null): { value: string | null; invalid: boolean } {
  if (value === null || value === "") return { value: null, invalid: false };
  if (!/^[0-9]+(?:\.0+)?$/.test(value)) return { value: null, invalid: true };
  return { value: BigInt(value.split(".")[0]).toString(), invalid: false };
}

/** Fail closed on shape errors, then assess relationships and business invariants. */
export function validateCanonicalCatalog(input: unknown): CatalogAssessment {
  const parsed = canonicalCatalogSchema.safeParse(input);
  if (!parsed.success) return {
    issues: parsed.error.issues.map((issue) => ({ code: "SCHEMA", severity: "error", kind: "conflict", entity: issue.path.join("."), message: issue.message })),
    products: [], variants: [], canPublishBatch: false,
  };
  const c = parsed.data;
  const issues: ValidationIssue[] = [];
  const add = (code: string, entity: string, message: string, kind: "incomplete" | "conflict" = "conflict", severity: "error" | "warning" = "error") =>
    issues.push({ code, entity, message, kind, severity });
  function unique(entries: { id: string }[], label: string) {
    const counts = new Map<string, number>();
    entries.forEach(({ id }) => counts.set(id, (counts.get(id) ?? 0) + 1));
    counts.forEach((count, id) => { if (count > 1) add("DUPLICATE_ID", id, `${label}: ${count} identical IDs`); });
  }
  for (const [label, entries] of Object.entries(c)) if (Array.isArray(entries)) unique(entries, label);
  for (const entries of [c.collections, c.subCollections, c.categories, c.products]) {
    for (const entry of entries) if (entries.filter((other) => other.slug === entry.slug).length > 1)
      add("DUPLICATE_SLUG", entry.id, "Slug must be unique within its entity registry");
  }
  const products = new Map(c.products.map((p) => [p.id, p]));
  const colors = new Map(c.colorPatterns.map((p) => [p.id, p]));
  for (const sub of c.subCollections) if (!c.collections.some((p) => p.id === sub.collectionId)) add("HIERARCHY", sub.id, "Missing collection");
  for (const p of c.products) {
    const sub = c.subCollections.find((s) => s.id === p.subCollectionId);
    if (!c.collections.some((s) => s.id === p.collectionId) || !sub || sub.collectionId !== p.collectionId || !c.categories.some((s) => s.id === p.categoryId))
      add("HIERARCHY", p.id, "Product requires consistent collection, sub-collection and category");
    const rows = c.variants.filter((v) => v.productId === p.id);
    if (!rows.length) add("NO_SKU", p.id, "Definition has no source SKU; not purchasable", "incomplete", p.publication === "published" ? "error" : "warning");
    const fabrics = [...new Set(rows.map((v) => v.FABRIC).filter((f) => f !== null))];
    if (fabrics.length > 1) add("FABRIC_CONFLICT", p.id, `Source FABRIC values differ: ${JSON.stringify(fabrics)}`);
  }
  for (const color of c.colorPatterns) {
    if (!products.has(color.productId)) add("COLOR_PARENT", color.id, "Color/pattern requires a product");
    if (color.id !== colorPatternIdentity(color.productId, color.COLOR, color.PATTERN)) add("COLOR_IDENTITY", color.id, "Identity does not match product/color/pattern tuple");
    if (color.COLOR === null) add("COLOR_MISSING", color.id, "Source color is missing", "incomplete");
    if (color.patternStatus === "ambiguous" || (color.patternStatus === "known" && color.PATTERN === null) || (color.patternStatus === "not-applicable" && color.PATTERN !== null))
      add("PATTERN_AMBIGUOUS", color.id, "Pattern classification is unresolved or inconsistent");
    if (!c.media.some((m) => m.colorPatternId === color.id)) add("MEDIA_MISSING", color.id, "No media for this exact color/pattern", "incomplete", "warning");
  }
  for (const v of c.variants) {
    if (v.SKU === null) add("SKU_MISSING", v.id, "Actual SKU required", "incomplete");
    else if (c.variants.filter((r) => r.SKU === v.SKU).length > 1) add("DUPLICATE_SKU", v.id, `Duplicate exact SKU: ${v.SKU}`);
    if (v.SKU !== v.provenance.sourceSKU) add("SKU_CHANGED", v.id, "Canonical SKU differs from source");
    if (v.SIZE !== v.provenance.sourceSIZE) add("SIZE_CHANGED", v.id, "SIZE differs from exact source value");
    if (v.FABRIC !== v.provenance.sourceFABRIC) add("FABRIC_CHANGED", v.id, "FABRIC differs from source");
    if (v.provenance.priceEvidence === "cached-unverified") add("PRICE_SOURCE_UNVERIFIED", v.id, "Cached formula prices require source approval/recalculation evidence", "incomplete");
    if (v.provenance.priceEvidence === "literal" && (v.provenance.formulas.START_PRICE || v.provenance.formulas.FINAL_PRICE))
      add("PRICE_EVIDENCE_CONFLICT", v.id, "Formula price cannot be labeled literal");
    if (c.variants.filter((r) => r.provenance.workbook === v.provenance.workbook && r.provenance.sheet === v.provenance.sheet && r.provenance.row === v.provenance.row).length > 1)
      add("DUPLICATE_SOURCE_ROW", v.id, "One source row cannot produce multiple variants");
    const p = v.productId ? products.get(v.productId) : undefined;
    const color = v.colorPatternId ? colors.get(v.colorPatternId) : undefined;
    if (!p || !color || color.productId !== p.id) add("VARIANT_PARENT", v.id, "Missing or mismatched product/color parent", "incomplete");
    if (color && color.COLOR !== v.provenance.sourceCOLOR) add("COLOR_CHANGED", v.id, "Color differs from source");
    if (v.SIZE === null) add("SIZE_MISSING", v.id, "Missing is distinct from literal '-'", "incomplete");
    if (v.FABRIC === null) add("FABRIC_MISSING", v.id, "FABRIC is missing", "incomplete");
    if (v.START_PRICE === null || v.FINAL_PRICE === null) add("PRICE_MISSING", v.id, "Both source prices required", "incomplete");
    if (v.START_PRICE !== null && v.FINAL_PRICE !== null && BigInt(v.FINAL_PRICE) > BigInt(v.START_PRICE))
      add("PRICE_RELATION", v.id, "FINAL_PRICE exceeds normal START_PRICE; review source instead of guessing");
    if (v.START_PRICE === "0" || v.FINAL_PRICE === "0") add("ZERO_PRICE_REVIEW", v.id, "Zero is numerically valid but sale policy is unapproved");
    if (v.colorPatternId && v.SIZE !== null && c.variants.filter((r) => r.colorPatternId === v.colorPatternId && r.SIZE === v.SIZE).length > 1)
      add("VARIANT_IDENTITY_CONFLICT", v.id, "Multiple SKU rows have the same product/color/pattern/size selection");
  }
  for (const m of c.media) {
    const color = colors.get(m.colorPatternId);
    if (!products.has(m.productId) || !color || color.productId !== m.productId) add("MEDIA_PARENT", m.id, "Media parent must be an exact product/color/pattern");
    const group = c.media.filter((other) => other.colorPatternId === m.colorPatternId);
    if (group.filter((other) => other.sortOrder === m.sortOrder).length > 1) add("MEDIA_ORDER", m.id, "Duplicate sort order within media group");
    if (group.filter((other) => other.primary).length !== 1) add("MEDIA_PRIMARY", m.id, "Nonempty media group requires exactly one primary image");
  }
  const validity = (related: ValidationIssue[]): DataValidity => related.some((i) => i.severity === "error" && i.kind === "conflict") ? "conflict"
    : related.some((i) => i.kind === "incomplete") ? "incomplete" : "valid";
  const variantAssessments = c.variants.map((v) => {
    const p = v.productId ? products.get(v.productId) : undefined;
    const groupMedia = c.media.filter((m) => m.colorPatternId === v.colorPatternId);
    const related = issues.filter((i) => [v.id, v.productId, v.colorPatternId, p?.collectionId, p?.subCollectionId, p?.categoryId, ...groupMedia.map((m) => m.id)].includes(i.entity));
    const dataEligible = !related.some((i) => i.severity === "error") && v.SKU !== null;
    const publication = p?.publication ?? "draft";
    const mediaStatus = groupMedia.length ? "present" as const : "missing" as const;
    // Missing-media publication policy is not approved; no accidental selling permission.
    const orderable = dataEligible && publication === "published" && mediaStatus === "present";
    return { id: v.id, validity: validity(related), publication, dataEligible, orderable, mediaStatus,
      reasons: [...new Set([...related.map((i) => i.code), ...(publication !== "published" ? ["NOT_PUBLISHED"] : []), ...(mediaStatus === "missing" ? ["MEDIA_POLICY_PENDING"] : [])])] };
  });
  const productAssessments = c.products.map((p) => {
    const rows = variantAssessments.filter((a) => c.variants.some((v) => v.id === a.id && v.productId === p.id));
    const related = issues.filter((i) => [p.id, p.collectionId, p.subCollectionId, p.categoryId].includes(i.entity));
    const dataEligible = rows.some((r) => r.dataEligible) && !related.some((i) => i.severity === "error");
    const state: DataValidity = rows.some((r) => r.validity === "conflict") ? "conflict" : !rows.length || rows.some((r) => r.validity === "incomplete") ? "incomplete" : validity(related);
    return { id: p.id, validity: state, publication: p.publication, dataEligible, orderable: rows.some((r) => r.orderable),
      mediaStatus: rows.some((r) => r.mediaStatus === "present") ? "present" as const : "missing" as const,
      reasons: [...new Set([...related.map((i) => i.code), ...rows.flatMap((r) => r.reasons)])] };
  });
  for (const p of productAssessments) if (p.publication === "published" && !p.orderable) add("PUBLICATION_BLOCKED", p.id, "Published purchasable product must have an orderable variant");
  return { issues, products: productAssessments, variants: variantAssessments, canPublishBatch: !issues.some((i) => i.severity === "error") };
}
