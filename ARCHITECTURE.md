# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 30, 2026 (Sprint C1.9 — Luxury Loyalty & Membership Experience)  
**Status:** Phase 4 Platform Architecture Fully Integrated  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship digital experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint C1.9**, the **Luxury Loyalty & Membership Experience** (`/account/membership`, `/account/loyalty`, `services/membership.service.ts`, `domain/membership/`, `MEMBERSHIP_ARCHITECTURE.md`) was fully implemented:
- Built primary `/account/membership` route featuring Digital Virtual Membership Card with gold foil accents, Tier Progress Roadmap (Classic -> Silver -> Gold -> Platinum -> VIP Atelier), Benefits Matrix, Style Profile Preference Sanctuary, Points & Activity Ledger, and Privé Referral link generator. Zero direct static dummy data imports.
- Created `MembershipService` (`services/membership.service.ts`) exposing `getMembershipProfile()`, `getMembershipTiers()`, `getPointsHistory()`, and `getStyleProfile()`.
- Re-architected `/account/loyalty` to re-export `MembershipPage` for complete route compatibility.

---

## 2. Membership & Loyalty Data Flow

```text
              Client Navigates to /account/membership or /loyalty
                                    │
                                    ▼
                     services/membership.service.ts
                          (MembershipService)
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
getMembershipProfile()      getMembershipTiers()        getPointsHistory()
       │                            │                            │
       ▼                            ▼                            ▼
MembershipEntity             MembershipTier List         PointsActivity List
       │                            │                            │
       └────────────────────────────┼────────────────────────────┘
                                    │
                                    ▼
                       /account/membership Page
  (Digital Virtual Card, Tier Roadmap, Style Profile, Points Ledger, Referral Card)
```

---

## 3. Order Management & Tracking Data Flow

```text
             Client Navigates to /account/orders or /[orderId]
                                    │
                                    ▼
                       services/order.service.ts
                            (OrderService)
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
      getOrders()                                    getOrderById()
            │                                               │
            ▼                                               ▼
   OrderEntity List                                 OrderEntity Detail
            │                                               │
            ▼                                               ▼
/account/orders List Page                     /account/orders/[orderId] Page
 (Filter Pills, Totals)                         (Interactive Tracking Timeline,
                                                 Item SKUs, Recipient Address,
                                                 WhatsApp Support Button)
```
