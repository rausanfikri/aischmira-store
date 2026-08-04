# AISCHMIRA.STORE — Database Schema & RLS Specification

## Relational Schema Overview

| Table Name | Primary Key | Foreign Keys / References | Description |
|---|---|---|---|
| `profiles` | `id (UUID)` | `auth.users(id)` ON DELETE CASCADE | Customer profile details, avatar, membership tier, and BigSeller mapping. |
| `addresses` | `id (UUID)` | `customer_id -> profiles(id)` | Customer shipping residences and villas. |
| `customer_preferences` | `id (UUID)` | `customer_id -> profiles(id)` UNIQUE | Sizing, color palette, and communication preferences. |
| `loyalty_accounts` | `id (UUID)` | `customer_id -> profiles(id)` UNIQUE | Customer loyalty points balance, lifetime points, tier, and referral code. |
| `loyalty_transactions` | `id (UUID)` | `customer_id -> profiles(id)` | Ledger of earned, redeemed, or expired loyalty points. |
| `wishlist` | `id (UUID)` | `customer_id -> profiles(id)` | User personal closet saved product SKUs. |
| `shopping_bag` | `id (UUID)` | `customer_id -> profiles(id)` | User shopping bag cart items. |
| `saved_looks` | `id (UUID)` | `customer_id -> profiles(id)` | Curated outfit assemblies saved by user. |
| `order_history_reference` | `id (UUID)` | `customer_id -> profiles(id)` | Reference order records linked to BigSeller OMS. |

---

## BigSeller Customer ID Mapping

The `profiles` table contains `bigseller_customer_id TEXT`, establishing foreign key mapping readiness for future BigSeller OMS customer synchronization without requiring schema alterations.

---

## Row Level Security (RLS) Rules

All customer tables enforce RLS:
- **Profiles**: Users can only `SELECT` and `UPDATE` their own record (`auth.uid() = id`).
- **Addresses / Preferences / Wishlist / Bag**: Restricted strictly to owner (`auth.uid() = customer_id`).
- **Loyalty & Orders**: Read-only access for owner (`auth.uid() = customer_id`).
