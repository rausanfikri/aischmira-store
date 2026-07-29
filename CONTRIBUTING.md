# AISCHMIRA.STORE — Developer Contribution Guidelines

## Purpose
This document provides guidelines, workflow expectations, git conventions, and quality standards for developers contributing to AISCHMIRA.STORE.

## Scope
Applies to all code contributions, feature branches, pull requests, and documentation updates in the AISCHMIRA repository.

## Overview
AISCHMIRA is a luxury fashion brand flagship platform. All contributions must uphold the highest standards of code quality, performance, responsiveness, and brand elegance.

---

## Architecture Rules

1. **Follow AGENTS.md**: `AGENTS.md` is the permanent source of truth for repository rules. Read it before making changes.
2. **Never Duplicate Components**: Prefer composition. UI primitives belong under `components/ui/`, site chrome under `components/layout/`, page sections under `components/sections/`.
3. **Domain Layer Isolation**: Keep data access and business logic inside domain services under `services/domain/`. UI components must consume Services.
4. **Design Tokens Only**: Never hardcode colors or spacing values. Always use semantic design tokens registered in `styles/theme.css` and `styles/globals.css`.

---

## Git Workflow & Conventional Commits

### Branch Strategy
- `main` — Production release branch.
- `develop` — Active development branch.
- `feature/<name>` — Feature development branches.
- `fix/<name>` — Bug fix branches.
- `chore/<name>` — Refactoring and maintenance branches.

### Conventional Commit Format
All commit messages must follow Conventional Commits format:

```text
<type>(<scope>): <short description>
```

**Allowed Types:**
- `feat`: New feature or user capability.
- `fix`: Bug fix.
- `docs`: Documentation updates.
- `style`: Formatting, design token, or styling changes.
- `refactor`: Code restructuring without functional or visual changes.
- `perf`: Performance optimizations.
- `test`: Adding or updating tests.
- `chore`: Build scripts, dependencies, or maintenance.

**Examples:**
- `feat(cart): implement quantity increase event in CartDrawer`
- `fix(header): resolve logo alignment jitter on mobile viewports`
- `docs(agents): update sprint F1 completion report`
- `refactor(lib): create barrel export index for utilities`

---

## Code Review & Definition of Done

Before submitting a Pull Request or declaring a task complete:

- [x] Run `npm run lint` — Zero ESLint errors and warnings.
- [x] Run `npm run build` — Clean compilation and static page generation.
- [x] Tested desktop, tablet, and mobile responsive behavior.
- [x] Verified WCAG AA accessibility & keyboard focus states.
- [x] Updated relevant documentation (`ARCHITECTURE.md`, `CHANGELOG.md`, `TASKS.md`).

---

## Implementation
See `CODING_STANDARDS.md` for complete coding patterns and import rules.

## Examples
Refer to existing domain modules in `services/domain/product/` for reference service/mapper implementations.

## Future Improvements
- Integrate automated Pull Request preview deployment checks on Vercel.
- Enforce git commit message validation via Huskey hooks.

## References
- `AGENTS.md`
- `CODING_STANDARDS.md`
- `docs/12_GIT_WORKFLOW.md`

## Change History
- **2026-07-29**: Updated contribution guidelines to follow standardized enterprise documentation template.
