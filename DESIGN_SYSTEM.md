# AISCHMIRA.STORE — Enterprise Design System Specification

**Version:** 1.7.0 (Sprint U1.7 — Luxury Testimonials & Community Experience)  
**Source of Truth:** `styles/theme.css`, `styles/globals.css`, `shared/constants/breakpoints.ts`, `lib/theme.ts`  

---

## 1. Brand Aesthetics & Principles

AISCHMIRA is an editorial, luxury fashion flagship digital experience. The design system is built around three core principles:

1. **Whitespace as Luxury**: Generous breathing room (padding 24px–128px), clean margins, and centered, un-cluttered layouts.
2. **Typography-Led Branding**: Cormorant Garamond for editorial headings and expressive brand statements; Inter for ultra-legible UI controls, captions, and body prose.
3. **Restrained Gold Accent Palette**: Primary Gold (`#D9AE20`), Secondary Gold (`#D5A12A`), and Accent Gold (`#D19D28`) used intentionally for active states, key CTAs, and editorial highlights — never as full-screen fills.

---

## 2. Product Detail Commerce Component Architecture (`components/products/`)

- **Product Gallery (`ProductGallery.tsx`)**: Main portrait display (`aspect-[3/4]`), smooth scale zoom on hover (`scale-[1.06]`), image counter badge, vertical desktop left thumbnail rail, and full-screen lightbox zoom modal with keyboard arrow navigation.
- **Product Info & Selectors (`ProductInfo.tsx`)**: High-fashion typography, formatted price with `compareAtPrice` strikethrough, stock status badge, size selector with active focus state, color swatches with visual previews, quantity selector, "Add to Shopping Bag" CTA, "WhatsApp Concierge" secondary CTA, wishlist trigger, and Radix UI Accordions (Material, Care, Shipping).
- **Product Editorial (`ProductEditorial.tsx`)**: Storytelling section featuring "The Inspiration", designer atelier notes, craftsmanship highlights, and brand pillar badges.
- **Structured SEO (`ProductJsonLd.tsx`)**: Schema.org Product and BreadcrumbList JSON-LD component for optimal Google rich results.

---

## 3. Luxury Testimonials & Community Architecture (`components/sections/LuxuryTestimonials/`)

- **Testimonial Card (`TestimonialCard.tsx`)**: High-fashion editorial quote block with Cormorant Garamond italic quote text (`text-xl sm:text-2xl`), uppercase collection tag (`tracking-[0.3em] text-primary`), verified patron badge with gold ring (`bg-primary/10 text-primary`), and subtle hover border accent.
- **Community Stats Bar (`CommunityStatsBar.tsx`)**: 4-column minimal stat grid with 5xl italic primary gold numbers (`text-primary font-light`), uppercase tracking labels, and quiet background panels (`bg-background/50 border-border/20`).

---

## 3. Editorial Lookbook Component Architecture (`components/sections/EditorialLookbook/`)

- **Campaign Hero Banner (`LookbookCampaignBanner.tsx`)**: Full-bleed photography frame (`aspect-[21/9]` desktop), dark linear gradient text overlay (`from-black/70`), Cormorant Garamond title (`text-4xl sm:text-6xl lg:text-7xl`), and season tag.
- **Split Layout (`LookbookSplitLayout.tsx`)**: Asymmetrical 12-column grid (`7-col image` + `5-col story`), 3/4 aspect ratio photography frame, tracking-[0.35em] eyebrow, and text CTA link with hover line expansion.
- **Quote Block (`LookbookQuoteBlock.tsx`)**: Centered 6xl italic Cormorant Garamond quote with vertical gold accent line divider (`w-[1px] h-20 bg-primary/30`).
- **Image Pair (`LookbookImagePair.tsx`)**: Dual 3/4 portrait photography grid with staggered vertical offset (`md:mt-12`) for high-fashion magazine rhythm.
- **Image Gallery (`LookbookImageGallery.tsx`)**: 3-photo horizontal film strip with subtle gradient overlays and caption tags.

---

## 4. Brand Story Component Architecture (`components/sections/BrandStoryBlock.tsx`)

- **Alternating Layout**: Modular `image-left` and `image-right` column switching (`lg:grid-cols-12`).
- **Typography Scale**: Eyebrow label uppercase tracking-[0.35em], Cormorant Garamond italic block title (`text-3xl sm:text-4xl lg:text-5xl`), Cormorant Garamond italic quotes with primary gold border-left accent.
- **Brand Pillars Bar**: 4-column responsive grid with Lucide icons (Scissors, Gem, Heart, Compass) celebrating artisanal craftsmanship, grade-6A mulberry silk, Indonesian origin, and timeless cuts.

---

## 5. Header System Architecture Tokens (`styles/theme.css`)

- **`--announcement-height`**: `40px`
- **`--header-height-desktop`**: `84px`
- **`--header-height-scrolled`**: `72px`
- **`--header-logo-size`**: `52px`
- **`--header-logo-size-scrolled`**: `44px`
- **Header Composition**: 3-column CSS Grid (`grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`) for mathematical logo centering.
- **Sticky Offset**: Dynamic `top: var(--announcement-height)` calculated based on AnnouncementBar state.

---

## 6. Product Card Component Specification (`components/ui/ProductCard.tsx`)

- **Aspect Ratio**: Standardized 3/4 portrait aspect ratio (`aspect-[3/4]`) with smooth rounded-xs borders.
- **Dual Image Hover Transition**: When `images[1]` exists, hover smoothly cross-fades from primary image to secondary detail/lifestyle photo; otherwise applies a gentle scale transform (`scale-[1.04] transition-transform duration-700 ease-out`).
- **Data Compatibility**: Seamlessly consumes domain `Product` entity (`sku`, `price`, `compareAtPrice`, `categoryId`, `isFeatured`, `images`) and legacy types without breaking API contracts.

---

## 7. Collection Card Component Specification (`components/ui/CollectionCard.tsx`)

- **Hero Variant (`variant="hero"`)**: Asymmetrical 12-column grid (`7-col image` + `5-col story content`), 16/10 aspect ratio, full story narrative, artisanal materials badge line, and animated border-bottom CTA link.
- **Editorial Variant (`variant="editorial"`)**: 3/4 vertical aspect ratio, dark gradient bottom text overlay for title & capsule tag, line-clamp description, and inline arrow link CTA.

---

## 8. Responsive Breakpoints Constants (`shared/constants/breakpoints.ts`)

- **sm**: `640px` (Mobile landscape)
- **md**: `768px` (Tablet)
- **lg**: `1024px` (Desktop)
- **xl**: `1280px` (Wide Desktop)
- **2xl**: `1536px` (Ultra Wide)
