# AISCHMIRA.STORE — Enterprise Coding Standards & Architecture Rules

**Version:** 1.1.0 (Sprint F2.2)  
**Source of Truth:** `AGENTS.md`, `ARCHITECTURE.md`, `tsconfig.json`  

---

## 1. Project Organization & Directory Boundaries

All source code must reside within established architecture directories:

```text
app/                 App Router routes, pages, and layout
components/          UI presentation components
core/                Core platform configuration, constants, env & utilities
domain/              Domain models, contracts, and Zod schemas
application/         Application Layer (Use Cases)
infrastructure/      Infrastructure Layer (DI Container & Repositories)
presentation/        Presentation Layer entry point
shared/              Enterprise Shared Foundation (errors, types, logger, env, validation, utils, constants, hooks, providers)
data/                Typed prototype content & static datasets
docs/                System specifications, API plans, & guidelines
hooks/               Custom React hooks
lib/                 Pure helpers, formatters, and theme access utilities
providers/           React Context Providers
services/            Domain business logic, service layers, and Zod schemas
store/               Zustand global client state stores
styles/              Tailwind CSS v4 & theme design tokens (`theme.css`, `globals.css`)
types/               TypeScript domain interfaces index
```

---

## 2. Naming Conventions

- **React Components**: `PascalCase.tsx` (e.g., `ProductCard.tsx`, `HeaderShell.tsx`).
- **Services & Classes**: `PascalCase.ts` (e.g., `ProductService`, `ConsoleLogger`).
- **Error Classes**: `PascalCase` ending with `Error` (e.g., `ValidationError`, `InventoryError`).
- **Utilities & Helpers**: `camelCase.ts` (e.g., `formatCurrency`, `slugify`).
- **Hooks**: `camelCase.ts` starting with `use` (e.g., `useScrollPosition.ts`).
- **Constants**: `PascalCase` object export (e.g., `Routes`, `Breakpoints`, `Currency`, `StorageKeys`).

---

## 3. Shared Foundation Rules

1. **Centralized Errors**: Always throw or return typed errors derived from `AppError` in `@/shared/errors`.
2. **Result Pattern**: Prefer returning `Result<T, AppError>` for domain service methods instead of throwing uncaught exceptions.
3. **Logger Abstraction**: Never use `console.log` directly in domain logic or services. Inject or use `logger` from `@/shared/logger`.
4. **Environment Variables**: Never access `process.env` directly outside of `@/shared/env`. Always use `env.client` or `getServerEnv()`.
5. **Feature Flags**: Check features using `isFeatureEnabled('flag')` from `@/shared/config/features`.
6. **Zod Validation**: Use reusable schema helpers from `@/shared/validation` (`slugSchema`, `emailSchema`, `idSchema`).
