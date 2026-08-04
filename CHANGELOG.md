# CHANGELOG — AISCHMIRA.STORE

All notable changes to this project will be documented in this file.

## [Sprint UX-NAV-01] - 2026-08-04
### Added
- **Luxury Desktop Navigation & Dropdown Systems (`components/layout/Header/CollectionsDropdown.tsx`, `components/layout/Header/CategoriesDropdown.tsx`, `components/layout/Header/NavLinks.tsx`)**: Re-architected Desktop navigation layout to feature Left-aligned `Collections` ▼ & `Categories` ▼ dropdowns, mathematically centered AISCHMIRA flagship logo, and Right-aligned member action icons (Search, Account, Wishlist, Shopping Bag).
- **Dynamic Collection & Category Dropdowns**:
  - `CollectionsDropdown`: Dynamically populates collections from `CollectionService` (`FEMME`, `HER Long`, `HER Short`, `SHE Dress`, etc.) with Signature Atelier badges, Classic Capsules & Scarves, and curated editorial preview card.
  - `CategoriesDropdown`: Dynamically populates categories from `CategoryService` (`Dress`, `Outerwear`, `Trousers`, `Scarf`, etc.) in a CMS-ready & BigSeller OMS-ready architecture without hardcoded component category arrays.
  - Interactive behavior built with Radix UI `NavigationMenu` featuring smooth animations, hover delay, keyboard arrow navigation, Escape to close, outside click to close, and WAI-ARIA menu roles.
- **Mobile Overlap Resolution & Responsive Grid Isolation (`components/layout/Header/Header.tsx`, `components/layout/Header/NavIcons.tsx`, `components/layout/Header/Logo.tsx`)**:
  - Completely resolved the mobile bug where centered logo collided with right action icons on narrow viewports.
  - Applied CSS Grid 3-column isolation (`grid-template-columns: 1fr auto 1fr`) with viewport overflow prevention.
  - Configured adaptive right icon layout: on extra-narrow viewports (< 640px), top right header displays `Search` and `Shopping Bag`, adaptively transferring `Wishlist` and `Account` quick actions into the Mobile Navigation Drawer, guaranteeing zero logo collision across all mobile screen sizes (320px – 480px).
- **Mobile Slide-Out Navigation Drawer (`components/layout/MobileNav.tsx`)**: Refactored mobile drawer with Radix UI `Dialog` primitives, 48px+ touch targets, dynamic Collections accordion, dynamic Categories accordion, quick action grid (Search, Account, Wishlist, Bag), and WhatsApp Concierge CTA.
- **Dedicated Navigation Architecture Documentation (`NAVIGATION_ARCHITECTURE.md`)**: Created comprehensive technical specification covering CSS grid composition, dropdown interaction models, breakpoint matrix, WAI-ARIA accessibility, and CMS/BigSeller integration points.

## [Sprint I1.2] - 2026-08-04
### Added
- **Supabase Authentication & Google OAuth (`lib/supabase/`, `services/auth.service.ts`, `app/(auth)/login/page.tsx`, `app/(auth)/auth/callback/route.ts`)**: Integrated `@supabase/ssr` server and browser client session management with automatic PKCE code exchange for Google Sign-In as the primary authentication method. Prepared clean architecture extension points for Apple Login, Email/Password, Magic Link, and OTP.
- **Next.js Middleware Route Protection (`middleware.ts`)**: Configured automatic session token validation and refresh. Enforced protected route authorization for `/account/*`, redirecting unauthenticated requests to `/login?redirectTo=...`.
- **Database-Backed Customer Domain & Clean Architecture (`domain/customer/`, `core/domain/customer/repository.ts`, `SupabaseCustomerRepository`, `CustomerMapper`, `CustomerService`)**: Built repository and service layers executing PostgreSQL operations for customer profile management, loyalty tracking, wishlists, shopping bag sync, and saved looks.
- **Supabase Relational Database Schema & RLS Policies (`supabase/migrations/20260804000000_sprint_i1_2_auth_customer.sql`)**: Created complete PostgreSQL migration script establishing 9 tables (`profiles`, `addresses`, `customer_preferences`, `loyalty_accounts`, `loyalty_transactions`, `wishlist`, `shopping_bag`, `saved_looks`, `order_history_reference`), Row Level Security (RLS) policies, and an `on_auth_user_created` trigger for auto-provisioning profiles and loyalty accounts (0 points, tier: Classic).
- **BigSeller Mapping Preparation (`profiles.bigseller_customer_id`)**: Added `bigseller_customer_id` column to `profiles` for future BigSeller OMS customer synchronization.
- **Dedicated Sprint Documentation (`AUTHENTICATION.md`, `SUPABASE_SETUP.md`, `DATABASE_SCHEMA.md`)**: Created comprehensive technical guides covering Supabase Auth, Google OAuth credentials configuration, PKCE callback flows, and database schemas.

### Removed
- **Static Dummy Data Purge**: Completely purged all hardcoded dummy customer profiles ("Lady Katherine Vance"), mock loyalty points ("2,450"), and mock orders across Client Portal, Dashboard, Profile, Loyalty, Wishlist, and Shopping Bag. UI now exclusively consumes authenticated database state.

### Added
- **SHE Dress Collection Official Product Media Integration**: Integrated official RAW photography assets for the SHE Dress Collection into `public/images/products/she-dress/` across 5 distinct colorways (Pure White, Onyx Black, Ivory Cream, Crimson Red, Blush Pink).
- **Product Domain & Collection Sync (`data/products.ts`, `data/collections.ts`, `data/homepage.ts`, `data/lookbook.ts`, `services/saved-looks.service.ts`)**: Updated `SHE Dress` entity (`SHE-001`), `SHE Collection` (`col_she`), Homepage `featuredCollections` & `newArrivals`, Lookbook editorial blocks, and `The SHE Couture Ensemble` saved look with high-resolution official assets.
- **CMS Metadata & BigSeller Mapping (`PRODUCT_MEDIA.md`)**: Created comprehensive media architecture documentation detailing image classification, SEO filename conventions, CMS metadata JSON specification, BigSeller multi-channel ERP mapping, and WCAG AA accessibility/performance standards.

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
