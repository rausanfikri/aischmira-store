# AISCHMIRA.STORE — Architecture Decision Records

> This document captures the rationale behind key architectural decisions for the AISCHMIRA digital platform.
>
> Each record follows a consistent format: **Context**, **Decision**, **Rationale**, and **Consequences**.

---

## ADR-001: Next.js as Framework

**Date**: 2026-07

### Context

AISCHMIRA needs a modern web framework that supports:
- Server-side rendering for SEO.
- Static site generation for performance.
- React component model for UI composition.
- Image optimization for a visually rich fashion site.
- Easy deployment to Vercel.

### Decision

Use **Next.js** (currently v16 with App Router and Turbopack).

### Rationale

- Next.js is the industry standard for production React applications.
- Built-in support for SSR, SSG, ISR, and static prerendering covers current and future data-fetching needs.
- `next/image` provides automatic image optimization — critical for a fashion brand with many product photographs.
- `next/font` handles font optimization without layout shift.
- Vercel (the deployment platform) is built by the same team, ensuring first-class support.
- Strong TypeScript integration and community ecosystem.

### Consequences

- The team must follow App Router conventions (file-based routing, server/client component boundaries).
- Upgrading Next.js major versions requires testing all routes and middleware.

---

## ADR-002: App Router over Pages Router

**Date**: 2026-07

### Context

Next.js offers two routing paradigms: the legacy Pages Router (`pages/`) and the modern App Router (`app/`).

### Decision

Use the **App Router** exclusively. Do not introduce a Pages Router.

### Rationale

- App Router is the recommended default for new Next.js projects.
- Server Components reduce client-side JavaScript bundle — important for performance on mobile devices.
- Nested layouts allow shared UI (Navbar, Footer) without prop drilling.
- The Metadata API provides a type-safe way to manage SEO per route.
- `loading.tsx`, `error.tsx`, and `not-found.tsx` conventions give clean error-handling patterns.

### Consequences

- All route UI lives under `app/`. No `pages/` directory.
- Developers must understand server vs. client component boundaries.
- Some third-party libraries may not yet be fully compatible with RSC.

---

## ADR-003: Tailwind CSS v4

**Date**: 2026-07

### Context

The project needs a styling approach that is fast to develop, consistent, and integrable with a design token system.

### Decision

Use **Tailwind CSS v4** via `@tailwindcss/postcss`.

### Rationale

- Utility-first approach accelerates UI development without writing custom CSS files per component.
- Tailwind v4 supports CSS-native `@theme {}` registration, allowing design tokens from `theme.css` to be consumed as Tailwind utilities.
- No separate `tailwind.config.ts` file needed — configuration lives in CSS.
- Excellent tree-shaking: only used classes are included in the production bundle.
- Industry standard for React/Next.js projects.

### Consequences

- All visual values must flow through the design token system, not arbitrary Tailwind values.
- The team must understand Tailwind v4 syntax, which differs from v3 in configuration approach.
- `@tailwindcss/postcss` is required in the PostCSS pipeline.

---

## ADR-004: TypeScript with Strict Mode

**Date**: 2026-07

### Context

The project is developed by a small team augmented with AI agents. Type safety reduces bugs and improves AI code generation quality.

### Decision

Use **TypeScript in strict mode** for all application code.

### Rationale

- Strict mode catches null/undefined errors, implicit `any`, and type mismatches at compile time.
- Domain types (`types/`) provide a single source of truth for data shapes, making refactoring safe.
- AI agents produce more accurate code when types are explicit.
- Type errors are caught during `npm run build` before deployment.

### Consequences

- All files must be `.ts` or `.tsx` — no `.js` files in the application.
- New data shapes must be modeled as named types in `types/` before use in components.
- Occasional type gymnastics may be needed for third-party libraries with poor typings.

---

## ADR-005: Static Data Layer (Prototype Phase)

**Date**: 2026-07

### Context

The prototype needs product, collection, and content data to render UI, but no external API or database exists yet.

### Decision

Use **typed static data files** in `data/` during the prototype phase. Design the component API so that swapping static data for service responses requires no UI changes.

### Rationale

- Development proceeds without waiting for backend infrastructure.
- TypeScript interfaces enforce the same shape that future API responses will follow.
- Static data prerendering makes the prototype fast and deployable without backend dependencies.
- The service layer (`services/`) is architecturally reserved for future API integration.

### Consequences

- Product and collection data must be updated manually in `data/*.ts` during the prototype phase.
- When APIs are introduced, only the data/service layer changes — not the components.
- The `data/` directory becomes obsolete once services are fully implemented.

---

## ADR-006: WhatsApp-First Commerce

**Date**: 2026-07

### Context

AISCHMIRA currently sells through marketplaces and direct communication. The brand values personal customer relationships. Building a full e-commerce checkout is premature for the prototype phase.

### Decision

Route all purchase intent through **WhatsApp Business** with a pre-filled message. No native checkout in the prototype.

### Rationale

- WhatsApp is the dominant business communication channel in Indonesia.
- Personal concierge-style selling reinforces the luxury brand positioning.
- Avoids the complexity of payment gateway integration, cart logic, inventory sync, and order management during the prototype phase.
- The WhatsApp link (`wa.me/6285121344848`) is a zero-infrastructure solution.

### Consequences

- All CTAs (Hero, product cards, footer, floating button) link to WhatsApp.
- No cart, checkout, or payment UI exists in the prototype.
- When native checkout is introduced (Phase 5), CTAs will be updated to the cart flow.
- The WhatsApp URL is centralized as a constant so updating the number requires one change.

---

## ADR-007: Design Token System

**Date**: 2026-07

### Context

A premium fashion brand requires absolute visual consistency. Multiple developers and AI agents work on the codebase.

### Decision

Define all visual values (colors, spacing, shadows, radii, transitions, z-indices) as **CSS custom properties in `styles/theme.css`** and register them with Tailwind v4 in `styles/globals.css`.

### Rationale

- Single source of truth prevents visual drift between components.
- CSS variables are runtime-accessible, enabling future features like dark mode or theme switching.
- Tailwind v4 `@theme {}` registration turns tokens into utility classes (`bg-primary`, `text-text`).
- AI agents can reliably produce consistent code by referencing the token file.
- Token changes propagate automatically to every component.

### Consequences

- Components must never hardcode color, spacing, or shadow values.
- Adding a new token requires updating `theme.css` and documenting the reason.
- Existing tokens should not be changed without approval and a migration plan.

---

## ADR-008: Gold Color Palette (`#D9AE20`)

**Date**: 2026-07

### Context

The brand identity centers on warmth, elegance, and premium quality. The color palette must distinguish AISCHMIRA from generic e-commerce platforms.

### Decision

Use a **gold-based palette** with `#D9AE20` as the primary color, supported by `#D5A12A` (secondary) and `#D19D28` (accent). Backgrounds are off-white, warm white, and cream — never pure black or full-gold.

### Rationale

- Gold communicates luxury, quality, and warmth — core brand attributes.
- The warm neutral palette (off-white, cream) creates a calm, editorial feel similar to Loro Piana, Massimo Dutti, and The Row.
- Restraining gold to accents (CTAs, dividers, badges) prevents visual fatigue and maintains the premium feel.
- `#2B2B2B` as the text color avoids the harshness of pure black while maintaining readability.

### Consequences

- Gold should never be used as a page background or full-width fill.
- The palette is intentionally limited. New accent colors require brand approval.
- WCAG AA contrast must be verified for all gold-on-background combinations.

---

## ADR-009: Editorial Layout Design

**Date**: 2026-07

### Context

AISCHMIRA is a fashion brand, not a marketplace. The website must feel like a luxury boutique — not a product listing page.

### Decision

Use an **editorial layout** with generous whitespace, centered typography, large imagery, and restrained use of UI elements. The design references Loro Piana, Massimo Dutti, Toteme, Max Mara, and The Row.

### Rationale

- Fashion brand websites prioritize visual storytelling over information density.
- Large whitespace directs focus to products and brand narrative.
- Centered section headings and symmetrical layouts create calm and balance.
- Full-width hero images create immediate visual impact.
- This approach clearly differentiates AISCHMIRA from marketplace aesthetics (Shopee, Tokopedia, Amazon).

### Consequences

- Sections use generous vertical padding: 120px (desktop), 96px (tablet), 72px (mobile).
- Content containers are max-width constrained (1280px for grids, 700–800px for editorial text).
- Animations must be subtle and purposeful (250–350ms), never flashy.
- Photography quality must match the editorial standard; placeholder images are acceptable only during development.

---

## ADR-010: Vercel as Deployment Platform

**Date**: 2026-07

### Context

The project needs a deployment platform that supports Next.js, provides preview deployments, and requires minimal DevOps configuration.

### Decision

Deploy to **Vercel**.

### Rationale

- Vercel is built by the creators of Next.js, ensuring first-class framework support.
- Automatic deployments on `git push` with zero configuration.
- Preview deployments for every PR enable visual review before merge.
- Global edge network provides fast asset delivery in Indonesia and worldwide.
- Built-in analytics, monitoring, and environment variable management.
- Free tier is sufficient for the prototype phase.

### Consequences

- Deployment is tied to the Vercel platform.
- Environment variables are managed through the Vercel dashboard.
- If migrating away from Vercel, the build process (`next build`) is standard and portable.

---

## ADR-011: AI-Assisted Development

**Date**: 2026-07

### Context

The project is developed by a small team that leverages AI coding agents for rapid iteration. The codebase must be structured so AI agents produce consistent, correct output.

### Decision

Design the repository to be **AI-friendly** by providing comprehensive instructions (`AGENTS.md`), typed data models, a predictable component architecture, and machine-readable coding standards.

### Rationale

- `AGENTS.md` gives AI agents explicit rules for the project: design tokens, component patterns, testing requirements, and forbidden practices.
- Typed static data and domain types reduce AI hallucination about data shapes.
- Atomic Design with clear folder conventions helps AI agents place new components correctly.
- Conventional Commits and branch naming conventions are simple for AI to follow.
- The "read first, code second" workflow prevents AI agents from making changes that conflict with existing architecture.

### Consequences

- `AGENTS.md` must be kept up to date with any architectural changes.
- Documentation quality directly affects AI output quality.
- Code review remains essential — AI-generated code must be verified by humans.
- The repository's documentation overhead is higher than a non-AI-assisted project, but the productivity gain justifies it.

---

*New decisions should be appended to this document following the same format. Each ADR is numbered sequentially and includes date, context, decision, rationale, and consequences.*
