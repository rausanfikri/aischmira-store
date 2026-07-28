# AISCHMIRA.STORE — Footer Architecture Report
**Sprint:** 2D.2 — Layout Foundation & Footer Refinement
**Date:** July 28, 2026

---

## 1. Footer Structure Overview

The refined `Footer.tsx` features a 4-section layout:

1. **Top Centered Brand Header**:
   - Centered AISCHMIRA logo (`/logo.png`) with text fallback.
   - Brand Tagline: *"Crafted to comfort. Designed to stand out."*
2. **Newsletter Subscription Form (UI Only)**:
   - "Join Our Editorial Journal" email input form with client-side state feedback.
3. **4-Column Navigation Grid**:
   - *Collections*: FEMME, HER, SHE, Classic Line, Silk Scarves.
   - *Categories*: Outerwear, Tops & Blouses, Bottoms & Trousers, Dresses & Gowns, Accessories, Pyjama Sets.
   - *Customer Care*: About AISCHMIRA, Editorial Journal, FAQ & Delivery, Returns & Exchanges, `hello@aischmira.store`.
   - *Contact & Social*: Direct WhatsApp Concierge link, Instagram `@aischmira`, TikTok.
4. **Bottom Bar & Legal Policies**:
   - Copyright © 2026 AISCHMIRA.
   - Privacy Policy, Terms of Service, Shipping Info, Returns Policy.

---

## 2. Floating WhatsApp Positioning

- Floating WhatsApp button remains fixed at the bottom-right of the viewport and is not duplicated inside footer columns.
