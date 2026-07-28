# AISCHMIRA.STORE — Folder Structure Summary
**Task:** Project Cleanup & Architecture Refactor
**Date:** July 28, 2026

---

## Clean Production Folder Tree

```text
aischmira-store/
├── app/                       # App Router routes and root layout
│   ├── (auth)/                # Authentication route group (/login, /register)
│   ├── (legal)/               # Legal pages (/terms, /privacy-policy)
│   ├── about/                 # About page
│   ├── account/               # My Account route group (/dashboard, /orders, /profile)
│   ├── cart/                  # Shopping bag page
│   ├── collections/           # Collections directory & detail (/collections/[slug])
│   ├── contact/               # Contact page
│   ├── faq/                   # FAQ page
│   ├── journal/               # Journal & editorial news
│   ├── products/              # Product detail page (/products/[slug])
│   ├── search/                # Search & recommendation page
│   ├── wishlist/              # Saved wishlist page
│   ├── layout.tsx             # Root site layout
│   └── page.tsx               # Homepage
├── components/                # Reusable UI component library
│   ├── account/               # Account navigation primitives
│   ├── collections/           # Collections client grid & filter drawer
│   ├── layout/                # Site chrome (Navbar, Footer, Drawers, Modals)
│   ├── products/              # Product gallery & product info
│   ├── search/                # Search results grid & recommendation fallbacks
│   ├── sections/              # Composed homepage editorial sections
│   └── ui/                    # Atomic design UI primitives (Badge, Button, Card, Divider, Feedback, Form, Overlay, Typography)
├── data/                      # Typed static domain data modules
│   ├── collections.ts         # Collections dataset
│   ├── footer.ts              # Footer links & copyright content
│   ├── homepage.ts            # Homepage hero & banner content
│   ├── navigation.ts          # Navbar links hierarchy
│   ├── products.ts            # Products dataset & variants
│   ├── socials.ts             # Social channels
│   └── testimonials.ts        # Client testimonials
├── docs/                      # Technical documentation system (00 - 25)
├── lib/                       # Pure utility functions & design token helpers
│   ├── formatters.ts          # Currency and date formatters
│   ├── string.ts              # Slugify and string truncation helpers
│   ├── theme.ts               # JavaScript token access dictionary
│   ├── utils.ts               # Tailwind class merger (cn)
│   └── whatsapp.ts            # WhatsApp Concierge link generators
├── public/                    # Production static web assets
│   ├── images/                # Collections, hero, instagram, lookbook, products, mega-menu
│   ├── favicon.png            # Favicon and app icon
│   └── logo.png               # Primary brand logo
├── services/                  # Future API & external system integration boundary
├── store/                     # Zustand state management stores (useShopStore, useUIStore)
├── styles/                    # Global CSS and source-of-truth visual design tokens
│   ├── globals.css            # Tailwind v4 registration & global styles
│   └── theme.css              # Design tokens CSS variables
└── types/                     # Shared TypeScript domain interfaces (product, collection, shop, layout, content)
```

---

## Alignment Verification
- All folders adhere strictly to the target architecture defined in `AGENTS.md`.
- No empty, duplicate, or temporary directories remain.
