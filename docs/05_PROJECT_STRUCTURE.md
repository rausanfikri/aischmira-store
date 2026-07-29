# Project Structure

AISCHMIRA.STORE uses a clean, domain-oriented architecture for long-term scalability.

```text
app/                 App Router page routes and layouts
components/          Reusable React components
  layout/            Shared chrome and site-wide layout primitives
  ui/                Reusable UI primitives (buttons, drawers, inputs)
  sections/          Composed homepage and editorial sections
  products/          Product-specific UI components
  collections/       Collection-specific UI components

core/                Core platform configuration, constants, env & utilities
  config/            Centralized configuration (brand, contact, navigation, social, seo, analytics, features)
  constants/         Global application constants
  env/               Environment variable definitions and helpers
  logger/            Lightweight logging abstraction
  types/             Core TypeScript utility types
  utils/             Core utility functions

domain/              Domain layer models and schemas
  product/           Product domain entities & contracts
  collection/        Collection domain entities & contracts
  category/          Category domain entities & contracts
  navigation/        Navigation domain entities & contracts

application/         Application Layer (Use Cases)
infrastructure/      Infrastructure Layer (DI container, Repositories, Providers)
presentation/        Presentation Layer Entry Point
shared/              Shared cross-cutting primitives
  types/             Shared types
  constants/         Shared constants
  utilities/         Shared pure helper utilities
  validation/        Shared Zod schema helpers
  errors/            Centralized domain & application error classes

data/                Typed prototype/static content
types/               Shared domain and legacy content types
lib/                 Pure utilities and token access helpers
services/            Domain services and data layer abstractions
styles/              Global CSS and design-token source
public/              Static assets served from the site root
docs/                Architecture decisions, guidelines, and specifications
```