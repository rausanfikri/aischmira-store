# AISCHMIRA.STORE — PDP Performance Notes
**Sprint:** 2D.4 — Luxury Product Detail Experience
**Date:** July 28, 2026

---

## Image Optimization

- All images use `next/image` with `fill` and proper `sizes` props
- Gallery main image: `sizes="(max-width: 768px) 100vw, 60vw"`
- Thumbnails: `sizes="72px"` (exact render size)
- Lightbox: `sizes="(max-width: 768px) 100vw, 80vw"`
- Priority loading only on first image (`priority={activeIdx === 0}`)

## Layout Stability

- Gallery uses fixed aspect ratio `aspect-[3/4]` on mobile
- Desktop gallery uses `md:h-[80vh]` fixed height
- Thumbnails have explicit `w-[72px] h-[96px]` dimensions
- No CLS from dynamic content loading

## Animation Performance

- Framer Motion `AnimatePresence` with `mode="wait"` prevents layout shift
- CSS-only hover zoom (`group-hover:scale-[1.06]`) — GPU accelerated
- Scroll-triggered `whileInView` with `viewport={{ once: true }}` — fires once
- Cubic bezier easing used for smooth 60fps animations

## JavaScript Optimization

- Accordion is client-only (Radix) but lightweight
- RecentlyViewed uses `requestAnimationFrame` for async state updates
- Zustand store with `persist` middleware — minimal re-renders
- No unnecessary useEffect chains
