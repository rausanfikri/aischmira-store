# Feature Specifications

## Navigation & Header
- **Purpose**: Primary brand anchor, navigation hub, and search/cart triggers.
- **Desktop Structure**: Centered Logo visual anchor, Collections dropdown, Categories dropdown. Journal & About removed.
- **Mobile Structure**: Full-screen slide-over drawer (`MobileNav.tsx`) with 48px+ touch targets, Collections accordion, Categories accordion, Member quick triggers (Search, Account, Wishlist, Bag), and WhatsApp Concierge.
- **Behavior**: Sticky header with dynamic top offset below `AnnouncementBar` (`top: var(--announcement-height)` when visible, `top: 0` when dismissed).
- **Data Flow**: Consumes `CollectionService.getCollections()` and `CategoryService.getCategories()`. Zero hardcoded collection/category arrays.

## Luxury Testimonials & Community (Homepage)
- **Purpose**: Patronage reflections and community proof building trust through quiet luxury, avoiding marketplace review clutter.
- **Architecture**: `Testimonial` and `CommunityStat` domain entities backed by `TestimonialService` (`services.testimonial`).
- **Components**: `LuxuryTestimonials.tsx`, `TestimonialCard.tsx` (verified patron badge, collection tag, editorial quote), and `CommunityStatsBar.tsx` (4-column minimal stat grid).
- **Data Flow**: Consumes `TestimonialService.getFeaturedTestimonials()` and `TestimonialService.getCommunityStats()`. Zero direct dummy imports in presentation components.

## Editorial Lookbook Experience (Homepage)
- **Purpose**: High-fashion campaign storytelling communicating emotion and brand identity before commerce.
- **Architecture**: Modular campaign structure (`LookbookCampaign`) containing typed editorial blocks (`LookbookBlock`).
- **Block Types Supported**: `CAMPAIGN_BANNER` (full-bleed campaign hero photography), `SPLIT_LAYOUT` (asymmetrical story + photo), `QUOTE_BLOCK` (editorial quote statement), `IMAGE_PAIR` (staggered dual portrait photography), `IMAGE_GALLERY` (3-photo horizontal film strip), `EDITORIAL_TEXT` (closing narrative + CTA link).
- **Data Flow**: Consumes `LookbookService.getActiveCampaign()` exclusively. Zero direct dummy data imports in presentation components.

## Brand Story & Heritage (Homepage)
- **Purpose**: Editorial brand introduction communicating AISCHMIRA's identity, philosophy, and artisanal craftsmanship.
- **Layout**: Modular alternating composition (`image-left` vs `image-right`) using `BrandStoryBlock` components, complemented by a 4-pillar brand values badge bar.
- **Component**: Modular, reusable `BrandStoryBlock` component (`components/sections/BrandStoryBlock.tsx`).
- **Data Flow**: Consumes `BrandService.getBrandStory()` exclusively. Zero hardcoded copy inside React components.

## Featured Collections (Homepage)
- **Purpose**: High-fashion editorial narrative introducing signature capsule edits.
- **Layout**: Asymmetrical composition — Primary featured collection rendered as a split-column Hero card (`variant="hero"`); secondary edits rendered in a 2-column editorial grid (`variant="editorial"`).
- **Component**: Modular, reusable `CollectionCard` component (`components/ui/CollectionCard.tsx`).
- **Data Flow**: Consumes `CollectionService.getFeaturedCollections()`. Zero direct dummy data imports.

## Featured Products (Homepage)
- **Purpose**: Curated editorial showcase of flagship apparel pieces.
- **Layout**: 4-column desktop grid / 2-column mobile flow with generous whitespace and restrained vertical spacing.
- **Component**: Modular, reusable `ProductCard` component (`components/ui/ProductCard.tsx`).
- **Data Flow**: Consumes `ProductService.getFeaturedProducts()`. Zero direct dummy data imports.

## Homepage
- **Purpose**: Brand introduction and primary navigation hub.
- **Requirements**: Hero editorial banner, brand story narrative, featured collections, latest arrivals, editorial lookbook campaign, editorial bridge quote, artisanal craftsmanship, luxury testimonials & community, journal preview, instagram gallery, newsletter, WhatsApp section.
- **Data**: Consumes `ProductService.getFeaturedProducts`, `CollectionService.getFeaturedCollections`, `BrandService.getBrandStory`, `LookbookService.getActiveCampaign`, and `TestimonialService.getFeaturedTestimonials`.

## Collections (Flagship Catalog Experience)
- **Purpose**: Story-first luxury fashion catalog experience where visitors browse stories before products.
- **Page Composition**:
  - `CollectionsHero`: Magazine editorial hero banner with tagline, heading, and live catalog metric badge.
  - `CollectionsEditorialIntro`: High-fashion brand story statement framing creative direction and philosophy.
  - `CollectionsClient`: Interactive catalog grid featuring category pill tabs (All, Newest, Classic, Scarves), sort selector (Featured, Newest, Alphabetical, Curated Pieces), product count badges, and story break cards.
  - `CollectionHighlightSection`: Asymmetrical spotlight showcase highlighting a signature edit with designer atelier notes and material composition tags.
  - `SeasonalCampaignBanner`: Atmospheric full-bleed seasonal campaign break section.
  - `RelatedCollectionsSection`: Curated edits strip for continuous story-first catalog exploration.
  - `CollectionsNewsletterCTA`: AISCHMIRA Privé invitation banner for pre-release drops.
- **Data Flow**: Consumes `CollectionService.getCollections()` and `ProductService.getProducts()` via Server Component async fetch in `app/collections/page.tsx`. Zero direct dummy static imports.
- **CMS & BigSeller Readiness**: Domain entities support `season`, `campaignBadge`, `campaignId`, `videoUrl`, `cmsId`, `locale`, `productSkuList`, `categoryMapping`, `bigSellerCollectionId`, and `inventoryAggregation`.

## Collection Detail (Luxury Story-First Narrative)
- **Purpose**: High-fashion editorial narrative for specific collection edits (`/collections/[slug]`).
- **Page Flow**:
  - `CollectionDetailHero`: High-impact hero imagery, breadcrumbs (`Home > Collections > Edit`), title, subtitle, description, season, and campaign badges.
  - `CollectionEditorialStory`: Inspiration story, designer atelier notes, and creative direction philosophy.
  - `CollectionInfoSpecs`: Signature textiles composition, artisanal lineage, and BigSeller/CMS reference metadata.
  - `CollectionFeaturedLooks`: Staggered lookbook showcase highlighting key silhouettes before entering product catalog.
  - `CollectionDetailClient`: Product showcase catalog with multi-facet filters (Category, Size, Color, Price, Availability), sort selector, and responsive cards.
  - `CollectionDetailRelated`: Curated recommendations from `CollectionService` without hardcoded relationships.
  - `CollectionEditorialCTA`: Personal WhatsApp styling concierge and next collection story invitation.
- **Data Flow**: Consumes `CollectionService.getCollectionBySlug()`, `ProductService.getProducts()`, and `CollectionService.getCollections()` via Server Component async fetch in `app/collections/[slug]/page.tsx`. Zero direct dummy static imports.

## Product Detail (Enterprise Luxury Commerce)
- **Purpose**: World-class presentation of a single SKU as an object of craftsmanship inspired by *The Row, Loro Piana, Totême, COS, and Aesop*.
- **Page Structure**:
  - `ProductJsonLd`: Dynamic JSON-LD structured data embedding Schema.org `Product` & `BreadcrumbList` schemas.
  - `ProductGallery`: High-resolution gallery with primary display, interactive lightbox zoom, thumbnail rail, image counter, and keyboard navigation.
  - `ProductInfo`: Collection tag, title, formatted price (with `compareAtPrice` strikethrough), stock status badge, size selector, color selector, quantity counter, "Add to Shopping Bag" CTA, "WhatsApp Styling Concierge" CTA, wishlist toggle trigger, and accordions (Material, Care, Shipping).
  - `ProductEditorial`: High-fashion storytelling section ("The Inspiration", designer notes, artisanal craftsmanship).
  - `Complete the Look`: Related products showcase from `ProductService`.
  - `RecentlyViewed`: Client browsing history persistence in `localStorage`.
  - `StickyWhatsAppCTA`: Mobile-optimized sticky CTA bar for quick checkout and concierge inquiries.
- **Data Flow**: Consumes `ProductService.getProductBySlug()`, `ProductService.getProducts()`, and `CollectionService.getCollections()` via Server Component async fetch in `app/products/[slug]/page.tsx`. Zero direct dummy static imports.
- **Enterprise Integration Readiness**: Models include `sku`, `parentSku`, `compareAtPrice`, `currency`, `inventory`, `status`, `isFeatured`, BigSeller SKU mapping, and Supabase wishlist/recently-viewed hooks.

## Search & Discovery (Enterprise Luxury Commerce)
- **Purpose**: Fast, elegant, and effortless search & catalog discovery inspired by *Apple, COS, Loewe, Nike, Zara, and Aesop*.
- **Surfaces**:
  - `SearchModal`: Site-wide modal/overlay triggerable via header search icon or keyboard shortcut (`Cmd/Ctrl + K`) featuring live autocomplete suggestions, recent search history memory, and trending keyword pills.
  - `/search` Route: Full search results page with tabbed views (All, Products, Collections), multi-facet filtering (Category, Collection, Price, Availability, Color, Size), sorting options, and fallback discovery recommendations.
- **Data Flow**: Consumes `SearchService.globalSearch()`, `ProductService.getProducts()`, and `CollectionService.getCollections()` via Server Component async fetch in `app/search/page.tsx`. Zero direct static dummy imports.
- **SEO Protection**: Next.js Metadata API with `robots: { index: false, follow: true }` tag to prevent search parameter crawling duplication on search engines.

## Wishlist & Personal Closet (Enterprise Luxury Commerce)
- **Purpose**: Curated personal wardrobe sanctuary ("Personal Closet") inspired by *COS, Apple, Loewe, Net-A-Porter, and SSENSE*.
- **Surfaces**:
  - `WishlistDrawer`: Radix UI slide-over drawer with item thumbnails, formatted prices, "Move to Shopping Bag" action, and empty state.
  - `/wishlist` Route: Full personal closet page featuring Header & Privé Badge, Wardrobe Summary & Category Filter Bar (All, Dresses, Blazers, Trousers, Scarves), Closet Grid with "Move to Bag" and "Consult Concierge" actions, Inspired Recommendations ("Complete Your Wardrobe"), and high-fashion Empty State.
- **Data Flow**: Consumes `WishlistService.getWishlistProducts()`, `WishlistService.getWishlistSummary()`, and `ProductService.getProducts()`. Zero direct static dummy imports.
- **State Persistence & Enterprise Readiness**: Local state persistence via `useShopStore`, with service contracts prepared for Supabase customer account sync and BigSeller price/stock webhooks.

## Shopping Bag & Checkout (Enterprise Luxury Commerce)
- **Purpose**: Calm, trustworthy luxury checkout experience inspired by *Apple, COS, Totême, Loro Piana, Loewe, Hermès, and Patris*.
- **Surfaces**:
  - `CartDrawer`: Radix UI slide-over drawer with item thumbnails, variant specifications, quantity controls, subtotal calculation, free shipping progress tracking, and WhatsApp checkout CTA.
  - `/bag` Route (and `/cart` route alias): Full shopping bag portal featuring Header & Concierge Badge, Free Shipping Progress Bar (IDR 3,000,000 threshold), Bag Items Table with variant details & quantity controls, Signature Gift Packaging panel (complimentary gift box + calligraphic note textarea), Order Summary Card (subtotal, shipping, VAT notice, promo code input, grand total), WhatsApp Checkout CTA, and Curated Recommendations ("Curated for You").
- **Data Flow**: Consumes `ShoppingBagService.getBagDetails()`, `ShoppingBagService.buildWhatsAppCheckoutUrl()`, and `ProductService.getProducts()`. Zero direct static dummy data imports.
- **Enterprise Integration Readiness**: Models include `sku`, `variantSku`, `inventory`, `warehouse`, and `promotion` mapping prepared for BigSeller ERP sync and Supabase persistent cart drafts.

## Checkout & WhatsApp Concierge (Enterprise Luxury Commerce)
- **Purpose**: Private order consultation and review portal designed to feel like entering a personal consultation with a fashion advisor.
- **Surfaces**:
  - `/checkout` Route: Full checkout review portal featuring Privé Header, Itemized Order Summary (Products, Variants, Quantities, SKUs, Unit Prices, Subtotals, VAT Notice, Grand Total), Customer Information form (FullName, Phone, Email, Delivery Address, City), Shipping Preference selector (Concierge Express, Boutique Pickup, Personal Courier), Signature Packaging & Calligraphic Note panel, Atelier Notes textarea, Live WhatsApp Message Preview Box, and "Continue with WhatsApp Concierge" primary button. Zero payment gateways or credit card inputs.
- **Data Flow**: Consumes `CheckoutService.prepareCheckoutReview()`, `WhatsAppService.generateWhatsAppUrl()`, and `ConfigurationService.getContactConfig()`. Zero direct static dummy data imports or hardcoded phone numbers.
- **Enterprise Integration Readiness**: Mappers include `toBigSellerPayload()` for direct BigSeller ERP order entry and `toSupabaseDraftOrder()` for customer order draft tracking.

## Client Portal & Privé Sanctuary (Enterprise Luxury Commerce)
- **Purpose**: Private customer sanctuary where brand clients manage identity, order tracking, Privé loyalty rewards, saved looks, and security settings.
- **Surfaces**:
  - `/account` & `/account/dashboard` Routes: Sanctuary dashboard featuring Identity Overview Card (Customer Name, Tier, Member Since, Points, Preferred Size & Color), Order Status Card, Loyalty Highlights, and Quick Action Shortcuts.
  - `/account/profile` Route: Personal measurements, contact details, and multiple delivery address management.
  - `/account/orders` Route: Detailed order history tracking, status badges (Draft, Processing, Shipped, Delivered), and concierge tracking triggers.
## Saved Looks & Digital Wardrobe (Enterprise Personal Styling)
- **Purpose**: Allow clients to save and explore complete outfit assemblies curated during runway presentations and private showroom consultations.
- **Surfaces**:
  - `/account/saved-looks` Route: Sanctuary list view with occasion filter pills (Formal, Office, Travel, Ramadan, Wedding), cover imagery, color swatches, piece counts, total estimated values, and detail CTAs.
  - `/looks/[slug]` Route: Editorial Look Detail page featuring full-height cover imagery, outfit story narrative, stylist recommendations, included garments grid, and primary "Add Entire Look to Shopping Bag" CTA button.
- **Data Flow**: Consumes `SavedLooksService.getSavedLooks()` and `SavedLooksService.getLookDetails()` (resolving products via `ProductService.getProducts()`). Zero direct static dummy data imports.
- **Enterprise Integration Readiness**: Contracts map `slug`, `productSkus`, `occasion`, `colorPalette`, and `totalEstimatedValue` ready for BigSeller ERP outfit bundles and Supabase customer wardrobe tables.
