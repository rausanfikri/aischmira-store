# AISCHMIRA.STORE — Product Detail Report
**Sprint:** 2D — Enterprise Layout Architecture + Product Experience
**Date:** July 28, 2026

---

## 1. Product Detail Page Architecture (`/products/[slug]`)

The Product Detail experience was upgraded to reflect an international luxury brand flagship:

1. **Sticky Desktop Gallery (`ProductGallery.tsx`)**: Split 7:5 layout with side thumbnails, smooth image transitions, and full-resolution lightbox zoom (`Maximize2`).
2. **Product Controls (`ProductInfo.tsx`)**:
   - Collection badge, Product Name, Price formatted in IDR (`Rp X.XXX.XXX`).
   - Color variant selector buttons.
   - Size variant selector buttons with strike-through for out-of-stock sizes.
   - Quantity selector (+ / - counter).
   - Size Guide Modal trigger (`Ruler` icon).
   - Add to Bag button with feedback toast banner.
   - **Primary Order via WhatsApp CTA**: Direct trigger to `https://wa.me/6285121344848` pre-filling garment name, size, color, and price.
3. **Editorial Story & Designer Notes**:
   - "The Inspiration & Craftsmanship" narrative block.
   - Designer Notes and Materials & Craftsmanship badges.
4. **Interactive Accordion Panels**:
   - Description & Craftsmanship details.
   - Composition & Care instructions.
   - Complimentary Shipping & Concierge Returns policy.
5. **Related Products**: 4-column product grid with hover zoom.
6. **Recently Viewed Products (`RecentlyViewed.tsx`)**: Client browsing history tracker saved in `localStorage`.
7. **Styling Concierge CTA**: Direct consultation panel with WhatsApp styling team.
