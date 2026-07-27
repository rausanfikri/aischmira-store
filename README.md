# AISCHMIRA.STORE

Official website for **AISCHMIRA** — a premium women's fashion brand from Indonesia.

> *Crafted to comfort. Designed to stand out.*

---

## Project Overview

AISCHMIRA.STORE is the digital flagship for the AISCHMIRA fashion brand. It is **not** a marketplace. It is an editorial, luxury brand experience — more akin to Loro Piana, Massimo Dutti, or The Row than to any e-commerce marketplace.

The website currently operates as a **Next.js prototype** backed by typed static data. All purchase intent is directed to **WhatsApp Business** for a personal, concierge-style experience. The architecture is designed so that future integrations (WooCommerce, CRM, analytics) can be introduced behind a service layer without changing the presentation components.

| Attribute | Detail |
| --- | --- |
| **Version** | `0.1.0` (Prototype) |
| **Status** | Active Development |
| **Platform** | Vercel |
| **Domain** | [aischmira.store](https://aischmira.store) |

---

## Vision

To become the leading digital experience for premium Indonesian women's fashion — connecting inspiration, community, and commerce in a single, elegant ecosystem.

## Mission

- Present a world-class shopping experience that reflects the quality and identity of the brand.
- Build lasting relationships with customers through thoughtful design and communication.
- Unify all sales channels under one cohesive digital presence.
- Lay the technical foundation for AISCHMIRA's long-term digital transformation.

---

## Brand Identity

AISCHMIRA's visual language is **warm gold, clean whitespace, and editorial typography**.

| Token | Value | Purpose |
| --- | --- | --- |
| Primary | `#D9AE20` | CTA, buttons, active states |
| Secondary | `#D5A12A` | Supporting brand treatment |
| Accent | `#D19D28` | Dividers, badges, small highlights |
| Background | `#FAFAF8` | Off-white page background |
| Surface | `#FFFFFF` | Cards, navigation, form surfaces |
| Text | `#2B2B2B` | Primary body text |
| Text Secondary | `#6D6D6D` | Metadata, captions |
| Border | `#ECE8DE` | Warm dividers and borders |

Gold is a premium accent — never a dominant fill. The website uses off-white, warm white, and cream surfaces. Avoid pure black or full-gold backgrounds.

**Typography**: Cormorant Garamond (headings) · Inter (body).

Full brand guidelines → [`docs/21_BRAND_GUIDELINES.md`](docs/21_BRAND_GUIDELINES.md)
Full design token reference → [`docs/04_DESIGN_SYSTEM.md`](docs/04_DESIGN_SYSTEM.md)

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss` |
| Motion | Framer Motion |
| Icons | Lucide React · react-icons (social) |
| Forms | React Hook Form + Zod |
| UI Utilities | clsx · tailwind-merge · class-variance-authority |
| Linting | ESLint (Next.js Core Web Vitals + TypeScript) |
| Deployment | Vercel |
| Source Control | GitHub |

Full tech stack details → [`docs/03_TECH_STACK.md`](docs/03_TECH_STACK.md)

---

## Folder Structure

```
aischmira-store/
├── app/                    # App Router — routes, layout, metadata
├── components/
│   ├── common/             # Shared cross-cutting components
│   ├── layout/             # Site chrome: Navbar, Footer, AnnouncementBar
│   ├── product/            # Product-specific composed components
│   ├── sections/           # Homepage and editorial page sections
│   └── ui/                 # Atomic design primitives
│       ├── Badge/
│       ├── Button/
│       ├── Card/
│       ├── Divider/
│       ├── Feedback/
│       ├── Form/
│       ├── Overlay/
│       └── Typography/
├── data/                   # Typed static/prototype content
├── docs/                   # Project documentation
├── hooks/                  # Custom React hooks
├── lib/                    # Pure utilities, formatters, theme helpers
├── public/                 # Static assets (images, logo, fonts, icons)
├── services/               # Future API/service integrations
├── styles/                 # Global CSS and design-token source of truth
│   ├── theme.css           # Token definitions
│   └── globals.css         # Tailwind config and base styles
└── types/                  # Shared domain and content types
```

Full architecture → [`ARCHITECTURE.md`](ARCHITECTURE.md)
Full project structure → [`docs/05_PROJECT_STRUCTURE.md`](docs/05_PROJECT_STRUCTURE.md)

---

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│                 App Router                  │
│          (routes, layouts, metadata)        │
├─────────────────────────────────────────────┤
│              Page Sections                  │
│  (Hero, FeaturedCollection, ProductHighlight │
│   BrandStory, Lookbook, Newsletter, etc.)   │
├─────────────────────────────────────────────┤
│            UI Primitives Layer              │
│  (Button, Card, Badge, Form, Typography)    │
├─────────────────────────────────────────────┤
│         Layout Components Layer             │
│     (Navbar, Footer, AnnouncementBar)       │
├─────────────────────────────────────────────┤
│        Data / Services / Types              │
│  data/ → static    services/ → future API   │
│              types/ → domain models         │
├─────────────────────────────────────────────┤
│           Design Token Layer                │
│   styles/theme.css → styles/globals.css     │
│        → Tailwind v4 @theme {}              │
└─────────────────────────────────────────────┘
```

Key architectural principles:
- **Server components by default.** Add `"use client"` only when state, effects, or browser APIs require it.
- **Composition over inheritance.** Small, focused components that compose into page sections.
- **Separation of concerns.** UI components never fetch APIs directly. All external access goes through `services/`.
- **Design tokens as single source of truth.** All colors, spacing, shadows, and radii are defined in `styles/theme.css` and registered with Tailwind in `styles/globals.css`.

---

## Development Workflow

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Getting Started

```bash
# Clone the repository
git clone https://github.com/rausanfikri/aischmira-store.git
cd aischmira-store

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

### Quality Gates

Every change must pass before merge:

```bash
npm run build   # Zero TypeScript errors, zero build errors
npm run lint    # Zero ESLint errors
```

---

## Deployment

The project deploys to **Vercel** via GitHub integration.

| Branch | Environment |
| --- | --- |
| `main` | Production |
| `develop` | Preview / Staging |
| `feature/*` | Preview (per-PR) |

Deployment flow → [`docs/12_GIT_WORKFLOW.md`](docs/12_GIT_WORKFLOW.md)
Release plan → [`docs/18_RELEASE_PLAN.md`](docs/18_RELEASE_PLAN.md)

---

## AI Workflow

This repository is designed for **AI-assisted development**. AI agents should:

1. Read `AGENTS.md` before making any changes.
2. Read relevant `docs/` files before coding.
3. Inspect existing implementation before proposing architecture.
4. Reuse existing components — never duplicate.
5. Follow the design token system — never hardcode colors or spacing.
6. Run `npm run build` and `npm run lint` after every change.
7. Update documentation when architecture changes.

Full AI workflow → [`docs/25_AI_DEVELOPMENT_WORKFLOW.md`](docs/25_AI_DEVELOPMENT_WORKFLOW.md)
Agent instructions → [`AGENTS.md`](AGENTS.md)

---

## Repository Standards

- **Commits**: Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`, `test:`)
- **Branches**: `main`, `develop`, `feature/*`, `fix/*`, `hotfix/*`
- **TypeScript**: Strict mode, no `any` without justification
- **Styling**: Design tokens only — no hardcoded colors
- **Components**: Named exports, Atomic Design, composition-first
- **Imports**: Absolute imports via `@/*` alias

Contribution guidelines → [`CONTRIBUTING.md`](CONTRIBUTING.md)
Coding standards → [`docs/11_CODING_STANDARDS.md`](docs/11_CODING_STANDARDS.md)

---

## Documentation Index

| Document | Description |
| --- | --- |
| [`AGENTS.md`](AGENTS.md) | AI agent instructions |
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Technical architecture |
| [`CHANGELOG.md`](CHANGELOG.md) | Release history |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Contribution guidelines |
| [`DECISIONS.md`](DECISIONS.md) | Architecture decision records |
| [`ROADMAP.md`](ROADMAP.md) | Long-term development roadmap |
| [`TASKS.md`](TASKS.md) | Product backlog by sprint |
| [`docs/`](docs/) | Full project documentation |

---

## License

This is a private repository. All rights reserved by AISCHMIRA.

---

<p align="center">
  <strong>AISCHMIRA</strong><br>
  <em>Crafted to comfort. Designed to stand out.</em>
</p>
