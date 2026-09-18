import { z } from "zod";
import { CATEGORY_NAMES } from "../types/canonical-catalog";
import type { CatalogMapping, MediaManifest, RegistryIssue, SourceIdentity } from "../types/catalog-registry";
import { colorPatternIdentity } from "./catalog-contract";

const text = z.string().min(1).refine((v) => v.trim().length > 0, "Blank text");
const named = z.strictObject({ id: text, slug: text, name: text, mediaId: text.optional() });
export const catalogMappingSchema: z.ZodType<CatalogMapping> = z.strictObject({
  version: z.literal("catalog-mapping-v1"),
  collections: z.array(named),
  subCollections: z.array(named.extend({ collectionId: text })),
  categories: z.array(named.extend({ name: z.enum(CATEGORY_NAMES) })),
  products: z.array(z.strictObject({
    id: text, slug: text, name: text, collectionId: text, subCollectionId: text, categoryId: text,
    DESCRIPTION: z.string().nullable().optional(), publication: z.enum(["draft", "published", "archived"]),
    sourceGroups: z.array(z.strictObject({
      collection: text, type: text, PATTERN: text.nullable(), sourceCategories: z.array(text).min(1),
    })),
  })),
  colorMetadata: z.array(z.strictObject({
    productId: text, COLOR: text, PATTERN: text.nullable(), COLOR_CODE: text.nullable().optional(),
  })),
});
export const mediaManifestSchema: z.ZodType<MediaManifest> = z.strictObject({
  version: z.literal("product-media-v1"),
  media: z.array(z.strictObject({
    id: text, productId: text, COLOR: text, PATTERN: text.nullable(), type: z.literal("image"),
    reference: text.refine((v) => /^\/images\//.test(v) && !/[\\?#%]/.test(v) && !v.split("/").some((s, i) => i > 0 && (!s || s === "." || s === "..")), "Expected project image path"),
    sortOrder: z.number().int().nonnegative(), primary: z.boolean(), alt: text,
    width: z.number().int().positive(), height: z.number().int().positive(), mappingSource: text,
  })),
});

/** Exact approved source-group lookup; deliberately independent of SKU membership. */
export function resolveProductMapping(registry: CatalogMapping, collection: string | null, type: string | null) {
  const matches = registry.products.flatMap((product) => product.sourceGroups
    .filter((group) => group.collection === collection && group.type === type)
    .map((group) => ({ product, group })));
  if (matches.length > 1) throw new Error(`Ambiguous source group: ${JSON.stringify([collection, type])}`);
  return matches[0];
}

/** Cross-file relations; optional source evidence verifies exact color/pattern ownership. */
export function validateCatalogRegistries(mappingInput: unknown, mediaInput: unknown, rows?: SourceIdentity[]): RegistryIssue[] {
  const issues: RegistryIssue[] = [];
  const add = (code: string, source: string, field: string, problem: string) => issues.push({ code, source, field, problem, severity: "error" });
  const mapping = catalogMappingSchema.safeParse(mappingInput);
  const manifest = mediaManifestSchema.safeParse(mediaInput);
  for (const [source, parsed] of [["data/catalog-mapping.json", mapping], ["data/product-media.json", manifest]] as const) {
    if (!parsed.success) for (const issue of parsed.error.issues) add("SCHEMA", source, issue.path.join("."), issue.message);
  }
  if (!mapping.success || !manifest.success) return issues;
  const r = mapping.data; const media = manifest.data.media;
  const unique = (values: string[], source: string, field: string) => {
    const seen = new Set<string>();
    for (const value of values) { if (seen.has(value)) add("DUPLICATE", source, field, value); seen.add(value); }
  };
  const source = "data/catalog-mapping.json";
  for (const [key, entries] of Object.entries({ collections: r.collections, subCollections: r.subCollections, categories: r.categories, products: r.products })) {
    unique(entries.map((e) => e.id), source, `${key}.id`);
    unique(entries.map((e) => e.slug), source, `${key}.slug`);
  }
  const groups = r.products.flatMap((p) => p.sourceGroups.map((g) => JSON.stringify([g.collection, g.type])));
  unique(groups, source, "products.sourceGroups");
  for (const sub of r.subCollections) if (!r.collections.some((c) => c.id === sub.collectionId)) add("HIERARCHY", source, sub.id, "Unknown collection");
  for (const p of r.products) {
    const sub = r.subCollections.find((s) => s.id === p.subCollectionId);
    if (!sub || sub.collectionId !== p.collectionId || !r.collections.some((c) => c.id === p.collectionId) || !r.categories.some((c) => c.id === p.categoryId)) add("HIERARCHY", source, p.id, "Invalid collection/sub-collection/category relationship");
    if (!p.sourceGroups.length && p.publication === "published") add("NO_SKU", source, p.id, "Unmapped definition cannot be published");
  }
  const known = new Set<string>();
  if (rows) for (const p of r.products) for (const g of p.sourceGroups) {
    if (!rows.some((row) => row.COLLECTION === g.collection && row.TYPE === g.type))
      add("ORPHAN_SOURCE_GROUP", source, p.id, `No workbook rows for ${JSON.stringify([g.collection, g.type])}`);
  }
  const ambiguousGroups = new Set(groups).size !== groups.length;
  if (rows && !ambiguousGroups) for (const row of rows) {
    const resolved = resolveProductMapping(r, row.COLLECTION, row.TYPE);
    if (!resolved) add("UNMAPPED_SOURCE", source, "products.sourceGroups", JSON.stringify([row.COLLECTION, row.TYPE]));
    else known.add(colorPatternIdentity(resolved.product.id, row.COLOR, resolved.group.PATTERN));
  }
  for (const entry of [...r.collections, ...r.subCollections, ...r.categories]) if (entry.mediaId && !media.some((m) => m.id === entry.mediaId)) add("MEDIA_REFERENCE", source, entry.id, "Unknown editorial media ID");
  const groupId = (m: { productId: string; COLOR: string; PATTERN: string | null }) => colorPatternIdentity(m.productId, m.COLOR, m.PATTERN);
  unique(r.colorMetadata.map(groupId), source, "colorMetadata");
  for (const m of [...r.colorMetadata, ...media]) {
    const file = "reference" in m ? "data/product-media.json" : source;
    const p = r.products.find((p) => p.id === m.productId);
    if (!p || !p.sourceGroups.some((g) => g.PATTERN === m.PATTERN)) add("MEDIA_PARENT", file, groupId(m), "Unknown product/pattern");
    if (rows && !known.has(groupId(m))) add("UNKNOWN_COLOR_PATTERN", file, groupId(m), "No matching workbook color/pattern");
  }
  unique(media.map((m) => m.id), "data/product-media.json", "media.id");
  unique(media.map((m) => JSON.stringify([groupId(m), m.reference])), "data/product-media.json", "media.reference");
  for (const m of media) {
    const group = media.filter((n) => groupId(n) === groupId(m));
    if (group.filter((n) => n.sortOrder === m.sortOrder).length > 1) add("MEDIA_ORDER", "data/product-media.json", m.id, "Duplicate order within group");
    if (group.filter((n) => n.primary).length !== 1) add("MEDIA_PRIMARY", "data/product-media.json", m.id, "Group requires exactly one primary");
  }
  return issues;
}
