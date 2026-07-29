# AISCHMIRA.STORE — Member Loyalty & Rewards Engine Specification

## Purpose
This document specifies the architecture, tier structures, points calculations, reward rules, and referral system for the AISCHMIRA Privilege Member Ecosystem.

## Scope
Applies to member accounts (`app/account/*`), domain services (`services/domain/loyalty/`), Supabase customer tables, and customer dashboard UI.

## Overview
The AISCHMIRA Loyalty Engine rewards customer engagement, purchase frequency, and brand advocacy. Members earn points on purchases, unlock exclusive luxury perks, and progress through four elite membership tiers.

---

## Membership Tier Structure

| Tier Level | Annual Spend Threshold | Points Multiplier | Tier Perks |
| :--- | :--- | :--- | :--- |
| **SILVER** | Registration Entry | 1.0x (1 pt per IDR 10,000) | Member welcome gift, birthday voucher, early collection previews |
| **GOLD** | IDR 15,000,000 | 1.25x (1.25 pts per IDR 10,000) | Free express shipping, private styling concierge, anniversary gift |
| **PLATINUM** | IDR 40,000,000 | 1.50x (1.5 pts per IDR 10,000) | Invitation to exclusive runaway shows, complimentary tailoring, priority stock access |
| **DIAMOND** | IDR 100,000,000 | 2.0x (2.0 pts per IDR 10,000) | Custom bespoke garment fitting, personal dedicated account manager, VIP gifts |

---

## Points Calculation & Referral Engine

### Points Calculation Formula
$$\text{Earned Points} = \left\lfloor \frac{\text{Order Subtotal (IDR)}}{10,000} \right\rfloor \times \text{Tier Multiplier}$$

### Referral Engine Protocol
- **Referrer Reward**: Earning 500 bonus points when a referred customer completes their first WhatsApp order.
- **Referee Discount**: Referred customer receives 10% discount on first order using referral code.

---

## Domain Interface Schema

```typescript
export interface LoyaltyAccount {
  id: string;
  customerId: string;
  pointsBalance: number;
  lifetimePoints: number;
  currentTier: "SILVER" | "GOLD" | "PLATINUM" | "DIAMOND";
  nextTierPointsThreshold: number;
  referralCode: string;
  rewardsHistory: {
    id: string;
    description: string;
    points: number;
    date: string;
  }[];
}
```

---

## Implementation
Domain logic is encapsulated in `LoyaltyService` (`services/domain/loyalty/service.ts`) validated by Zod schemas (`services/domain/loyalty/schema.ts`).

## Examples
See `app/account/profile/page.tsx` for member profile dashboard rendering loyalty balances and tier progress bars.

## Future Improvements
- Implement automated SMS / WhatsApp notifications on tier upgrades.

## References
- `AGENTS.md`
- `DATA_MODEL.md`
- `services/domain/loyalty/`

## Change History
- **2026-07-29**: Created Member Loyalty Engine specification document.
