# CHANGELOG — AISCHMIRA.STORE

All notable changes to this project will be documented in this file.

## [Sprint I1.1] - 2026-08-01
### Added
- **BigSeller DTO Layer & Provider Contracts (`core/integration/bigseller/dto/`, `core/integration/bigseller/contracts/`)**: Created type-safe BigSeller DTOs (`ProductDTO`, `VariantDTO`, `InventoryDTO`, `PriceDTO`, `OrderDTO`, `WarehouseDTO`, `PromotionDTO`) and provider contracts (`IShipmentProvider`, `IWarehouseProvider`, `IPromotionProvider`, `ICategoryProvider`, `IProductSynchronizationProvider`).
- **Zod Payload Schemas & Domain Mappers (`core/integration/bigseller/validation/`, `core/integration/bigseller/mappers/`)**: Implemented Zod validation schemas (`schemas.ts`) and domain mappers (`BigSellerProductMapper`, `BigSellerInventoryMapper`, `BigSellerOrderMapper`).
- **BigSeller Domain Services (`core/integration/bigseller/services/`)**: Created domain services (`BigSellerInventoryService`, `BigSellerPricingService`, `BigSellerWarehouseService`, `BigSellerPromotionService`, `ProductSynchronizationService`) and updated `BigSellerAdapter` without HTTP calls.
- **Dedicated BigSeller Architecture (`BIGSELLER_ARCHITECTURE.md`)**: Created comprehensive documentation detailing BigSeller Ports & Adapters Architecture, SKU Taxonomy, Inventory Allocations, and Pricing Models.

## [Sprint I1.0] - 2026-07-31
### Added
- **Core Integration Contracts (`core/integration/contracts/`)**: Created vendor-independent interfaces `IProductProvider`, `IInventoryProvider`, `IPriceProvider`, `ICustomerProvider`, `IOrderProvider`, `IContentProvider`, and `IAnalyticsProvider`.
- **Provider Adapters & Dependency Injection Container (`core/integration/adapters/`, `core/integration/container.ts`)**: Built structural provider adapter stubs (`BigSellerAdapter`, `SupabaseAdapter`, `CMSAdapter`, `AnalyticsAdapter`) and lightweight DI container (`IntegrationContainer`) resolving active adapters dynamically based on feature flags.
- **Environment & Resilience Layer (`core/config/`, `core/integration/logger/`, `core/integration/resilience/`)**: Created Zod environment variable schema validator (`env.ts`), environment-driven feature flags (`feature-flags.ts`), structured logger (`AppLogger`), and retry/timeout resilience policies (`ResiliencePolicy`). Zero external API calls executed.
- **Dedicated Integration Architecture (`INTEGRATION_ARCHITECTURE.md`)**: Created comprehensive documentation detailing Integration Architecture, Provider Contracts, Adapter Specifications, and Feature Flag Control.

## [Sprint C2.0] - 2026-07-31
### Added
- **`SavedLooksService` & Domain Entities (`domain/look/`, `services/saved-looks.service.ts`)**: Built look domain definitions and `SavedLooksService` providing `getSavedLooks()`, `getLookBySlug()`, `getLooksByOccasion()`, and `getLookDetails()`.
- **Luxury Digital Wardrobe & Editorial Look Routes (`app/account/saved-looks/page.tsx`, `app/looks/[slug]/page.tsx`)**: Re-architected `/account/saved-looks` list page with occasion filter pills, color swatches, piece counts, and created `/looks/[slug]` editorial look detail page featuring full-height cover imagery, outfit narrative, stylist recommendations, included garments grid, and "Add Entire Look to Shopping Bag" single-click trigger. Zero direct static dummy data imports.
- **Dedicated Saved Looks Architecture (`SAVED_LOOKS_ARCHITECTURE.md`)**: Created comprehensive documentation detailing Digital Wardrobe Architecture, Occasion Taxonomy, BigSeller Sync, and Supabase Storage.

## [Sprint C1.9] - 2026-07-30
### Added
- **`MembershipService` & Domain Entities (`domain/membership/`, `services/membership.service.ts`)**: Created membership domain module and `MembershipService` providing `getMembershipProfile()`, `getMembershipTiers()`, `getPointsHistory()`, and `getStyleProfile()`.
- **Luxury Membership & Loyalty Routes (`app/account/membership/page.tsx`, `app/account/loyalty/page.tsx`)**: Created primary `/account/membership` route featuring Digital Virtual Membership Card with gold foil accents, Tier Progress Roadmap (Classic -> Silver -> Gold -> Platinum -> VIP Atelier), Benefits Matrix, Style Profile Preference Sanctuary, Points & Activity Ledger, and Privé Referral link generator. Zero direct static dummy data imports.
- **Dedicated Membership Architecture (`MEMBERSHIP_ARCHITECTURE.md`)**: Created comprehensive documentation detailing Membership Architecture, Tier Configuration, Style Profile Architecture, BigSeller Sync, and Supabase Storage.

## [Sprint C1.8] - 2026-07-30
### Added
- **`OrderService` & Domain Entities (`domain/order/`, `services/order.service.ts`)**: Built order domain definitions and `OrderService` providing `getOrders()`, `getOrderById()`, and `getTracking()`.
- **Luxury Order History & Detail Routes (`app/account/orders/page.tsx`, `app/account/orders/[orderId]/page.tsx`)**: Built Order Sanctuary list page with status filters and detailed `/account/orders/[orderId]` view featuring interactive courier tracking timeline, itemized SKU breakdown, financial summary box, delivery recipient card, and direct WhatsApp concierge support trigger.
- **Dedicated Order Architecture (`ORDER_ARCHITECTURE.md`)**: Created comprehensive documentation detailing Order Architecture, Order Status Lifecycle, Tracking Timeline Architecture, BigSeller Sync, and Supabase Order Storage.

## [Sprint C1.7] - 2026-07-30
### Added
- **`CustomerService` & Domain Entities (`domain/customer/`, `services/customer.service.ts`)**: Created customer domain module and `CustomerService` providing `getCustomerProfile()`, `getCustomerOrders()`, `getCustomerLoyalty()`, and `getSavedLooks()`.
- **Luxury Client Portal Foundation (`app/account/page.tsx`, `app/account/dashboard/page.tsx`, `app/account/loyalty/page.tsx`, `app/account/saved-looks/page.tsx`, `app/account/settings/page.tsx`)**: Built private sanctuary portal featuring Client Overview Card, Order History tracking, Privé Tier progress bar (*Privé Gold* to *Privé Noir*), Curated Saved Looks, and Passkeys Security Settings. Zero direct static dummy data imports.
- **Dedicated Client Architecture (`CUSTOMER_ARCHITECTURE.md`)**: Created comprehensive documentation detailing Client Portal Architecture, Data Flow, Navigation Hierarchy, Supabase Auth Readiness, and BigSeller Sync.

## [Sprint C1.6] - 2026-07-30
### Added
- **`WhatsAppService` & `CheckoutService` (`services/whatsapp.service.ts`, `services/checkout.service.ts`)**: Built dynamic `WhatsAppService` consuming `ConfigurationService` for zero hardcoded phone numbers, configurable Markdown template builder, BigSeller ERP payload mapping (`toBigSellerPayload`), and Supabase draft order tracking (`toSupabaseDraftOrder`).
- **Luxury Concierge Checkout Route (`app/checkout/page.tsx`)**: Created `/checkout` order review page featuring Privé Header, Itemized Order Summary, Customer Information form, Shipping Preference selector, Signature Gift Box & Calligraphic Note options, Atelier Notes textarea, Live WhatsApp Message Preview, and "Continue with WhatsApp Concierge" primary button. Zero payment gateways or credit card inputs.
- **Dedicated Checkout Architecture (`CHECKOUT_ARCHITECTURE.md`)**: Created comprehensive documentation detailing business model, end-to-end concierge flow, message builder specifications, configuration strategy, and ERP/DB payload contracts.

## [Sprint C1.5] - 2026-07-30
### Added
- **Enhanced `ShoppingBagService` (`services/shopping-bag.service.ts`)**: Extended service with `getBagDetails()`, `buildWhatsAppCheckoutUrl()`, and `getBagRecommendations()` supporting item subtotals, free shipping progress tracking (IDR 3,000,000 threshold), and signature gift packaging payloads.
- **Luxury Shopping Bag Route (`app/bag/page.tsx`, `app/cart/page.tsx`)**: Created primary `/bag` route (with `/cart` re-exporting `BagPage`) featuring Concierge header, Free Shipping Progress Bar, Bag Items Table with variant details & quantity controls, Signature Gift Packaging panel, Order Summary Card, and WhatsApp Checkout CTA.

### Changed
- **Cart Drawer Data Flow (`components/layout/CartDrawer.tsx`)**: Refactored `CartDrawer` slide-over component to resolve domain products dynamically via `ShoppingBagService` & `ProductService`. Completely eliminated direct static dummy data imports.

## [Sprint C1.4] - 2026-07-30
### Added
- **Enhanced `WishlistService` (`services/wishlist.service.ts`)**: Extended service with `getWishlistProducts()`, `getWishlistSummary()`, and `getWishlistRecommendations()` supporting summary metrics, category filters, and curated recommendations.
- **Luxury Personal Closet Experience (`app/wishlist/page.tsx`)**: Re-architected `/wishlist` into an editorial wardrobe sanctuary featuring Privé badge, Wardrobe Summary & Category Filter Bar, Closet Grid with "Move to Bag" & WhatsApp Concierge actions, Inspired Recommendations, and high-fashion empty state.

### Changed
- **Wishlist Drawer Data Flow (`components/layout/WishlistDrawer.tsx`)**: Refactored `WishlistDrawer` slide-over component to resolve domain products dynamically via `WishlistService` & `ProductService`. Completely eliminated direct static dummy data imports.

## [Sprint C1.3] - 2026-07-30
### Added
- **Search & Discovery System Architecture (`SEARCH_ARCHITECTURE.md`)**: Documented multi-channel search & discovery engine, clean data flow, filter contracts, and SEO parameter protection strategies.
- **Site-Wide Search Overlay (`components/search/SearchModal.tsx`)**: Created accessible site-wide modal overlay triggerable via header search icon or keyboard shortcut (`Cmd/Ctrl + K`) with live autocomplete suggestions, recent search history memory (`localStorage`), trending keyword pills, and focus management.
- **Enhanced `SearchService` (`services/search.service.ts`)**: Extended `SearchService` with `globalSearch()`, `getTrendingSearches()`, `getSuggestions()`, and `getDiscoveryData()` supporting multi-facet filtering and sorting options.

### Changed
- **Search Results Page RSC Flow (`app/search/page.tsx`, `components/search/SearchResults.tsx`)**: Re-architected dynamic `/search` route into an async RSC consuming `SearchService`, `ProductService`, and `CollectionService`. Completely eliminated direct static dummy data imports.

## [Sprint C1.2] - 2026-07-30
### Added
- **Structured JSON-LD SEO Component (`components/products/ProductJsonLd.tsx`)**: Created dynamic JSON-LD metadata generator embedding Schema.org `Product` (name, sku, image, price, currency, availability, brand) and `BreadcrumbList` schemas.
- **Enterprise Product Detail Refactoring (`components/products/`)**: Refactored `ProductInfo.tsx`, `ProductEditorial.tsx`, `RecentlyViewed.tsx`, and `StickyWhatsAppCTA.tsx` to natively consume the domain `Product` entity (`@/domain/product`), supporting variant selection, price comparison strikethrough (`compareAtPrice`), quantity validation, wishlist toggling, and accordions.

### Changed
- **Server Component Data Flow (`app/products/[slug]/page.tsx`)**: Re-architected dynamic Product Detail route into an async RSC consuming `ProductService.getProductBySlug()` and `CollectionService.getCollections()`. Completely eliminated direct static dummy data imports.

## [Sprint C1.1] - 2026-07-30
### Added
- **Luxury Collection Detail Story-First Architecture (`components/collections/`)**: Built 6 dedicated presentation components:
  - `CollectionDetailHero.tsx` (High-impact hero imagery, breadcrumbs, title, subtitle, description, season, and campaign badges)
  - `CollectionEditorialStory.tsx` (Narrative inspiration statement, designer atelier notes quote, and creative direction philosophy)
  - `CollectionInfoSpecs.tsx` (Signature textiles composition, artisanal lineage, and BigSeller/CMS reference metadata)
  - `CollectionFeaturedLooks.tsx` (Staggered 3-look editorial showcase highlighting key silhouettes before product grid)
  - `CollectionDetailRelated.tsx` (Curated recommendations from `CollectionService` without hardcoded relationships)
  - `CollectionEditorialCTA.tsx` (Personal WhatsApp styling concierge and next collection story invitation)

### Changed
- **Collection Detail RSC Flow (`app/collections/[slug]/page.tsx`)**: Re-architected dynamic route into a story-first magazine layout consuming `CollectionService.getCollectionBySlug()`, `ProductService.getProducts()`, and `CollectionService.getCollections()`. Zero direct static dummy imports.

## [Sprint C1.0] - 2026-07-30
### Added
- **CMS & BigSeller Ready Collection Domain Extensions (`domain/collection/`)**: Enriched `Collection` Entity, DTO, Zod Schema, and Mapper with `season`, `campaignBadge`, `campaignId`, `videoUrl`, `cmsId`, `locale`, `productSkuList`, `categoryMapping`, `bigSellerCollectionId`, and `inventoryAggregation`.
- **Collection Filter, Sort & Pagination Contracts (`domain/collection/types.ts`)**: Built typed interfaces `CollectionFilterOptions`, `CollectionSortOption`, `CollectionPaginationOptions`, and `CollectionQueryParams` establishing future catalog expansion architecture.
- **Flagship Collections Magazine Presentation UI (`components/collections/`)**: Created 6 dedicated high-fashion presentation components:
  - `CollectionsHero.tsx` (Magazine hero header with live catalog badge and key metrics bar)
  - `CollectionsEditorialIntro.tsx` (Atmospheric story statement & creative direction philosophy)
  - `CollectionHighlightSection.tsx` (Asymmetrical spotlight showcasing signature edit story, designer atelier notes, and material tags)
  - `SeasonalCampaignBanner.tsx` (Full-bleed high-fashion campaign break section)
  - `RelatedCollectionsSection.tsx` (Curated exploratory edits strip)
  - `CollectionsNewsletterCTA.tsx` (VIP Privé invitation and newsletter subscription card)
  - Updated `CollectionsClient.tsx` (Interactive card grid, category pills, sort dropdown, and story breaks consuming domain entities)

### Changed
- **Server Component Data Flow (`app/collections/page.tsx`)**: Refactored `CollectionsPage` into an async RSC consuming `CollectionService.getCollections()` and `ProductService.getProducts()`. Removed all direct static dummy data imports.
- **Collection Detail Dynamic Route (`app/collections/[slug]/page.tsx`)**: Updated to consume `collectionService.getCollectionBySlug()` and Next.js 15 async route parameters.

## [Sprint U1.7] - 2026-07-30
### Added
- **Testimonial Domain Architecture (`domain/testimonial/`)**: Created `Testimonial`, `TestimonialAuthor`, and `CommunityStat` domain entities, Zod validation schemas (`TestimonialSchema`, `CommunityStatSchema`), DTO contracts, `ITestimonialRepository`, and `DummyTestimonialRepository` backed by `data/testimonials.ts`.
- **TestimonialService (`services/testimonial.service.ts`)**: Built `TestimonialService` and registered `testimonial: TestimonialService` in `ServiceRegistry`.
- **Luxury Testimonials & Community UI (`components/sections/LuxuryTestimonials/`)**: Built 3 presentation components:
  - `LuxuryTestimonials.tsx` (primary section container & header)
  - `TestimonialCard.tsx` (editorial quote block, verified patron badge, and collection tag)
  - `CommunityStatsBar.tsx` (4-column minimal stat grid)

### Changed
- **Homepage Integration (`app/page.tsx`)**: Fetched `testimonials` and `communityStats` via `services.testimonial.getFeaturedTestimonials()` and `getCommunityStats()` on the server and rendered `LuxuryTestimonials` section on the homepage.

## [Sprint U1.6] - 2026-07-30
### Added
- **Lookbook Domain Architecture (`domain/lookbook/`)**: Created `LookbookCampaign` and `LookbookBlock` domain models, Zod validation schemas (`LookbookCampaignSchema`, `LookbookBlockSchema`), DTO contracts, `ILookbookRepository`, and `DummyLookbookRepository` backed by `data/lookbook.ts`.
- **LookbookService (`services/lookbook.service.ts`)**: Built `LookbookService` and registered `lookbook: LookbookService` in `ServiceRegistry`.
- **High-Fashion Editorial Lookbook UI (`components/sections/EditorialLookbook/`)**: Built 7 modular presentation components:
  - `EditorialLookbook.tsx` (primary section container & campaign header)
  - `LookbookBlockRenderer.tsx` (modular block dispatcher)
  - `LookbookCampaignBanner.tsx` (full-bleed campaign hero)
  - `LookbookSplitLayout.tsx` (asymmetrical 7-col/5-col split story + photo)
  - `LookbookQuoteBlock.tsx` (centered 6xl italic quote with gold line accent)
  - `LookbookImagePair.tsx` (staggered dual portrait photography grid)
  - `LookbookImageGallery.tsx` (3-photo horizontal film strip)
  - `LookbookEditorialText.tsx` (closing narrative + CTA link)

### Changed
- **Homepage Integration (`app/page.tsx`)**: Fetched `lookbookCampaign` via `services.lookbook.getActiveCampaign()` on the server and rendered `EditorialLookbook` section on the homepage.

## [Sprint U1.5] - 2026-07-30
### Added
- **CMS-Ready Brand Story Configuration (`core/config/brandStory.ts` & `schema.ts`)**: Built validated `BrandStoryConfigSchema` and `BrandStoryBlockSchema` exposing modular brand narrative blocks, typography hierarchy, imagery captions, layout orders, and 4 brand pillars.
- **BrandService Extension (`services/brand.service.ts`)**: Extended `BrandService` with `getBrandStory()` method delivering domain configuration.
- **Modular Brand Story Block Component (`components/sections/BrandStoryBlock.tsx`)**: Created reusable `BrandStoryBlock` component with alternating `image-left` and `image-right` layouts, Cormorant Garamond quotes, and staggered scroll reveals.

### Changed
- **BrandStory Section Redesign (`components/sections/BrandStory.tsx`)**: Refactored `BrandStory` section to consume `BrandStoryConfig` from `BrandService` via `app/page.tsx` async RSC, completely eliminating hardcoded React component copy.

## [Sprint U1.4] - 2026-07-29
### Added
- **Luxury Editorial Product Card (`components/ui/ProductCard.tsx`)**: Rebuilt ProductCard with dual-image hover cross-fade (primary photo → secondary lifestyle detail), status badges ("Flagship"), IDR price formatting with compareAtPrice strikethrough, accessible wishlist toggle, and subtle "Explore Piece" quick-action overlay.
- **Editorial Featured Products Section (`components/sections/FeaturedProducts.tsx`)**: Redesigned homepage products section into a curated flagship showcase with Cormorant Garamond italic headings, generous section spacing (`py-24 md:py-36`), 4-column desktop grid, and staggered Framer Motion entrance reveals (`[0.16, 1, 0.3, 1]` easing).

### Changed
- **Zero Dummy Imports Verification**: Verified `FeaturedProducts` receives entity array strictly from `ProductService.getFeaturedProducts()` via `app/page.tsx`.

## [Sprint U1.3] - 2026-07-29
### Added
- **Luxury Featured Collections Component (`components/ui/CollectionCard.tsx`)**: Reusable high-fashion collection card component with `hero` (split 12-column story layout with artisanal materials badges) and `editorial` (3/4 vertical portrait layout) variants.
- **Asymmetrical Editorial Section Layout (`components/sections/NewCollections.tsx`)**: Redesigned homepage collections section into a storytelling narrative with primary featured edit (FEMME hero card) and 2-column secondary grid (HER & SHE editorial cards), generous vertical rhythm (`py-24 md:py-36`), and staggered Framer Motion entrance animations.

### Changed
- **Zero Dummy Imports Verification**: Verified `NewCollections` receives entity array strictly from `CollectionService.getFeaturedCollections()` via `app/page.tsx`.

## [Sprint U1.2] - 2026-07-29
### Added
- **Premium Navigation & Mega Menu Architecture (`components/layout/Header/`)**: Redesigned header with perfectly centered Logo anchor, 3-column CSS Grid layout (`grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`), and pure gold hover states.
- **Service-Driven Navigation Data**: `MegaMenuCollections.tsx` and `DropdownCategories.tsx` consume data from `CollectionService` and `CategoryService` via `Header.tsx`.
- **Dynamic Sticky Header Positioning (`HeaderShell.tsx`)**: Header calculates `top` offset dynamically based on `AnnouncementBar` state (`var(--announcement-height)`), preventing overlap without hardcoded CSS values.
- **Accessible Mobile Drawer (`MobileNav.tsx`)**: Full-screen mobile navigation drawer with 48px+ touch targets, keyboard navigation, focus trapping, collections/categories accordions, and WhatsApp concierge trigger.

### Changed
- **Header Link Pruning**: Removed Journal and About links from desktop header navigation row; navigation menu displays strictly Collections and Categories.

### Removed
- **Legacy Navigation Components**: Deleted `components/layout/DesktopNav.tsx` and `components/layout/MegaMenu.tsx` to ensure single source of truth within `components/layout/Header/`.

## [Sprint F1] - 2026-07-29
### Added
- **4 Enterprise Documentation Specifications**: Created `DESIGN_SYSTEM.md`, `CODING_STANDARDS.md`, `DATA_MODEL.md`, and `API_STRATEGY.md` (and updated corresponding `docs/` references).
- **Barrel Export Utility (`lib/index.ts`)**: Unified all pure helper functions (`formatters`, `string`, `theme`, `utils`, `whatsapp`) under a single entry point.

### Changed
- **Direct Layout Component Imports (`SiteLayout.tsx`)**: Refactored layout composition to consume `SearchModal` and `CartDrawer` directly instead of indirect 1-line wrapper files.
- **Repository Structure Cleanup**: Purged over 70 obsolete step execution reports from the repository root, retaining only core documentation (`AGENTS.md`, `README.md`, `ROADMAP.md`, `TASKS.md`, `ARCHITECTURE.md`, `CHANGELOG.md`, `DECISIONS.md`, `CONTRIBUTING.md`, `CODEX.md`, `CLAUDE.md`).

### Removed
- **Unused Component Wrappers**: Deleted obsolete wrapper components `Navbar.tsx`, `Header.tsx`, `MobileNavigation.tsx`, `Navigation.tsx`, `SearchOverlay.tsx`, `ShoppingBagDrawer.tsx`.
- **Unused UI Primitives**: Removed unused UI folders `components/ui/Divider/` and `components/ui/Feedback/`.
- **Empty Asset Directories**: Removed empty directories under `public/images/`.

## [Sprint 2E] - 2026-07-28
### Added
- **Domain-Oriented Data Layer (`services/domain/`)**: Built domain modules for `product`, `collection`, `category`, `homepage`, `navigation`, `journal`, and `loyalty`. Each module includes `types.ts`, `schema.ts` (Zod), `dummy.ts`, `mapper.ts`, and `service.ts`.
- **Service Layer Abstractions**: Created `ProductService`, `CollectionService`, `CategoryService`, `HomepageService`, `NavigationService`, `JournalService`, and `LoyaltyService`. UI components consume domain Services rather than importing raw static data files.
- **BigSeller & Supabase Model Readiness**: Enhanced Product entity with `sku`, `parentSku`, `compareAtPrice`, `currency`, `status`, `isActive`, and `isFeatured` fields.
- **Zod Runtime Validation**: Integrated Zod schemas for entity validation upon data retrieval or external payload ingestion.
- **Sprint 2E Documentation**: Generated 6 deliverable architecture and integration reports (`DATA_LAYER_REPORT.md`, `DOMAIN_ARCHITECTURE_REPORT.md`, `SERVICE_LAYER_REPORT.md`, `FUTURE_INTEGRATION_NOTES.md`, `DATA_LAYER_FILES_CHANGED.md`, `DATA_LAYER_TECHNICAL_DEBT.md`).

## [HOTFIX — Header Architecture v3] - 2026-07-28
### Added
- **Separated Header Component Hierarchy (`components/layout/Header/`)**: Implemented Single Responsibility Principle across 11 dedicated module files (`HeaderShell.tsx`, `HeaderContainer.tsx`, `Header.tsx`, `Navigation.tsx`, `NavLinks.tsx`, `NavIcons.tsx`, `Logo.tsx`, `MegaMenuCollections.tsx`, `DropdownCategories.tsx`, `AnnouncementBar.tsx`, `index.ts`).
- **Dedicated Header System Tokens (`styles/theme.css`)**: Registered `--header-bg`, `--header-bg-scrolled`, `--header-text`, `--header-border`, `--header-shadow`, `--header-hover`, `--header-height`, `--header-height-scrolled`, `--header-logo-size`, `--header-logo-size-scrolled`, and `--header-transition`.
- **10 Header Architecture Reports**: Generated comprehensive QA documentation (`HEADER_ARCHITECTURE_REPORT.md`, `HEADERSHELL_REPORT.md`, `DESIGN_TOKEN_REPORT.md`, `NAV_REPORT.md`, `MEGA_MENU_REPORT.md`, `HEADER_RESPONSIVE_REPORT.md`, `HEADER_ACCESSIBILITY_REPORT.md`, `PERFORMANCE_REPORT.md`, `HEADER_FILES_CHANGED.md`, `HEADER_TECHNICAL_DEBT.md`).

### Removed
- **Transparent / Hero-Dependent Header Modes**: Completely removed transparent header overlay mode and hero text color switching. Header ALWAYS uses glass background (`rgba(255,255,255,0.88)` / `0.96`) with `backdrop-blur-xl` and neutral text.

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
