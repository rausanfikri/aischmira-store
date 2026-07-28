# AISCHMIRA.STORE — Layout Review
**Sprint:** 2C — Luxury Layout System + Collection Experience
**Date:** July 28, 2026

---

## 1. Global Container Architecture

All website pages consume standardized container width tiers to guarantee visual balance:

- **Ultra Wide Sections (`container-ultrawide`)**: `max-width: 1600px` (Used for full-bleed showcase banners)
- **Hero Containers (`container-hero`)**: `max-width: 1440px` (Used for header navigation & hero sections)
- **Main Content (`container-custom`)**: `max-width: 1280px` (Used for collection & product grids)
- **Editorial Content (`container-editorial`)**: `max-width: 960px` (Used for stories & concierge panels)
- **Prose Reading (`prose-reading`)**: `max-width: 760px` (720–760px reading line-width limit)

All containers enforce `margin-inline: auto` (`mx-auto`).

---

## 2. Horizontal Padding Verification

- **Desktop (>=1024px)**: `80px` (`px-[80px]` / `lg:px-[80px]`)
- **Laptop (768px – 1023px)**: `64px` (`md:px-[64px]`)
- **Tablet (640px – 767px)**: `40px` (`sm:px-[40px]`)
- **Mobile (<640px)**: `24px` (`px-6`)

No content touches the viewport edges on any device resolution.
