# AISCHMIRA.STORE — Search Engine Optimization (SEO) & Metadata Strategy

## Purpose
This document defines the SEO architecture, Metadata API usage, Open Graph/Twitter card configuration, canonical URL standards, and structured data guidelines for AISCHMIRA.STORE.

## Scope
Applies to root site layout metadata, dynamic route metadata (`collections/[slug]`, `products/[slug]`), sitemap generation, and search engine crawler indexing.

## Overview
AISCHMIRA targets organic visibility across luxury fashion, modest fashion, and premium women's apparel queries. The platform leverages Next.js App Router Metadata API to ensure search engine indexability and social media preview optics.

---

## Metadata Architecture & Strategy

### 1. Root Metadata (`app/layout.tsx`)
- **Metadata Base**: `new URL("https://aischmira.store")`
- **Title**: `AISCHMIRA | Elegant Women's Fashion`
- **Description**: `Crafted to comfort. Designed to stand out. Discover timeless fashion for modern women.`
- **Keywords**: `fashion wanita`, `baju muslim`, `modest fashion`, `aischmira`, `busana elegan`.
- **OpenGraph & Twitter**: Configured with high-resolution brand logo preview imagery (`1200x630`).

### 2. Dynamic Route Metadata (`app/products/[slug]/page.tsx`)
Dynamic route segments construct explicit title, description, canonical, and product image metadata:

```typescript
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await productService.getBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | AISCHMIRA" };
  }

  return {
    title: `${product.name} | AISCHMIRA`,
    description: product.description,
    openGraph: {
      title: `${product.name} | AISCHMIRA`,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
    alternates: {
      canonical: `https://aischmira.store/products/${product.slug}`,
    },
  };
}
```

---

## Technical SEO Rules

1. **Single `<h1>` Per Page**: Every route segment must contain exactly one `<h1>` heading.
2. **Descriptive `alt` Text**: All product imagery must supply meaningful, descriptive `alt` text. Decorative icons use empty `alt=""` or `aria-hidden="true"`.
3. **Canonical URLs**: Every page segment defines an explicit `alternates.canonical` URL to prevent duplicate content indexing.
4. **Clean Semantic URLs**: Stable, lower-case kebab-case slugs (`/collections/femme`, `/products/bianca-silk-dress`).

---

## Examples
See `app/layout.tsx` for root metadata API implementation.

## Future Improvements
- Dynamic XML Sitemap generator (`app/sitemap.ts`) for automatic indexing of new products.
- Schema.org JSON-LD structured metadata injection for Google Rich Shopping Results.

## References
- `AGENTS.md`
- `docs/23_SEO_STRATEGY.md`

## Change History
- **2026-07-29**: Created SEO & metadata strategy guide.
