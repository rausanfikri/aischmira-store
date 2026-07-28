# AISCHMIRA.STORE — WhatsApp Checkout Report
**Sprint:** 2D.4 — Luxury Product Detail Experience
**Date:** July 28, 2026

---

## WhatsApp Checkout Message Format

All CTA buttons use the exact sprint-specified message:

```
Hello AISCHMIRA,

I would like to order:

Product: [Product Name]
Color: [Selected Color]
Size: [Selected Size]

Please assist me with the checkout process.
```

## CTA Locations

| Location | Component | Button Label |
|---|---|---|
| Product Info panel | `ProductInfo.tsx` | "Checkout via WhatsApp" |
| Sticky mobile bar | `StickyWhatsAppCTA.tsx` | "Checkout via WhatsApp" |
| Concierge section | `page.tsx` | "Consult Styling Concierge" (inquiry format) |

## WhatsApp Number

All CTAs route to: `https://wa.me/6285121344848`

Centralized via `WHATSAPP_NUMBER` constant in `lib/whatsapp.ts`.
