# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 29, 2026 (Sprint U1.0 — Homepage Migration to Service Architecture)  
**Status:** Homepage Migrated to Clean Service Layer  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint U1.0**, the **Homepage** (`app/page.tsx`) and its section components (`NewCollections`, `FeaturedProducts`, `FeaturedCollection`, `ProductHighlight`) were fully migrated to consume data exclusively through **Domain Services** (`services`). Direct imports of static dummy data arrays were completely eliminated from presentation components.

---

## 2. Homepage Data Flow Architecture

```text
Homepage (app/page.tsx - React Server Component)
   │
   ├── services.product.getFeaturedProducts(4)    ──> ProductService ──> IProductRepository
   │
   └── services.collection.getFeaturedCollections(3) ──> CollectionService ──> ICollectionRepository
   │
   ├──> <NewCollections collections={featuredCollections} />
   └──> <FeaturedProducts products={featuredProducts} />
```
