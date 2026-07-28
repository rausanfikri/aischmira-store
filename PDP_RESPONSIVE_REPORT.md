# AISCHMIRA.STORE — PDP Responsive Report
**Sprint:** 2D.4 — Luxury Product Detail Experience
**Date:** July 28, 2026

---

## Responsive Breakpoints

| Breakpoint | Gallery | Info Panel | Sections |
|---|---|---|---|
| Desktop (≥1024px) | 7/12 split, sticky info | 5/12, sticky top-32 | container-editorial, 2-col grid |
| Tablet (768-1023px) | Full width stacked | Full width | container-editorial, stacked |
| Mobile (<768px) | Full width, horizontal thumbs | Full width | container-editorial, single col |

## Key Responsive Details

- **Gallery**: Side thumbnails on desktop → bottom horizontal scroll on mobile
- **Product Info**: `lg:sticky lg:top-32` only on desktop
- **Editorial**: 2-column Designer Notes + Material grid collapses to single column
- **Designed For**: 3-column grid → stacked on mobile
- **Delivery cards**: 3-column → stacked on mobile
- **Action buttons**: Row on desktop → column on mobile
- **Sticky WhatsApp CTA**: Visible only on mobile (`md:hidden`)
- **Breadcrumb**: Wrapped with `flex-wrap` for small screens
