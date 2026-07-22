# AISCHMIRA.STORE — Agent Instructions

This file is the single source of truth for AI agents working in this repository. Read it before making changes. Repository-specific instructions take precedence over generic framework conventions whenever they do not conflict with the user’s request.

## Project Overview

AISCHMIRA.STORE is a premium fashion brand website for AISCHMIRA.

The product is:

- A premium fashion brand website, not a marketplace.
- An editorial, calm, and luxury digital experience.
- Minimal and whitespace-led, with the product and brand story as the focus.
- Scalable from static prototype data to future service/API integrations.

The current application is a Next.js App Router prototype. Product, collection, navigation, and homepage content currently come from typed static data. Future integrations must preserve the presentation layer and keep external-system concerns behind services.

## Tech Stack

- Next.js App Router, version defined in `package.json`.
- TypeScript with strict mode enabled.
- Tailwind CSS v4 through `@tailwindcss/postcss`.
- Framer Motion for intentional, restrained motion.
- ESLint with the Next.js Core Web Vitals and TypeScript configurations.
- Prettier as the formatting standard when a formatter is introduced or configured.
- Vercel as the intended deployment platform.
- GitHub for source control and review.

Do not assume that a package is available because it is named in this document. Check `package.json` before importing a dependency. Keep dependency additions minimal and explain why they are needed.

## Architecture Principles

- Use the App Router. Route UI belongs under `app/`; do not introduce a Pages Router.
- Build reusable components and never duplicate component implementations.
- Create reusable UI primitives before adding one-off variants when a pattern is likely to recur.
- Follow Atomic Design when it improves discoverability: primitives in `components/ui`, layout primitives in `components/layout`, and composed page sections in `components/sections`.
- Keep business logic, data access, and presentation separate.
- Prefer composition over inheritance.
- Keep components small, focused, and easy to test.
- Keep static content in `data/`, domain types in `types/`, shared pure utilities in `lib/`, and future external/API access in `services/`.
- UI components must not fetch external APIs directly. Use a service layer and map responses into the domain types used by the UI.
- Prefer server components by default. Add `"use client"` only when state, effects, event handlers, browser APIs, or a client-only library require it.
- Preserve server/client boundaries; do not pass non-serializable values from server components to client components.

## App Router Rules

- Read the relevant Next.js guide in `node_modules/next/dist/docs/` before changing framework-sensitive code. This repository may use APIs and conventions that differ from older Next.js versions.
- Use `app/layout.tsx` for root layout, global fonts, global CSS, and site-wide metadata.
- Add route-specific metadata with the Metadata API in the relevant route segment.
- Use `loading.tsx`, `error.tsx`, `not-found.tsx`, and route handlers only when the route needs them; keep their responsibilities local to the route segment.
- Keep route files thin and compose them from reusable components.
- Avoid client-side data fetching for content that can be rendered on the server.
- Add `Suspense` or dynamic loading only where it improves an identified performance or UX issue.

## Design System Rules

The source of truth for visual tokens is `styles/theme.css`, registered for Tailwind in `styles/globals.css`.

- Never hardcode colors in components or page markup. Use semantic tokens such as `primary`, `background`, `surface`, `text`, `border`, `accent`, and state tokens.
- Never hardcode spacing when a spacing token or Tailwind spacing utility can express the value. Follow the project spacing scale.
- Use the project font variables (`--font-inter` and `--font-cormorant`) through the existing typography utilities.
- Use design-token radii and shadows. Do not introduce arbitrary radii or hard, high-contrast shadows without approval.
- Keep the palette restrained and editorial. Gold is a limited accent, not a general-purpose fill.
- Use the existing Tailwind v4 token registration. Do not add a second competing Tailwind configuration or token source.
- If a new token is genuinely needed, add it to the source-of-truth token file and document the reason. Do not change existing design tokens without approval.
- Respect responsive breakpoints and the desktop/tablet/mobile layout guidance in `docs/15_UI_UX_GUIDELINES.md`.
- Use Framer Motion only for purposeful motion. Respect reduced-motion preferences where animation is non-essential.
- Use Lucide React for interface icons. Do not mix icon libraries for the same UI concern; brand/social icons already represented by the existing data may use their established source.

## Code Style

- Prefer functional components and hooks.
- Keep TypeScript strict and model domain data with named interfaces/types.
- Do not use `any` unless unavoidable; if used, isolate it and explain the boundary.
- Prefer named exports for components, utilities, and data modules. Use a default export only where a framework convention requires it, such as a route page or layout.
- Use absolute imports with the `@/*` alias. Avoid long relative import chains.
- Keep files small and focused; extract reusable behavior instead of growing a single component indefinitely.
- Use descriptive names and avoid unexplained abbreviations.
- Keep comments limited to decisions, constraints, or non-obvious behavior; do not narrate obvious code.
- Do not suppress lint rules broadly. If a local suppression is required, keep it narrow and explain the reason.
- Keep user-facing copy, labels, and accessibility text intentional and consistent with the brand voice.

## Folder Rules

Respect the existing architecture; do not create random top-level folders.

```text
app/                 App Router routes and root layout
components/layout/   Shared page layout primitives and site chrome
components/ui/       Reusable UI primitives
components/sections/ Composed homepage and editorial sections
data/                Typed prototype/static content
types/               Shared domain and content types
lib/                 Pure utilities and token access helpers
services/            Future API/service integrations
styles/              Global CSS and design-token source
public/              Static assets served from the site root
```

- Keep related features grouped in their established folder.
- Do not move or rename existing files for convenience without a migration plan.
- Add a README only when a folder needs local architectural guidance; keep it accurate.
- Keep UI components generic. Product-specific composition belongs in sections or feature modules, not in a primitive.

## Data, Types, and Services

- Keep domain models in `types/` and export them through the existing type index where appropriate.
- Keep mock/static data in `data/`; do not duplicate the same product or collection object across components.
- Keep formatting and string helpers pure in `lib/`.
- Components must not embed credentials, API keys, database access, or business-system protocols.
- When API work is introduced, place requests and error normalization in `services/`, follow the response contract in `docs/13_API_PLAN.md`, and keep the UI consuming typed, normalized data.
- Validate external and user input at the boundary. Use the project’s validation dependencies when the feature requires forms or API input.

## Before Completing Any Task

Before declaring a task complete:

1. Read `README.md`, this file, the relevant roadmap/task documents, and the relevant files under `docs/`.
2. Inspect the current implementation and preserve unrelated work.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Resolve all build and lint errors. Do not finish with known errors or warnings that your change introduced.
6. If UI behavior changed, verify responsive behavior, keyboard access, focus states, image loading, and console output.
7. Update relevant documentation after a major architectural or workflow change.
8. Report what was changed, what was verified, and any external limitation (for example, unavailable network services).

Do not add a feature merely because it is listed in the roadmap. Implement only the requested scope.

## Git Rules

- Keep commits small and focused.
- Use clear Conventional Commit messages, for example `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `test:`, or `chore:`.
- Do not modify unrelated files or reformat the repository wholesale.
- Inspect `git status` before and after work.
- Do not reset, discard, or overwrite existing user changes without explicit permission.
- Follow the repository’s branch and pull-request workflow described in `docs/12_GIT_WORKFLOW.md`.

## Performance Rules

- Use `next/image` for content images. Supply meaningful dimensions or `fill` with a correctly sized, positioned parent.
- Use `priority` only for above-the-fold images; allow non-critical images to lazy-load.
- Keep remote image hosts explicit in `next.config.ts`. Prefer approved/local assets over arbitrary remote URLs.
- Use dynamic imports for genuinely heavy client-only features when they improve measured loading behavior.
- Avoid unnecessary client components, effects, re-renders, and third-party bundles.
- Keep animation and image effects within a reasonable performance budget and verify Core Web Vitals where possible.

## Accessibility Rules

- Use semantic HTML and a logical heading hierarchy.
- Give informative images useful `alt` text; use empty `alt` only for truly decorative images.
- Provide accessible names for icon-only controls with `aria-label` or visible labels.
- Preserve keyboard navigation, visible focus states, and Escape-to-close behavior for overlays.
- Do not rely on color alone to communicate state.
- Keep contrast WCAG AA-friendly and respect reduced-motion preferences.
- Forms must have associated labels, useful validation messages, and clear error states.
- Treat dialogs, drawers, menus, and focus management as accessibility features, not only visual effects.

## SEO Rules

- Use the Next.js Metadata API for titles, descriptions, icons, and route-specific metadata.
- Keep Open Graph, Twitter Card, and canonical URL metadata aligned with the page’s actual content.
- Add structured metadata when it is appropriate and supported by the content.
- Use semantic, stable URLs matching the strategy in `docs/23_SEO_STRATEGY.md`.
- Add and verify sitemap and robots behavior before production launch.
- Use descriptive image alt text and optimized image dimensions.

## Assets Rules

- Store approved static assets under `public/` (prefer `public/images/` for imagery and the existing `public/logo/` for brand marks).
- Reference local assets with root-relative URLs such as `/images/example.jpg`.
- Do not add random image URLs or depend on placeholder providers for production content. Any temporary placeholder must be clearly documented and replaced before release.
- Do not commit secrets, private customer data, or credentials as assets.
- Keep asset names descriptive, stable, and web-safe.
- Use the existing asset folders and README guidance before creating new ones.

## Security Rules

- Never commit API keys, passwords, JWT secrets, database credentials, or payment details.
- Read secrets from environment variables on the server; never expose private values to client bundles.
- Validate and sanitize untrusted input. Avoid `dangerouslySetInnerHTML` unless there is a reviewed, sanitized requirement.
- Do not log sensitive information in the browser or server logs.
- Keep authentication, authorization, payment, and external-system access in the appropriate service/backend boundary.

## AI Behaviour

- Read `README.md` first.
- Read the roadmap and task documents that apply; if a requested task file does not exist, state that fact rather than inventing requirements.
- Read the relevant documentation under `docs/` before coding.
- Inspect the existing implementation before proposing architecture.
- Never guess architecture when it can be verified from the repository.
- Never remove existing features or unrelated user work.
- Never change design tokens without approval.
- Do not create new features, routes, services, or dependencies outside the requested scope.
- Prefer the smallest safe change that satisfies the task.
- Always update documentation after a major change.
- Clearly report assumptions, verification results, and remaining risks in the final response.

## Source Documentation

For product, architecture, design, API, security, testing, and release context, consult the relevant document in `docs/`. In particular:

- `docs/05_PROJECT_STRUCTURE.md` for the intended structure.
- `docs/10_ARCHITECTURE.md` for architecture decisions.
- `docs/13_API_PLAN.md` and `docs/14_DATABASE_PLAN.md` for future service/data boundaries.
- `docs/15_UI_UX_GUIDELINES.md` and `docs/21_BRAND_GUIDELINES.md` for visual and brand rules.
- `docs/16_TESTING.md` for QA expectations.
- `docs/17_SECURITY_GUIDELINES.md` for security constraints.
- `docs/23_SEO_STRATEGY.md` for SEO requirements.
- `docs/12_GIT_WORKFLOW.md` for Git and release hygiene.

## Definition of Done

A task is complete only when all conditions below are satisfied.

- Project builds successfully.
- ESLint passes.
- TypeScript has zero errors.
- New components are reusable.
- Documentation is updated when architecture changes.
- No duplicated logic exists.
- No duplicated UI components exist.
- Responsive on Desktop, Tablet, and Mobile.
- Accessibility checked.
- Existing features remain functional.

## Commit Convention

Use Conventional Commits.

Examples:

feat:

fix:

docs:

style:

refactor:

perf:

build:

ci:

test:

chore:

Examples

feat(home): add editorial hero section

fix(button): resolve hover state issue

docs(agents): update AI workflow

## Branch Strategy

Never work directly on production unless explicitly requested.

Preferred branches

main

develop

feature/*

fix/*

hotfix/*

## Documentation Rules

Whenever architecture changes:

Update

README.md

ROADMAP.md

TASKS.md

Relevant docs/

Do not leave documentation outdated.

## Security

Never expose

API Keys

Secrets

Tokens

Passwords

Never commit .env files.

Always use environment variables.

## Testing

Future testing framework.

Vitest

Playwright

React Testing Library

New logic should be easy to test.

## Performance Budget

Optimize images.

Prefer AVIF/WebP.

Avoid unnecessary client components.

Keep bundle size small.

Avoid unnecessary dependencies.

## AI Workflow

Before coding

1.

Read AGENTS.md

2.

Read TASKS.md

3.

Read ROADMAP.md

4.

Read related documentation.

5.

Understand current architecture.

During coding

Reuse existing components.

Never duplicate logic.

Never change design tokens.

Prefer small commits.

After coding

Run

npm run build

npm run lint

Update documentation if needed.

Only then consider the task complete.