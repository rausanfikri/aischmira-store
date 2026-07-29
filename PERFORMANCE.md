# AISCHMIRA.STORE — Enterprise Performance Optimization & Core Web Vitals Budget

## Purpose
This document specifies performance budgets, image optimization policies, dynamic bundling rules, and Core Web Vitals targets for AISCHMIRA.STORE.

## Scope
Applies to all pages, media assets, client components, font loading, and Turbopack production builds across desktop and mobile devices.

## Overview
As an editorial luxury flagship, AISCHMIRA balances high-resolution fashion photography with lightning-fast page loading. Performance is treated as a foundational luxury feature.

---

## Core Web Vitals Targets

| Metric | Target | Description | Optimization Strategy |
| :--- | :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | `< 1.8s` | Main hero image or heading render time | `next/image` with `priority` & WebP/AVIF formats |
| **INP** (Interaction to Next Paint) | `< 100ms` | Input responsiveness on clicks & toggles | Passive scroll listeners & Zustand lightweight state |
| **CLS** (Cumulative Layout Shift) | `< 0.05` | Visual stability during page load | Fixed aspect ratios & CSS Grid layout structures |
| **TTFB** (Time to First Byte) | `< 200ms` | Server response latency | Vercel Edge Network & static route pre-rendering |

---

## Performance Optimization Rules

### 1. Image Optimization Standards
- **Use `next/image`**: Plain `<img>` tags are strictly prohibited for content imagery.
- **Explicit Dimensions or `fill`**: Always supply explicit `width`/`height` or `fill` inside a sized parent container to prevent layout shift.
- **Selective `priority`**: Reserve `priority` exclusively for above-the-fold hero imagery. All below-the-fold imagery must lazy-load automatically.
- **Allowed Hosts**: Keep remote image hostnames explicit in `next.config.ts`.

### 2. Client Bundle & Dynamic Imports
- **Minimize `"use client"`**: Keep client component sub-trees as small as possible.
- **Dynamic Import Overlays**: Heavy interactive drawers (`SearchModal`, `CartDrawer`, `MobileNav`) must be loaded dynamically using `next/dynamic` with `ssr: false` where appropriate.

### 3. Font Optimization
- Use `next/font/google` with `display: "swap"` for Inter and Cormorant Garamond to ensure zero render-blocking text layout shift.

---

## Implementation & Code Example

```typescript
// Dynamic Loading of Heavy Client Drawers in Navbar.tsx
import dynamic from "next/dynamic";

const SearchModal = dynamic(() => import("@/components/layout/SearchModal"), { ssr: false });
const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });
```

---

## Examples
See `app/layout.tsx` for optimal Google Font loading configuration.

## Future Improvements
- Implement automated WebP/AVIF image format conversion in asset upload pipeline.
- Audit bundle size impact using Next.js `@next/bundle-analyzer`.

## References
- `AGENTS.md`
- `DESIGN_SYSTEM.md`
- `CODING_STANDARDS.md`

## Change History
- **2026-07-29**: Created performance optimization and Core Web Vitals budget specification.
