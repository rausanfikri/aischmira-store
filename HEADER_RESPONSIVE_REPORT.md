# AISCHMIRA.STORE — Header Responsive Report
**Sprint:** 2D.1 — Header Stabilization
**Date:** July 28, 2026

---

## 1. Responsive Viewport Adaptation Matrix

| Viewport Tier | Breakpoint | Header Height | Logo Height | Navigation Mode |
| --- | --- | --- | --- | --- |
| **Mobile** | `<768px` | `60px` | `36px` (`h-[36px]`) | Mobile Slide-Over Drawer (`MobileNav.tsx`) |
| **Tablet / Laptop** | `768px – 1023px` | `64px` (scrolled) / `80px` (unscrolled) | `40px` (scrolled) / `52px` (unscrolled) | Desktop Navigation Bar |
| **Desktop / Wide** | `>=1024px` | `64px` (scrolled) / `80px` (unscrolled) | `40px` (scrolled) / `52px` (unscrolled) | Desktop Navigation Bar + Collections/Categories Mega Menus |

---

## 2. Layout Shift & Text Truncation Prevention

- Logo image uses Next.js `<Image>` with explicit width/height boundaries and CSS `w-auto object-contain` to prevent aspect ratio distortion or Cumulative Layout Shift (CLS).
- Left navigation (Mega Menus) and right icon controls (Search, Account, Wishlist, Cart) use min-width constraints (`min-w-[120px] md:min-w-[220px]`) to maintain perfect alignment.
