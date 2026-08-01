# AISCHMIRA.STORE — Enterprise Digital Wardrobe & Saved Looks Architecture

**Version:** 1.0.0 (Sprint C2.0 — Luxury Saved Looks)  
**Status:** Approved & Implemented  

---

## 1. Overview

The **AISCHMIRA Digital Wardrobe** (`/account/saved-looks` and `/looks/[slug]`) allows brand clients to save and explore complete outfit assemblies curated during runway presentations and private showroom consultations.

- **Clean Architecture Data Flow**: Consumes `SavedLooksService` and `ProductService` exclusively; zero direct static dummy data imports.
- **Single-Click Ensemble Purchase**: Supports "Add Entire Look to Shopping Bag" which resolves all product SKUs in an outfit assembly and adds them into cart seamlessly.
- **Enterprise Integration Preparedness**: Data contracts map `slug`, `productSkus`, `occasion`, `colorPalette`, and `totalEstimatedValue` ready for BigSeller ERP outfit bundles and Supabase customer wardrobe tables.

---

## 2. System Architecture & Data Flow

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

---

## 3. Occasion Taxonomy Architecture

Outfits are categorized into curated occasions:
1. **Formal & Evening**: Black-tie galas, premiere presentations, silk slip dress assemblies.
2. **Executive Office**: Sharp tailored blazers, wide-leg trousers, structured lines.
3. **Resort & Travel**: Coastal villa travel, fluid linen drape, breathable Mulberry silk.
4. **Ramadan Sanctuary**: Elegant modest silhouettes, modest long gowns, lightweight drapes.
5. **Wedding Guests**: Haute couture celebratory ensembles.

---

## 4. Enterprise Integration Contracts (BigSeller ERP & Supabase)

### BigSeller ERP Outfit Bundle Mapping:
```json
{
  "bundleId": "midnight-soiree-assembly",
  "bundleName": "The Midnight Soirée Assembly",
  "occasion": "Formal",
  "productSkus": ["BIANCA-SILK-DRESS", "PRISCILA-BLAZER"],
  "totalPrice": 9600000
}
```

### Supabase Saved Looks Schema (`public.saved_looks` & `public.saved_look_items`):
```sql
CREATE TABLE public.saved_looks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  season TEXT,
  occasion TEXT,
  cover_image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.saved_look_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  look_id UUID REFERENCES public.saved_looks(id),
  product_sku TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
