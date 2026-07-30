# AISCHMIRA.STORE — Enterprise Search & Discovery System Architecture

**Last Updated:** July 30, 2026 (Sprint C1.3 — Luxury Search & Discovery Experience)  
**Status:** Multi-Channel Search & Discovery Engine Fully Integrated  

---

## 1. Overview & Architectural Principles

AISCHMIRA.STORE delivers an editorial, luxury Search & Discovery experience inspired by *Apple, COS, Loewe, Nike, Zara, and Aesop*. Rather than mimicking high-density marketplace search bars, search operates as an effortless discovery tool for garments, textiles, and collection stories.

Key Architectural Guarantees:
1. **Clean Architecture Data Flow**: `Search Page` & `SearchModal` consume `SearchService` -> `ProductService` & `CollectionService` -> Repositories -> Mappers -> Domain Entities. Zero static dummy data imports in UI components.
2. **Dual-Surface Discovery**:
   - **`/search` Route**: Full page search catalog with tabbed results (All, Products, Collections), multi-facet filtering (Category, Collection, Price, Availability, Color, Size), and fallback discovery recommendations.
   - **`SearchModal` Overlay**: Accessible overlay triggerable site-wide via header button or `Cmd/Ctrl + K` with live autocomplete suggestions, recent search memory (`localStorage`), and trending pills.
3. **SEO Parameter Protection**: Route uses Next.js Metadata API with `robots: { index: false, follow: true }` to prevent dynamic search query parameter duplication issues on Google while preserving link crawling.

---

## 2. Search Architecture & System Data Flow

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
domain/product/dummy.repository.ts          domain/collection/dummy.repository.ts
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

---

## 3. Search Contracts & Options

```typescript
export interface SearchFilterOptions {
  category?: string;
  collectionId?: string;
  minPrice?: number;
  maxPrice?: number;
  color?: string;
  size?: string;
  inStockOnly?: boolean;
}

export type SearchSortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'alphabetical';

export interface SearchResultsPayload {
  products: Product[];
  collections: Collection[];
  totalProducts: number;
  totalCollections: number;
  query: string;
}

export interface SearchSuggestion {
  text: string;
  type: 'product' | 'collection' | 'category' | 'trending';
  url?: string;
}
```

---

## 4. Enterprise Integration Readiness

- **BigSeller ERP Mapping**: Search indexing models include `sku`, `variantSku`, `inventory.inStock`, `stockStatus`, and price attributes.
- **Supabase Analytics Readiness**: `SearchModal` and `SearchResults` emit event hooks prepared for customer search history logging, top-searched term analytics, and conversion tracking.
- **CMS Editorial Search**: `SearchService` searches `Collection` domain narratives, CMS tags, campaign badges, and seasonal edits.
