# DECISIONS — Architectural Decision Records (ADR)

## ADR 010: SiteLayout & Enterprise Provider Composition
- **Date**: July 28, 2026 (Sprint 2D)
- **Status**: Accepted
- **Context**: As the platform prepares for member accounts, wishlist, and rewards, layout and provider logic needed to be decoupled from route pages.
- **Decision**: Introduce `SiteLayout.tsx` as the single global wrapper in `app/layout.tsx`. Wrap layout elements (`AnnouncementBar`, `Header`, `<main>`, `Footer`, `SearchOverlay`, `ShoppingBagDrawer`) inside React context providers (`AnnouncementProvider`, `SearchProvider`, `ShoppingBagProvider`, `AccountProvider`, `ModalProvider`).
- **Consequences**: Zero layout duplication across routes; future authentication and cart integrations access clean React contexts without prop drilling.

## ADR 011: Pre-Filled WhatsApp Concierge Order Message Format
- **Date**: July 28, 2026 (Sprint 2D)
- **Status**: Accepted
- **Context**: AISCHMIRA operates a WhatsApp-first purchase model (`https://wa.me/6285121344848`).
- **Decision**: Pre-fill WhatsApp inquiry messages directly from product detail variant selections:
  ```text
  Hello AISCHMIRA,

  I'm interested in:
  Product: [Product Name]
  Size: [Size]
  Color: [Color]
  Price: [Formatted IDR]

  Could you please assist me?
  ```
- **Consequences**: Provides human sales concierge team with instant, unambiguous garment details.
