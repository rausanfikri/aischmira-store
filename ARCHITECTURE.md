# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 29, 2026 (Sprint F2.2)  
**Status:** Shared Foundation & Clean Architecture Established  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint F2.2**, the enterprise shared foundation was established across `shared/` and `core/` to provide generic, highly reusable infrastructure for error handling, Result patterns, environment validation, logging, feature flags, constants, validation helpers, and domain types without adding business logic or altering visual UI presentation.

---

## 2. Directory Architecture

```text
app/                     App Router routes, pages, and root layout
components/              UI Components (layout, sections, products, collections, account, search, ui)
core/                    Core configuration, constants, env & utilities
  config/                Centralized configuration (brand, contact, navigation, social, seo, analytics, features)
  constants/             Global application constants
  env/                   Environment variable definitions & Zod validation
  logger/                Centralized logger re-exports
  types/                 Core utility types
  utils/                 Core pure utility functions
domain/                  Domain layer entry points & contracts
application/             Application Layer (Use Cases)
infrastructure/          Infrastructure Layer (DI container & Repositories)
presentation/            Presentation Layer metadata
shared/                  Enterprise Shared Foundation
  errors/                Centralized AppError hierarchy (ValidationError, RepositoryError, InventoryError, etc.)
  types/                 Result<T, E> pattern & common generic types (Nullable, Optional, ApiResponse, etc.)
  logger/                Logger abstraction (ConsoleLogger, RemoteLogger stub, CompositeLogger)
  env/                   Client & server environment validation (Zod)
  config/                Strongly-typed Feature Flags (isFeatureEnabled)
  validation/            Reusable Zod validation schemas (slugSchema, emailSchema, etc.)
  utils/                 Pure utilities (currency formatters, date, string, array, object, seo)
  helpers/               Shared helper functions re-exports
  constants/             Shared constants (Routes, Breakpoints, Currency, Locale, StorageKeys, ImageSizes)
  hooks/                 Generic cross-cutting React hooks
  providers/             Future provider stubs (Theme, Analytics, Authentication)
  lib/                   Shared core wrappers
data/                    Typed static content and dataset mappings
types/                   Domain type definitions and index
lib/                     Pure utilities & token access helpers
styles/                  Global CSS and design token source
store/                   Zustand global client state stores
public/                  Static production assets
docs/                    System specifications, API plans, & guidelines
```

---

## 3. Shared Foundation Infrastructure

### 3.1 Centralized Error System (`shared/errors/`)
Standardized error class hierarchy rooted in `AppError`:
- `ValidationError` (400)
- `AuthenticationError` (401)
- `NotFoundError` (404)
- `InventoryError` (409)
- `CheckoutError` (422)
- `RepositoryError` / `ConfigurationError` / `NetworkError` (500/503)

### 3.2 Result Pattern (`shared/types/Result.ts`)
Functional return type `Result<T, E = AppError>` for explicit error handling:
- `success<T>(value)`
- `failure<E>(error)`
- Utility functions: `isSuccess`, `isFailure`, `mapResult`, `flatMapResult`, `unwrapOr`.

### 3.3 Logger Abstraction (`shared/logger/`)
Structured logging via `ILogger`:
- `ConsoleLogger` for development
- `RemoteLogger` stub for future Sentry / Supabase log ingestion
- `CompositeLogger` for multi-target logging.

### 3.4 Environment Validation (`shared/env/`)
Safe, typed environment variables parsed with Zod:
- `serverEnvSchema` (validates database keys, secrets)
- `clientEnvSchema` (validates `NEXT_PUBLIC_*` flags)

### 3.5 Feature Flags (`shared/config/features.ts`)
Centralized, strongly typed feature toggles accessed via `isFeatureEnabled(flag)`.
