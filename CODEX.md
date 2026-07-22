# AISCHMIRA.STORE
## Codex Operating Manual

This document defines the operational workflow for Codex in the AISCHMIRA.STORE repository.

`AGENTS.md` remains the primary project guideline. When this manual and `AGENTS.md` differ, follow `AGENTS.md` and the user’s explicit request. This file describes how Codex should inspect, implement, verify, and report work.

---

## Project Mission

Act as a Senior Full Stack Engineer. The responsibility is not only to generate code, but also to:

- Maintain the existing architecture.
- Improve maintainability.
- Prevent technical debt.
- Preserve design consistency.
- Keep documentation accurate.
- Prioritize quality, accessibility, and long-term scalability over speed.

AISCHMIRA.STORE is a premium fashion brand website, not a marketplace. Every technical and UI decision should support a minimal, elegant, editorial, luxury experience.

---

## Before Starting Any Task

Complete this read-only orientation before changing files:

1. Read `AGENTS.md`.
2. Read `README.md`.
3. Read `ROADMAP.md` if it exists.
4. Read `TASKS.md` if it exists.
5. If the root roadmap/task files do not exist, use the repository equivalents (currently `docs/02_ROADMAP.md` and `docs/19_BACKLOG.md`) and explicitly note the fallback.
6. Read all relevant documentation under `docs/` before coding.
7. Inspect the current architecture, working tree, and related implementation.

Never assume a route, dependency, component, hook, asset, or architectural pattern exists. Verify it in the repository first.

---

## Development Principles

Always:

- Prefer reusable code.
- Reuse existing components, utilities, hooks, and types.
- Keep business logic separate from presentation.
- Prefer composition over inheritance.
- Keep changes small, focused, and reversible.

Never:

- Duplicate components.
- Duplicate business logic.
- Duplicate utility functions.
- Duplicate design tokens.
- Introduce a new architecture without approval.
- Modify unrelated files.

---

## Project Architecture

Follow the existing Next.js App Router architecture:

```text
app/                 App Router routes and root layout
components/          Reusable layout, UI, and composed sections
data/                Typed prototype/static data
hooks/               Shared React hooks
lib/                 Pure utilities and token helpers
services/            Future API/service integrations
styles/              Global CSS and design tokens
types/               Shared domain types
public/              Static assets
docs/                Product and engineering documentation
```

- Use server components by default.
- Add `"use client"` only for state, effects, event handlers, browser APIs, or client-only libraries.
- Keep route files thin and compose them from reusable components.
- Keep UI components from fetching external APIs directly; future requests belong in `services/`.
- Keep prototype content in `data/` and domain models in `types/`.
- Read the relevant Next.js guide in `node_modules/next/dist/docs/` before changing framework-sensitive code.

---

## UI and Brand Development

AISCHMIRA is a luxury fashion brand experience. The homepage should guide discovery through:

```text
Brand Story → Collections → Products → Lookbook → WhatsApp CTA
```

Do not design the homepage like a marketplace. Favor:

- Minimal, elegant, editorial composition.
- Large, intentional whitespace.
- Balanced typography and image composition.
- Calm, restrained animation.
- Content first; interface second.

Before creating a component:

1. Search existing components.
2. Extend an existing component when the behavior is reusable.
3. Create a new component only when it has a clear responsibility.
4. Keep it typed, reusable, accessible, and easy to test.

---

## Design Rules

Always use the project’s design tokens, semantic colors, typography system, spacing scale, shadow scale, and radius scale. The source of truth is `styles/theme.css`, registered through `styles/globals.css`.

Never hardcode:

- Colors.
- Spacing.
- Shadows.
- Border radii.
- Font sizes when an existing typography utility/token applies.

Use the project fonts and existing Tailwind v4 token setup. Do not add a competing token system or change existing tokens without approval.

---

## Data and Assets

Separate data by domain (for example: products, collections, categories, brand content, navigation, and footer data). Never embed product or collection data directly in components.

Approved static assets belong under `public/`, preferably in purpose-specific folders such as:

```text
public/logo/
public/images/
public/products/
public/collections/
public/hero/
public/lookbook/
public/instagram/
public/icons/
```

- Use `next/image` for content images.
- Prefer local, approved assets.
- Never add random external placeholder URLs for production content.
- Keep temporary placeholders clearly documented and replace them before release.
- Do not commit secrets, private customer data, or credentials as assets.

---

## Coding Rules

Use:

- TypeScript strict mode.
- Functional components and hooks.
- Named exports, except where a Next.js convention requires a default export.
- Absolute imports through the `@/*` alias.
- Small, focused files.
- Descriptive names and narrow, meaningful comments.

Avoid:

- `any` unless unavoidable and documented.
- Long files and deep nesting.
- Magic values.
- Broad lint suppressions.
- Unnecessary client components.
- Duplicate logic or dependencies.

---

## Performance

Optimize for real user experience:

- Use `next/image` with correct dimensions or a correctly sized `fill` parent.
- Use `priority` only for above-the-fold images; let other images lazy-load.
- Prefer server components.
- Use dynamic imports for genuinely heavy client-only features when measurement supports it.
- Keep animation, effects, and third-party bundles purposeful.
- Prefer AVIF/WebP for approved assets where the pipeline supports them.
- Keep bundle size and Core Web Vitals in mind.

---

## Accessibility

Always provide:

- Semantic HTML and logical heading order.
- Accessible names for icon-only controls (`aria-label` or visible text).
- Keyboard navigation and visible focus states.
- WCAG AA-friendly contrast.
- Useful `alt` text for informative images and empty `alt` for decorative images.
- Associated form labels and clear validation/error messages.
- Escape-to-close and appropriate focus behavior for dialogs, drawers, and menus.
- Reduced-motion consideration for non-essential animation.

---

## SEO

Support the Next.js Metadata API and, where appropriate:

- Open Graph metadata.
- Twitter Cards.
- Canonical URLs.
- Structured data.
- Clean, stable URLs.
- Sitemap and robots behavior before production launch.
- Descriptive, optimized images.

Follow `docs/23_SEO_STRATEGY.md` for URL and metadata conventions.

---

## Documentation

When architecture or workflow changes, update the relevant documentation. Update `README.md`, roadmap/task documents, and related files under `docs/` when they are in scope.

If a referenced document does not exist, do not invent its contents. State the missing document and use the closest existing repository source (for example, `docs/02_ROADMAP.md` or `docs/19_BACKLOG.md`).

---

## Git Workflow

- Keep commits small and focused.
- Use Conventional Commits.
- Do not commit unrelated changes.
- Inspect `git status` before and after work.
- Never reset, discard, or overwrite user changes without explicit permission.
- Follow the branch and pull-request rules in `docs/12_GIT_WORKFLOW.md`.

Examples:

```text
feat(home): add editorial hero
fix(navbar): resolve logo rendering
docs(codex): update workflow
refactor(button): simplify variants
```

---

## Build and Verification

Before considering a task finished, run:

```text
npm run build
npm run lint
```

Run `npm test` when a test script is available. Fix every TypeScript, ESLint, build, and test error introduced by the change. If an external service (such as Google Fonts) prevents a check in the sandbox, retry through the approved environment or report the limitation clearly.

For UI changes, also check responsive behavior, keyboard access, focus states, image loading, and browser console output when possible.

---

## Definition of Done

A task is complete only when:

- The requested scope is implemented.
- Build passes.
- Lint passes.
- TypeScript has no errors.
- Tests pass when available.
- Responsive behavior is checked for desktop, tablet, and mobile.
- Accessibility is checked.
- No duplicated code or UI was introduced.
- No unrelated files were changed.
- Documentation is updated when required.
- No regression or known introduced warning remains.

---

## When Unsure

Never guess. Inspect the repository, read the relevant documentation, and follow established conventions. When multiple implementations are valid, choose the simplest maintainable and reusable option. If the decision would expand scope or alter architecture/design tokens, ask for direction before proceeding.

---

## Long-Term Goal

Move AISCHMIRA.STORE toward a scalable, maintainable, fast, accessible, SEO-friendly, production-ready premium fashion platform while preserving its editorial identity.

