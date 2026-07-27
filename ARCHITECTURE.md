# AISCHMIRA.STORE — Architecture

> Technical architecture reference for the AISCHMIRA digital platform.

---

## Project Structure

```
aischmira-store/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout, fonts, metadata, global CSS
│   ├── page.tsx                  # Homepage (composition of sections)
│   └── favicon.ico               # Browser tab icon
│
├── components/
│   ├── common/                   # Shared cross-cutting components
│   ├── layout/                   # Site chrome and layout primitives
│   │   ├── AnnouncementBar.tsx   # Top banner for promotions
│   │   ├── Container.tsx         # Max-width content container
│   │   ├── FloatingWhatsApp.tsx  # Floating WhatsApp CTA button
│   │   ├── Footer.tsx            # Site footer with links and social
│   │   ├── Grid.tsx              # Responsive grid primitive
│   │   ├── Navbar.tsx            # Desktop + mobile navigation
│   │   ├── Section.tsx           # Section wrapper with padding tokens
│   │   ├── Stack.tsx             # Vertical/horizontal stack layout
│   │   └── index.ts              # Barrel export
│   ├── product/                  # Product-specific composed components
│   ├── sections/                 # Homepage and editorial page sections
│   │   ├── Hero.tsx              # Full-width editorial hero
│   │   ├── FeaturedCollection.tsx
│   │   ├── ProductHighlight.tsx  # Best Collection grid
│   │   ├── BrandStory.tsx        # Editorial brand narrative
│   │   ├── Lookbook.tsx          # Masonry image grid
│   │   ├── InstagramPreview.tsx  # Social media grid
│   │   └── Newsletter.tsx        # Email subscription form
│   └── ui/                       # Atomic UI primitives
│       ├── Badge/
│       ├── Button/
│       ├── Card/
│       ├── Divider/
│       ├── Feedback/             # Spinner, Toast
│       ├── Form/                 # Input, Textarea, Select, Label, etc.
│       ├── Overlay/              # Modal, Drawer
│       └── Typography/           # Heading, Text
│
├── data/                         # Typed static/prototype content
│   ├── collections.ts
│   ├── footer.ts
│   ├── homepage.ts               # Hero, lookbook, instagram data
│   ├── navigation.ts
│   ├── products.ts
│   ├── socials.ts
│   └── testimonials.ts
│
├── docs/                         # Extended project documentation
│
├── hooks/                        # Custom React hooks
│
├── lib/                          # Pure utilities
│   ├── formatters.ts             # Price and date formatting
│   ├── string.ts                 # String manipulation helpers
│   ├── theme.ts                  # Theme token access helpers
│   └── utils.ts                  # General utilities (cn, clsx merge)
│
├── public/                       # Static assets
│   ├── logo/                     # Brand logo variants
│   ├── images/                   # Content images by category
│   │   ├── hero/
│   │   ├── products/
│   │   ├── collections/
│   │   ├── lookbook/
│   │   ├── instagram/
│   │   └── banner/
│   └── fonts/                    # Self-hosted fonts (if any)
│
├── services/                     # Future API/service integrations
│
├── styles/                       # Design token source of truth
│   ├── theme.css                 # Token definitions (colors, spacing, etc.)
│   └── globals.css               # Tailwind registration and base styles
│
└── types/                        # Shared domain and content types
    ├── collection.ts
    ├── content.ts
    ├── index.ts
    ├── layout.ts
    └── product.ts
```

---

## Data Flow

The prototype uses a unidirectional data flow with static data. The architecture is designed so that swapping static data for API responses requires changes only in the data/service layer — not in the presentation components.

```
┌──────────────────────────────────────────────────────────────┐
│                        App Router                            │
│                  (routes, layout, metadata)                   │
│                                                              │
│   page.tsx imports and composes section components:           │
│   Hero → FeaturedCollection → ProductHighlight → BrandStory  │
│   → Lookbook → InstagramPreview → Newsletter                 │
├──────────────────────────────────────────────────────────────┤
│                     Section Components                        │
│        (composed views — import data and UI primitives)       │
├──────────────────────────────────────────────────────────────┤
│                     UI Primitives Layer                       │
│        (Button, Card, Badge, Form, Typography, etc.)         │
├──────────────────────────────────────────────────────────────┤
│                   Layout Components Layer                     │
│            (Navbar, Footer, Container, Section)              │
├──────────────────┬───────────────────────────────────────────┤
│   Data Layer     │       Service Layer (future)              │
│   data/*.ts      │       services/*.service.ts               │
│   (static)       │       (WooCommerce, BigSeller, CRM)       │
├──────────────────┴───────────────────────────────────────────┤
│                   Domain Types Layer                          │
│                      types/*.ts                              │
├──────────────────────────────────────────────────────────────┤
│                  Design Token Layer                           │
│           styles/theme.css → styles/globals.css              │
│                  → Tailwind v4 @theme                        │
└──────────────────────────────────────────────────────────────┘
```

### Current flow (Prototype)

```
data/*.ts  →  section component  →  UI primitive  →  rendered HTML
```

### Future flow (Production)

```
External API  →  services/*.service.ts  →  section component  →  UI primitive  →  rendered HTML
```

The key constraint: **UI components never fetch external APIs directly.** All external access goes through the `services/` layer, which normalizes responses into the domain types consumed by the UI.

---

## Component Hierarchy

### Atomic Design

The project follows a layered Atomic Design approach:

| Layer | Location | Examples | Description |
| --- | --- | --- | --- |
| **Atoms** | `components/ui/*` | Button, Badge, Input, Spinner | Smallest reusable primitives |
| **Molecules** | `components/ui/*` | Form group (Label + Input + Message) | Composed atomic combinations |
| **Organisms** | `components/layout/*` | Navbar, Footer | Complex, self-contained UI regions |
| **Templates** | `app/layout.tsx` | Root layout | Page structure with slots |
| **Pages** | `app/page.tsx` | Homepage | Composed from sections and organisms |

### Sections (Page Compositions)

Sections live in `components/sections/` and are purpose-built compositions that combine primitives with data to form a complete page region. They are not generic — they represent specific editorial content blocks.

```
Homepage Composition Order:
  1. Hero
  2. FeaturedCollection
  3. ProductHighlight
  4. BrandStory
  5. Lookbook
  6. InstagramPreview
  7. Newsletter
```

---

## Server Components vs Client Components

| Type | When to use | Marker |
| --- | --- | --- |
| **Server Component** | Default. Static content, data fetching, metadata, no user interaction. | No directive needed |
| **Client Component** | State (`useState`), effects (`useEffect`), event handlers (`onClick`), browser APIs, Framer Motion animations. | `"use client"` at top of file |

### Current component boundaries

| Component | Type | Reason |
| --- | --- | --- |
| `app/layout.tsx` | Server | Root layout, metadata, fonts |
| `app/page.tsx` | Server | Static composition of sections |
| `Hero.tsx` | Client | Framer Motion animations |
| `Navbar.tsx` | Client | Scroll detection, mobile drawer state |
| `Footer.tsx` | Client | Image `onError` fallback state |
| `FeaturedCollection.tsx` | Client | Framer Motion animations |
| `ProductHighlight.tsx` | Client | Framer Motion animations |
| `BrandStory.tsx` | Client | Framer Motion animations |
| `Lookbook.tsx` | Client | Framer Motion animations |
| `InstagramPreview.tsx` | Client | Framer Motion animations |
| `Newsletter.tsx` | Client | Form state, submission handler |
| `FloatingWhatsApp.tsx` | Client | Framer Motion hover animation |
| `AnnouncementBar.tsx` | Client | Close/dismiss state |

**Rule**: Do not pass non-serializable values (functions, class instances) from server components to client components.

---

## Services Layer

The `services/` directory is reserved for future external integrations. Currently it contains only a `README.md` placeholder.

### Planned services

| Service | Source | Purpose |
| --- | --- | --- |
| `product.service.ts` | WooCommerce REST API | Product catalog |
| `collection.service.ts` | WooCommerce REST API | Collection grouping |
| `customer.service.ts` | CRM API | Customer profiles |
| `cart.service.ts` | WooCommerce REST API | Shopping cart |
| `order.service.ts` | WooCommerce REST API | Order management |
| `inventory.service.ts` | BigSeller API | Stock levels |

Each service will:
1. Make HTTP requests to the external API.
2. Handle errors and normalize the response.
3. Return data typed to the domain models in `types/`.

Full API plan → [`docs/13_API_PLAN.md`](docs/13_API_PLAN.md)
Database plan → [`docs/14_DATABASE_PLAN.md`](docs/14_DATABASE_PLAN.md)

---

## Utilities

Pure, side-effect-free helpers live in `lib/`:

| File | Purpose |
| --- | --- |
| `utils.ts` | `cn()` — class merging via `clsx` + `tailwind-merge` |
| `formatters.ts` | Price formatting (`Rp`), date formatting |
| `string.ts` | Slug generation, truncation, capitalization |
| `theme.ts` | Programmatic access to design token values |

---

## Theme System

### Design Token Architecture

```
styles/theme.css          ← Source of truth for all tokens
       │
       ▼
styles/globals.css        ← Imports theme.css, registers tokens
       │                     with Tailwind v4 via @theme {}
       ▼
Tailwind utilities        ← bg-primary, text-text, etc.
       │
       ▼
Components                ← Consume via Tailwind classes or
                             CSS variables (var(--color-primary))
```

### Token Categories

| Category | Examples | File |
| --- | --- | --- |
| **Color palette** | `--color-primary-50` through `--color-primary-900` | `theme.css` |
| **Semantic colors** | `--color-primary`, `--color-background`, `--color-text` | `theme.css` |
| **Spacing** | `--spacing-4` through `--spacing-120` | `theme.css` |
| **Radius** | `--radius-sm` through `--radius-full` | `theme.css` |
| **Shadow** | `--shadow-sm`, `--shadow-soft`, `--shadow-floating` | `theme.css` |
| **Transition** | `--transition-fast`, `--transition-normal`, `--transition-slow` | `theme.css` |
| **Z-index** | `--z-base` through `--z-toast` | `theme.css` |
| **Container** | `--container-max`, `--container-padding` | `theme.css` |

### Rules

- **Never hardcode colors** in component markup. Use semantic tokens.
- **Never hardcode spacing** when a token or Tailwind utility can express the value.
- If a new token is genuinely needed, add it to `styles/theme.css` and document the reason.
- Gold is a limited accent. Do not use it as a full-page background.

Full design system reference → [`docs/04_DESIGN_SYSTEM.md`](docs/04_DESIGN_SYSTEM.md)

---

## Responsive Strategy

The site follows a **desktop-first** responsive approach.

| Breakpoint | Width | Layout |
| --- | --- | --- |
| Desktop | ≥ 1024px | Full multi-column grid, 1280px container |
| Tablet | 768–1023px | Adapted grid, full-width container |
| Mobile | < 768px | Single column, mobile navigation drawer |

### Section Padding

| Viewport | Vertical padding |
| --- | --- |
| Desktop | 120px (7.5rem) |
| Tablet | 96px (6rem) |
| Mobile | 72px (4.5rem) |

These values are applied through the `.section-padding` utility class defined in `styles/globals.css`.

### Responsive patterns

- Navbar collapses to a hamburger-triggered drawer on mobile.
- Product grids adapt: 4-col → 2-col → 1-col.
- Collection grids adapt: 3-col → 2-col → 1-col.
- Footer stacks vertically on mobile with centered social icons.
- Hero text and CTAs center vertically with responsive font scaling.

Full UI/UX guidelines → [`docs/15_UI_UX_GUIDELINES.md`](docs/15_UI_UX_GUIDELINES.md)

---

## Performance Strategy

| Technique | Implementation |
| --- | --- |
| **Image optimization** | `next/image` with `fill`, `priority` for above-the-fold, lazy-load for rest |
| **Font optimization** | `next/font/google` with `display: "swap"`, subset to Latin |
| **Code splitting** | Automatic per-route via App Router |
| **Server components** | Default; reduces client JS bundle |
| **Dynamic imports** | For heavy client-only features when warranted |
| **Turbopack** | Used in dev for fast compilation |
| **Static generation** | All current routes are statically prerendered |

### Performance budget

| Metric | Target |
| --- | --- |
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## Accessibility Strategy

| Technique | Implementation |
| --- | --- |
| **Semantic HTML** | `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>` |
| **Heading hierarchy** | Single `<h1>` per page, logical `<h2>`–`<h6>` |
| **ARIA labels** | All icon-only controls have `aria-label` |
| **Focus states** | `focus-visible` outlines on all interactive elements |
| **Keyboard navigation** | Tab order, Escape to close overlays |
| **Color contrast** | WCAG AA minimum for all text |
| **Alt text** | Descriptive for informative images, empty for decorative |
| **Reduced motion** | Respect `prefers-reduced-motion` media query |

---

## Deployment Architecture

```
┌─────────────────────────────────────────────┐
│                  GitHub                      │
│              (Source Control)                 │
├──────────────┬──────────────────────────────┤
│    main      │    develop / feature/*       │
│  (production)│    (preview deployments)      │
├──────────────┴──────────────────────────────┤
│                  Vercel                       │
│           (Build & Deploy Platform)          │
│                                              │
│   • Automatic deploys on push               │
│   • Preview URLs for every PR               │
│   • Edge network (CDN)                       │
│   • Static prerendering                      │
│   • Environment variables                    │
└──────────────────────────────────────────────┘
```

| Branch | Vercel Environment |
| --- | --- |
| `main` | Production (`aischmira.store`) |
| `develop` | Preview / Staging |
| `feature/*`, `fix/*` | Preview (per-PR) |

Deployment flow → [`docs/12_GIT_WORKFLOW.md`](docs/12_GIT_WORKFLOW.md)
Release plan → [`docs/18_RELEASE_PLAN.md`](docs/18_RELEASE_PLAN.md)
