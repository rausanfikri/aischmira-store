# AISCHMIRA.STORE — Persistent Project Checkpoint

Updated: 2026-09-17. Requirements: `MASTER_BRIEF.md`. Working process: `AGENTS.md`.

## Current State

Repository sedang dalam migrasi dan belum menjadi aplikasi storefront yang utuh.

Legacy pages reference removed modules; new catalog/account foundations are not wired into them. Documentation readiness is not application readiness.

Branch: `codex/editorial-storefront`. Pre-Phase-0 HEAD: `4b27943`. Audit and Phase-0 preflight showed 409 tracked deletions, 3 modified files and 8 untracked files; index empty. These are pre-existing migration changes, not Phase-0 implementation. Do not restore, delete or commit them implicitly.

## Completed

- Initial repository audit.
- Stack identified: Next.js 16.2.10, React/React DOM 19.2.4 in manifest, strict TypeScript, Tailwind v4, Supabase SSR/Auth foundations and Zod; historical cart used Zustand.
- 369 SKU verified against workbook: 369 unique SKU codes in DASHBOARD, all present in `data/sku-master.ts`; no differences in the two marketplace price columns after reading merged-cell ranges. This does not certify every workbook field, formula or media association.
- Existing catalog architecture identified.
- Existing account architecture identified.
- Existing broken legacy dependencies identified.
- Phase-0 documentation completed at `6380406`: master requirements, concise agent workflow and persistent checkpoint. No storefront implementation performed.
- Phase 1: canonical contract and separate compatibility boundary, exact-money types, source mapping, runtime validation and read-only data-quality foundation implemented. See `docs/CANONICAL_PRODUCT_DATA_CONTRACT.md` and `docs/PRODUCT_DATA_QUALITY.md`.

## Current Phase

**Phase 1 — Canonical Product Data Contract.**

Scope: canonical types/contract, pure validator, read-only source evidence tooling, tests and documentation. Existing catalog/types/services/workbook remain unchanged; no UI, routing, checkout, auth, database, dependency, image or legacy cleanup work.

Status: Phase 1 completed and validated within scope. Checkpoint: the commit containing this update, titled `feat(catalog): define canonical data contract` (locate with `git log -1 --format=%h -- AISCHMIRA_STATUS.md`). Phase 0 `6380406` is preserved. This checkpoint does not include unrelated uncommitted migration work or certify a working storefront.

## Next Phase

**Phase 2 — Validated Product Import & Data Publication Pipeline.** Not started or authorized by this checkpoint.

Use `types/canonical-catalog.ts` and `lib/catalog-contract.ts` with the documented contract. First verify formula prices, reconcile source/TS text drift explicitly and decide the operator/source workflow. Publication remains blocked; do not infer permission from a complete contract.

## Audit Evidence and Architecture Map

| Area | Evidence / current behavior |
| --- | --- |
| Source | `data/MASTER PRODUCTS.xlsx`; `data/sku-master.ts`: 369 SKU rows, three legacy price fields |
| New catalog | `types/catalog.ts` → `data/catalog.ts` + `data/product-media.ts` → `services/catalog.ts`; not consumed by storefront pages |
| Phase-1 canonical boundary | `types/canonical-catalog.ts` + `lib/catalog-contract.ts`; old `types/catalog.ts` remains a compatibility model. No storefront wiring |
| Evidence tooling | `scripts/read-product-workbook.ps1` + `scripts/canonical-support.mjs`; read-only, in-memory assessment, not production import/publish |
| Mapping | 2 collections, 16 sub-collections, 6 categories, 27 product definitions, 106 color groups, 369 SKU |
| No-SKU definitions | Femme Skirt Maxi, Her Top Sleeve Less, She Dress Hijab Friendly: empty source groups |
| Media | 4 of 106 color groups mapped, all She Dress; 5 image references. Butter Yellow has no substitute image |
| New account | `types/account.ts`, server-only `services/account.ts`, `lib/supabase/`, `proxy.ts`; owner-scoped reads and explicit unavailable states |
| Legacy UI | `app/` references deleted services/components; root imports removed SiteLayout/FloatingWhatsApp |
| Database | `supabase/migrations/20260804000000_sprint_i1_2_auth_customer.sql`; customer domain only |
| Routes | `/`, `/products`, `/products/[slug]`, `/collections`, `/collections/[slug]`, `/categories`, `/categories/[category]`, `/bag`, `/cart`, `/checkout`, auth and account routes |
| Missing flows | No dedicated Sub-Collection route or Bazaar/Visit Us model/service/page found |
| Legacy aliases | `/cart` renders bag; `/account` renders dashboard; `/account/loyalty` renders membership |
| Historical evidence | Read-only `git show HEAD:...` used for deleted cart/checkout services; historical behavior is not current working functionality |

## Known Issues

Legacy application findings remain unfixed in Phase 1. Data-contract decisions superseded below are explicitly distinguished from implementation changes.

### Build and migration

- Audit found 58 unresolved local import references across 21 files. Pages do not consume new catalog/account services.
- Type-check failed: missing modules, resulting implicit-any errors and nullable Supabase client dereference in auth callback.
- ESLint: 1 error, 0 warnings; empty extending interface at `types/catalog.ts:19`, rule `@typescript-eslint/no-empty-object-type`.
- README, TASKS, ROADMAP and architecture documents describe older implementations. Historical build/dependency/integration claims are not a current baseline. Leave these files unchanged in Phase 0; conflicts defer to MASTER_BRIEF.

### Data and commerce

- Legacy types still use originalPrice/finalPrice and source has three price columns. Phase 1 establishes the separate canonical START_PRICE/FINAL_PRICE boundary and approved K/L mapping; legacy consumers are not migrated.
- Three definitions still lack source SKU. Their resolved contract is draft, nonorderable and not published as purchasable; no SKU was fabricated.
- Hierarchy/media mappings are TypeScript, not an operator-managed no-source-edit publishing workflow. Old scripts include embedded source text rather than a formal workbook pipeline.
- Legacy mapping omits material on fabric disagreement. Canonical FABRIC remains per SKU and conflicts explicitly block eligibility; current workbook has zero within-product conflicts.
- Legacy Scarf media lookup can collide by color name. Canonical group identity includes product/color/pattern, and the evidence harness withholds ambiguous color-only media mappings; old UI is untouched.
- NEW: all 369 price rows inherit cached formula values (48 K/L origin cells). Owner explicitly requires formula verification before publication; prices are not missing/invalid numerically, but are unverified.
- NEW: 28 exact text differences against TS (12 FABRIC newlines, 11 SKU_NAME trailing-space differences, 5 substantive SKU_NAME differences). Source evidence is preserved; old dataset is not corrected. See data-quality report.
- Gallery switching is not verified; legacy page passes global images separately from selector state.
- Historical cart persisted more than SKU/quantity, coupled cart to auth/wishlist, fell back to first variant and could fall back to zero price. Do not reuse these behaviors.
- Checkout UI makes customer information optional and retains unsupported delivery/gift/free-shipping claims, including a Rp3,000,000 threshold.
- Existing cart storage needs a safe migration policy; never guess replacement SKU.

### Account and integrations

- Auth UI imports removed services; email/password is a disabled preview path.
- OAuth callback accepts absolute redirect destinations and lacks null-client handling. safeAccountRedirect exists but is unused there.
- Profile/settings saves only show success, without persistence. Tier/passkey status includes unsupported fallback/static claims.
- New loyalty query requests points_used, absent from repository migration. Live schema unverified.
- Migration retains wishlist/saved-looks/referral structures; do not revive UI or perform destructive database cleanup without a separate plan.
- Profile RLS is owner-scoped; column write restrictions for business fields are not established by the migration. Live grants require verification.
- No verified active BigSeller integration, real order ingestion or loyalty posting pipeline. Live Supabase/OAuth/data unverified.

### Performance, responsive and content

- Sparse media; favicon PNG about 1.40 MB, hero/placeholder PNGs about 703 KB each; no WebP/AVIF found during audit.
- next.config.ts allows picsum.photos. Theme retains older gold/background values and duplicate header-height tokens.
- Small 9–10px labels, client data effects and broad product props are static risks, not measured browser findings.
- Route-specific canonicals incomplete; no sitemap/robots implementation found.
- Mobile focus, overflow, landscape and full checkout flow not verified; no passing application baseline.

## Important Decisions

- MASTER_BRIEF is authoritative; this file records state/evidence, not a competing specification.
- Premium/editorial, minimal homepage, white and #C4A434; no marketplace/admin-dashboard UI.
- Required hierarchy and six categories; Long Set/Short Set belong to names. Preserve spelling/capitalization and source SKU provenance.
- One actual SKU per row; FABRIC primary. Only START_PRICE (normal/original) and FINAL_PRICE (current selling); no OFFLINE_PRICE.
- Phase 1 resolves Q1–Q3: K/L map directly to START_PRICE/FINAL_PRICE; existing hierarchy/naming stands unless source contradicts it; no-SKU definitions stay non-purchasable; literal `-` remains; pattern stays separate; FABRIC remains per SKU with explicit conflicts.
- Exact whole-rupiah strings avoid floating-point money. Cached formula values are unverified and block publication by explicit owner decision. No Phase-1 snapshot is auto-published.
- Catalog additions require no UI changes. Media follows color, never cross-color fallback; optimize images.
- Cart persists SKU/quantity, re-resolves prices, requires name/active WhatsApp/shipping address, and shows explicit review.
- WhatsApp: 6285121344848. Handoff is not order/payment/loyalty/sync confirmation.
- No payment gateway, shipping API, wishlist, wallet, payment history or customer-facing stock. BigSeller operational sales only.
- Account: real profile, order history and loyalty only; no fake data/success. Social handle: @aischmira.
- Bazaar supports all event/location/date/time/image/status/Maps fields and data-only create/update/deactivate without source edits. It does not require extra homepage sections.
- Reuse suitable Next.js/TypeScript/Supabase foundations. Audit storage/publishing recommendations are not authorization to implement them.

## Open Questions

Resolve before dependent implementation; do not invent defaults. Independent in-scope work can continue.

| ID | Unresolved decision | Needed before |
| --- | --- | --- |
| Q4 | Which source/operator workflow governs catalog, media and Bazaar updates: workbook import, database editing or a separate content tool? Who approves publication? | Data ownership contract, then publishing |
| Q5 | What is the authoritative product/color/pattern-to-image mapping and publication policy for valid products lacking media? Cross-color fallback is forbidden. | Product/media phase |
| Q6 | Which real auth methods should be supported? Is WhatsApp ownership/activity verification required beyond required-field/format validation? | Account and checkout respectively |
| Q7 | Which operational source creates real order history, how are guest orders linked to accounts, and what are actual loyalty earning/usage/expiry rules and starting records? | Order/account/loyalty phases |
| Q8 | Which Bazaar statuses/publication rules are needed; single-day or multi-day, which timezone, and does deactivation archive or hide an event? | Bazaar model implementation |
| Q9 | Which existing public URLs must remain or redirect, including product slugs, /bag, /cart and legacy account routes? | Routing migration |

Q1–Q3 were resolved by the Phase-1 owner instructions and are no longer clarification requests. Formula treatment is also resolved: block until verification. Obtaining that verification and reconciling reported text drift are Phase-2 evidence tasks, not permission to invent business values.

## Validation Record

### Initial audit — 2026-09-17

- `node node_modules/typescript/bin/tsc --noEmit --incremental false --pretty false`: failed as recorded above.
- `node node_modules/eslint/bin/eslint.js . --no-cache`: failed, 1 error / 0 warnings. npm PowerShell wrapper was blocked by execution policy; direct Node invocation worked.
- In-memory catalog evaluation and read-only workbook SKU/two-price comparison passed within stated scope; workbook unchanged.
- Build, browser/responsive flow, live database/OAuth, real order/loyalty and BigSeller not verified. No production-readiness claim.

### Phase 0 — documentation only

- Required sections/requirements checked; no missing items in the documentation checklist. Backtick file references checked against the working tree: no missing targets.
- Reviewed decisions against the latest owner requirements; unresolved source mappings and business rules remain explicit questions.
- Git status comparison before/after editing confirmed no changes to unrelated migration status. Only the three authorized documentation files are included in the Phase-0 checkpoint.
- Whitespace/diff validation performed for the documentation checkpoint; no application source, dependencies, database or workbook changed.
- Application tests need not be rerun for prose. Previous application failures remain open, not fixed.

### Phase-1 completion validation — 2026-09-17

- Scoped strict type-check: `node scripts/check-canonical-types.mjs` — PASS, no emit, repository compiler settings.
- Contract tests: `node --test scripts/canonical-contract.test.mjs` — 13 passed / 0 failed. Covers real source baseline, duplicate/changed/missing SKU, missing/invalid/extra prices, hierarchy, literal size, FABRIC conflict, color/pattern, media ownership and publication gates.
- Scoped ESLint on both new TypeScript files and four MJS scripts — PASS. Existing legacy lint finding is not repaired.
- `node scripts/check-canonical-data.mjs` — exit 1 as an intentional publication/data gate: 369 unverified formula-price rows, 28 exact source/TS text differences. Also reports 3 draft no-SKU definitions, 102 missing-media groups and 24 approved category aliases. Baseline 369 unique SKU / zero missing SKU / zero price-pair differences remains unchanged.
- Repository-wide TypeScript diagnostics compared with the pre-change baseline using the TypeScript compiler API, no emit/incremental output: 106 before, 106 after, identical file/code/message entries; 0 new and 0 removed diagnostics. Legacy blockers remain.
- SHA-256 hashes of workbook, sku-master.ts, data/catalog.ts, types/catalog.ts, services/catalog.ts and data/product-media.ts are unchanged.
- Diff whitespace check passed. Only explicit Phase-1 files are checkpointed; pre-existing migration changes remain outside the commit.
- No production build/browser checks: this phase does not repair or wire the storefront, and known repository-wide failures remain. No dependency installation, schema migration, workbook recalculation/edit, publication or deployment performed.

## Recommended Phase Order

1. Phase 1 — Canonical Product Data Contract: implemented; see validation checkpoint.
2. Validated import and publishing pipeline with provenance and preview.
3. Coherent application baseline using canonical contracts, one route slice at a time.
4. Catalog hierarchy/routing, then product selection and color-specific media.
5. SKU cart, then required customer form/review/WhatsApp checkout.
6. Real authentication/profile/order history, then recorded loyalty.
7. Data-driven Bazaar / Visit Us and operator workflow.
8. Release checks: responsive/accessibility, SEO, performance, security and dependency review.
9. BigSeller operational integration after verified API access/business contracts.

Each item needs its own scope and checkpoint. This sequence does not authorize the next phase.
