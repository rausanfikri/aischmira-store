# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 29, 2026 (Sprint F1)  
**Status:** Cleaned, Refactored & Stabilized Architecture  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Zustand. In Sprint F1, the architecture was cleaned, refactored, and audited to streamline project structure, purge dead code/obsolete assets, and unify utility exports without changing business logic or UI presentation.

---

## 2. Directory Architecture

```text
app/                     App Router routes, pages, and root layout
components/              UI Components (layout, sections, products, collections, account, search, ui)
providers/               React Context Providers
hooks/                   Custom React Hooks
services/                Domain Data Layer & Services
  domain/
    product/             Product domain (types, schema, dummy, mapper, service)
    collection/          Collection domain (types, schema, dummy, mapper, service)
    category/            Category domain (types, schema, dummy, mapper, service)
    homepage/            Homepage domain (types, schema, dummy, service)
    navigation/          Navigation domain (types, schema, dummy, service)
    journal/             Journal domain (types, schema, dummy, service)
    loyalty/             Loyalty domain (types, schema, dummy, service)
data/                    Typed static content and dataset mappings
types/                   Domain type definitions and index
lib/                     Pure utilities & token access helpers (formatters, string, theme, utils, whatsapp, index)
styles/                  Global CSS and design token source (theme.css, globals.css)
store/                   Zustand global stores (useShopStore, useUIStore)
public/                  Static production assets (logo, hero imagery, product visuals)
docs/                    System strategy, API plans, and project guidelines
```

---

## 3. Data Layer & Service Architecture

Every domain exposes a typed Service class (`ProductService`, `CollectionService`, `CategoryService`, `HomepageService`, `NavigationService`, `JournalService`, `LoyaltyService`) validated with Zod schemas.

UI components consume Services rather than raw data files, ensuring zero UI changes when replacing mock data providers with real Supabase / BigSeller REST endpoints in Phase 3.
