# AISCHMIRA.STORE — Domain Architecture Report
**Sprint:** Sprint 2E — CMS Ready Architecture & Data Layer
**Date:** July 28, 2026

---

## Domain Structure Specifications

```text
services/domain/
├── product/
│   ├── types.ts      # Domain interfaces (Product, Variant, ProductStatus)
│   ├── schema.ts     # Zod runtime schemas (productSchema, variantSchema)
│   ├── dummy.ts      # Typed mock dataset mapped from static data
│   ├── mapper.ts     # BigSeller & Supabase DTO transformers
│   └── service.ts    # ProductService query methods
├── collection/
│   ├── types.ts      # Collection entity models
│   ├── schema.ts     # Zod collection validation
│   ├── dummy.ts      # Typed collection datasets
│   ├── mapper.ts     # Payload mappers
│   └── service.ts    # CollectionService
├── category/
│   ├── types.ts      # Category entity models
│   ├── schema.ts     # Zod category validation
│   ├── dummy.ts      # Typed apparel categories
│   ├── mapper.ts     # Category payload mapper
│   └── service.ts    # CategoryService
├── homepage/
│   ├── types.ts      # Hero, CraftsmanshipPillars, Testimonials
│   ├── schema.ts     # Zod homepage validation
│   ├── dummy.ts      # Editorial homepage content
│   └── service.ts    # HomepageService
├── navigation/
│   ├── types.ts      # FooterNavigation, NavSection, NavItem
│   ├── schema.ts     # Zod navigation validation
│   ├── dummy.ts      # Footer and navigation links
│   └── service.ts    # NavigationService
├── journal/
│   ├── types.ts      # JournalArticle models
│   ├── schema.ts     # Zod article validation
│   ├── dummy.ts      # Editorial articles
│   └── service.ts    # JournalService
└── loyalty/
    ├── types.ts      # MemberProfile, RewardItem, LoyaltyTier
    ├── schema.ts     # Zod member validation
    ├── dummy.ts      # Privilege member tier datasets
    └── service.ts    # LoyaltyService
```
