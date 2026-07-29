# AISCHMIRA.STORE — Enterprise Design System Specification

**Version:** 1.1.0 (Sprint F2.2)  
**Source of Truth:** `styles/theme.css`, `styles/globals.css`, `shared/constants/breakpoints.ts`, `lib/theme.ts`  

---

## 1. Brand Aesthetics & Principles

AISCHMIRA is an editorial, luxury fashion flagship digital experience. The design system is built around three core principles:

1. **Whitespace as Luxury**: Generous breathing room (padding 24px–128px), clean margins, and centered, un-cluttered layouts.
2. **Typography-Led Branding**: Cormorant Garamond for editorial headings and expressive brand statements; Inter for ultra-legible UI controls, captions, and body prose.
3. **Restrained Gold Accent Palette**: Primary Gold (`#D9AE20`), Secondary Gold (`#D5A12A`), and Accent Gold (`#D19D28`) used intentionally for active states, key CTAs, and editorial highlights — never as full-screen fills.

---

## 2. Color System & Semantic Tokens

### Core Color Palette
- **Brand Primary (`--color-primary`)**: `#D9AE20` (Gold Accent)
- **Primary Hover (`--color-primary-hover`)**: `#C08E18`
- **Primary Light (`--color-primary-light`)**: `#F9F2D8`
- **Primary Foreground (`--color-primary-foreground`)**: `#FFFFFF`
- **Secondary (`--color-secondary`)**: `#D5A12A`
- **Accent Gold (`--color-accent`)**: `#D19D28`

### Semantic Surface & Text Tokens
- **Background (`--color-background`)**: `#FAF8F3` (Warm Cream Background)
- **Surface (`--color-surface`)**: `#FFFFFF` (Pure White Panels & Cards)
- **Surface Hover (`--color-surface-hover`)**: `#F7F4EC`
- **Text Primary (`--color-text`)**: `#2B2B2B` (Charcoal)
- **Text Secondary (`--color-text-secondary`)**: `#6D6D6D`
- **Text Muted (`--color-text-muted`)**: `#8C8C8C`
- **Border (`--color-border`)**: `#ECE8DE`
- **Divider (`--color-divider`)**: `#EAE6DC`

---

## 3. Responsive Breakpoints Constants (`shared/constants/breakpoints.ts`)

- **sm**: `640px` (Mobile landscape)
- **md**: `768px` (Tablet)
- **lg**: `1024px` (Desktop)
- **xl**: `1280px` (Wide Desktop)
- **2xl**: `1536px` (Ultra Wide)

---

## 4. Image Aspect Ratios (`shared/constants/images.ts`)

- **Hero Banner**: `16/9`
- **Product Cards**: `3/4`
- **Thumbnails & Avatars**: `1/1`
