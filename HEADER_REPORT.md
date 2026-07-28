# AISCHMIRA.STORE — Header Report
**Sprint:** 2D — Enterprise Layout Architecture + Product Experience
**Date:** July 28, 2026

---

## 1. Header Behavior & Transition Matrix

The `Header` component (`components/layout/Header.tsx`) responds dynamically to window scroll events using `useScrollPosition(40)`:

- **Top Position (`scrollY === 0` on Home)**: Transparent background, white header elements over hero photography, logo height `58px`.
- **Scrolled Position (`scrollY > 40px`)**: Warm cream backdrop blur (`bg-background/95 backdrop-blur-md shadow-sm`), logo smoothly scales to `48px` without layout shift.
- **Other Pages**: Solid background with subtle border, preserving consistent visual hierarchy.

---

## 2. Alignment & Proportions

- **Center**: AISCHMIRA flagship logo positioned centered in header grid.
- **Left**: Mega Menu triggers (Collections & Categories), Journal, and About links.
- **Right**: Icon action controls (Search, Account, Wishlist badge, Shopping Bag drawer badge).
