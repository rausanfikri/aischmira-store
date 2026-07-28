# AISCHMIRA.STORE — Design System Report
**Sprint:** 2D.6 — Design System QA & UI Freeze
**Date:** July 28, 2026

---

## 1. Core Token Specifications

### Color Tokens (`styles/theme.css`)
- **Primary**: `#D9AE20` (`--color-primary`)
- **Primary Hover**: `#C08E18` (`--color-primary-hover`)
- **Secondary**: `#D5A12A` (`--color-secondary`)
- **Accent**: `#D19D28` (`--color-accent`)
- **Background**: `#FAF8F3` (`--color-background`)
- **Surface**: `#FFFFFF` (`--color-surface`)
- **Text Primary**: `#2B2B2B` (`--color-text`)
- **Text Secondary**: `#6D6D6D` (`--color-text-secondary`)
- **Border**: `#ECE8DE` (`--color-border`)
- **WhatsApp Concierge**: `#25D366` (`--color-whatsapp`)

### Typography Scale
- **Display**: `Cormorant Garamond italic`, `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`, `font-light`
- **H1**: `Cormorant Garamond italic`, `text-4xl md:text-5xl lg:text-6xl`, `font-light`
- **H2**: `Cormorant Garamond italic`, `text-3xl md:text-4xl lg:text-5xl`, `font-light`
- **H3**: `Cormorant Garamond italic`, `text-2xl md:text-3xl`, `font-light`
- **Body**: `Inter`, `text-xs md:text-sm font-light leading-relaxed`
- **Caption / Eyebrow**: `Inter`, `text-[9px] md:text-[10px] tracking-[0.25em]–[0.4em] uppercase text-text/50 font-medium`
- **Button Labels**: `Inter`, `text-[10px] tracking-[0.2em] uppercase font-medium`

### Spacing Scale (`rem` / `px`)
- `8px` (`--spacing-8` / `0.5rem`)
- `16px` (`--spacing-16` / `1rem`)
- `24px` (`--spacing-24` / `1.5rem`)
- `32px` (`--spacing-32` / `2rem`)
- `48px` (`--spacing-48` / `3rem`)
- `64px` (`--spacing-64` / `4rem`)
- `96px` (`--spacing-96` / `6rem`)
- `120px` (`--spacing-120` / `7.5rem`)
- `160px` (`--spacing-160` / `10rem`)

### Button Variants (`components/ui/Button/buttonVariants.ts`)
- **Primary**: `bg-primary text-background hover:opacity-90`
- **Secondary**: `bg-secondary text-text hover:bg-accent`
- **Outline**: `border border-border bg-transparent hover:bg-accent`
- **Ghost**: `hover:bg-accent hover:text-text`
- **WhatsApp Concierge**: `bg-whatsapp text-white hover:opacity-90`
