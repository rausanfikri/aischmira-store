# AISCHMIRA.STORE — Enterprise Customer & Client Portal Architecture

**Version:** 1.0.0 (Sprint C1.7 — Luxury Client Portal Foundation)  
**Status:** Approved & Implemented  

---

## 1. Overview

The **AISCHMIRA Client Portal** (`/account`, `/account/dashboard`, `/account/profile`, `/account/orders`, `/account/wishlist`, `/account/loyalty`, `/account/saved-looks`, `/account/settings`) provides a private sanctuary where valued brand clients manage their relationship with AISCHMIRA.

- **Editorial & Minimal**: Designed with Cormorant Garamond typography, generous whitespace, and restrained gold/amber luxury badges.
- **Clean Architecture Data Flow**: Consumes `CustomerService` exclusively; zero direct static dummy data imports.
- **Enterprise Integration Preparedness**: Structured domain models ready for Supabase Auth identity providers and BigSeller ERP customer order synchronization.

---

## 2. System Architecture & Data Flow

```text
                  Client Portal Routes (/account/*)
                                  │
                                  ▼
                     services/customer.service.ts
                        (CustomerService)
                                  │
            ┌─────────────────────┼─────────────────────┐
            ▼                     ▼                     ▼
  getCustomerProfile()   getCustomerOrders()   getCustomerLoyalty()
            │                     │                     │
            ▼                     ▼                     ▼
    CustomerProfile      CustomerOrderSummary   CustomerLoyaltyInfo
            │                     │                     │
            └─────────────────────┼─────────────────────┘
                                  │
                                  ▼
           Client Sanctuary UI & Privé Loyalty Dashboard
```

---

## 3. Navigation Hierarchy

| Route | Label | Responsibility |
| :--- | :--- | :--- |
| `/account` & `/account/dashboard` | Dashboard Overview | High-level summary of client identity, reward points, active orders, and quick shortcuts. |
| `/account/profile` | Profile & Addresses | Personal contact information, measurement preferences, and delivery addresses. |
| `/account/orders` | Order History & Concierge | Historical order breakdown, statuses (Draft, Processing, Shipped, Delivered), and WhatsApp concierge tracking. |
| `/wishlist` & `/account/wishlist` | Personal Closet Wishlist | Saved garments wardrobe sanctuary. |
| `/account/loyalty` | Privé Loyalty Privileges | Tier status progress bar (*Privé Gold* to *Privé Noir*), points balance, and member benefits. |
| `/account/saved-looks` | Curated Saved Looks | Complete outfit assemblies styled during runway presentations and showroom consultations. |
| `/account/settings` | Account & Security Settings | Biometric passkeys, 2FA status, privacy settings, and WhatsApp notification controls. |

---

## 4. Enterprise Integration Contracts (Supabase Auth & BigSeller ERP)

### Supabase Auth & Customer Profile Schema (`public.customers`):
```sql
CREATE TABLE public.customers (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  membership_tier TEXT DEFAULT 'Privé Standard',
  points_balance INT DEFAULT 0,
  preferred_size TEXT,
  preferred_color TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### BigSeller ERP Customer Order Mapping:
```json
{
  "customerId": "cust_01h8x9p",
  "customerName": "Lady Katherine Vance",
  "tier": "Privé Gold",
  "orderHistoryCount": 2,
  "lifetimeValue": 13450000
}
```
