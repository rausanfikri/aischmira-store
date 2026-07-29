# AISCHMIRA.STORE — Enterprise Design System Specification

**Version:** 1.0.0  
**Source of Truth:** `styles/theme.css`, `styles/globals.css`, `lib/theme.ts`  

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

### Feedback & Action Tokens
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

| Token Name | Font Family | Size | Line Height | Letter Spacing | Primary Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | Cormorant Garamond | 5.0rem (80px) | 1.05 | -0.02em | Hero titles & editorial hero quotes (italic) |
| **H1** | Cormorant Garamond | 4.0rem (64px) | 1.1 | -0.02em | Page title headers |
| **H2** | Cormorant Garamond | 3.0rem (48px) | 1.2 | -0.01em | Major section headers |
| **H3** | Cormorant Garamond | 2.0rem (32px) | 1.3 | Normal | Subsection headers & card titles |
| **H4** | Cormorant Garamond | 1.5rem (24px) | 1.4 | Normal | Modal headers & accordion titles |
| **Title** | Cormorant Garamond | 1.25rem (20px) | 1.4 | Normal | Compact block headers |
| **Subtitle** | Inter | 1.125rem (18px) | 1.6 | 0.01em | Section subheadings |
| **Body Large** | Inter | 1.125rem (18px) | 1.8 | 0.01em | Lead editorial paragraphs |
| **Body** | Inter | 1.0rem (16px) | 1.8 | 0.02em | Standard prose |
| **Body Small** | Inter | 0.875rem (14px) | 1.7 | 0.03em | Secondary body copy |
| **Caption** | Inter | 0.75rem (12px) | 1.5 | 0.05em | Timestamps & microcopy |
| **Label** | Inter | 0.625rem (10px) | 1.4 | 0.25em | Uppercase badges & metadata tags |
| **Button** | Inter | 0.75rem (12px) | 1.4 | 0.20em | Uppercase button CTA labels |
| **Small** | Inter | 0.6875rem (11px) | 1.4 | Normal | Disclaimers & copyright footers |

---

## 4. Spacing System

Standardized 13-step spacing scale:

| Token | Rem | Value | Primary Use Cases |
| :--- | :--- | :--- | :--- |
| `--spacing-4` | 0.25rem | 4px | Micro gaps, badge padding |
| `--spacing-8` | 0.50rem | 8px | Button icon gaps, tight list items |
| `--spacing-12` | 0.75rem | 12px | Compact padding, input vertical padding |
| `--spacing-16` | 1.00rem | 16px | Standard card/container padding |
| `--spacing-20` | 1.25rem | 20px | Card internal padding |
| `--spacing-24` | 1.50rem | 24px | Container padding, section item gaps |
| `--spacing-32` | 2.00rem | 32px | Grid gap, modal interior padding |
| `--spacing-40` | 2.50rem | 40px | Section headers gap |
| `--spacing-48` | 3.00rem | 48px | Sub-section vertical spacing |
| `--spacing-64` | 4.00rem | 64px | Mobile section vertical padding |
| `--spacing-80` | 5.00rem | 80px | Tablet section vertical padding |
| `--spacing-96` | 6.00rem | 96px | Desktop section vertical padding |
| `--spacing-128` | 8.00rem | 128px | Hero & large editorial section separation |

---

## 5. Radius & Shadow System

### Radius Tokens
- **`--radius-xs`**: `0.125rem` (2px) — Focus rings & crisp border frames
- **`--radius-sm`**: `0.25rem` (4px) — Standard buttons, inputs, luxury cards
- **`--radius-md`**: `0.375rem` (6px) — Modals & dropdown containers
- **`--radius-lg`**: `0.50rem` (8px) — Drawers & full-screen overlays

### Shadow Tokens
- **`--shadow-subtle`**: `0 1px 3px 0 rgba(0, 0, 0, 0.04)`
- **`--shadow-card`**: `0 4px 12px -2px rgba(43, 43, 43, 0.06)`
- **`--shadow-header`**: `0 2px 10px 0 rgba(43, 43, 43, 0.03)`
- **`--shadow-drawer`**: `-4px 0 24px 0 rgba(0, 0, 0, 0.12)`
- **`--shadow-modal`**: `0 16px 32px -8px rgba(0, 0, 0, 0.16)`

---

## 6. Glassmorphism & Surface Effects

- **Header Glass**: `bg-[#FAF8F3]/90 backdrop-blur-md border-b border-border/30`
- **Overlay Surface**: `bg-surface/95 backdrop-blur-xl border border-border/40`
- **Modal Backdrop**: `bg-overlay backdrop-blur-sm`

---

## 7. Component Guidelines

### Buttons
- **Primary CTA**: Solid Charcoal (`#2B2B2B`) with White text, transitioning to Gold Primary on hover.
- **Secondary CTA**: Transparent with subtle border (`border-border`) and Charcoal text.
- **WhatsApp Concierge CTA**: WhatsApp Green (`#25D366`) with White text and WhatsApp brand icon.

### Inputs & Form Controls
- Underline style (`border-b border-border/50 bg-transparent py-2`) with smooth Charcoal focus border and Gold focus outline.

### Cards
- Clean aspect ratio (`aspect-[3/4]` for products, `aspect-[4/5]` for collections) with subtle image zoom on hover (`scale-105 transition-transform duration-700`).

### Drawers & Modals
- Fixed positioning, backdrop blur, Radix UI Dialog primitives, Esc key handling, body scroll locking, and accessible focus trapping.

---

## 8. Icons & Motion

- **Interface Icons**: Lucide React (`strokeWidth={1.5}` or `1.25`).
- **Brand & Social Icons**: React Icons (`FaInstagram`, `FaWhatsapp`, `FaTiktok`, `FaPinterest`).
- **Motion**: Framer Motion transitions with duration 0.3s–0.5s and `easeOut` curves. Respect `prefers-reduced-motion`.

---

## 9. Responsive Breakpoints & Accessibility

- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px – 1023px` (md)
- **Desktop**: `1024px+` (lg / xl)
- **Accessibility**: WCAG AA color contrast, explicit `aria-label` for icon-only buttons, logical heading hierarchy, and visible keyboard focus rings.
