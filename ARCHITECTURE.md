# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** August 4, 2026 (Sprint I1.2 — Real Authentication & Customer Platform)  
**Status:** Supabase Auth & PostgreSQL Customer Domain Integrated  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship digital experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint I1.2**, **Real Authentication & Customer Platform (Supabase)** was fully implemented:
- Configured Supabase Auth with Google OAuth PKCE authorization code flow and `@supabase/ssr` server/browser client session management.
- Implemented Next.js Middleware route protection for all `/account/*` routes.
- Built Clean Architecture Customer Domain layers (`domain/customer`, `core/domain/customer/repository.ts`, `SupabaseCustomerRepository`, `CustomerMapper`, `AuthService`, `CustomerService`).
- Completely purged all dummy/mock customer data ("Lady Katherine Vance", dummy points, fake orders) across Client Portal, Dashboard, Profile, Loyalty, Wishlist, and Shopping Bag.
- Created PostgreSQL database migration DDL for 9 relational tables, RLS policies, and `on_auth_user_created` trigger for auto-provisioning profiles and loyalty accounts (0 points, tier: Classic).

---

## 2. Authentication & Customer Domain Clean Architecture

```text
                                 Presentation UI
                         (app/account/*, app/(auth)/*)
                                       │
                                       ▼
                              Next.js Middleware
                     (middleware.ts - Session Refresh/Redirect)
                                       │
                                       ▼
                              Application Services
                      (AuthService & CustomerService)
                                       │
                                       ▼
                           Repository Interface (ICustomerRepository)
                                       │
                                       ▼
                       SupabaseCustomerRepository & CustomerMapper
                                       │
                                       ▼
                             Supabase Client (@supabase/ssr)
                                       │
                                       ▼
                      Supabase Auth & PostgreSQL DB Tables
  (profiles, addresses, loyalty_accounts, wishlist, shopping_bag, saved_looks, etc.)
```

---

## 3. Integration Data Flow

```text
                                 UI Components
                                      │
                                      ▼
                             Application Services
                      (services/auth.service.ts, customer.service.ts)
                                      │
                                      ▼
                           Repository / Domain Layer
                    (domain/customer & ICustomerRepository)
                                      │
                                      ▼
                            Integration Layer
                (core/infrastructure/repositories/supabase)
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
  BigSellerAdapter             Supabase Auth                Supabase DB
  (Inventory, Orders)        (Google OAuth, PKCE)       (PostgreSQL RLS)
```
