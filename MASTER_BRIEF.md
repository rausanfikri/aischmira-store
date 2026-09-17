# AISCHMIRA.STORE — Master Brief

Updated: 2026-09-17. Status: requirements baseline for the staged rebuild.

## Authority

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
- Retain source names, source row identifiers and original SKUs for traceability. Record approved aliases in the canonical data audit during the data phase.
- **One actual SKU = one data row.** SKU is the exact unique variant identifier; never substitute another variant on lookup failure.
- Customers choose actual available variants, colors and sizes as applicable. Never generate combinations absent from source data.
- **FABRIC** is the primary material/fabric field. Handle missing or conflicting values explicitly; do not invent descriptions.
- `data/MASTER PRODUCTS.xlsx` is source evidence. Do not edit it without explicit instruction. Reconcile imports against it and respect merged cells/provenance.
- Missing remains missing. Products without a valid orderable SKU/price cannot enter checkout. No invented products, colors, sizes, fabric, descriptions, prices, discounts or media.

## Price contract

- The only catalog price fields are **START_PRICE** and **FINAL_PRICE**.
- `START_PRICE` is the normal/original price. `FINAL_PRICE` is the current selling price.
- Do not use `OFFLINE_PRICE` or any offline/bazaar price in the storefront contract. Historical workbook columns remain untouched for traceability.
- Read both prices directly from approved source columns. Never calculate either from an assumed discount. Record the mapping from legacy column names before implementation.
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

After each phase, run relevant validation, report exact results/limitations, update the status checkpoint and commit only reviewed in-scope changes. Code phases require appropriate lint, type-check, build, data/commerce and browser checks. A documentation checkpoint does not certify application readiness.
