# AISCHMIRA.STORE — Homepage Report
**Sprint:** 2D.5 — Luxury Homepage & Collection Experience
**Date:** July 28, 2026

---

## 1. Executive Summary

Sprint 2D.5 transformed the AISCHMIRA.STORE Homepage from a commercial storefront into a flagship editorial experience. Every section prioritizes high-fashion visual hierarchy, generous whitespace, brand storytelling, and artisanal Indonesian luxury heritage.

## 2. Homepage Section Architecture (`app/page.tsx`)

| # | Section Component | Purpose & Design Features |
|---|---|---|
| **1** | `Hero.tsx` | Flagship 92vh editorial hero with dark vignette overlay, Cormorant font headline, and high-fashion CTA buttons. |
| **2** | `BrandStory.tsx` | Philosophy narrative introducing the brand statement and 4 core value pillars (Craftsmanship, Pure Silk, Designed in Indonesia, Timeless Elegance). |
| **3** | `NewCollections.tsx` | Showcase signature collection edits (FEMME, HER, SHE) with 3/4 aspect ratio images and category badges. |
| **4** | `FeaturedProducts.tsx` | Curated new arrivals grid with 3/4 aspect ratio luxury product cards, IDR price formatting, Wishlist heart action, and direct WhatsApp checkout trigger. |
| **5** | `EditorialBridge.tsx` | Dramatic full-bleed quote banner ("Elegance is not about being noticed, it's about being remembered") establishing luxury tone. |
| **6** | `Craftsmanship.tsx` | **[NEW]** 2-column feature celebrating 100% Pure Mulberry Silk, hand-rolled hem boundaries, precision cuts, and local artisan studios in Indonesia. |
| **7** | `JournalPreview.tsx` | **[NEW]** 3-card editorial journal preview featuring style guides, behind-the-seams, and minimalist philosophy with links to `/journal`. |
| **8** | `InstagramPreview.tsx` | 6-card 1:1 square photo grid with dark backdrop overlay and Instagram brand hover animation. |
| **9** | `Newsletter.tsx` | High-contrast private correspondence email signup with instant validation toast. |
| **10** | `WhatsAppSection.tsx` | Dedicated personal concierge styling assistant callout. |

## 3. Visual & Aesthetic Standards

- **Typography**: Cormorant Garamond italic headings paired with Inter body font.
- **Spacing Scale**: Tokenized `section-padding` (`py-24 md:py-36`) ensuring breathing room.
- **Color Palette**: Curated primary gold accents (`--color-primary`), cream surface fills (`--color-surface`), and dark contrast backgrounds.
