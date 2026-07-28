# AISCHMIRA.STORE — Layout Foundation Report
**Sprint:** 2D.2 — Layout Foundation & Footer Refinement
**Date:** July 28, 2026

---

## 1. Global Layout Architecture

The site structure follows a unified hierarchy:
`AnnouncementBar` &rarr; `Header` &rarr; `<main>` &rarr; `Footer`

---

## 2. Standardized Container Tiers

- **Ultra Wide**: `max-w-[1600px]` (`container-ultrawide`)
- **Hero**: `max-w-[1440px]` (`container-hero`)
- **Main Content**: `max-w-[1280px]` (`container-custom` / `container-main`)
- **Reading Content**: `max-w-[760px]` (`container-reading` / `prose-reading`)

---

## 3. Responsive Horizontal Padding Scale

- **Desktop (>=1024px)**: `80px` (`5rem` / `lg:px-[80px]`)
- **Laptop (768px – 1023px)**: `64px` (`4rem` / `md:px-[64px]`)
- **Tablet (640px – 767px)**: `40px` (`2.5rem` / `sm:px-[40px]`)
- **Mobile (<640px)**: `24px` (`1.5rem` / `px-6`)

---

## 4. Verification

- **`npm run lint`**: 0 errors, 0 warnings.
- **`npm run build`**: 59 static routes compiled cleanly.
