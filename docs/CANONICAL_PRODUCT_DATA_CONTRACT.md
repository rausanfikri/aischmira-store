# Canonical Product Data Contract

Version: `phase-1-v1` · Established: 2026-09-17 · Scope: Phase 1 only.

Authority: [MASTER_BRIEF](../MASTER_BRIEF.md) and explicit Phase-1 owner decisions. Evidence: [data quality summary](PRODUCT_DATA_QUALITY.md). This contract does not authorize publishing, database changes or storefront implementation.

## 1. Boundary and compatibility

Canonical types live in `types/canonical-catalog.ts`; runtime schema and pure assessment functions live in `lib/catalog-contract.ts`. `types/catalog.ts` remains a **legacy compatibility boundary**, because `data/catalog.ts`, `data/product-media.ts` and `services/catalog.ts` consume its originalPrice/material/nested-variant model. All four files and `data/sku-master.ts` are unchanged. They are not competing approved canonical models.

Phase 2 must target the new contract, not extend legacy price/material fields. No route imports the new boundary in Phase 1. The read-only harness creates an in-memory evidence snapshot; it does not write a catalog, import into a database, publish records or migrate consumers. This avoids committing unrelated, pre-existing untracked catalog files as part of this checkpoint.

## 2. Hierarchy and entities

Collection → Sub-Collection → Category → Product → Color / Pattern → Size → SKU.

Category is a reusable registry; each product links to one category and one sub-collection. Its collection must equal the sub-collection's parent. Product membership supplies the sub-collection/category relationship; a duplicate hierarchy framework is unnecessary.

| Entity | Fields / types | Required and allowed values |
| --- | --- | --- |
| Collection | `id`, `slug`, `name`: string | All required, nonblank. Exact approved display name; slug is URL identity only |
| SubCollection | Collection fields + `collectionId`: string | All required; existing collection parent |
| Category | `id`, `slug`, `name` | All required; name is Outerwear, Tops, Bottoms, Dress, Pyjamas or Accessories |
| Product | `id`, `slug`, `name`, `collectionId`, `subCollectionId`, `categoryId`, `definitionSource`: string; `publication`: PublicationStatus | All required. Definition may exist without SKU; that does not authorize sale |
| ProductColorPattern | `id`, `productId`: string; `COLOR`, `PATTERN`: string or null; `patternStatus` | Keys required; null records absence. Status is known / not-applicable / ambiguous |
| SkuVariant | `id`: string; `productId`, `colorPatternId`, `SKU`, `SIZE`, `FABRIC`: string or null; Price fields; Provenance | One source row per actual SKU. Nulls support rejected/incomplete staging evidence, not sale |
| Price | `START_PRICE`, `FINAL_PRICE`: Rupiah or null | Both keys required; both valid non-null values required for purchasability. No other price fields |
| Media | `id`, `productId`, `colorPatternId`, `reference`, `alt`, `mappingSource`: string; `type`; `sortOrder`; `primary`; `width`, `height` | All required; type=image, order nonnegative integer, primary boolean, dimensions positive integers |
| CanonicalCatalog | `version`; arrays collections, subCollections, categories, products, colorPatterns, variants, media | All keys required, version=phase-1-v1; arrays may be empty for a draft dataset |

The runtime schema is strict: unknown fields fail rather than being silently discarded. A future schema change must be versioned. `any` is not used. Product descriptions and other fields not in this version remain source-only/pending, rather than invented or arbitrarily attached.

## 3. Identity, uniqueness and relationships

- Product ID is an internal stable key, initially the approved existing product ID. Slug may change through a later URL migration without changing product identity. Names are never IDs or generated SKUs.
- SKU is the exact business code from column H. No trim, case conversion, slug conversion, size concatenation or generation. Duplicate exact SKU is an error; all duplicate rows are blocked, not deduplicated by first match.
- Internal variant ID in the evidence snapshot is `DASHBOARD:<physical row>`; it is a source locator, not a replacement business SKU or a permanent database key across workbook reordering. Phase 2 can assign persistent internal IDs while retaining the business SKU and original provenance.
- Variant selection identity is `(productId, COLOR, PATTERN, SIZE)`; exactly one actual SKU may resolve it. Multiple SKUs for the same selection are a conflict. No size grouping or first-variant fallback.
- Color/pattern group ID is `JSON.stringify([productId, COLOR, PATTERN])`. Tuple encoding avoids delimiter collisions and preserves source values. Groups belong to one product.
- IDs must be unique inside each entity registry. Collection/sub-collection/category/product slugs must each be unique inside their own registry. Source `(workbook, sheet, row)` is unique per variant snapshot.
- Parent records must exist. A variant's color group and a media record's color group must belong to the same product as the record itself.
- Unknown mapping/group remains an error/pending mapping; never drop the source row to achieve a passing count.

## 4. Size, color/pattern and FABRIC

- `SIZE: "-"` is a valid literal value, distinct from `SIZE: null` (missing). It is never One Size/Free Size. Observed sizes: S, M, L, XL, S-M, L-XL, -, XXL, XS. This observation is not a permanent whitelist forbidding future source-supported sizes.
- COLOR remains the workbook COLOR value. For Scarf, approved mapping identifies source COLLECTION as PATTERN: Am Monogram, Floral Meadow, Chili Chic, Garlic Bloom, Spice Blossom. Pattern is not copied into COLOR.
- For non-pattern products, PATTERN=null and patternStatus=not-applicable. Known patterns require a value. Ambiguous classification blocks eligibility; absence of evidence is not permission to infer a pattern from text.
- FABRIC is stored on **each SKU row** to preserve actual source differences. There is no canonical MATERIAL/material field or duplicated product-level FABRIC value.
- Multiple distinct non-null FABRIC values within a product produce FABRIC_CONFLICT and block its eligibility pending review. Values stay present; no majority selection, normalization or deletion.
- Canonical SIZE/FABRIC/COLOR are checked against provenance. Whitespace/newlines are retained. Any later display normalization must be explicit and must preserve raw source evidence.

## 5. Money and formula evidence

- Unit: whole Indonesian rupiah, matching workbook `(RP)` columns. Rupiah is a **decimal-digit string**, e.g. `"1209000"`; runtime pattern `^(0|[1-9][0-9]*)$`. This representation prevents floating-point arithmetic and loss of precision during JSON transport.
- Null means missing. No negative signs, decimals, exponents, currency separators, NaN/Infinity, numeric JS values or additional price keys. Use BigInt for internal integer operations and serialize back to strings.
- Read-only source parsing accepts integer XML text or a zero fractional suffix such as `.0`, then produces exact integer digits. It never rounds a nonzero fraction or computes a discount.
- K: MARKETPLACE DEFAULT PRICE → START_PRICE; L: MARKETPLACE FINAL PRICE → FINAL_PRICE. J: OFFLINE BAZAAR PRICE is excluded. No OFFLINE_PRICE, compare-at alias or alternate storefront price field.
- Equal prices are valid; later UI need not show strikethrough. FINAL_PRICE greater than START_PRICE is a review conflict rather than an assumed discount/promotion.
- Zero is numerically representable but orderability is withheld as ZERO_PRICE_REVIEW until the owner approves a zero-price sales policy. Current source has no such case.
- **Owner decision, 2026-09-17:** cached formula results are unverified; block publication until formula verification. All 369 current rows inherit formula-backed K/L cells. Matching the TypeScript prices is not proof of recalculation freshness.
- Keep original formula XML and merged-cell origin references. Some L formulas reference J inside the workbook. This is source evidence only: canonical code neither recomputes from J nor exposes J as a storefront price.
- `priceEvidence`: literal / cached-unverified / cached-approved. The last value requires recorded external source approval or verified recalculation evidence in the future pipeline; the Phase-1 snapshot never assigns it. A formula cannot be labeled literal.
- Source verification must be implemented in Phase 2; changing this enum alone is not evidence or a publication action. Workbook remains unchanged.

## 6. Media

Media owns an exact product + color/pattern group, shared by that group's size/SKU rows. This satisfies SKU-to-media resolution without duplicating images per size. Image references identify a file/path/storage reference, not a guessed photograph.

Within a nonempty group, sortOrder is unique and exactly one image is primary. Missing media is an empty relationship with computed mediaStatus=missing. Existing order establishes provisional primary/sort metadata for the evidence snapshot, not a new photography claim.

The existing color-only media map may be reused for assessment only when the product/color resolves to one pattern group. An ambiguous source map is reported and withheld. Never use a photo from another group as fallback. Parent validation cannot prove a photograph's visual identity; editorial/source verification is still required.

Only image is approved in v1. Additional media types require a contract extension. Pipeline transformations and image optimization are outside Phase 1.

## 7. Validity, publication and orderability

| Concept | Values / rules |
| --- | --- |
| Data validity | valid / incomplete / conflict, computed from issues, never user-supplied success |
| Publication | draft / published / archived, explicit input independent of record existence; all Phase-1 products remain draft |
| Media status | present / missing, computed for the exact group |
| Data eligibility | No blocking schema/identity/hierarchy/source/price/fabric issues; does not itself grant sale permission |
| Orderability | Eligible actual SKU + parent product published + matching media present under conservative pending-media policy |
| Batch publication | `canPublishBatch` must be true AND source reconciliation must have no blocking issues. Any error rejects a batch; no silent filtering/dropping |

Schema failures return no entity assessments and canPublishBatch=false. For well-shaped inputs, assessments carry reason codes. Conflicts are blocking; required missing fields are blocking. MEDIA_MISSING is a visible incomplete warning but the unresolved missing-media publication policy still prevents that variant from becoming orderable. This is a safety gate, not a decision to permanently ban all no-photo products.

NO_SKU on a draft definition is an incomplete warning; it becomes an error if publication is requested. Product-level purchasability requires at least one orderable SKU. A published product with zero orderable rows is blocked. No confirmation of source validity or publication is inferred from a timestamp or an existing row.

Femme Skirt Maxi, Her Top Sleeve Less and She Dress Hijab Friendly remain product definitions with zero variants, draft publication and false orderability. They are not published as purchasable products until valid source SKU exists.

## 8. Provenance and source mapping

Every variant requires provenance: workbook=`data/MASTER PRODUCTS.xlsx`, sheet=DASHBOARD, physical row >=3, mappingVersion=phase-1-v1, sourceSKU/SIZE/FABRIC/COLOR, sourceNumber/sourceName/sourceCollection/sourceCategory/sourceType (nullable exact values), `cells` and `formulas` maps for every SourceField, and priceEvidence.

`cells` points to the actual value-bearing cell, including merge origin. `formulas` preserves raw formula XML/shared-formula metadata, or null for a literal. Source name does not overwrite approved product display naming.

| Workbook DASHBOARD | Canonical destination / disposition |
| --- | --- |
| A COLLECTION | provenance.sourceCollection; approved mapping to sub-collection/product; Scarf design → PATTERN |
| B FABRIC | variant.FABRIC + provenance.sourceFABRIC |
| C CATEGORY | provenance.sourceCategory; approved category mapping below |
| D TYPE/ITEM | provenance.sourceType; product-definition mapping below |
| E COLOR | group.COLOR + provenance.sourceCOLOR |
| F SIZE | variant.SIZE + provenance.sourceSIZE; literal `-` preserved |
| G SKU / NO | provenance.sourceNumber; source-only sequence, not business SKU |
| H SKU / CODE | variant.SKU + provenance.sourceSKU, exact |
| I SKU / NAME | provenance.sourceName; source-only label, not canonical Product.name |
| J OFFLINE BAZAAR PRICE (RP) | Excluded from canonical price and payload; retained untouched in workbook only |
| K MARKETPLACE DEFAULT PRICE (RP) | START_PRICE with origin/formula evidence |
| L MARKETPLACE FINAL PRICE (RP) | FINAL_PRICE with origin/formula evidence |
| Sheet SKU: WEIGHT (G) | Source-only / pending mapping; shipping is outside scope |
| Sheet NOMOR KERANJANG LIVE | Source-only operational ordering/labels; not SKU identity or storefront hierarchy |
| Unknown future columns/sheets | Report pending mapping; never silently discard or infer fields |

The Phase-1 extractor verifies expected headers, reads only DASHBOARD SKU evidence, and expands actual vertical merged ranges only. It retains rows with number/name even when CODE is missing; it does not blanket forward-fill blanks. It rejects workbook error cells. Phase 2 must additionally define batch fingerprints, unknown-column handling, operator approval and import persistence; those mechanisms are not implemented here.

## 9. Approved hierarchy and naming registry

That Woman contains Femme, Her and She. Rempah Revival contains Amara, Aveline, Bianca, Briana, Dasya, Gendis, Jolly, Luna, Priscilla, Safira, Scarf, Tiffany and Zamira. Existing IDs/slugs in data/catalog.ts remain mapping keys; no new business SKU is generated.

| Canonical Product.name | Source COLLECTION / TYPE | Sub-Collection | Category |
| --- | --- | --- | --- |
| Femme Outer | Femme / Outer | Femme | Outerwear |
| Femme Skirt | Femme / Skirt | Femme | Bottoms |
| Femme Skirt Maxi | No source SKU | Femme | Bottoms |
| Femme Tank Top | Femme / Tank Top | Femme | Tops |
| Her Pants | Her / Pants | Her | Bottoms |
| Her Top Long Sleeve | Her / Long Sleeve Top | Her | Tops |
| Her Top Short Sleeve | Her / Short Sleeve Top | Her | Tops |
| Her Top Sleeve Less | No source SKU | Her | Tops |
| She Dress | She / Dress | She | Dress |
| She Dress Hijab Friendly | No source SKU | She | Dress |
| Amara Skirt | Amara / Skirt | Amara | Bottoms |
| Aveline Shirt | Aveline / Shirt | Aveline | Tops |
| Bianca Blazer | Bianca / Blazer | Bianca | Outerwear |
| Bianca Obie | Bianca / Obie | Bianca | Accessories |
| Briana Blouse | Briana / Blouse | Briana | Tops |
| Dasya Top | Dasya / Blouse | Dasya | Tops |
| Dasya Trousers | Dasya / Trousers | Dasya | Bottoms |
| Gendis Top | Gendis / Top | Gendis | Tops |
| Jolly Pyjama Long Set | Jolly / Long Sleeve Top + Pants | Jolly | Pyjamas |
| Jolly Pyjama Short Set | Jolly / Short Sleeve Top + Shorts | Jolly | Pyjamas |
| Luna Pants & Belt | Luna / Pants | Luna | Bottoms |
| Priscilla Pants | Priscila / Pleated Pants | Priscilla | Bottoms |
| Safira Skirt | Safira / Skirt | Safira | Bottoms |
| Safira Top | Safira / Top | Safira | Tops |
| Scarf | Am Monogram, Floral Meadow, Chili Chic, Garlic Bloom, Spice Blossom / Scarf | Scarf | Accessories |
| Tiffany Trousers | Tifani / Trousers | Tiffany | Bottoms |
| Zamira Dress | Zamira / Long Dress | Zamira | Dress |

Source categories Long Pyjama Set and Short Pyjama Set map to Pyjamas (24 rows). Long Set/Short Set remain product-name components. Priscila/Tifani source spellings stay in provenance/SKU; display aliases are Priscilla/Tiffany. Other category contradictions must be reported, not treated as another automatic alias.

## 10. Validation entry points and Phase-2 handoff

Run from the repository root with existing dependencies; nothing is installed:

```text
node scripts/check-canonical-types.mjs
node --test scripts/canonical-contract.test.mjs
node scripts/check-canonical-data.mjs
```

The data command requires Windows PowerShell and .NET ZIP/XML support, reads the existing workbook and legacy TypeScript in memory, prints a JSON quality report and returns nonzero for unresolved source/contract errors. It writes no generated catalog. Existing TypeScript is transpiled for evidence evaluation only; the separate strict type-check validates production contract code.

`canonicalCatalogSchema` gates unknown inputs; `validateCanonicalCatalog` assesses semantic rules; `readRupiah` validates raw monetary text without floating point; `colorPatternIdentity` provides exact group identity. Source comparison in the harness is a second gate: full source-to-canonical equality cannot be proven by self-declared provenance alone.

Negative tests use disposable in-memory mutations of real source records, never saved fake products. No browser, auth, cart, routing, media optimization, database schema or publication implementation is part of this phase.

Phase 2 must resolve formula verification, reconcile source/legacy text differences explicitly, choose the operator/source workflow, version import evidence and require successful validation before publication. Current draft snapshots are not purchase-ready even though all 369 SKU codes and price pairs reconcile with the prior audit.
