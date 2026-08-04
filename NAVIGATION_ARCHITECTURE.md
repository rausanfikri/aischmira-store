# NAVIGATION_ARCHITECTURE.md — AISCHMIRA Luxury Navigation System

## Overview
AISCHMIRA.STORE employs an editorial, luxury e-commerce navigation architecture modeled after benchmark fashion houses (COS, Ralph Lauren, Zara, Aritzia, Massimo Dutti).

---

## Desktop Navigation Specification (≥ 1024px / 1280px / 1440px / 1920px)

### Layout Composition (CSS Grid 3-Column Isolation)
```text
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│  LEFT (1fr)                   │        CENTER (auto)         │             RIGHT (1fr)    │
│  Collections ▼   Categories ▼ │        AISCHMIRA LOGO        │  Search  Account  Wishlist Bag │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```
- **CSS Grid Rule:** `grid-template-columns: 1fr auto 1fr;`
- **Center Guarantee:** The AISCHMIRA flagship logo is mathematically anchored to the exact center of the container and viewport regardless of content width on Left or Right columns.

### Dropdown Menu Systems & Hotfix Interaction Model
1. **Collections Dropdown (`CollectionsDropdown.tsx`)**:
   - Populated dynamically from `CollectionService`.
   - Displays Signature Line (`FEMME`, `HER Long`, `HER Short`, `SHE Dress`) with luxury status badges.
   - Displays Classic Capsules & Scarves.
   - Includes curated editorial preview card with quick link to full catalog (`/collections`).
2. **Categories Dropdown (`CategoriesDropdown.tsx`)**:
   - Populated dynamically from `CategoryService`.
   - CMS-ready & BigSeller OMS sync ready (zero hardcoded component category arrays).
   - Renders flagship categories (`Dress`, `Outerwear`, `Trousers`, `Scarf`, etc.).

### Dropdown Interactions & Design Tokens
- **Triggers:** Left-aligned `Collections` ▼ and `Categories` ▼ buttons in desktop header.
- **Dual Trigger Support:** Opens seamlessly on both **Hover** (mouse enter intent delay) AND **Click** (button toggle).
- **Design Tokens:** Editorial white background (`bg-white`), soft elevation shadow (`shadow-[0_20px_60px_rgba(0,0,0,0.12)]`), rounded corners (`rounded-md`), and spacious padding (`p-8`).
- **Outside Click Close:** Automatically closes active dropdown when clicking outside the component tree.
- **Escape Key Close:** Instantly closes active dropdown when pressing `Escape`.
- **Keyboard Navigation:** Full support for `Tab`, `Shift+Tab`, `ArrowUp`, `ArrowDown`, `Enter`, `Space`, and `Escape`.
- **ARIA Attributes:** Compliant with WAI-ARIA Menu pattern (`aria-expanded`, `aria-haspopup="true"`, `aria-controls`, `role="menu"`, `role="menuitem"`).

---

## Mobile Navigation Specification (< 1024px)

### Top Header Bar Layout
```text
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│  LEFT (1fr)                   │        CENTER (auto)         │             RIGHT (1fr)    │
│  [Menu Hamburger]             │        AISCHMIRA LOGO        │        Search      Bag     │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```
- **Overlap Prevention Guarantee:**
  - On narrow viewports (< 640px), the top right header displays essential quick actions (`Search` and `Shopping Bag`).
  - `Wishlist` and `Account` quick actions adaptively transfer into the **Mobile Navigation Drawer** on narrow viewports, eliminating horizontal icon crowding.
  - The AISCHMIRA logo uses responsive text clamping (`text-lg` to `text-3xl`) and flex truncation protection, ensuring zero overlap with menu toggle or right icons on 320px–480px viewports.

### Mobile Navigation Drawer (`MobileNav.tsx`)
- Triggered by the top-left menu icon.
- Built using Radix UI `Dialog` primitives with backdrop blur, trap focus management, and body scroll lock.
- **Content Sections:**
  1. **Collections Accordion**: Expandable signature & capsule collection links populated from `CollectionService`.
  2. **Categories Accordion**: Expandable product category links populated from `CategoryService`.
  3. **Quick Action Grid**: 2x2 grid for `Search`, `Account`, `Wishlist (Count)`, `Bag (Count)`.
  4. **WhatsApp Concierge CTA**: Direct purchase link (`https://wa.me/6285121344848`).

---

## Responsive Breakpoint Matrix

| Viewport | Range | Navigation Layout Strategy | Right Icons Displayed |
| :--- | :--- | :--- | :--- |
| **Ultra Desktop** | `≥ 1536px / 1920px` | 3-Column Grid with Left Dropdowns (Hover + Click) | Search, Account, Wishlist, Bag |
| **Desktop** | `1280px – 1535px` | 3-Column Grid with Left Dropdowns (Hover + Click) | Search, Account, Wishlist, Bag |
| **Laptop** | `1024px – 1279px` | Compact 3-Column Grid with Left Dropdowns (Hover + Click) | Search, Account, Wishlist, Bag |
| **Tablet** | `768px – 1023px` | Mobile Header Bar + Slide-Out Drawer | Search, Account, Wishlist, Bag |
| **Mobile** | `< 768px` | Mobile Header Bar + Slide-Out Drawer (Adaptive Overflow) | Search, Bag (Wishlist & Account in Drawer) |

---

## Service & Integration Readiness

### CMS Integration Point
- `CollectionService` and `CategoryService` fetch domain models dynamically.
- When a CMS adapter (Sanity / Strapi / Contentful) is introduced in Phase 3, updates to `CategoryService` and `CollectionService` will propagate directly to Desktop & Mobile navigation without component changes.

### BigSeller OMS Readiness
- Categories dynamically link to `/collections?category={slug}`.
- BigSeller category sync will automatically populate `CategoryService`, updating navigation menus dynamically.
