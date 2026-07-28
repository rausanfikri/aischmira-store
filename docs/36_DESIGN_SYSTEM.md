# AISCHMIRA Design System Documentation
**Document Version:** 1.0.0
**Source of Truth:** `styles/theme.css`, `styles/globals.css`, `lib/theme.ts`

---

## 1. Executive Summary & Brand Principles

AISCHMIRA is an editorial, luxury fashion flagship digital experience. The design system enforces:

- **Whitespace as Luxury**: Large breathing room (padding 24–128px), clean margins, and non-cluttered layouts.
- **Typography-Led Branding**: Cormorant Garamond for editorial headings; Inter for UI controls and body prose.
- **Restrained Gold Accent Palette**: Primary `#D9AE20`, Secondary `#D5A12A`, and Accent Gold `#D19D28` used intentionally for accents, active states, and focal points.
- **Zero Marketplace Aesthetics**: Pure luxury flagship experience with subtle Framer Motion transitions and WCAG AA accessibility compliance.

---

## 2. Color System & Semantic Tokens

### Core Palette
- **Brand Primary (`--color-primary`)**: `#D9AE20`
- **Primary Hover (`--color-primary-hover`)**: `#C08E18`
- **Primary Light (`--color-primary-light`)**: `#F9F2D8`
- **Primary Foreground (`--color-primary-foreground`)**: `#FFFFFF`
- **Secondary (`--color-secondary`)**: `#D5A12A`
- **Accent Gold (`--color-accent`)**: `#D19D28`

### Semantic Surface & Text Tokens
- **Background (`--color-background`)**: `#FAF8F3` (Warm Cream background)
- **Surface (`--color-surface`)**: `#FFFFFF` (Pure White cards & panels)
- **Surface Hover (`--color-surface-hover`)**: `#F7F4EC`
- **Text Primary (`--color-text`)**: `#2B2B2B` (Charcoal)
- **Text Secondary (`--color-text-secondary`)**: `#6D6D6D`
- **Text Muted (`--color-text-muted`)**: `#8C8C8C`
- **Border (`--color-border`)**: `#ECE8DE`
- **Divider (`--color-divider`)**: `#EAE6DC`

### Feedback & State Tokens
- **Success (`--color-success`)**: `#16A34A` | Light: `#F0FDF4`
- **Warning (`--color-warning`)**: `#EA580C` | Light: `#FFF7ED`
- **Danger (`--color-danger`)**: `#DC2626` | Light: `#FEF2F2`
- **Info (`--color-info`)**: `#0EA5E9` | Light: `#F0F9FF`
- **Focus Ring (`--color-focus`)**: `#D9AE20`
- **Overlay (`--color-overlay`)**: `rgba(43, 43, 43, 0.6)`
- **WhatsApp Concierge (`--color-whatsapp`)**: `#25D366` | Hover: `#20BD5A`

---

## 3. Typography Scale

The design system implements a 14-step typography scale:

| Token Name | Class | Font Family | Size | Line Height | Letter Spacing | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| **Display** | `.text-display` | Cormorant Garamond | 5.0rem (80px) | 1.05 | -0.02em | Hero titles, editorial quotes (italic) |
| **H1** | `.text-h1` | Cormorant Garamond | 4.0rem (64px) | 1.1 | -0.02em | Page title headers |
| **H2** | `.text-h2` | Cormorant Garamond | 3.0rem (48px) | 1.2 | -0.01em | Section titles |
| **H3** | `.text-h3` | Cormorant Garamond | 2.0rem (32px) | 1.3 | Normal | Subsection headers & card titles |
| **H4** | `.text-h4` | Cormorant Garamond | 1.5rem (24px) | 1.4 | Normal | Accordion headers & modal titles |
| **Title** | `.text-title` | Cormorant Garamond | 1.25rem (20px) | 1.4 | Normal | Compact component titles |
| **Subtitle** | `.text-subtitle` | Inter | 1.125rem (18px) | 1.6 | 0.01em | Subheadings |
| **Body Large** | `.text-body-lg` | Inter | 1.125rem (18px) | 1.8 | 0.01em | Intro paragraphs |
| **Body** | `.text-body` | Inter | 1.0rem (16px) | 1.8 | 0.02em | Standard prose |
| **Body Small** | `.text-body-sm` | Inter | 0.875rem (14px) | 1.7 | 0.03em | Secondary body copy |
| **Caption** | `.text-caption` | Inter | 0.75rem (12px) | 1.5 | 0.05em | Microcopy, timestamps |
| **Label** | `.text-label` | Inter | 0.625rem (10px) | 1.4 | 0.25em | Uppercase badges & category tags |
| **Button** | `.text-button` | Inter | 0.75rem (12px) | 1.4 | 0.20em | Uppercase button CTA labels |
| **Small** | `.text-small` | Inter | 0.6875rem (11px) | 1.4 | Normal | Legal notes, disclaimers |

---

## 4. Spacing System

Standardized 13-step spacing scale (base 16px):

| Token | Rem | Px Value | Primary Use Cases |
| --- | --- | --- | --- |
| `--spacing-4` | 0.25rem | 4px | Micro gaps, badge padding |
| `--spacing-8` | 0.50rem | 8px | Button icon gaps, tight list spacing |
| `--spacing-12` | 0.75rem | 12px | Compact padding, input vertical padding |
| `--spacing-16` | 1.00rem | 16px | Standard component padding |
| `--spacing-20` | 1.25rem | 20px | Card internal padding |
| `--spacing-24` | 1.50rem | 24px | Container padding, section item gaps |
| `--spacing-32` | 2.00rem | 32px | Grid gap, modal padding |
| `--spacing-40` | 2.5rem | 40px | Section headers gap |
| `--spacing-48` | 3.00rem | 48px | Sub-section spacing |
| `--spacing-64` | 4.00rem | 64px | Mobile section vertical padding |
| `--spacing-80` | 5.00rem | 80px | Tablet section vertical padding |
| `--spacing-96` | 6.00rem | 96px | Desktop section vertical padding |
| `--spacing-128` | 8.00rem | 128px | Hero & large editorial section separation |

---

## 5. Border Radius & Shadow System

### Radius Scale
- **`--radius-xs`**: `0.125rem` (2px) — Focus rings & subtle borders
- **`--radius-sm`**: `0.25rem` (4px) — Buttons, inputs, luxury cards
- **`--radius-md`**: `0.375rem` (6px) — Modals & dropdown menus
- **`--radius-lg`**: `0.50rem` (8px) — Drawers & overlays
- **`--radius-xl`**: `0.75rem` (12px) — Large cards
- **`--radius-2xl`**: `1.50rem` (24px) — Floating pills
- **`--radius-full`**: `9999px` — Circular badges & icon buttons

### Shadow System
- **`--shadow-sm`**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **`--shadow-md`**: `0 4px 6px -1px rgb(0 0 0 / 0.08)`
- **`--shadow-lg`**: `0 10px 15px -3px rgb(0 0 0 / 0.08)`
- **`--shadow-xl`**: `0 20px 25px -5px rgb(0 0 0 / 0.08)`
- **`--shadow-luxury`**: `0 4px 24px -4px rgba(217, 174, 32, 0.15)` (Ambient gold glow)
- **`--shadow-hover`**: `0 12px 32px -8px rgba(43, 43, 43, 0.12)` (Elevated hover shadow)

---

## 6. Motion Guidelines

- **Duration Scales**:
  - `Fast`: `150ms` (Button hover, dropdown toggle, focus outline)
  - `Normal`: `300ms` (Modal open, drawer slide, toast entrance)
  - `Slow`: `500ms` (Editorial hero image drift, page transitions)
- **Ease Function**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Accessibility**: Standardized `@media (prefers-reduced-motion: reduce)` rule disables non-essential animations for users with motion sensitivity.

---

## 7. Responsive Breakpoints

| Name | Breakpoint | Target Devices |
| --- | --- | --- |
| **Mobile** | `480px` | Smart phones (portrait & landscape) |
| **Tablet** | `768px` | iPads, tablets |
| **Desktop** | `1024px` | Laptops & desktop displays |
| **Wide** | `1280px` | Large widescreen monitors |

---

## 8. Accessibility Requirements

1. **Focus State**: All interactive controls must display a `2px solid var(--color-primary)` focus ring on keyboard navigation.
2. **Contrast**: Text contrast ratios adhere to WCAG AA standards (minimum 4.5:1 for body copy).
3. **Touch Targets**: Icon-only buttons must maintain a minimum target area of `44x44px` or `48x48px`.
4. **Semantic HTML**: Mandatory usage of `<nav>`, `<main>`, `<header>`, `<footer>`, `<aside>`, `<article>`, and `aria-label` attributes.

---

## 9. Usage Rules & Examples

### Correct Code Example (Primary Button)
```tsx
import { cn } from "@/lib/utils";

export function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase py-4 px-8 rounded-sm",
        "hover:bg-primary-hover transition-colors shadow-sm focus-visible:outline-none"
      )}
    >
      {children}
    </button>
  );
}
```

### Prohibited Code Patterns
- ❌ Hardcoded color values (e.g. `#D9AE20`, `#2B2B2B`) directly in component JSX files. Always use semantic Tailwind color classes (`bg-primary`, `text-text`, `bg-surface`).
- ❌ Ad-hoc arbitrary pixel padding (e.g. `p-[17px]`). Always use project spacing tokens (`p-4`, `p-6`, `p-8`).
