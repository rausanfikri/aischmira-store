# AISCHMIRA.STORE — Layout Standardization Report
**Sprint:** 2D.2 — Site Layout Standardization
**Date:** July 28, 2026

---

## 1. Executive Summary

Sprint 2D.2 standardized the layout container max-width tiers, horizontal padding scale, vertical section spacing, and container alignment across `SiteLayout`, `Header`, `Footer`, `Container`, and `globals.css` without modifying any page content.

---

## 2. Standardized Layout Matrix

| Layout Element | Max-Width | Horizontal Padding | Alignment | Utility Class / Component |
| --- | --- | --- | --- | --- |
| **Hero Container** | `1440px` | Desktop: 80px, Laptop: 64px, Tablet: 40px, Mobile: 24px | Centered (`mx-auto`) | `.container-hero` / `<Container variant="hero">` |
| **Main Container** | `1280px` | Desktop: 80px, Laptop: 64px, Tablet: 40px, Mobile: 24px | Centered (`mx-auto`) | `.container-custom` / `.container-main` |
| **Reading Container** | `760px` | Desktop: 80px, Laptop: 64px, Tablet: 40px, Mobile: 24px | Centered (`mx-auto`) | `.container-reading` / `.prose-reading` |

---

## 3. Padding & Spacing Scale Standard

### Horizontal Side Padding Scale
- **Desktop (>=1024px)**: `80px` (`5rem` / `lg:px-[80px]`)
- **Laptop (768px – 1023px)**: `64px` (`4rem` / `md:px-[64px]`)
- **Tablet (640px – 767px)**: `40px` (`2.5rem` / `sm:px-[40px]`)
- **Mobile (<640px)**: `24px` (`1.5rem` / `px-6`)

### Header & Footer Alignment
- Both `Header.tsx` and `Footer.tsx` consume `.container-hero` (`max-w-[1440px]`) with identical responsive padding, guaranteeing 100% margin alignment between site chrome and content boundaries.

---

## 4. Verification

- **`npm run lint`**: 0 errors, 0 warnings.
- **`npm run build`**: 59 static pages compiled cleanly in 1.1s.
