# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 31, 2026 (Sprint I1.0 — Enterprise Integration Layer Foundation)  
**Status:** Phase 5 Integration Architecture Fully Established  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship digital experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint I1.0**, the **Enterprise Integration Layer Foundation** (`core/integration/`, `core/config/`, `INTEGRATION_ARCHITECTURE.md`) was fully implemented:
- Created vendor-independent provider contracts (`IProductProvider`, `IInventoryProvider`, `IPriceProvider`, `ICustomerProvider`, `IOrderProvider`, `IContentProvider`, `IAnalyticsProvider`).
- Implemented structural provider adapters (`BigSellerAdapter`, `SupabaseAdapter`, `CMSAdapter`, `AnalyticsAdapter`) and lightweight DI container (`IntegrationContainer`).
- Built Zod environment schema validation (`core/config/env.ts`), feature flags (`core/config/feature-flags.ts`), structured logger (`AppLogger`), and resiliency policies (`ResiliencePolicy`). Zero external live network API calls executed.

---

## 2. Target Integration Architecture

```text
                                UI Components
                                     │
                                     ▼
                            Application Services
                           (services/*.service.ts)
                                     │
                                     ▼
                          Repository / Domain Layer
                           (domain/* & contracts)
                                     │
                                     ▼
                           Integration Container
                        (core/integration/container.ts)
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
  BigSellerAdapter            SupabaseAdapter                CMSAdapter
  (Inventory, Orders)        (Customer, Auth)                (Content)
         │                           │                           │
         ▼                           ▼                           ▼
   BigSeller ERP               Supabase DB                  Headless CMS
```

---

## 3. Digital Wardrobe & Saved Looks Data Flow

```text
            Client Navigates to /account/saved-looks or /looks/[slug]
                                    │
                                    ▼
                    services/saved-looks.service.ts
                          (SavedLooksService)
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
     getSavedLooks()                                 getLookDetails()
            │                                               │
            ▼                                               ▼
   SavedLookEntity List                             SavedLookDetail
            │                                     (Resolves Product Entity
            ▼                                     via ProductService.getProducts)
/account/saved-looks List Page                              │
  (Occasion Filter Pills,                                   ▼
   Color Swatches, Totals)                         /looks/[slug] Detail Page
                                                   (Editorial Hero, Story,
                                                    Included Garments Grid,
                                                    Add Entire Look CTA)
```
