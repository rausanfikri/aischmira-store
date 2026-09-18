# Product Data Quality ? Phase 2.3

Date: 2026-09-18. Current source: PRODUCTS in data/MASTER PRODUCTS.xlsx. Historical Phase-1/2.2 evidence is retained in Git checkpoint 0fcde52; its DASHBOARD/formula blockers do not describe this new source.

Workbook SHA-256 (unchanged throughout implementation):
`96fb70c0cbc16626d0d93d121e0f2603529880519aa0c1d3beef04cb6471f41e`

## Accepted snapshot

| Check | Result |
| --- | ---: |
| Source rows / generated variants / unique SKU | 497 / 497 / 497 |
| Missing SKU / duplicate SKU / duplicate selections | 0 / 0 / 0 |
| Collections / sub-collections / canonical categories | 2 / 18 / 6 |
| Product definitions / products with actual SKU | 29 / 26 |
| Color/pattern groups / Scarf pattern groups | 128 / 23 |
| Scarf patterns | 5 |
| Literal size '-' | 23 |
| Missing size / missing color / invalid hex | 0 / 0 / 0 |
| Missing/invalid prices / inverted price pairs | 0 / 0 |
| Literal price rows / formula cells | 497 / 0 |
| Missing FABRIC / conflicting non-null product fabrics | 55 / 0 |
| Media references / groups with media / groups missing media | 5 / 4 / 124 |
| Draft / published / archived products | 29 / 0 / 0 |
| Data-eligible / orderable variants | 497 / 0 |
| Import errors | 0 |

The owning registry preserves 3 no-SKU definitions: Femme Skirt Maxi, Her Top Sleeve Less and She Dress Hijab Friendly. Product DESCRIPTION remains null. Official hex values are retained exactly: Navy legitimately has #0C1758 and #0E1855 on different products; no within-group code conflict was found.

## Reconciliation and visible incomplete data

The complete machine-readable [reconciliation report](../data/generated/reconciliation-report.json) contains source values, canonical values, conflicts/decisions and recommended actions. [Generated catalog](../data/generated/canonical-catalog.json) includes all accepted source rows and cell provenance.

- 42 approved category mappings: 24 Jolly rows to Pyjamas, 18 Be Me rows from Pants to Bottoms.
- 18 explicit Be Me collection overrides: raw That Woman becomes canonical Rempah Revival by owner decision, with both values retained.
- 47 source-subcollection mappings: 23 Scarf rows map designs to PATTERN under Scarf, 24 exact 'Jolly ' values map to Jolly. No blanket trim is applied.
- 414 source product labels differ from their approved existing canonical display names; this is reported, not treated as fuzzy matching.
- 55 FABRIC_MISSING warnings: Aveline 20, Luna 12, Scarf 23. Values remain null. The versioned contract makes this an incomplete warning without blocking catalog import or data eligibility.
- 124 MEDIA_MISSING warnings and 3 draft NO_SKU warnings. Existing five media references remain intact; file spelling/existence checked, visual authenticity not recertified.
- One advisory reference-list warning: LISTS!B8 contains 's'. Canonical categories come from the registry; the workbook is not edited.
- ACTIVE on 497 source rows is provenance only. No product is published and no draft SKU is exposed as orderable through the compatibility adapter.

## Comparison with prior checkpoint

The read-only audit compared exact SKU strings with workbook checkpoint 0fcde52: 307 retained, 190 newly present, 62 no longer present, net +128. All 307 retained SKU price pairs changed. This observation is history, not a SKU alias table. The owner approved the current workbook as active snapshot; the importer never reads legacy prices or requires membership in sku-master.ts.

The former formula-backed prices are replaced with literal PRODUCTS J/K prices. The old 28 source/legacy text mismatches are not used as import blockers. The new source lacks old SKU number/name columns; those values are not fabricated. SOURCE SHA and raw A:N cells make the current evidence independently traceable.

## Validation and limits

Acceptance commands and source ownership are documented in the [canonical contract](CANONICAL_PRODUCT_DATA_CONTRACT.md). The pipeline validates exact source schema, strict registries, source rows, identity/relationships, exact money, hex, nullable fabric, media references and deterministic output freshness. Negative tests mutate copies of real input in memory; persistence tests use temporary output files only.

Source/registry validation and import acceptance are not publication or storefront readiness. Existing application compile/integration blockers remain separate. No UI, database, checkout, photo optimization, CRUD interface, BigSeller, shipping or payment integration was performed.
