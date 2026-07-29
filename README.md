# AISCHMIRA.STORE — Enterprise Digital Flagship Platform

> *Crafted to comfort. Designed to stand out.*

---

## 1. Purpose
This repository contains the source code, architecture specifications, design tokens, and domain services for **AISCHMIRA.STORE** — the official digital flagship platform for AISCHMIRA luxury fashion.

## 2. Scope
Covers all web client applications, server components, domain service layers, static prototype data models, design tokens, and integration pipelines across the AISCHMIRA digital ecosystem.

## 3. Overview
AISCHMIRA.STORE is built as an editorial luxury flagship experience. It is **not** a commodity e-commerce marketplace. The platform combines high-end visual storytelling, generous whitespace, Cormorant Garamond typography, and a personalized WhatsApp Concierge Commerce flow.

| Attribute | Detail |
| :--- | :--- |
| **Framework** | Next.js App Router (v16.2.10) |
| **Language** | TypeScript (v5 strict mode) |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| **Validation** | Zod Runtime Schema Validation |
| **State** | Zustand Global Client Stores |
| **Checkout** | WhatsApp Concierge Commerce (`+62 851-2134-4848`) |
| **Deployment** | Vercel Platform ([aischmira.store](https://aischmira.store)) |

---

## 4. Architecture

The codebase follows an enterprise domain-oriented architecture separating UI presentation, domain business logic, and data storage:

```text
app/                 App Router routes, pages, and root layout
components/          UI Presentation Components
  account/           User account & dashboard views
  collections/       Collection page views
  layout/            Site chrome layout (Header/, Footer, Drawers, Modals)
  products/          Product detail view components
  search/            Search overlay results
  sections/          Composed homepage editorial sections
  ui/                Reusable UI primitives (Badge, Button, Card, ProductCard, SkeletonLoader)
data/                Typed prototype static content
docs/                Enterprise specifications, API plans, and guidelines
hooks/               Custom React hooks
lib/                 Pure helpers, formatters, and theme access utilities
providers/           React Context Providers
services/            Domain business logic, service layers, and Zod schemas
  domain/            Domain modules (product, collection, category, homepage, navigation, journal, loyalty)
store/               Zustand state stores (useShopStore, useUIStore)
styles/              Global CSS and design token source (theme.css, globals.css)
types/               TypeScript domain interfaces index
public/              Static production assets (logo, hero imagery, product visuals)
```

---

## 5. Implementation & Getting Started

### Prerequisites
- Node.js `^20.0.0` or higher
- npm `^10.0.0` or higher

### Installation & Local Development
```bash
# Clone repository
git clone https://github.com/rausanfikri/aischmira-store.git
cd aischmira-store

# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Assurance Commands
```bash
# Run ESLint validation
npm run lint

# Run production build compilation
npm run build

# Start production server
npm run start
```

---

## 6. Examples & Documentation Index

Comprehensive technical specifications are available in the repository index:

- **[DESIGN_SYSTEM.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/DESIGN_SYSTEM.md)** — Typography, spacing, color tokens, radii, shadows, glassmorphism, UI controls, motion, and accessibility rules.
- **[CODING_STANDARDS.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/CODING_STANDARDS.md)** — Engineering standards, import ordering, RSC rules, service layers, and Zod validation.
- **[DATA_MODEL.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/DATA_MODEL.md)** — Domain entity definitions (Product, Collection, Category, Customer, Loyalty, Inventory, Pricing).
- **[API_STRATEGY.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/API_STRATEGY.md)** — Multi-layer sync architecture (`BigSeller OMS` → `Sync Worker` → `Supabase` → `Next.js` → `Website`).
- **[DECISIONS.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/DECISIONS.md)** — Architecture Decision Records (ADRs).
- **[BIGSELLER_SYNC.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/BIGSELLER_SYNC.md)** — BigSeller OMS integration specification.
- **[SUPABASE_SCHEMA.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/SUPABASE_SCHEMA.md)** — PostgreSQL schema & RLS security strategy.
- **[WHATSAPP_CHECKOUT.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/WHATSAPP_CHECKOUT.md)** — WhatsApp Concierge checkout message protocol.
- **[LOYALTY_SYSTEM.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/LOYALTY_SYSTEM.md)** — Member loyalty points, tiers, and referral engine.

---

## 7. Future Improvements
- **Sprint F2**: CMS Ready Architecture & Dummy Data Refactor.
- **Phase 3**: Supabase PostgreSQL integration & BigSeller real-time stock sync.
- **Phase 4**: WhatsApp Concierge Automation & Customer Loyalty Dashboard.

---

## 8. References
- [AGENTS.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/AGENTS.md)
- [ROADMAP.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/ROADMAP.md)
- [CHANGELOG.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/CHANGELOG.md)
- [TASKS.md](file:///c:/Users/rausa/OneDrive/Documents/GitHub/aischmira-store/TASKS.md)

---

## 9. Change History
- **2026-07-29 (Sprint F1)**: Complete enterprise refactoring, root log cleanup, and documentation suite expansion.
- **2026-07-28 (Sprint 2E)**: CMS Ready Architecture & Domain Data Layer implementation.
