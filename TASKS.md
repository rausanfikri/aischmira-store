# TASKS — AISCHMIRA.STORE

## Completed Sprint: Sprint F1 — Project Cleanup & Refactor
- [x] Full project audit (components, hooks, utilities, assets, duplicate files, dead code, temporary files)
- [x] Removed 70+ temporary `.md` report files from repository root
- [x] Refactored `SiteLayout.tsx` to directly consume `SearchModal` and `CartDrawer`
- [x] Removed unused component wrapper files (`Navbar.tsx`, `MobileNavigation.tsx`, `Navigation.tsx`, `SearchOverlay.tsx`, `ShoppingBagDrawer.tsx`, `Header.tsx`)
- [x] Removed unused UI primitive folders (`components/ui/Divider/`, `components/ui/Feedback/`)
- [x] Removed empty asset folders under `public/images/`
- [x] Created `lib/index.ts` barrel export for all pure utilities
- [x] Audited dependencies in `package.json` (all 15 dependencies confirmed active)
- [x] Updated system documentation (`ARCHITECTURE.md`, `CHANGELOG.md`, `TASKS.md`)
- [x] Verified `npm run lint` (0 errors, 0 warnings)
- [x] Verified `npm run build` (59 static routes compiled cleanly)

## Current Sprint: Sprint F2 — CMS Ready Architecture
- [ ] Prepare domain service layers for external CMS / API connector implementations
- [ ] Implement headless CMS adapter interfaces
- [ ] Establish environment-driven data provider configuration
