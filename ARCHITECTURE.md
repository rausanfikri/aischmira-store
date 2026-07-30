# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 30, 2026 (Sprint C1.4 — Luxury Wishlist Experience)  
**Status:** Personal Closet Wishlist Architecture Fully Integrated  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship digital experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint C1.4**, the **Luxury Wishlist Experience** (`app/wishlist/page.tsx`, `components/layout/WishlistDrawer.tsx`, `services/wishlist.service.ts`) was re-architected into a "Personal Closet":
- Rebuilt `app/wishlist/page.tsx` as a client page consuming `WishlistService.getWishlistProducts()`, `WishlistService.getWishlistSummary()`, and `ProductService`. Zero direct static dummy imports.
- Extended `WishlistService` (`services/wishlist.service.ts`) with summary metrics, category filters, and curated wardrobe recommendations.
- Refactored **`WishlistDrawer`** (`components/layout/WishlistDrawer.tsx`) to resolve saved items via `WishlistService` & `ProductService` dynamically.

---

## 2. Wishlist Personal Closet Architecture & Data Flow

```text
               User Saved Product IDs (useShopStore Local Storage)
                                 │
                                 ▼
                    services/wishlist.service.ts
                   (WishlistService.getWishlistProducts)
                                 │
                                 ▼
                     services/product.service.ts
                    (ProductService.getProducts)
                                 │
                                 ▼
                           Product Entity
                                 │
          ┌──────────────────────┴──────────────────────┐
          ▼                                             ▼
app/wishlist/page.tsx (Personal Closet)      components/layout/WishlistDrawer.tsx
          │                                             │
          ├── Wardrobe Summary Bar                      ├── Closet Item List
          ├── Category Filter Pills                     ├── Move to Shopping Bag Action
          ├── Closet Product Grid                       └── View Full Closet Page CTA
          └── Inspired Recommendations
```

---

## 3. Search System Architecture & Data Flow

```text
               User Search Query (UI Input or URL ?q=)
                                 │
                                 ▼
                     services/search.service.ts
                     (SearchService.globalSearch)
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
services/product.service.ts                 services/collection.service.ts
 (ProductService.searchProducts)            (CollectionService.searchCollections)
           │                                           │
           ▼                                           ▼
     Product Entity                              Collection Entity
           └─────────────────────┬─────────────────────┘
                                 │
                                 ▼
                  components/search/SearchResults.tsx
                                 │
          ┌──────────────────────┼──────────────────────┐
          ▼                      ▼                      ▼
  Matching Garments     Matching Collections    Discovery Selections
   (ProductCard.tsx)    (Collection Card Link)    (Fallback Products)
```
