# AISCHMIRA.STORE — Product Media Architecture Specification

## Collection Overview
- **Brand**: AISCHMIRA
- **Collection Name**: SHE Dress Collection
- **Season**: Spring / Summer 2026
- **Product Slug**: `she-dress`
- **Product SKU**: `SHE-001`
- **Primary Material**: 100% Premium Silk Satin with Habotai Silk Lining

---

## 1. Asset Storage & Directory Structure

All official raw images are integrated into the public asset pipeline:

```text
public/images/products/she-dress/
├── she-dress-hero-white-01.jpg       (Primary Hero View — Pure White)
├── she-dress-front-black-01.jpg      (Front View — Onyx Black)
├── she-dress-lifestyle-ivory-01.jpg  (Lifestyle View — Ivory Cream)
├── she-dress-editorial-crimson-01.jpg (Editorial View — Crimson Red)
└── she-dress-lifestyle-blush-pink-01.jpg (Lifestyle View — Blush Pink)
```

---

## 2. Image Classification & PDP Gallery Sequence

| Sequence | SEO Filename | Colorway | Primary Classification | Aspect Ratio | Display Surface |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **1 (Hero)** | `she-dress-hero-white-01.jpg` | Pure White | **Hero Image** | 3:4 Portrait | PDP Hero, Catalog Cover, Homepage Carousel |
| **2** | `she-dress-front-black-01.jpg` | Onyx Black | **Front View** | 3:4 Portrait | PDP Gallery 2, Color Variant Thumbnail (Black) |
| **3** | `she-dress-editorial-crimson-01.jpg` | Crimson Red | **Editorial View** | 3:4 Portrait | PDP Gallery 3, Lookbook Split Banner |
| **4** | `she-dress-lifestyle-ivory-01.jpg` | Ivory Cream | **Lifestyle View** | 3:4 Portrait | PDP Gallery 4, Color Variant Thumbnail (Ivory) |
| **5** | `she-dress-lifestyle-blush-pink-01.jpg` | Blush Pink | **Lifestyle View** | 3:4 Portrait | PDP Gallery 5, Color Variant Thumbnail (Blush Pink) |

---

## 3. CMS Metadata Specification

```json
[
  {
    "sku": "SHE-001-WHT",
    "color": "Pure White",
    "filename": "she-dress-hero-white-01.jpg",
    "isPrimary": true,
    "sortOrder": 1,
    "altText": "AISCHMIRA SHE Dress in Pure White featuring puff short sleeves, basque waist, and full gathered midi skirt",
    "caption": "Pure White SHE Dress — Hero View"
  },
  {
    "sku": "SHE-001-BLK",
    "color": "Onyx Black",
    "filename": "she-dress-front-black-01.jpg",
    "isPrimary": false,
    "sortOrder": 2,
    "altText": "AISCHMIRA SHE Dress in Onyx Black — Direct front view showing button-down bodice and mandarin collar",
    "caption": "Onyx Black SHE Dress — Front View"
  },
  {
    "sku": "SHE-001-RED",
    "color": "Crimson Red",
    "filename": "she-dress-editorial-crimson-01.jpg",
    "isPrimary": false,
    "sortOrder": 3,
    "altText": "AISCHMIRA SHE Dress in Crimson Red posed in modern architectural space",
    "caption": "Crimson Red SHE Dress — Editorial Angle View"
  },
  {
    "sku": "SHE-001-IVR",
    "color": "Ivory Cream",
    "filename": "she-dress-lifestyle-ivory-01.jpg",
    "isPrimary": false,
    "sortOrder": 4,
    "altText": "AISCHMIRA SHE Dress in Ivory Cream walked by model in daytime outdoor boutique setting",
    "caption": "Ivory Cream SHE Dress — Street Lifestyle View"
  },
  {
    "sku": "SHE-001-PNK",
    "color": "Blush Pink",
    "filename": "she-dress-lifestyle-blush-pink-01.jpg",
    "isPrimary": false,
    "sortOrder": 5,
    "altText": "AISCHMIRA SHE Dress in Blush Pink holding skirt edge near blue floral facade",
    "caption": "Blush Pink SHE Dress — Outdoor Angle View"
  }
]
```

---

## 4. BigSeller Omnichannel Integration Mapping

| ERP Field | Source Asset Path | ERP Purpose |
| :--- | :--- | :--- |
| **Primary Master Image** | `/images/products/she-dress/she-dress-hero-white-01.jpg` | Main product cover image on BigSeller |
| **Gallery Batch** | Full 5-image sequence | Marketplace PDP multi-angle gallery |
| **SKU Variant (White)** | `/images/products/she-dress/she-dress-hero-white-01.jpg` | Shopee / Tokopedia / TikTok Shop White SKU |
| **SKU Variant (Black)** | `/images/products/she-dress/she-dress-front-black-01.jpg` | Shopee / Tokopedia / TikTok Shop Black SKU |
| **SKU Variant (Ivory)** | `/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg` | Shopee / Tokopedia / TikTok Shop Ivory SKU |
| **SKU Variant (Crimson)** | `/images/products/she-dress/she-dress-editorial-crimson-01.jpg` | Shopee / Tokopedia / TikTok Shop Crimson SKU |
| **SKU Variant (Blush Pink)**| `/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg` | Shopee / Tokopedia / TikTok Shop Blush Pink SKU |

---

## 5. Performance & Accessibility Standards

- **Next.js `next/image` Integration**: Responsive `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`.
- **LCP Optimization**: Primary hero image uses `priority` tag to ensure immediate rendering without delay.
- **CLS Prevention**: Explicit `aspect-[3/4]` aspect ratio wrappers preserve layout space prior to image load.
- **Accessibility**: Descriptive `alt` attributes on all image components; full keyboard accessibility on PDP image carousel & zoom controls.
