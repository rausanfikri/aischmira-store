# AISCHMIRA.STORE — Enterprise Order & Purchase Experience Architecture

**Version:** 1.0.0 (Sprint C1.8 — Luxury Orders & Purchase Experience)  
**Status:** Approved & Implemented  

---

## 1. Overview

The **AISCHMIRA Orders Experience** (`/account/orders` and `/account/orders/[orderId]`) provides brand clients with absolute transparency, itemized garment breakdowns, atelier tailoring notes, interactive courier tracking timelines, and direct WhatsApp concierge support.

- **Clean Architecture Data Flow**: Consumes `OrderService` exclusively; zero direct static dummy data imports.
- **Enterprise Integration Preparedness**: Data contracts map `orderNumber`, `sku`, `variantSku`, `paymentStatus`, `shippingStatus`, `courier`, and `trackingNumber` ready for BigSeller ERP order webhooks and Supabase customer order history tables.

---

## 2. Order Lifecycle Status Machine

```text
  Pending Review
        │
        ▼
   Confirmed (Payment Verified via WhatsApp Concierge)
        │
        ▼
   Processing (Atelier Tailoring & Quality Inspection)
        │
        ▼
     Packed (Signature Handcrafted Gift Packaging)
        │
        ▼
    Shipped (In Transit with Private Concierge Courier)
        │
        ▼
   Delivered (Hand-delivered to Recipient)
```

---

## 3. System Architecture & Data Flow

```text
             Client Navigates to /account/orders or /[orderId]
                                    │
                                    ▼
                       services/order.service.ts
                            (OrderService)
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
      getOrders()                                    getOrderById()
            │                                               │
            ▼                                               ▼
   OrderEntity List                                 OrderEntity Detail
            │                                               │
            ▼                                               ▼
/account/orders List Page                     /account/orders/[orderId] Page
 (Filter Pills, Totals)                         (Interactive Tracking Timeline,
                                                 Item SKUs, Recipient Address,
                                                 WhatsApp Support Button)
```

---

## 4. Enterprise Integration Contracts (BigSeller ERP & Supabase)

### BigSeller ERP Order Status Mapping:
```json
{
  "orderId": "ASC-2026-8891",
  "marketplaceChannel": "WhatsApp Concierge",
  "status": "PROCESSING",
  "paymentStatus": "PAID",
  "items": [
    {
      "sku": "BIANCA-SILK-DRESS",
      "variantSku": "BIANCA-BLK-M",
      "quantity": 1,
      "price": 4850000
    }
  ],
  "tracking": {
    "courier": "AISCHMIRA Concierge Express",
    "trackingNumber": "ASC-EXP-99201"
  }
}
```

### Supabase Customer Orders Schema (`public.orders` & `public.order_items`):
```sql
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id),
  order_number TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL,
  total_amount NUMERIC(12,2) NOT NULL,
  recipient_name TEXT NOT NULL,
  shipping_address TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
