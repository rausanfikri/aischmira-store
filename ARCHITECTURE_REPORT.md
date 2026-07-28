# AISCHMIRA.STORE — Architecture Report
**Sprint:** 2D — Enterprise Layout Architecture + Product Experience
**Date:** July 28, 2026

---

## 1. Executive Architecture Summary

Sprint 2D successfully refactored the global layout system into a scalable, enterprise-grade architecture. All layout concerns are centralized in `components/layout/SiteLayout.tsx` and wrapped with React context providers in `providers/`.

Key structural additions:
- **`SiteLayout.tsx`**: Single source of truth global layout wrapper composing `AnnouncementBar`, `Header`, `<main>`, `Footer`, `SearchOverlay`, and `ShoppingBagDrawer`.
- **Layout CSS Tokens**: `--announcement-height: 40px`, `--header-height: 88px`, `--header-height-scrolled: 72px`, `--section-spacing`, `--content-width`, `--reading-width` registered in `styles/theme.css`.
- **Decoupled Custom Hooks**: `useScrollPosition.ts`, `useAnnouncement.ts`, `useShoppingBag.ts`, `useSearch.ts`.
