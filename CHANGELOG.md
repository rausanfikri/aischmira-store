# CHANGELOG — AISCHMIRA.STORE

All notable changes to this project will be documented in this file.

## [Sprint 2D.5A] - 2026-07-28
### Added
- **CSS Grid 3-Column Header Architecture (`Header.tsx`)**: Rebuilt Header layout using `grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr)` ensuring exact mathematical logo centering relative to the viewport.
- **Collections Mega Menu Restructuring (`DesktopNav.tsx`)**: Multi-column menu organized into Signature Collections (FEMME, HER, SHE with primary gold emphasis), Classic Collections (12 items in 2-col grid), and Special Collections (5 silk scarf edits) with editorial cover preview.
- **Categories Dropdown Restructuring (`DesktopNav.tsx`)**: Compact dropdown with 7 unique items (Outerwear, Tops, Bottoms, Dress, Accessories, Long Pyjama Set, Short Pyjama Set).
- **Exact Logo Heights (`Logo.tsx`)**: Desktop initial 52px, scrolled 44px, mobile 36px.
- **Header Reports**: Generated 7 dedicated header audit reports (`HEADER_ARCHITECTURE_REPORT.md`, `NAV_REPORT.md`, `MEGA_MENU_REPORT.md`, `HEADER_RESPONSIVE_REPORT.md`, `HEADER_ACCESSIBILITY_REPORT.md`, `HEADER_FILES_CHANGED.md`, `HEADER_TECHNICAL_DEBT.md`).

### Removed
- **Journal & About Nav Links**: Completely removed Journal and About links from main header row with zero leftover empty spacing.

## [Sprint 2D.6] - 2026-07-28
### Added
- **Design System Audit Reports**: Generated 4 comprehensive design system QA deliverables (`DESIGN_AUDIT_REPORT.md`, `DESIGN_SYSTEM_REPORT.md`, `UI_FREEZE_CHECKLIST.md`, `TECHNICAL_DEBT_REPORT.md`).
- **UI Freeze Baseline**: Formally locked all visual layout structures, design tokens, typography scales, interactive components, modals, and drawers for production deployment.

### Verified
- **TypeScript & ESLint Quality**: 0 errors, 0 warnings across all project files.
- **Turbopack Build**: 59 static routes pre-rendered cleanly in 1.0s.

## [Sprint 2D.5] - 2026-07-28
### Added
- **Artisanal Craftsmanship Section (`components/sections/Craftsmanship.tsx`)**: New section celebrating 100% Pure Mulberry Silk, hand-rolled hem boundaries, precision cuts, and local artisan studios in Indonesia.
- **Journal Preview Section (`components/sections/JournalPreview.tsx`)**: New 3-card editorial journal preview showcasing style guides, behind-the-seams, and minimalist philosophy with links to `/journal`.
- **Inline Editorial Grid Blocks**: Integrated storytelling quote banners directly into product grids (`CollectionDetailClient.tsx` and `CollectionsClient.tsx`) after product #4.
- **Multi-Facet Collection Filters**: Added multi-facet filtering for Category, Size, Color, Price Range, and Availability on Collection pages with active filter badges and reset controls.

### Changed
- **Editorial Homepage (`app/page.tsx`)**: Reordered 10 sections with generous breathing room (`py-24 md:py-36`), storytelling focus, and high-fashion visual hierarchy.
- **Brand Story (`components/sections/BrandStory.tsx`)**: Enhanced to highlight Craftsmanship, Premium Materials, Designed in Indonesia, and Timeless Elegance.
- **Instagram Gallery (`components/sections/InstagramPreview.tsx`)**: Refined to 6-card 1:1 square photo grid with dark backdrop overlay and hover states.
- **Collection Detail (`CollectionDetailClient.tsx`)**: Added multi-facet filters, sorting options, pagination load controls, skeleton loaders, and luxury empty states.
### Added
- **ProductEditorial Component (`components/products/ProductEditorial.tsx`)**: New editorial storytelling component with three sections — The Story, Craftsmanship (Designer Notes + Material Composition), and Designed For (Lifestyle context).
- **Loyalty Preview Card**: UI-only informational card in ProductInfo showing "Earn loyalty points with every purchase" message, preparing foundation for future member features.
- **Delivery & Packaging Accordion**: Expanded accordion section with shipping, estimated delivery, and packaging info cards in a responsive 3-column grid.

### Changed
- **ProductGallery**: Added Framer Motion `AnimatePresence` image transitions, CSS hover zoom (`scale 1.06`), keyboard navigation (Arrow keys + Enter/Space for lightbox), image counter overlay, and optimized `sizes` props.
- **ProductInfo**: Updated WhatsApp checkout message to exact sprint format, separated accordion into distinct sections (Description, Material, Care, Delivery), added Framer Motion staggered reveal animations, refined button labels to "Checkout via WhatsApp".
- **StickyWhatsAppCTA**: Updated WhatsApp message format to match sprint specification.
- **ImageLightbox**: Added `sizes` prop for better image performance.
- **Product Page (`app/products/[slug]/page.tsx`)**: Restructured to use `ProductEditorial` component, cleaner imports with centralized `WHATSAPP_NUMBER`.


## [Sprint 2D.3] - 2026-07-28
### Added
- **Premium Navigation Experience**: Refined single-baseline header layout with Left links (Collections, Categories, Journal, About), Center logo (`/logo.png`), and Right icon controls.
- **Wishlist Drawer (`components/layout/WishlistDrawer.tsx`)**: Built slide-over Radix UI drawer for saved items with thumbnail preview, IDR formatted price, "Move to Shopping Bag" action, remove button, and an elegant empty state.
- **UI Store State Extension (`store/useUIStore.ts`)**: Added `wishlistOpen` state and `setWishlistOpen` trigger function.
- **Mega Menu Multi-Column Directory**: Comprehensive Collection entries (Bianca, Priscila, Safira, Briana, Tifani, Zamira, Gendis, Amara, Dasya, Jolly, Aveline, Luna, AM Monogram, Floral Meadow, Chili Chic, Garlic Bloom, Spice Blossom, FEMME, HER, SHE) and Apparel Categories (Outerwear, Tops, Bottoms, Dress, Accessories, Long Pyjama Set, Short Pyjama Set).
- **Search Overlay & Account Drawer**: Search modal with trending catalog items and Account Drawer with Privilege member tier card (Victoria Valence, AISCHMIRA PRIVÉ, 1,250 PTS).
- **Shopping Bag Drawer**: Cart drawer with item cards, quantity selectors, subtotal calculation, and WhatsApp checkout trigger.

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
