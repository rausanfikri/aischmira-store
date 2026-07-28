# CHANGELOG — AISCHMIRA.STORE

All notable changes to this project will be documented in this file.

## [Sprint 2D.4] - 2026-07-28
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
