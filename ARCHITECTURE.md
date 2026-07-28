# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 28, 2026 (Sprint 2E)  
**Status:** CMS & Integration Ready Data Layer  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Zustand. In Sprint 2E, the architecture was upgraded to a domain-oriented Data Layer prepared for BigSeller, Supabase, and Member Loyalty API integrations.

---

## 2. Directory Architecture

```text
app/                     App Router routes and pages
components/              UI Components (layout, sections, products, ui)
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
data/                    Backward-compatible dataset mappings
types/                   Domain type index
styles/                  Global CSS and design token source (theme.css)
store/                   Zustand global stores (useShopStore, useUIStore)
```

---

## 3. Data Layer & Service Architecture

Every domain exposes a typed Service class (`ProductService`, `CollectionService`, `CategoryService`, `HomepageService`, `NavigationService`, `JournalService`, `LoyaltyService`) validated with Zod schemas.

UI components consume Services rather than raw data files, ensuring zero UI changes when replacing mock data providers with real Supabase / BigSeller REST endpoints in Phase 3.
