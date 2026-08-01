# AISCHMIRA.STORE — Enterprise Integration Architecture Foundation

**Version:** 1.0.0 (Sprint I1.0 — Enterprise Integration Layer Foundation)  
**Status:** Approved & Implemented  

---

## 1. Overview

The **AISCHMIRA Enterprise Integration Layer** (`core/integration/`, `core/config/`) establishes a vendor-independent architecture decoupling presentation components and business domain services from external third-party systems (BigSeller ERP, Supabase Auth/DB, Headless CMS, Analytics).

- **Vendor Independence**: UI components and domain services interact strictly with abstract provider interfaces (`IInventoryProvider`, `ICustomerProvider`, `IOrderProvider`, `IContentProvider`, `IAnalyticsProvider`).
- **Feature Flag Controlled**: Provider adapters (`BigSellerAdapter`, `SupabaseAdapter`, `CMSAdapter`, `AnalyticsAdapter`) are resolved dynamically via the Lightweight Dependency Injection container (`IntegrationContainer`) based on environment feature flags.
- **Zero API Call Guarantees**: Sprint I1.0 establishes type-safe contracts, Zod environment schemas, resiliency policies, and structural stub adapters without introducing heavy third-party SDK dependencies or live API requests.

---

## 2. Target System Architecture

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

## 3. Provider Contracts Matrix

| Interface | Provider Contract | Active Adapter Stub | Feature Flag Toggle |
| :--- | :--- | :--- | :--- |
| `IInventoryProvider` | Stock levels & reserve queries | `BigSellerAdapter` | `NEXT_PUBLIC_ENABLE_BIGSELLER` |
| `IPriceProvider` | Real-time pricing quotes | `BigSellerAdapter` | `NEXT_PUBLIC_ENABLE_BIGSELLER` |
| `ICustomerProvider` | Profile & measurement updates | `SupabaseAdapter` | `NEXT_PUBLIC_ENABLE_SUPABASE` |
| `IOrderProvider` | Order creation & courier tracking | `BigSellerAdapter` | `NEXT_PUBLIC_ENABLE_BIGSELLER` |
| `IContentProvider` | Editorial journal & collections | `CMSAdapter` | `NEXT_PUBLIC_ENABLE_CMS` |
| `IAnalyticsProvider` | Event & page view tracking | `AnalyticsAdapter` | `NEXT_PUBLIC_ENABLE_ANALYTICS` |

---

## 4. Environment & Feature Flags Configuration (`core/config/`)

Environment variables are validated using Zod (`core/config/env.ts`):
```typescript
NEXT_PUBLIC_APP_URL="https://aischmira.store"
NEXT_PUBLIC_ENABLE_BIGSELLER="false"
NEXT_PUBLIC_ENABLE_SUPABASE="false"
NEXT_PUBLIC_ENABLE_CMS="false"
NEXT_PUBLIC_ENABLE_ANALYTICS="false"
```

Feature flags (`core/config/feature-flags.ts`) dynamically activate real adapters or stub fallbacks at runtime.

---

## 5. Resiliency & Logging Architecture

- **`AppLogger` (`core/integration/logger/logger.ts`)**: Unified logging abstraction supporting level filtering (`debug`, `info`, `warn`, `error`).
- **`ResiliencePolicy` (`core/integration/resilience/resilience.ts`)**: Exponential backoff retry policies and configurable operation timeouts.
