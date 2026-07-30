# AISCHMIRA.STORE — Enterprise Checkout & WhatsApp Concierge Architecture

**Version:** 1.0.0 (Sprint C1.6 — Luxury WhatsApp Concierge Checkout)  
**Status:** Approved & Implemented  

---

## 1. Executive Summary

AISCHMIRA.STORE employs an editorial **WhatsApp Concierge Checkout** model designed to feel like entering a private consultation with a personal fashion director rather than a transactional checkout funnel. 

- **No Online Payment Gateways**: The website intentionally avoids online credit card/gateway forms (Stripe, Midtrans, Xendit).
- **Concierge Channel**: Order placement, bespoke tailoring advice, payment details (Bank Transfer/QRIS), and courier delivery details are handled human-to-human via WhatsApp.
- **Review Portal (`/checkout`)**: Serves as a transparent review sanctuary featuring live message preview, customer delivery preferences, gift packaging requests, and atelier notes.

---

## 2. End-to-End Business Model & Data Flow

```text
               User Selects Garments & Adds to Shopping Bag
                                    │
                                    ▼
                   /bag Page or Cart Drawer Interface
                                    │
                                    ▼
                 /checkout Review Page (Customer Review)
                                    │
                                    ▼
                     services/checkout.service.ts
                    (CheckoutService.generateWhatsAppUrl)
                                    │
                                    ▼
                     services/whatsapp.service.ts
                     (WhatsAppService.buildConciergeMessage)
                                    │
                                    ▼
                 services/configuration.service.ts
                 (ConfigurationService.getContactConfig)
                                    │
                                    ▼
           WhatsApp Concierge Chat (https://wa.me/6285121344848)
                                    │
           ┌────────────────────────┴────────────────────────┐
           ▼                                                 ▼
Admin Verification & Payment                      BigSeller ERP Order Entry
 (Human Sales Concierge)                          (SKU / Inventory / Warehouse)
           │                                                 │
           └────────────────────────┬────────────────────────┘
                                    │
                                    ▼
                 Warehouse Fulfillment & Shipping Dispatch
```

---

## 3. WhatsApp Message Builder Structure

The `WhatsAppService` (`services/whatsapp.service.ts`) compiles order reviews into clean, structured Markdown payloads.

### Template Sections:
1. **Greeting & Introduction**: Directs customer inquiry to the AISCHMIRA Styling Concierge.
2. **Itemized Garments List**:
   - Product Name, SKU, Color, Size, Quantity, Unit Price, and Item Subtotal.
3. **Order Summary**:
   - Items Subtotal, Delivery Option, and Grand Total.
4. **Customer Information (Optional)**:
   - Full Name, Phone, Email, Shipping Address, and City.
5. **Atelier & Gift Preferences**:
   - Signature Gift Box indicator, Calligraphic Note, and Tailoring Notes.
6. **Closing & Payment Instruction Request**:
   - Request for payment options (Bank Transfer/QRIS) and fulfillment confirmation.

---

## 4. Configuration Strategy

- **Zero Hardcoded Phone Numbers**: The phone number and WhatsApp parameters are retrieved dynamically via `ConfigurationService.getContactConfig()` which reads from `core/config/contact.ts`.
- **Environment & Brand Independence**: Contact numbers can be re-routed per environment (Dev, Staging, Production) without changing application component code.

---

## 5. Enterprise Integration Contracts (BigSeller ERP & Supabase)

### BigSeller ERP Payload Contract (`toBigSellerPayload`):
```json
{
  "channel": "WhatsApp",
  "skus": [
    {
      "sku": "BIANCA-SILK-DRESS",
      "variantSku": "BIANCA-BLK-M",
      "quantity": 1,
      "unitPrice": 4850000,
      "subtotal": 4850000
    }
  ],
  "totalAmount": 4850000,
  "customerName": "Lady Katherine Vance",
  "customerPhone": "+6281234567890",
  "shippingAddress": "Jalan Senopati No. 42, Jakarta Selatan",
  "notes": "Requesting waist adjustment advice"
}
```

### Supabase Draft Order Contract (`toSupabaseDraftOrder`):
```json
{
  "status": "draft",
  "items": [...],
  "summary": {...},
  "customer": {...},
  "createdAt": "2026-07-30T15:18:00.000Z"
}
```
