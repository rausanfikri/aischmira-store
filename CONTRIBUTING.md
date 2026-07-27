# Contributing to AISCHMIRA.STORE

> Guidelines for contributing to the AISCHMIRA digital platform.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/rausanfikri/aischmira-store.git
cd aischmira-store

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |

---

## Development Workflow

### 1. Pick a task

Check [`TASKS.md`](TASKS.md) for the current sprint backlog. Choose a task that is not yet in progress.

### 2. Create a branch

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

### 3. Implement

- Read [`AGENTS.md`](AGENTS.md) and relevant [`docs/`](docs/) before coding.
- Follow the coding standards below.
- Reuse existing components — never duplicate.
- Use design tokens from `styles/theme.css` — never hardcode colors or spacing.

### 4. Verify

```bash
npm run build    # Must pass with zero errors
npm run lint     # Must pass with zero errors or warnings
```

### 5. Commit

Follow the Conventional Commits format (see below).

### 6. Push and create a Pull Request

```bash
git push origin feature/your-feature-name
```

Create a PR targeting `develop`. Include:
- Purpose of the change.
- Files changed.
- Screenshots (if UI change).
- Risks or breaking changes.
- Checklist of Definition of Done items.

---

## Branch Strategy

| Branch | Purpose | Merges to |
| --- | --- | --- |
| `main` | Production. Always stable. | — |
| `develop` | Integration branch. All features merge here first. | `main` |
| `feature/*` | New features. | `develop` |
| `fix/*` | Bug fixes. | `develop` |
| `hotfix/*` | Urgent production fixes. | `main` + `develop` |

**Rules**:
- Never commit directly to `main`.
- Always branch from `develop` for new work.
- Keep branches short-lived — merge frequently.

Full Git workflow → [`docs/12_GIT_WORKFLOW.md`](docs/12_GIT_WORKFLOW.md)

---

## Conventional Commits

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <description>
```

### Types

| Type | Use for |
| --- | --- |
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Visual/formatting change (no logic change) |
| `refactor` | Code restructure (no behavior change) |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `build` | Build system or dependency changes |
| `ci` | CI/CD configuration |
| `chore` | Maintenance tasks |

### Examples

```
feat(hero): add editorial hero section with Framer Motion
fix(navbar): resolve mobile drawer close on navigation
docs(architecture): add component hierarchy diagram
style(footer): adjust social icon spacing
refactor(data): extract product formatter to lib
```

---

## Coding Standards

### TypeScript

- Strict mode enabled — no implicit `any`.
- Use named interfaces and types for domain data. Avoid inline types for shared shapes.
- Do not use `any` unless unavoidable. If used, isolate it and explain the boundary.
- Prefer named exports. Use default exports only where the framework requires them (route `page.tsx`, `layout.tsx`).

### Components

- Prefer functional components and hooks.
- Prefer server components by default. Add `"use client"` only when state, effects, event handlers, or browser APIs require it.
- Keep components small and focused. Extract reusable behavior rather than growing a single file.
- Follow Atomic Design: primitives in `components/ui/`, layout in `components/layout/`, composed page sections in `components/sections/`.

### Styling

- Use design tokens from `styles/theme.css` exclusively.
- Never hardcode colors in components. Use semantic tokens: `text-text`, `bg-primary`, `border-border`, etc.
- Never hardcode spacing when a token or Tailwind utility can express the value.
- Use the project font variables (`--font-inter`, `--font-cormorant`) through existing utilities.

### Imports

- Use absolute imports with the `@/*` alias. Avoid long relative import chains.

```typescript
// ✅ Good
import { Button } from "@/components/ui/Button";
import { productsData } from "@/data/products";

// ❌ Bad
import { Button } from "../../../../components/ui/Button";
```

### Naming

- Use descriptive names. Avoid unexplained abbreviations.
- Component files: PascalCase (`ProductHighlight.tsx`).
- Utility files: camelCase (`formatters.ts`).
- Type files: camelCase (`product.ts`).
- CSS token variables: kebab-case (`--color-primary-hover`).

### Comments

- Keep comments limited to decisions, constraints, and non-obvious behavior.
- Do not narrate obvious code.

---

## Documentation Standards

- Update relevant documentation after any architectural or workflow change.
- Cross-reference between docs rather than duplicating content.
- Use consistent terminology across all documents. See the terminology in [`README.md`](README.md) and [`ARCHITECTURE.md`](ARCHITECTURE.md) as the reference.
- Follow the existing heading hierarchy and formatting patterns.
- When referencing files, use relative paths from the repository root.
- Update [`CHANGELOG.md`](CHANGELOG.md) for every release following Keep a Changelog format.

---

## AI Collaboration

This repository is designed for AI-assisted development. AI agents should follow these rules:

1. **Read first.** Read `AGENTS.md`, `README.md`, relevant `docs/` files, and the current implementation before making changes.
2. **Reuse.** Never duplicate components or logic. Check existing primitives before creating new ones.
3. **Tokens only.** Never hardcode colors, spacing, or shadows. Use the design token system.
4. **Small changes.** Prefer the smallest safe change that satisfies the task.
5. **Verify.** Run `npm run build` and `npm run lint` after every change. Do not finish with known errors.
6. **Document.** Update documentation when architecture changes.
7. **Report.** Clearly state what was changed, what was verified, and any remaining risks.

Full AI instructions → [`AGENTS.md`](AGENTS.md)
AI workflow guide → [`docs/25_AI_DEVELOPMENT_WORKFLOW.md`](docs/25_AI_DEVELOPMENT_WORKFLOW.md)

---

## Definition of Done

A task is only complete when every item below is satisfied:

- [ ] Feature works as described in acceptance criteria.
- [ ] `npm run build` passes with zero errors.
- [ ] `npm run lint` passes with zero errors or warnings.
- [ ] TypeScript has zero type errors.
- [ ] New components are reusable and follow Atomic Design.
- [ ] No hardcoded colors or spacing — design tokens only.
- [ ] No duplicated logic or components.
- [ ] Responsive on desktop (≥1024px), tablet (768–1023px), and mobile (<768px).
- [ ] Accessibility checked (ARIA labels, focus states, color contrast).
- [ ] Documentation updated if architecture changed.
- [ ] Existing features remain functional.
- [ ] CHANGELOG updated for release-worthy changes.
