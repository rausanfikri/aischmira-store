# Canonical Product Data Contract

## Storefront demo projection — 2026-09-19

The owner's newer prototype instruction supersedes historical registry display mappings for the demo UI. `services/storefront.ts` projects each verified variant's exact PRODUCTS `sourceValues` into the application model (`types/storefront.ts`), grouped by COLLECTION/SUB_COLLECTION/PRODUCT/CATEGORY. It does not read legacy prices or create a second imported dataset. Current source yields 30 source product groups and 497 exact SKU (historical registry: 26 SKU-bearing product definitions). All factual names, source categories, sizes, colors, official hex, nullable fabric, exact prices and STATUS remain source-owned. URLs alone are normalized and checked for product collisions.

The successful `node scripts/import-catalog.mjs --check` establishes snapshot freshness against the workbook. After workbook changes, use the existing preview/reconciliation/`--write`/`--check` workflow; new identities still need explicit registry reconciliation, with no UI edits. Do not manually edit generated files or the source workbook. Historical registry mappings/publication are retained as evidence, not used as demo display authority.

Only this visibly labeled demo allows valid ACTIVE rows into bag/review while production publication remains draft. Missing production media uses a local CSS colour study, never another variant's photograph. `data/demo-content.json` owns replaceable DEMO description/editorial/Bazaar content. Empty production FABRIC remains empty. Exact integer arithmetic and server-side SKU/price re-resolution apply to the WhatsApp review. No real order/payment is recorded by this flow.

Version: **phase-2.3-v1** ? Source: **products-workbook-v1** ? Registry: **catalog-mapping-v2** ? Updated: 2026-09-18.

Authority: [MASTER_BRIEF](../MASTER_BRIEF.md) and the owner's Phase-2.3 decisions. This replaces the DASHBOARD source contract; old versions remain in Git history, not parallel active sources. [Quality results](PRODUCT_DATA_QUALITY.md). No publication or UI implementation is implied.

## Ownership and CRUD boundary

| Concern | Authoritative input | Generated destination |
| --- | --- | --- |
| Actual SKU, size, color, official COLOR_CODE, FABRIC, exact prices | data/MASTER PRODUCTS.xlsx, PRODUCTS | Variants and product/color/pattern groups |
| Product identity, hierarchy, DESCRIPTION, publication | data/catalog-mapping.json | Collections, sub-collections, categories, products |
| Exact media associations | data/product-media.json | Media attached to exact product/color/pattern |
| Source status and workbook-only metadata | Workbook provenance | Evidence only; no stock/publication inference |
| Legacy SKU and marketplace prices | Historical comparison only | Never imported into canonical data |

Generated files under data/generated are read models, never authoring locations. JSON registries remain data files, not TypeScript content arrays. SKU IDs use the exact business key; product and color/pattern IDs are stable, explicit identities. Nullable FABRIC and Product DESCRIPTION, official group COLOR_CODE and Product publication have separate typed ownership, ready for a later data-management service. No CRUD UI, persistence API, overlay dataset or second authority is created here. Future CRUD must update the owning inputs or explicitly migrate ownership; reimport must not silently overwrite a separate untracked metadata store.

## Model and identity

Collection ? Sub-Collection ? Category ? Product ? Color/Pattern ? Size ? SKU ? START_PRICE / FINAL_PRICE ? Media.

Types: [canonical-catalog.ts](../types/canonical-catalog.ts), [catalog-source.ts](../types/catalog-source.ts), [catalog-registry.ts](../types/catalog-registry.ts). Strict runtime gates: [catalog-contract.ts](../lib/catalog-contract.ts) and [catalog-registry.ts](../lib/catalog-registry.ts).

- Category names: Outerwear, Tops, Bottoms, Dress, Pyjamas, Accessories.
- Product: stable id/slug, approved name, collectionId, subCollectionId, categoryId, definitionSource, publication, optional nullable DESCRIPTION.
- ProductColorPattern: id = JSON tuple [productId, COLOR, PATTERN], productId, COLOR, PATTERN, patternStatus, official COLOR_CODE. Hex is exactly six digits preceded by #; case and value are preserved. Different products may supply different hex for the same color name. Within one group, conflicting codes reject import.
- Variant: id = JSON tuple ["SKU", exact SKU], productId, colorPatternId, SKU, SIZE, nullable FABRIC, the two prices and provenance. Invalid missing-SKU candidates retain a diagnostic row locator, never a fabricated orderable SKU. Rejected candidates are not persisted as accepted catalogs.
- One actual SKU = one source row. Exact duplicate SKUs and duplicate product/color/pattern/size selections are errors. Never trim, rewrite, merge or alias SKU. Historical SKUs absent from the new workbook are outside this snapshot.
- Entity IDs/slugs, source row locators, relationships, media order and primary-image uniqueness are validated. Unknown JSON fields fail strict schemas.
- Three definitions remain draft without variants: Femme Skirt Maxi, Her Top Sleeve Less, She Dress Hijab Friendly.

## Source schema and provenance

The reader resolves sheets through OOXML relationships, reads cells without Excel recalculation and never writes the XLSX. It validates the exact five-sheet/header contract; unknown populated columns, missing/renamed headers, duplicate cells/sheets, merged cells, formula cells, Excel errors and external workbook links reject this source version. Blank formatted cells are not records. Every populated PRODUCTS row survives extraction, even if SKU is absent; such a row must fail validation, never disappear.

| PRODUCTS column | Meaning / mapping |
| --- | --- |
| A COLLECTION | Raw collection; validate against approved mapping/explicit owner override |
| B SUB_COLLECTION | Exact source mapping key; Scarf design maps to PATTERN |
| C PRODUCT | Exact source product label; approved registry owns canonical display name |
| D CATEGORY | Source category; explicit allowed aliases only |
| E FABRIC | Variant FABRIC; blank stays null |
| F COLOR | Exact group COLOR |
| G COLOR_CODE | Official group hex, preserved exactly |
| H SIZE | Exact SIZE; '-' is valid, never One Size |
| I SKU | Exact unique active SKU |
| J START_PRICE | Normal/original price, exact whole-rupiah string |
| K FINAL_PRICE | Current selling price, exact whole-rupiah string |
| L DESCRIPTION | Source evidence; nonempty disagreement with Product registry blocks reconciliation |
| M MATERIAL | No canonical destination; blank preserved in evidence, nonempty content requires decision |
| N STATUS | Source ACTIVE/INACTIVE/DRAFT evidence only; never publication or inventory |

Provenance records workbook path, sheet=PRODUCTS, sourceVersion=products-workbook-v1, sourceSha256, physical row >=2, mappingVersion=catalog-mapping-v2 and complete A:N sourceValues/cells/formulas maps. No DASHBOARD locator, source SKU number or source SKU name is invented. Formula evidence remains visible on rejected candidates.

MEDIA, COLLECTIONS and CATEGORIES have exact validated headers but no current rows. Populated auxiliary content triggers reconciliation errors rather than replacing owning registries. LISTS is advisory, not a category authority. Its current B8 value 's' is reported as a warning; no workbook correction is performed.

## Approved hierarchy reconciliation

Source groups are exact (COLLECTION, SUB_COLLECTION, PRODUCT) tuples. Each maps to at most one Product and lists approved sourceCategories and explicit PATTERN. An explicit collectionOverrideReason is required for a different source/canonical collection.

- Existing canonical IDs/display names are preserved, including Priscilla Pants, Tiffany Trousers, Jolly Pyjama Long Set and Jolly Pyjama Short Set. New source spellings Priscilla/Tiffany and exact 'Jolly ' replace historical source-group keys; they do not create SKU aliases.
- Alice / Top: That Woman ? Alice ? Tops ? Product **Top**, id alice-top.
- Be Me / Satin Pants: **Rempah Revival** ? Be Me ? Bottoms ? Product **Satin Pants**, id be-me-satin-pants. Source That Woman and Pants stay in provenance; owner-approved override/alias is reported for all 18 rows.
- Long Pyjama Set and Short Pyjama Set map to Pyjamas; Long Set/Short Set remain product-name parts.
- Scarf remains one product/sub-collection. Am Monogram, Floral Meadow, Chili Chic, Garlic Bloom and Spice Blossom map to PATTERN, never COLOR or five canonical sub-collections.

Unknown groups, categories or other hierarchy conflicts reject a batch with source value, canonical value, conflict and recommended action. No fuzzy name matching, blanket whitespace normalization or SKU similarity matching is performed.

## Money, nullable fields and publication

- Only START_PRICE and FINAL_PRICE exist in the customer price model. Literal PRODUCTS J/K values are official. No offline price, legacy marketplace fallback, computed discount or third price field.
- Prices serialize as decimal-digit strings. XML integer text and zero fractional suffixes such as 859000.0 parse exactly to "859000" using integer arithmetic. Nonzero fractions, exponents, negatives and malformed values are rejected, never rounded. Missing prices stay missing; zero prices require a separate owner policy and currently block acceptance. FINAL_PRICE > START_PRICE is an error; equality is valid.
- Current source version rejects formulas. A future formula workflow must explicitly establish verification; cached prices cannot be labeled literal or approved automatically.
- SIZE is required. '-' is a valid literal. Observed sizes are XS, S, M, L, XL, XXL, S-M, L-XL and '-'; this is not an invented fixed business whitelist.
- FABRIC is per actual SKU, nullable. FABRIC_MISSING is a visible incomplete **warning**, not a catalog-wide or variant eligibility blocker in this version. Multiple distinct supplied fabrics within a product remain a blocking conflict. No MATERIAL alias or inferred fill.
- DESCRIPTION belongs to Product only; null stays null. Source status is distinct from draft/published/archived. Presence, ACTIVE and valid prices never publish a product.
- Data validity, data eligibility, publication, matching-media presence and orderability are separate. canPublishBatch is a validation gate, not a publishing action. All current products remain draft; orderable variants = 0.
- Missing media is a warning but still prevents orderability under the pending media-publication policy. Never use another product/color/pattern's photo. Existing five image references remain unchanged; file spelling/existence and relationship ownership are checked, not visual photography authenticity.

## Pipeline, output and rejection behavior

Implementation: [catalog-import.ts](../lib/catalog-import.ts), [read-product-workbook.ps1](../scripts/read-product-workbook.ps1), [import-catalog.mjs](../scripts/import-catalog.mjs).

1. Read stable inputs and SHA-256 fingerprints: XLSX raw bytes, JSON UTF-8 JSON.stringify(JSON.parse(bytes)). JSON formatting/checkout line endings do not change fingerprints; actual string values and key order remain exact. Reject concurrent content changes.
2. Validate raw workbook schema, all populated rows and registry schemas/relationships.
3. Reconcile exact identities, approved mappings, prices and official hex; preserve nullable fields and all raw provenance.
4. Validate canonical semantics and exact media files.
5. Sort entity arrays by exact ID, serialize deterministically with no timestamp or absolute machine paths. .gitattributes pins generated JSON to LF for byte-exact checkout/check mode.
6. Persist accepted canonical output plus matching reconciliation report only on explicit --write. Errors never replace the last accepted catalog with partial rows. A failed batch writes a rejection report; the data loader rejects mismatched/failed reports. Re-run successfully before consuming a new batch.

Outputs:

- [canonical-catalog.json](../data/generated/canonical-catalog.json): generated notice, importer/source versions, fingerprints of all three owning inputs and validated catalog.
- [reconciliation-report.json](../data/generated/reconciliation-report.json): matching fingerprints, success, counts, source/canonical values, conflicts, warnings, approved transformations and recommended actions.

Each file is replaced atomically; the pair is guarded by matching metadata and successful report. This is a local import CLI, not a concurrent database transaction or publication service. Check mode recomputes both files and requires exact bytes, detecting manual edits/stale outputs. Run it before committing or deploying after input edits. Source bytes changing correctly change provenance/fingerprints even if logical rows happen to match.

[data/canonical-catalog.ts](../data/canonical-catalog.ts) validates accepted output for consumers. data/catalog.ts is a legacy-shape projection of generated canonical data; it exposes variants only when canonical orderability permits. It never reads sku-master.ts and never revives old prices. data/product-media.ts remains the exact registry adapter. The legacy numeric compatibility boundary rejects amounts outside safe integer precision rather than rounding. Full storefront integration remains a later phase.

## Commands and acceptance

```text
node scripts/import-catalog.mjs
node scripts/import-catalog.mjs --write
node scripts/import-catalog.mjs --check
node scripts/check-canonical-data.mjs
node scripts/check-catalog-registries.mjs
node scripts/check-canonical-types.mjs
node --test scripts/canonical-contract.test.mjs scripts/catalog-registry.test.mjs scripts/catalog-import.test.mjs
```

No-flag import is a read-only preview. --check also reads only. Exit 1 means the batch/freshness gate failed; warnings remain visible without blocking accepted nullable/missing states. Requires installed project Node dependencies and Windows PowerShell/.NET ZIP/XML; no new package or Excel installation. Negative tests mutate in-memory copies of real inputs; the persistence test uses disposable temporary output files, never the source workbook. Existing legacy/media preservation tests require baseline aedee1e in Git history.
