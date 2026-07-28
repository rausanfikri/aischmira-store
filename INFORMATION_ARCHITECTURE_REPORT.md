# AISCHMIRA.STORE — Information Architecture Report
**Sprint:** 2B — Navigation & Information Architecture
**Date:** July 28, 2026

---

## 1. Information Architecture Overview

The information architecture of AISCHMIRA.STORE is structured into clear, luxury-first domain hierarchies.

```
[ AISCHMIRA.STORE ]
 ├── HEADER NAVIGATION
 │    ├── Left Nav:
 │    │    ├── COLLECTIONS (Mega Menu)
 │    │    │    ├── Newest: FEMME | HER | SHE
 │    │    │    ├── Classic: Bianca | Priscila | Safira | Briana | Tifani | Zamira | Gendis | Amara | Dasya | Jolly | Aveline | Luna
 │    │    │    ├── Scarf: AM Monogram | Floral Meadow | Chili Chic | Garlic Bloom | Spice Blossom
 │    │    │    └── Editorial Image Preview
 │    │    ├── CATEGORIES (Mega Menu)
 │    │    │    └── Outerwear | Tops | Bottoms | Dress | Accessories | Long Pyjama Set | Short Pyjama Set
 │    │    ├── JOURNAL (/journal)
 │    │    └── ABOUT (/about)
 │    ├── Center:
 │    │    └── AISCHMIRA BRAND LOGO (Home)
 │    └── Right Nav (Icons):
 │         ├── SEARCH (Fullscreen Overlay)
 │         ├── ACCOUNT (Dropdown: Sign In | Register | Dashboard | Orders | Wishlist | Points | Profile)
 │         ├── WISHLIST (/wishlist)
 │         └── SHOPPING BAG (Cart Drawer)
 └── FOOTER (5-Column Layout)
      ├── Column 1: Logo & Brand Story
      ├── Column 2: Collections
      ├── Column 3: Categories
      ├── Column 4: Customer Service & Contact (WhatsApp Concierge, Email, FAQ)
      ├── Column 5: Social Media (@aischmira: Instagram, TikTok, Facebook, Pinterest, LinkedIn, YouTube)
      └── Bottom Bar: Copyright | Privacy Policy | Terms of Service | Shipping Info | Returns Policy
```

---

## 2. Key UX Pathways

1. **Discovery Pathway**: Header &rarr; Collections Mega Menu &rarr; Collection Detail Page (`/collections/[slug]`) &rarr; Product Detail Page (`/products/[slug]`).
2. **Concierge Commerce Pathway**: Product Page / Cart Drawer &rarr; Checkout via WhatsApp (`https://wa.me/6285121344848`).
3. **Member Account Pathway**: Header Account Icon &rarr; Sign In (`/login`) / Dashboard (`/account/dashboard`) / Orders (`/account/orders`) / Wishlist (`/wishlist`).
