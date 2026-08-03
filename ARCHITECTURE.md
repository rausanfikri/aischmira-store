# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** August 1, 2026 (Sprint I1.1 — BigSeller Domain Integration Ports & Adapters)  
**Status:** Phase 5 BigSeller Ports & Adapters Architecture Integrated  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship digital experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint I1.1**, the **BigSeller Domain Integration Architecture** (`core/integration/bigseller/`, `BIGSELLER_ARCHITECTURE.md`) was fully implemented:
- Created type-safe BigSeller DTOs (`ProductDTO`, `VariantDTO`, `InventoryDTO`, `PriceDTO`, `OrderDTO`, `WarehouseDTO`, `PromotionDTO`) and Zod validation schemas (`schemas.ts`).
- Built provider contracts (`IShipmentProvider`, `IWarehouseProvider`, `IPromotionProvider`, `ICategoryProvider`, `IProductSynchronizationProvider`) and domain mappers (`BigSellerProductMapper`, `BigSellerInventoryMapper`, `BigSellerOrderMapper`).
- Implemented domain services (`BigSellerInventoryService`, `BigSellerPricingService`, `BigSellerWarehouseService`, `BigSellerPromotionService`, `ProductSynchronizationService`) and updated `BigSellerAdapter` cleanly without HTTP calls.

---

## 2. BigSeller Ports & Adapters Architecture

```text
                                Presentation UI
                                       │
                                       ▼
                              Domain Application
                             (services/*.service.ts)
                                       │
                                       ▼
                               Provider Contracts
                    (IInventoryProvider, IOrderProvider, etc.)
                                       │
                                       ▼
                               BigSellerAdapter
                     (core/integration/adapters/bigseller.adapter.ts)
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
BigSellerProductMapper     BigSellerInventoryMapper     BigSellerOrderMapper
            │                          │                          │
            ▼                          ▼                          ▼
     ProductDTO List            InventoryDTO List           OrderDTO Detail
```

---

## 3. Integration Foundation Data Flow

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
