# AISCHMIRA.STORE — Enterprise Domain Data Model Specification

**Version:** 2.4.0 (Sprint C1.9 — Loyalty & Membership Model)  
**Source of Truth:** `domain/collection/`, `domain/navigation/`, `core/config/`  

---

## 1. Collection Entity Specification (`domain/collection/entity.ts`)

```typescript
export type CollectionStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

export interface CollectionSEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  category?: 'all' | 'newest' | 'classic' | 'scarf' | string;
  season?: string;
  campaignId?: string;
  campaignBadge?: string;
  videoUrl?: string;
  cmsId?: string;
  locale?: string;
  productSkuList?: string[];
  categoryMapping?: Record<string, string>;
  bigSellerCollectionId?: string;
  inventoryAggregation?: {
    totalUnits: number;
    inStockCount: number;
  };
  ctaLabel?: string;
  productCount?: number;
  heroImage?: string;
  coverImage: string;
  thumbnail?: string;
  sortOrder: number;
  featured: boolean;
  status: CollectionStatus;
  seo?: CollectionSEO;
  story?: string;
  designerNotes?: string;
  materials?: string[];
  createdAt: string;
  updatedAt: string;
}
```

---

## 2. Collection Query Contracts (`domain/collection/types.ts`)

```typescript
export interface CollectionFilterOptions {
  category?: 'all' | 'newest' | 'classic' | 'scarf' | string;
  season?: string;
  material?: string;
  campaignId?: string;
  availability?: 'all' | 'in_stock' | 'preorder';
}

export type CollectionSortOption =
  | 'featured'
  | 'newest'
  | 'alphabetical'
  | 'product_count'
  | 'sort_order';

export interface CollectionPaginationOptions {
  page?: number;
  limit?: number;
  cursor?: string;
  mode?: 'infinite' | 'load_more' | 'pages';
}

export interface CollectionQueryParams {
  filter?: CollectionFilterOptions;
  sort?: CollectionSortOption;
  pagination?: CollectionPaginationOptions;
}
```

---

## 3. Navigation Entity Specification (`domain/navigation/entity.ts`)

```typescript
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavigationItem[];
}

export interface NavigationGroup {
  id: string;
  title: string;
  links: NavigationItem[];
}

export interface NavigationConfig {
  mainNav: NavigationItem[];
  utilityNav: NavigationItem[];
  footerNav: NavigationGroup[];
  mobileNav: NavigationItem[];
}
```
