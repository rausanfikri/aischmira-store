# AISCHMIRA.STORE — Header Architecture Report
**Sprint:** 2D.5A — Premium Header Navigation Final (Pre UI Freeze)
**Date:** July 28, 2026

---

## 1. Executive Summary

Sprint 2D.5A rebuilt the global Header architecture using a mathematically sound CSS Grid layout. This eliminates Flexbox logo shifts when navigation item widths change or dropdown states update.

## 2. CSS Grid Architecture

```css
display: grid;
grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
align-items: center;
width: 100%;
```

### Column Specifications
1. **Left Column (`minmax(0, 1fr)`)**: Holds the Mobile Navigation drawer toggle (`lg:hidden`) and Desktop Navigation links (`NavLinks.tsx` / `DesktopNav.tsx`) containing **Collections ▼** and **Categories ▼** side-by-side.
2. **Center Column (`auto`)**: Holds the `Logo` component. Because the left and right columns share equal `minmax(0, 1fr)` proportions, the center column is mathematically guaranteed to remain perfectly centered relative to the container/viewport.
3. **Right Column (`minmax(0, 1fr)`)**: Holds action icon controls (`NavIcons.tsx`) with `justify-end` alignment (Search, Account, Wishlist, Shopping Bag).

## 3. Visual & Aesthetic Standards

- **Logo Dimension Scale**: Desktop 52px (top) &rarr; 44px (scrolled); Mobile 36px.
- **Header Heights**: 84px (top) &rarr; 72px (scrolled with solid background & backdrop blur).
- **Zero Layout Shift**: Smooth height scaling and background transitions without flickering.
