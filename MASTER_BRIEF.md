# AISCHMIRA.STORE — Master Brief

Updated: 2026-09-18. Status: requirements baseline for the staged rebuild.

## Authority

### Owner-authorized storefront prototype — 2026-09-19

The current task authorizes a complete working demo across storefront, bag, WhatsApp review, basic account and Bazaar, plus commit/push to the current work branch only (no merge to main). These explicit decisions supersede conflicting earlier phase boundaries for this task:

- Latest PRODUCTS values own demo collection/sub-collection/product/category display, FABRIC, official color/hex, size, SKU, prices and source status. The application projects exact sourceValues from the freshly verified canonical snapshot, rather than historical display aliases. Current result: 30 source product groups, 497 unique SKU, 2 collections, 22 sub-collections, 8 literal source categories. Five Scarf source sub-collections remain separate; Be Me stays in source That Woman; Pants, Long Pyjama Set and Short Pyjama Set are preserved as supplied source categories for this demo. This does not silently migrate the historical production registry.
- Valid ACTIVE workbook variants may enter the clearly labeled demo bag/WhatsApp request despite draft publication or missing production photography. Production publication remains draft. No replacement SKU, fabricated price or stock claim.
- Demo product descriptions, editorial copy, local CSS colour studies and an illustrative Bazaar event are authorized. Keep DEMO metadata and visible preview/event/visual labels; never describe them as production evidence. No invented orders or loyalty transactions.
- Account preview may keep a demo profile in tab memory. Real authentication uses configured Supabase; unconfigured/unavailable states remain explicit. Do not persist personal checkout data to browser storage.
- Bazaar demo uses one local event date, same-day start/end time, IANA timezone and demo/published/inactive status in JSON. Published production events and venue details require supplied data. Validate Maps URLs; no arbitrary embed HTML.
- Instagram, Facebook, Threads, TikTok, YouTube and X all use the supplied handle @aischmira; no unsupplied account URLs are asserted.
- No production-readiness claim, production deployment, payment/shipping API, BigSeller, complex CMS or database migration is authorized by this prototype task.

This file is the source of truth for business and product requirements. New explicit owner instructions take precedence; record accepted decisions here. `AISCHMIRA_STATUS.md` records implementation evidence and open questions; `AGENTS.md` defines the working process. A requirement is not a claim that a feature is implemented.

Older README, tasks, roadmap, architecture documents and ADRs are historical wherever they conflict with this brief. Do not revive excluded features from them. Do not invent answers to unresolved decisions.

## Brand and experience

- Premium/editorial fashion storefront, led by photography, strong typography and responsive whitespace.
- Minimal homepage with a small, purposeful set of sections. Exact composition is a later design decision.
- Predominantly white with restrained gold accent `#C4A434`, minimal borders and square controls. No marketplace/admin-dashboard presentation, gradients, glass effects, decorative animations or unsupported badges.
- Customer journey: Home → Catalog → Collection → Sub-Collection → Category → Product → Cart → WhatsApp.
- Social media handle: `@aischmira`. Do not invent platform URLs or verification claims.

## Catalog and identity

- Data-driven catalog: adding product, SKU, color, size, price or media through validated data must not require UI component changes.
- Hierarchy: **Collection → Sub-Collection → Category → Product → Color → Size → SKU → Price → Media**. This describes the browsing/data relationship; media belongs to the correct product/color and may be shared across its sizes.
- Top-level categories: **Outerwear, Tops, Bottoms, Dress, Pyjamas, Accessories**.
- **Long Set** and **Short Set** are parts of product names, never categories.
- Preserve approved spelling and capitalization, including **Priscilla**, **Tiffany**, **Rempah Revival**, **That Woman**, **Long Set**, and **Short Set**. Normalize URL slugs only; never apply text-transform to visible product/collection names.
- Retain source names, source row identifiers and original SKUs for traceability. Phase-1 aliases, field mapping and identity rules are recorded in `docs/CANONICAL_PRODUCT_DATA_CONTRACT.md`; measured findings are in `docs/PRODUCT_DATA_QUALITY.md`.
- **One actual SKU = one data row.** SKU is the exact unique variant identifier; never substitute another variant on lookup failure.
- Customers choose actual available variants, colors and sizes as applicable. Never generate combinations absent from source data.
- **FABRIC** is the canonical fabric field, preserved per actual SKU row. Do not add MATERIAL as another canonical field. Report differences within one product explicitly; never silently select one value.
- Phase-1 decisions: existing hierarchy/naming mappings are authoritative unless concrete source evidence contradicts them. Preserve literal size `-`; distinguish missing size explicitly. Keep Scarf pattern/design separate from color.
- Femme Skirt Maxi, Her Top Sleeve Less and She Dress Hijab Friendly remain representable definitions, but are not orderable or published as purchasable products until valid source SKU exists.
- `data/MASTER PRODUCTS.xlsx` is source evidence. Do not edit it without explicit instruction. Reconcile imports against it and respect merged cells/provenance.
- Phase-2.1 owner decisions: DESCRIPTION belongs to Product only and stays missing until supplied; Product publication is draft/published/archived, never inventory. Phase-2.3: PRODUCTS!G supplies official COLOR_CODE; validate six-digit hex and preserve it exactly per product/color/pattern, never derive it from names.
- Data ownership: workbook owns actual SKU/size/color/COLOR_CODE/FABRIC/price and raw source status; data/catalog-mapping.json owns approved identity/hierarchy/Product description/publication; data/product-media.json owns exact media associations. sku-master.ts is transitional comparison/evidence only. data/generated/canonical-catalog.json is generated, never manually edited; reconciliation-report.json records the matching import result. Compatibility consumers use this canonical output, not legacy prices.
- Missing remains missing. Products without a valid orderable SKU/price cannot enter checkout. No invented products, colors, sizes, fabric, descriptions, prices, discounts or media.

## Price contract

- The only catalog price fields are **START_PRICE** and **FINAL_PRICE**.
- `START_PRICE` is the normal/original price. `FINAL_PRICE` is the current selling price.
- Do not use `OFFLINE_PRICE` or any offline/bazaar price in the storefront contract. Historical workbook columns remain untouched for traceability.
- Approved mapping: MARKETPLACE DEFAULT PRICE → START_PRICE; MARKETPLACE FINAL PRICE → FINAL_PRICE. OFFLINE BAZAAR PRICE is excluded from the canonical price model.
- Monetary values use exact whole-rupiah decimal strings, with integer arithmetic where needed; no floating-point money. Equal prices are valid. Invalid/unmappable source values are validation issues, never guessed prices.
- Current source version requires literal values. Future formula-backed prices require an explicitly approved verification workflow; cached values and legacy equality are insufficient evidence. Never calculate storefront prices from offline values.
- Re-resolve cart prices from canonical data before checkout. Never turn missing prices into zero or substitute a different variant's price.

## Media, accessibility and performance

- Color selection immediately switches/resets the gallery to that color, including an honest empty state when media is absent.
- Never fall back to another color or product's media. Distinguish pattern/design where necessary for correct media identity.
- Optimize product media with `next/image`, known dimensions/aspect ratios, responsive sizes and practical WebP/AVIF. Prioritize only the lead image; lazy-load other images. No random remote image providers.
- Use semantic headings, associated labels, useful alt text, keyboard access, contrast-safe visible focus and comfortable touch controls. Mobile navigation closes on Escape, manages focus and prevents background interaction.
- Verify 1440, 1280, 1024, 768, 430, 390, 375 and 360px plus landscape. Avoid overflow, clipping and fixed controls obscuring content.
- Minimize JavaScript/dependencies. No public-page auth requests or client fetching of static catalog data. Provide route-specific metadata/canonicals, sitemap and robots without invented offers, availability or reviews.

## Cart and WhatsApp

- Cart ends in WhatsApp at `https://wa.me/6285121344848`.
- Persist only SKU/quantity in browser cart. Validate persisted data, exact SKU and positive integer quantity. Never persist checkout personal information in localStorage.
- Require **Name**, **active WhatsApp number**, and **shipping address** before order handoff. Validate required fields and phone format; format validation alone does not prove the number is active.
- Revalidate SKU, quantity and canonical price, then show an explicit review before opening WhatsApp. Unresolved lines block checkout and must not silently disappear.
- Message includes customer information, product name, exact SKU, color, size, quantity, unit selling price, item subtotal and order total. Do not invent shipping charges or free-shipping claims.
- Opening WhatsApp proves neither submission nor confirmation, payment, fulfillment, loyalty accrual or BigSeller sync.
- No payment gateway, shipping API, customer-facing stock display, wishlist, wallet or payment history.

## Account and integrations

- A simple email-linked account contains profile, real order history and real loyalty points only. Use genuinely configured authentication.
- Distinguish signed-out, unconfigured, unavailable/error, empty and successful states. Show save success only after actual successful persistence.
- Loyalty available/earned/used/history shows recorded values only. Missing is not zero; recorded zero is valid.
- No fake orders, loyalty points, payment status, customers, balances or sync results. Do not add referral gamification, fake newsletters, reviews, dashboards or storefront administration.
- Keep private credentials and account services server-side. Use authenticated owner-scoped access and database controls. Customers cannot edit sensitive business records.
- BigSeller is server-side operational sales recording only, not a payment, checkout, price-calculation or customer-facing inventory dependency. Verify API behavior and actual results before integration claims.

## Bazaar / Visit Us

- Provide a data-driven Bazaar / Visit Us feature.
- Event data supports **Event name, Location, Address, Date, Start time, End time, Description, Image, Status, Google Maps link, Google Maps embed**.
- Events must be addable, editable and deactivatable through data without source code or UI component changes. A TypeScript array requiring source edits is not the final operator workflow.
- Render only supplied event information. Validate dates/times and Maps URLs; embed input must not enable arbitrary HTML execution.
- Decide status/publication semantics, timezone/date-range handling and operator workflow before dependent implementation.
- Bazaar does not require a busy homepage or multiple extra sections. Preserve the minimal editorial experience.

## Delivery boundaries

Work in small authorized phases and reuse suitable architecture without competing abstractions. Phase 0 is documentation only: no source changes, redesign, refactor, dependency installation, file deletion, database migration or workbook modification.

Phase 1 is limited to the canonical contract, compatible TypeScript definitions, source mapping, validation/data-quality foundation and documentation. It does not authorize storefront migration, UI/routing/auth/checkout changes, database migrations, CMS/admin/Bazaar implementation, image optimization, dependency installation or deletion of legacy files.

After each phase, run relevant validation, report exact results/limitations, update the status checkpoint and commit only reviewed in-scope changes. Code phases require appropriate lint, type-check, build, data/commerce and browser checks. A documentation checkpoint does not certify application readiness.

Phase 2.1 + 2.2 is limited to these metadata clarifications, structured catalog/media registries, minimal compatibility adapters, read-only validation and documentation. No full import pipeline, workbook/source value edits, UI, database, dependency installation or media optimization is authorized. Next implementation scope is Phase 2.3 only when separately requested.

## Phase 2.3 accepted reconciliation decisions

- Current workbook schema is PRODUCTS A:N, version products-workbook-v1. Do not modify the workbook. Exact active SKU comes from its 497-row snapshot; absent historical SKUs are outside the active snapshot. No implicit SKU aliases or migrations.
- Canonical contract phase-2.3-v1 and registry catalog-mapping-v2 preserve raw cells, values, formulas, source SHA-256 and row provenance. Identity uses explicit registry keys, never inferred product-name similarity.
- Alice / Top belongs to That Woman / Alice / Tops. Be Me / Satin Pants belongs to Rempah Revival / Be Me / Bottoms. The latter explicitly overrides source collection That Woman and category Pants. Product display names for these new entries are exactly Top and Satin Pants; existing approved product names remain unchanged.
- Long Pyjama Set and Short Pyjama Set map to Pyjamas. Five Scarf designs remain PATTERN values under the single Scarf product/sub-collection. Literal SIZE '-' remains valid. Exact source 'Jolly ' maps to existing Jolly identity; raw whitespace remains in provenance.
- Missing FABRIC stays null. In phase-2.3-v1 FABRIC_MISSING is an incomplete warning, not a batch/eligibility blocker; conflicting non-null fabrics still block. No MATERIAL alias or inferred values.
- COLOR_CODE is official workbook-owned six-digit hex, preserved without normalization across products. DESCRIPTION and publication remain Product metadata owned by the JSON registry. Empty source DESCRIPTION stays missing, and nonempty disagreement must be reconciled.
- Source ACTIVE/INACTIVE/DRAFT is provenance only, never stock or canonical publication. All 29 product definitions remain draft; importer performs no publication.
- Existing media registry remains authoritative despite empty workbook MEDIA. No cross-product/color/pattern fallback. New populated auxiliary metadata sheets need explicit reconciliation, not silent replacement.
- Phase 2.3 authorizes extraction, reconciliation, generated output, validators/tests, compatibility adapters and documentation only. No UI, CMS/admin, database, payment/shipping/BigSeller integrations, design changes or invented business data.
