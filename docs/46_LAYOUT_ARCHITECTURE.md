# AISCHMIRA — Enterprise Layout Architecture
**Document ID:** 46_LAYOUT_ARCHITECTURE  
**Date:** July 28, 2026  

---

## 1. Global Layout Architecture

All site page layouts are wrapped by `SiteLayout.tsx` in `app/layout.tsx`.

```tsx
<SiteLayout>
  {children}
</SiteLayout>
```

`SiteLayout.tsx` composes the layout components in strict order:
1. `AnnouncementBar`: 40px sticky dismissible top notification bar.
2. `Header`: Scroll-aware header with logo scaling (48–58px) and sticky positioning.
3. `<main>`: Main route content region.
4. `Footer`: Balanced 5-column luxury footer.
5. Overlays: `SearchOverlay` & `ShoppingBagDrawer`.

---

## 2. Layout CSS Variables

Layout dimensions are governed by CSS variables registered in `styles/theme.css`:
- `--announcement-height: 40px`
- `--header-height: 88px`
- `--header-height-scrolled: 72px`
- `--section-spacing: 96px / 120px / 160px`
- `--content-width: 1280px`
- `--reading-width: 760px`
