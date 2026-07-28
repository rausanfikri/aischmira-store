# AISCHMIRA.STORE — Technical Summary
**Sprint:** 2C — Luxury Layout System + Collection Experience
**Date:** July 28, 2026

---

## 1. Architectural Architecture & Stack

- **Framework**: Next.js App Router (Turbopack) with TypeScript strict mode.
- **Styling**: Tailwind CSS v4 registered with `@theme` tokens in `styles/globals.css`.
- **Layout System**: Reusable `Container` component (`components/layout/Container.tsx`) with 5 container variants (`ultrawide`: 1600px, `hero`: 1440px, `default`/`main`: 1280px, `editorial`: 960px, `prose`: 760px).
- **Data Domain**: Typed dataset `data/collections.ts` exporting `ExtendedCollection` domain models.
- **State Management**: Client state via Zustand (`useShopStore`, `useUIStore`).

---

## 2. Compilation & Build Metrics

- **`npm run lint`**: 0 errors, 0 warnings.
- **`npm run build`**: 59 static routes compiled cleanly in 2.2s.
