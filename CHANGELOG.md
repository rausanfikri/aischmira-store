# CHANGELOG — AISCHMIRA.STORE

All notable changes to this project will be documented in this file.

## [Sprint 2D] - 2026-07-28
### Added
- **Enterprise Layout Architecture**: Created `SiteLayout.tsx` as the single global layout wrapper.
- **Layout CSS Custom Properties**: Added `--announcement-height: 40px`, `--header-height: 88px`, `--header-height-scrolled: 72px`, `--section-spacing`, `--content-width`, `--reading-width` in `styles/theme.css`.
- **Custom Hooks**: Created `useScrollPosition.ts`, `useAnnouncement.ts`, `useShoppingBag.ts`, and `useSearch.ts`.
- **React Context Providers**: Added `AnnouncementProvider`, `SearchProvider`, `ShoppingBagProvider`, `AccountProvider`, `ModalProvider`.
- **Layout Component Refactoring**: Refactored `AnnouncementBar`, `Header`, `Navigation`, `MegaMenu`, `SearchOverlay`, `AccountDrawer`, `ShoppingBagDrawer`, `MobileNavigation`.
- **Product Experience Upgrade**:
  - Sticky Product Gallery with image lightbox zoom.
  - Pre-filled WhatsApp Concierge CTA with product name, size, color, price in IDR.
  - Quantity counter and Size Guide modal integration.
  - **Product Story** ("The Inspiration") & **Designer Notes** sections.
  - **Recently Viewed Products** component with client browsing history persistence.
  - Dedicated WhatsApp Styling Concierge panel.

## [Sprint 2C] - 2026-07-28
### Added
- Standardized layout container width tiers (`1600px`, `1440px`, `1280px`, `960px`, `760px`) and horizontal padding scale (`24px`..`80px`).
- Complete Collection Landing (`/collections`) and Detail (`/collections/[slug]`) experiences.
