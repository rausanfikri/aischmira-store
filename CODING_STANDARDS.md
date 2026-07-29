# AISCHMIRA.STORE — Enterprise Coding Standards & Architecture Rules

**Version:** 1.0.0  
**Source of Truth:** `AGENTS.md`, `ARCHITECTURE.md`, `tsconfig.json`  

---

## 1. Project Organization & Directory Boundaries

All source code must reside within established architecture directories:

```text
app/                 App Router routes, pages, and layout
components/          UI presentation components
  account/           User account & dashboard views
  collections/       Collection page clients & detail views
  layout/            Site chrome layout & drawers
  products/          Product detail view components
  search/            Search overlay results component
  sections/          Composed homepage editorial sections
  ui/                Reusable UI primitives (Badge, Button, Card, ProductCard, SkeletonLoader)
data/                Typed prototype content & static datasets
docs/                System specifications, API plans, & guidelines
hooks/               Custom React hooks
lib/                 Pure helpers, formatters, and theme access utilities
providers/           React Context Providers
services/            Domain business logic, service layers, and Zod schemas
  domain/            Domain modules (product, collection, category, homepage, navigation, journal, loyalty)
store/               Zustand global client state stores
styles/              Tailwind CSS v4 & theme design tokens (`theme.css`, `globals.css`)
types/               TypeScript domain interfaces index
```

---

## 2. Naming Conventions

- **React Components**: `PascalCase.tsx` (e.g., `ProductCard.tsx`, `HeaderShell.tsx`).
- **Services & Classes**: `PascalCase.ts` (e.g., `ProductService`, `CategoryService`).
- **Hooks**: `camelCase.ts` starting with `use` (e.g., `useScrollPosition.ts`, `useShoppingBag.ts`).
- **Utilities & Modules**: `camelCase.ts` (e.g., `formatters.ts`, `whatsapp.ts`).
- **App Router Routes**: `kebab-case` directory names (e.g., `app/privacy-policy/page.tsx`, `app/collections/[slug]/page.tsx`).
- **Interfaces & Types**: `PascalCase` named interfaces/types (e.g., `Product`, `Collection`, `CartItem`).

---

## 3. Standardized Import Order

All TypeScript and React files must order imports into grouped blocks separated by an empty line:

1. **React & Core Framework**: `react`, `next/link`, `next/image`, `next/navigation`.
2. **Third-Party Libraries**: `framer-motion`, `lucide-react`, `zod`, `clsx`.
3. **Global Providers & State**: `@/providers/*`, `@/store/*`.
4. **Layout & UI Components**: `@/components/*`.
5. **Services & Data Layer**: `@/services/*`, `@/data/*`.
6. **Domain Types & Schemas**: `@/types/*`.
7. **Utilities & Constants**: `@/lib/*`.

> **Note**: Deep relative imports (`../../`) are strictly forbidden. Always use configured path alias `@/*`.

---

## 4. Server vs. Client Components

- **Default to Server Components**: Every page and section component should render on the server by default for fast TTFB and SEO.
- **Explicit `"use client"` Boundary**: Add `"use client"` only at the top of components that require state (`useState`), side-effects (`useEffect`), event handlers (`onClick`), browser APIs (`window`), or client-only libraries (`framer-motion`, `zustand`).

---

## 5. Service Layer, Mappers, and Zod Validation

- **Service Layer**: Business logic, API calls, and mock data lookups must live in domain services under `services/domain/<domain>/service.ts`.
- **Payload Validation**: External payloads or DTOs must be validated using Zod schemas (`services/domain/<domain>/schema.ts`).
- **Mappers**: Raw backend/external payloads must be transformed into clean domain models via mappers (`services/domain/<domain>/mapper.ts`).
- **Zero Direct API Fetching in UI**: UI components must never make raw HTTP calls or read database secrets directly. Components consume typed Services.

---

## 6. Type Safety & Error Handling

- **Strict TypeScript**: `strict: true` is enabled. Zero explicit `any` types allowed.
- **Normalized Error Handling**: Services must return typed, predictable error responses or throw normalized domain errors.
- **Boundary Isolation**: Wrap client interactivity in React Error Boundaries and provide localized loading states (`loading.tsx`, `SkeletonLoader.tsx`).

---

## 7. Performance & Assets

- **Images**: Always use `next/image` with explicit `width`/`height` or `fill`. Use `priority` only for above-the-fold hero imagery.
- **Lazy Loading**: Use `next/dynamic` for heavy client-only drawers or overlays.
- **Asset Rules**: Store production static assets under `public/`. Reference local assets using root-relative paths (`/logo.png`, `/images/hero/hero-bg.png`).

---

## 8. Quality Assurance & Verification

Before completing any task or declaring work ready for merge:

1. Run `npm run lint` — Must pass with 0 errors and 0 warnings.
2. Run `npm run build` — Must compile cleanly and pre-render all static routes.
3. Update documentation (`ARCHITECTURE.md`, `ROADMAP.md`, `TASKS.md`, `CHANGELOG.md`).
