import { z } from "zod";
import { SOURCE_COLUMNS } from "../types/catalog-source";
import type { SourceField, SourceRecord, SourceWorkbook, ReconciliationIssue } from "../types/catalog-source";
import type { CanonicalCatalog } from "../types/canonical-catalog";
import { catalogMappingSchema, mediaManifestSchema, resolveProductMapping, validateCatalogRegistries } from "./catalog-registry";
import { colorPatternIdentity, readRupiah, validateCanonicalCatalog } from "./catalog-contract";

const rawSchema = z.strictObject({
  sheets: z.array(z.strictObject({ name: z.string(), merges: z.array(z.string()), cells: z.array(z.strictObject({
    ref: z.string().regex(/^[A-Z]+[1-9][0-9]*$/), value: z.string().nullable(), formula: z.string().nullable(), cellType: z.string(), error: z.boolean(),
  })) })), externalLinks: z.array(z.string()),
});
const headers: Record<string, readonly string[]> = {
  PRODUCTS: Object.keys(SOURCE_COLUMNS),
  MEDIA: ["PRODUCT", "SKU", "COLOR", "MEDIA_TYPE", "FILE_NAME", "FILE_PATH", "SORT_ORDER", "IS_PRIMARY"],
  COLLECTIONS: ["COLLECTION", "SUB_COLLECTION", "IMAGE", "DESCRIPTION", "SORT_ORDER", "STATUS"],
  CATEGORIES: ["CATEGORY", "IMAGE", "DESCRIPTION", "SORT_ORDER", "STATUS"],
  LISTS: ["FIELD", "VALUE / RULE"],
};
const fields = Object.keys(SOURCE_COLUMNS) as SourceField[];
const byId = (a: { id: string }, b: { id: string }) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0;

/** Read every populated row, including rows with no SKU. Never forward-fill or drop errors. */
export function extractProductSource(input: unknown, sha256: string) {
  const issues: ReconciliationIssue[] = [];
  const add = (code: string, source: string, sourceValue: unknown, canonicalValue: unknown, conflict: string, recommendedAction: string, severity: ReconciliationIssue["severity"] = "error") =>
    issues.push({ code, severity, source, sourceValue, canonicalValue, conflict, recommendedAction });
  const workbook: SourceWorkbook = { version: "products-workbook-v1", workbook: "data/MASTER PRODUCTS.xlsx", sheet: "PRODUCTS", sha256, rows: [] };
  const parsed = rawSchema.safeParse(input);
  if (!parsed.success) {
    for (const i of parsed.error.issues) add("SOURCE_PAYLOAD", i.path.join("."), null, null, i.message, "Repair the workbook reader payload; no import was accepted.");
    return { workbook, issues };
  }
  const raw = parsed.data;
  for (const name of Object.keys(headers)) if (raw.sheets.filter((s) => s.name === name).length !== 1)
    add("SOURCE_SHEET", name, raw.sheets.map((s) => s.name), name, "Required sheet missing or duplicated", "Restore the versioned sheet schema or approve a new source version.");
  if (raw.externalLinks.length) add("EXTERNAL_WORKBOOK_LINK", "workbook", raw.externalLinks, [], "External workbook dependencies are not approved", "Supply self-contained literal source data.");
  for (const sheet of raw.sheets) {
    const expected = headers[sheet.name];
    if (!expected) { add("UNKNOWN_SHEET", sheet.name, sheet.name, null, "Unmapped sheet", "Approve its ownership/mapping before import."); continue; }
    if (sheet.merges.length) add("SOURCE_MERGES", sheet.name, sheet.merges, [], "This source version requires unmerged rows", "Restore explicit per-row values; do not forward-fill automatically.");
    const cells = new Map(sheet.cells.map((c) => [c.ref, c]));
    if (cells.size !== sheet.cells.length) add("DUPLICATE_CELL", sheet.name, sheet.cells.length, cells.size, "Duplicate XML cell references", "Repair the source workbook.");
    expected.forEach((header, index) => {
      const ref = `${String.fromCharCode(65 + index)}1`;
      if (cells.get(ref)?.value !== header) add("SOURCE_HEADER", `${sheet.name}!${ref}`, cells.get(ref)?.value ?? null, header, "Unexpected header or column order", "Restore the exact header or approve a new source schema.");
    });
    for (const cell of sheet.cells) {
      const column = cell.ref.replace(/[0-9]/g, ""); const row = Number(cell.ref.replace(/[A-Z]/g, ""));
      if (column.length !== 1 || column.charCodeAt(0) - 65 >= expected.length)
        add("UNKNOWN_COLUMN", `${sheet.name}!${cell.ref}`, cell.value, null, "Populated column outside source schema", "Declare the column and ownership; never discard it silently.");
      if (cell.error) add("SOURCE_CELL_ERROR", `${sheet.name}!${cell.ref}`, cell.value, null, "Excel error value", "Correct the source cell before importing.");
      if (!["n", "s", "inlineStr", "str", "e"].includes(cell.cellType)) add("SOURCE_CELL_TYPE", `${sheet.name}!${cell.ref}`, { type: cell.cellType, value: cell.value }, null, "Boolean, date or unsupported cell type cannot supply catalog fields", "Supply literal text or exact numeric amounts, not a coerced boolean/date.");
      if (cell.formula) add("SOURCE_FORMULA", `${sheet.name}!${cell.ref}`, cell.formula, cell.value, "Literal source required; cached results are not verification", "Supply verified literal values or approve a formula-verification workflow.");
      if (row > 1 && ["MEDIA", "COLLECTIONS", "CATEGORIES"].includes(sheet.name))
        add("UNOWNED_SHEET_DATA", `${sheet.name}!${cell.ref}`, cell.value, null, "Metadata/media registries still own this concern", "Reconcile supplied content with the owning JSON registry before import.");
    }
    if (sheet.name === "LISTS") {
      const categories = new Set(["Outerwear", "Tops", "Bottoms", "Dress", "Pyjamas", "Accessories"]);
      for (const cell of sheet.cells.filter((c) => /^A[2-9][0-9]*$/.test(c.ref) || /^A1[0-9]+$/.test(c.ref))) {
        const value = cells.get(cell.ref.replace("A", "B"))?.value ?? null;
        if (cell.value === "CATEGORY" && !categories.has(value ?? "")) add("REFERENCE_LIST_CATEGORY", `LISTS!${cell.ref.replace("A", "B")}`, value, [...categories], "Advisory list is not canonical category authority", "Correct the reference list in a future owner workbook revision; importer uses approved registry categories.", "warning");
      }
    }
    if (sheet.name !== "PRODUCTS") continue;
    const rowNumbers = [...new Set(sheet.cells.map((c) => Number(c.ref.replace(/[A-Z]/g, ""))).filter((r) => r > 1))].sort((a, b) => a - b);
    for (const row of rowNumbers) {
      const record: SourceRecord = { row, fields: {} as SourceRecord["fields"], cells: {} as SourceRecord["cells"], formulas: {} as SourceRecord["formulas"] };
      for (const field of fields) {
        const ref = `${SOURCE_COLUMNS[field]}${row}`;
        record.fields[field] = cells.get(ref)?.value ?? null;
        record.cells[field] = ref; record.formulas[field] = cells.get(ref)?.formula ?? null;
      }
      workbook.rows.push(record);
    }
  }
  if (!workbook.rows.length) add("EMPTY_SOURCE", "PRODUCTS", 0, null, "No source records", "Supply the active snapshot; an empty workbook cannot replace the catalog.");
  return { workbook, issues };
}

/** Pure reconciliation. Disk writes, fingerprints and file checks belong to the CLI. */
export function reconcileCatalog(workbook: SourceWorkbook, mappingInput: unknown, mediaInput: unknown, initialIssues: ReconciliationIssue[] = []) {
  const issues = [...initialIssues];
  const add = (code: string, source: string, sourceValue: unknown, canonicalValue: unknown, conflict: string, recommendedAction: string, severity: ReconciliationIssue["severity"] = "error") =>
    issues.push({ code, severity, source, sourceValue, canonicalValue, conflict, recommendedAction });
  const mapping = catalogMappingSchema.safeParse(mappingInput); const manifest = mediaManifestSchema.safeParse(mediaInput);
  const registryIssues = validateCatalogRegistries(mappingInput, mediaInput, workbook.rows.map((r) => r.fields));
  for (const i of registryIssues) add(i.code, `${i.source}#${i.field}`, i.problem, null, "Registry validation failed", "Correct the indicated registry relation; preserve source rows.");
  if (!mapping.success || !manifest.success || registryIssues.length) return { catalog: null, issues, assessment: null };
  const registry = mapping.data;
  const named = ({ id, slug, name }: { id: string; slug: string; name: string }) => ({ id, slug, name });
  const catalog: CanonicalCatalog = {
    version: "phase-2.3-v1", collections: registry.collections.map(named),
    subCollections: registry.subCollections.map((s) => ({ ...named(s), collectionId: s.collectionId })),
    categories: registry.categories.map(({ id, slug, name }) => ({ id, slug, name })),
    products: registry.products.map((p) => ({ ...named(p), collectionId: p.collectionId, subCollectionId: p.subCollectionId, categoryId: p.categoryId, DESCRIPTION: p.DESCRIPTION ?? null, publication: p.publication, definitionSource: `data/catalog-mapping.json#${p.id}` })),
    colorPatterns: [], variants: [], media: [],
  };
  for (const record of workbook.rows) {
    const f = record.fields; const location = `PRODUCTS!${record.row}`;
    const mapped = resolveProductMapping(registry, f.COLLECTION, f.SUB_COLLECTION, f.PRODUCT);
    // Registry validation reports unmapped rows before construction. No filtering is allowed.
    if (!mapped) throw new Error(`Unmapped source row after registry validation: ${location}`);
    const { product, group } = mapped;
    for (const field of ["COLLECTION", "SUB_COLLECTION", "PRODUCT", "CATEGORY", "COLOR", "COLOR_CODE", "SIZE", "SKU"] as const)
      if (!f[field]?.trim()) add("REQUIRED_IDENTITY", `PRODUCTS!${record.cells[field]}`, f[field], null, `${field} is required`, "Supply the exact source value; never synthesize identifiers.");
    const category = registry.categories.find((c) => c.id === product.categoryId)!;
    const collection = registry.collections.find((c) => c.id === product.collectionId)!;
    const sub = registry.subCollections.find((s) => s.id === product.subCollectionId)!;
    if (!group.sourceCategories.includes(f.CATEGORY ?? "")) add("CATEGORY_CONFLICT", `${location}:CATEGORY`, f.CATEGORY, category.name, "Category is not an approved alias", "Obtain an explicit category mapping decision.");
    else if (f.CATEGORY !== category.name) add("CATEGORY_ALIAS", `${location}:CATEGORY`, f.CATEGORY, category.name, "Approved category mapping", "Use the owner-approved registry mapping.", "info");
    if (f.COLLECTION !== collection.name) add("COLLECTION_OVERRIDE", `${location}:COLLECTION`, f.COLLECTION, collection.name, group.collectionOverrideReason ?? "Unapproved collection mismatch", group.collectionOverrideReason ? "Preserve source and apply recorded owner decision." : "Obtain an explicit collection decision.", group.collectionOverrideReason ? "info" : "error");
    if (f.SUB_COLLECTION !== sub.name) add("SUB_COLLECTION_MAPPING", `${location}:SUB_COLLECTION`, f.SUB_COLLECTION, sub.name, group.PATTERN ? `Source design remains PATTERN=${group.PATTERN}` : "Exact source spelling maps to existing identity", "Preserve raw spelling and the explicit registry mapping.", "info");
    if (f.PRODUCT !== product.name) add("PRODUCT_NAME_MAPPING", `${location}:PRODUCT`, f.PRODUCT, product.name, "Approved display name differs from source label", "Preserve source label and registry display name.", "info");
    if (!/^#[0-9A-Fa-f]{6}$/.test(f.COLOR_CODE ?? "")) add("COLOR_CODE_FORMAT", `PRODUCTS!${record.cells.COLOR_CODE}`, f.COLOR_CODE, null, "Expected six-digit hex", "Correct the supplied hex; do not derive a replacement.");
    if (f.DESCRIPTION !== null && f.DESCRIPTION !== "" && f.DESCRIPTION !== product.DESCRIPTION) add("DESCRIPTION_OWNERSHIP", `PRODUCTS!${record.cells.DESCRIPTION}`, f.DESCRIPTION, product.DESCRIPTION ?? null, "Product description differs from owning registry", "Reconcile at Product level; do not select one SKU description.");
    if (f.MATERIAL !== null) add("UNMAPPED_MATERIAL", `PRODUCTS!${record.cells.MATERIAL}`, f.MATERIAL, null, "MATERIAL is not canonical FABRIC", "Resolve source content explicitly; do not copy it into FABRIC.");
    if (f.STATUS !== null && !["ACTIVE", "INACTIVE", "DRAFT"].includes(f.STATUS)) add("SOURCE_STATUS", `PRODUCTS!${record.cells.STATUS}`, f.STATUS, product.publication, "Unknown source status", "Approve its source semantics; never infer publication.");
    const colorId = colorPatternIdentity(product.id, f.COLOR, group.PATTERN);
    const existing = catalog.colorPatterns.find((c) => c.id === colorId);
    if (existing && existing.COLOR_CODE !== f.COLOR_CODE) add("COLOR_CODE_CONFLICT", `PRODUCTS!${record.cells.COLOR_CODE}`, f.COLOR_CODE, existing.COLOR_CODE, "Different official hex within the same product/color/pattern", "Resolve the conflicting source rows; no first-value selection is accepted.");
    if (!existing) catalog.colorPatterns.push({ id: colorId, productId: product.id, COLOR: f.COLOR, PATTERN: group.PATTERN, COLOR_CODE: f.COLOR_CODE, patternStatus: group.PATTERN === null ? "not-applicable" : "known" });
    const prices = { START_PRICE: readRupiah(f.START_PRICE), FINAL_PRICE: readRupiah(f.FINAL_PRICE) };
    for (const field of ["START_PRICE", "FINAL_PRICE"] as const) if (prices[field].invalid) add("INVALID_PRICE", `PRODUCTS!${record.cells[field]}`, f[field], null, "Not exact whole-rupiah decimal text", "Correct the source; fractional values are never rounded.");
    catalog.variants.push({ id: f.SKU === null ? `missing:PRODUCTS:${record.row}` : JSON.stringify(["SKU", f.SKU]), productId: product.id, colorPatternId: colorId,
      SKU: f.SKU, SIZE: f.SIZE, FABRIC: f.FABRIC, START_PRICE: prices.START_PRICE.value, FINAL_PRICE: prices.FINAL_PRICE.value,
      provenance: { workbook: workbook.workbook, sheet: workbook.sheet, sourceVersion: workbook.version, sourceSha256: workbook.sha256, row: record.row,
        cells: record.cells, sourceValues: f, mappingVersion: registry.version, formulas: record.formulas,
        priceEvidence: record.formulas.START_PRICE || record.formulas.FINAL_PRICE ? "cached-unverified" : "literal" },
    });
  }
  catalog.media = manifest.data.media.map(({ COLOR, PATTERN, ...m }) => ({ ...m, colorPatternId: colorPatternIdentity(m.productId, COLOR, PATTERN) }));
  for (const list of [catalog.collections, catalog.subCollections, catalog.categories, catalog.products, catalog.colorPatterns, catalog.variants, catalog.media]) list.sort(byId);
  const assessment = validateCanonicalCatalog(catalog);
  for (const issue of assessment.issues) {
    const variant = catalog.variants.find((v) => v.id === issue.entity);
    add(issue.code, variant ? `PRODUCTS!${variant.provenance.row}` : issue.entity, variant?.provenance.sourceValues ?? null, variant ?? null, issue.message,
      issue.severity === "error" ? "Resolve the indicated source/contract conflict before generating a new snapshot." : "Keep the missing state visible; supply verified data through its owning source when available.", issue.severity);
  }
  return { catalog, issues, assessment };
}
