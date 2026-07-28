# AISCHMIRA.STORE — Future Integration Notes
**Sprint:** Sprint 2E — CMS Ready Architecture & Data Layer
**Date:** July 28, 2026

---

## Roadmap Integration Readiness

### 1. BigSeller Synchronization Strategy
- **`Product` Entity**: Prepared with `sku`, `parentSku`, `compareAtPrice`, `currency`, `status`, `isActive`, `isFeatured`.
- **`ProductMapper.toBigSellerDTO()`**: Transformer ready for bi-directional inventory stock and pricing updates.
- **Stock Updates**: In Phase 3, replace `ProductService.getAllProducts()` implementation with a Supabase query or BigSeller inventory endpoint without changing a single line of UI component code.

### 2. Supabase Integration Strategy
- **Zod Schemas**: `productSchema`, `collectionSchema`, `categorySchema`, `articleSchema`, `memberProfileSchema` ensure runtime validation on all database queries.
- **Service Interfaces**: Returns promises (`Promise<Product[]>`), making the migration to async Supabase client calls (`supabase.from('products').select()`) effortless.

### 3. WhatsApp Commerce & Loyalty Engine Strategy
- **Loyalty Domain**: `LoyaltyService` provides member tier logic (`Privilege`, `Privé`, `VIP`, `Black`), points calculation (`1 pt per Rp 10.000`), and rewards catalog.
- **WhatsApp Checkout**: Direct conversion from `Variant` SKU and price in IDR to formatted pre-filled WhatsApp message.
