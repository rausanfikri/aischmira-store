# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 29, 2026 (Sprint F2.5 — Brand Configuration & Navigation Domain)  
**Status:** Centralized Configuration & Navigation Domain Established  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship experience using Next.js App Router, TypeScript, Tailwind CSS v4, Zod, and Clean Architecture principles.

In **Sprint F2.5**, a comprehensive **Centralized Configuration System** (`core/config/`) and **Navigation Domain** (`domain/navigation/`) were established. All application branding, contact metadata, announcement bar content, social channel links, image defaults, and Next.js SEO metadata helpers are now managed through single-responsibility configuration modules and Zod validation schemas.

---

## 2. Centralized Configuration Architecture (`core/config/`)

```text
core/config/
  schema.ts              # Zod validation schemas for configuration objects
  brand.ts               # Brand metadata, legal name, logo, colors & copyright
  contact.ts             # WhatsApp concierge, email, customer care hours, address
  company.ts             # Legal entity details & registration
  navigation.ts          # Main header, utility, and mobile navigation items
  footer.ts              # Footer section link groups, legal links & newsletter copy
  announcement.ts        # Announcement bar text, CTA link, priority & dismissibility
  social.ts              # Instagram, TikTok, WhatsApp, Shopee, Tokopedia links map
  seo.ts                 # Default meta title, description, OpenGraph & Twitter cards
  metadata.ts            # Next.js Metadata API object generator helper
  analytics.ts           # GA4 & Meta Pixel tracking toggles
  features.ts            # Expanded feature flags (wishlist, checkout, loyalty, member, journal, etc.)
  images.ts              # Centralized fallback & placeholder image paths
  theme.ts               # Design tokens reference matching styles/theme.css
  index.ts               # Centralized Config public API entry point
```

---

## 3. Directory Architecture

```text
core/config/             # Centralized Configuration System & metadata helpers
domain/
  product/               # Product Domain
  collection/            # Collection Domain
  category/              # Category Domain
  navigation/            # Navigation Domain (entity, schema, dto, repository, mapper, dummy.repository, service, use-cases)
application/             # Application Layer Use Cases
infrastructure/          # Infrastructure Layer (DI container & Repositories)
presentation/            # Presentation Layer metadata
shared/                  # Shared Foundation
data/                    # Typed static content and dataset mappings
docs/                    # System specifications, API plans, & guidelines
```
