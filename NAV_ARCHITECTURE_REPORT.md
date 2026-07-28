# AISCHMIRA.STORE — Navigation Architecture Report
**Sprint:** 2D.3 — Premium Navigation Experience
**Date:** July 28, 2026

---

## 1. Global Navigation Architecture

The flagship Header serves as the primary navigation hub across all device viewports:

- **Single Baseline Layout**: Left Links (`NavLinks`), Center Brand Mark (`Logo`), Right Icon Actions (`NavIcons`).
- **Global Drawer & Overlay Layer**:
  - `SearchOverlay.tsx` (`useUIStore.searchOpen`)
  - `ShoppingBagDrawer.tsx` (`useUIStore.cartOpen`)
  - `AccountDrawer.tsx` (`useUIStore.accountOpen`)
  - `WishlistDrawer.tsx` (`useUIStore.wishlistOpen`)

---

## 2. Verification

- **`npm run lint`**: 0 errors, 0 warnings.
- **`npm run build`**: 59 static routes compiled cleanly.
