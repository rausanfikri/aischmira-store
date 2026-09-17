# Product Data Quality — Phase 1

Date: 2026-09-17. Scope: canonical product data only, not a repeated repository audit.

Source: `data/MASTER PRODUCTS.xlsx`, DASHBOARD rows identified by SKU number/code/name; source headers/merged ranges inspected read-only. Comparison: unchanged `data/sku-master.ts` and approved hierarchy in `data/catalog.ts`. Contract: [Canonical Product Data Contract](CANONICAL_PRODUCT_DATA_CONTRACT.md).

## Summary

| Check | Result |
| --- | ---: |
| Source SKU rows | 369 |
| Unique source SKU | 369 |
| TypeScript dataset rows / unique SKU | 369 / 369 |
| Duplicate source SKU | 0 |
| Missing source SKU | 0 |
| Workbook SKU absent from TypeScript | 0 |
| TypeScript SKU absent from workbook | 0 |
| Marketplace price-pair differences | 0 |
| Missing source price rows | 0 |
| Invalid monetary values in stored results | 0 |
| Formula-backed price rows, unverified | **369** |
| Distinct price formula origin cells (K/L) | 48 |
| Missing product identity / missing hierarchy | 0 / 0 |
| Product definitions / definitions with actual SKU | 27 / 24 |
| Definitions without SKU | 3 |
| Within-product FABRIC conflicts | 0 |
| Missing FABRIC / missing SIZE | 0 / 0 |
| Literal size `-` | 23 |
| Color/pattern groups | 106 |
| Patterned groups (Scarf) | 23 |
| Ambiguous color/pattern classifications found under approved mapping | 0 |
| Groups with media / missing media | 4 / 102 |
| Exact workbook–TypeScript text differences | **28** |
| Approved source category aliases | 24 |
| Draft products / published products | 27 / 0 |
| Currently eligible / orderable variants | 0 / 0 |

The original five numeric baseline results remain unchanged: 369 source rows, 369 unique SKU, 369 TS SKU, zero workbook SKU missing in TS and zero price-pair differences. New findings concern formula freshness and additional fields that the initial SKU/price comparison did not certify.

## Publication blocker: cached formula prices

Both canonical price fields for all rows inherit cached formula values from 48 K/L origin cells. For example DASHBOARD K3 contains `CEILING((L3*1.01)-9000,10000)+9000`, and L3 contains `CEILING(((J3+1250)/(1-33%))-9000,10000)+9000`.

**Owner decision during Phase 1:** record these results as unverified and block publication until formula verification. No recalculation or workbook modification was performed. Matching TS values does not prove formula freshness. The extractor records original formula XML/cell origins; canonical price contains only START_PRICE and FINAL_PRICE, never offline price. No workbook formula is reproduced as storefront price calculation.

Validator emits 369 PRICE_SOURCE_UNVERIFIED issues. This is an intentional data gate, not a new application compile failure or permission to substitute prices.

## Exact text differences

28 rows differ in one inspected text field between workbook and legacy TS:

- 12 Safira rows: workbook FABRIC is `Cotton Toyobo\nPremium`; TS uses `Cotton Toyobo Premium`. Canonical evidence preserves the newline. This is source/TS formatting drift, **not** a within-product FABRIC conflict.
- 11 Zamira SKU_NAME rows differ only by trailing whitespace.
- 5 rows have substantive SKU_NAME differences, listed below. Exact SKU, actual SIZE field and price-pair checks still match; a mistaken size embedded in SKU_NAME must not redefine variant SIZE.

| SKU | Workbook SKU_NAME | Legacy TS SKU_NAME |
| --- | --- | --- |
| ZAMIRA-LONGDRESS-GREENLIME-L | AISCHMIRA Zamira Long Dress Green Lime (trailing space) | AISCHMIRA Long Dress Green Lime |
| FEMME-TANKTOP-WOOD-S | AISCHMIRA Femme Tank Top Wood S | AISCHMIRA Femme Tank Top Wood XS |
| HER-SHORTSLEEVETOP-WOOD-S | AISCHMIRA Her Short Sleeve Top Wood S | AISCHMIRA Her Short Sleeve Top Wood XS |
| HER-SHORTSLEEVETOP-OAT-M | AISCHMIRA Her Short Sleeve Top Oat M | AISCHMIRA Her Short Sleeve Top Oat S |
| HER-PANTS-WOOD-M | AISCHMIRA Her Pants Wood M | AISCHMIRA Her Pants Wood S |

No old dataset was corrected. The source-only label is preserved in canonical provenance; product display names follow the approved naming registry. Phase 2 must explicitly reconcile these differences instead of treating the TS extract as byte-identical to the workbook.

## Definitions, aliases and media

- Femme Skirt Maxi, Her Top Sleeve Less and She Dress Hijab Friendly remain draft definitions without variants, prices or purchase permission. No fictitious SKU was created.
- Source Long Pyjama Set / Short Pyjama Set → Pyjamas for 24 Jolly rows is an approved alias, not an error or new category.
- Scarf pattern comes from the approved source COLLECTION mapping and remains separate from COLOR. The group identity includes product, color and pattern. The legacy color-only media key must never be reused across ambiguous patterns.
- Only four She Dress color groups have five mapped images; 102 groups have missing media. Existing image associations were carried as evidence, not visually recertified. Butter Yellow stays empty.

## Reproducible checks and limits

- `node scripts/check-canonical-types.mjs`: scoped strict TypeScript validation, no emit.
- `node --test scripts/canonical-contract.test.mjs`: contract regression tests using actual source and transient mutated copies, no saved dummy catalog.
- `node scripts/check-canonical-data.mjs`: JSON report; **exit 1 is expected for this source snapshot** due to unverified formula prices and source/legacy text differences. Approved category aliases alone do not fail the check.
- This phase does not execute workbook formulas, verify live database data, publish products, repair legacy app imports, test UI, optimize media or modify authentication/checkout.
- Workbook SHA-256 and legacy file hashes are checked before/after Phase 1. Actual execution results and repository-wide diagnostic comparison are recorded in `AISCHMIRA_STATUS.md`.
