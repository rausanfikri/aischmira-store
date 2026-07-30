# AISCHMIRA.STORE — Enterprise Membership & Loyalty Architecture

**Version:** 1.0.0 (Sprint C1.9 — Luxury Loyalty & Membership Experience)  
**Status:** Approved & Implemented  

---

## 1. Overview

The **AISCHMIRA Membership & Loyalty System** (`/account/membership` and `/account/loyalty`) is designed to cultivate long-term brand relationships rather than transactional reward loops.

- **Clean Architecture Data Flow**: Consumes `MembershipService` exclusively; zero direct static dummy data imports.
- **Enterprise Integration Preparedness**: Data contracts map `memberId`, `membershipCardNumber`, `currentPoints`, `lifetimePoints`, `currentTier`, `styleProfile`, and `pointsHistory` ready for BigSeller ERP customer loyalty sync and Supabase database tables.

---

## 2. Tier Hierarchy & Configuration

Tiers are configured dynamically via `MembershipService.getMembershipTiers()`:

| Tier | Point Threshold | Key Privilege Highlight |
| :--- | :--- | :--- |
| **Classic** | 0 Pts | Entry sanctuary access, digital membership card, seasonal brand journals. |
| **Silver** | 1,000 Pts | Complimentary express shipping, 24-hr priority drop access, 2x birthday multiplier. |
| **Gold** | 2,500 Pts | 48-hr priority drop access, dedicated personal styling director, signature gift packaging. |
| **Platinum** | 5,000 Pts | 72-hr first-look runway allocations, fashion week invitations, custom tailoring alterations. |
| **VIP Atelier** | 10,000 Pts | Invitation only; 1-on-1 private atelier fittings with Creative Director & custom fabric sourcing. |

---

## 3. System Architecture & Data Flow

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

## 4. Enterprise Integration Contracts (BigSeller ERP & Supabase)

### BigSeller ERP Loyalty & Customer Sync Mapping:
```json
{
  "customerId": "cust_01h8x9p",
  "membershipCardNumber": "ASC-PRIVE-8891-2026",
  "tier": "Gold",
  "currentPoints": 2450,
  "lifetimePoints": 6800,
  "styleProfile": {
    "preferredSize": "M (EU 38)",
    "preferredColor": "Midnight Black",
    "preferredMaterials": ["100% Mulberry Silk", "Italian Virgin Wool"]
  }
}
```

### Supabase Membership & Style Profile Schema (`public.membership_profiles` & `public.style_profiles`):
```sql
CREATE TABLE public.membership_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id),
  card_number TEXT UNIQUE NOT NULL,
  current_tier TEXT NOT NULL DEFAULT 'Classic',
  current_points INT NOT NULL DEFAULT 0,
  lifetime_points INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.style_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id),
  preferred_size TEXT,
  preferred_fit TEXT,
  preferred_colors TEXT[],
  preferred_materials TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
