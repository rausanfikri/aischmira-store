# AISCHMIRA.STORE — WhatsApp Concierge Checkout Flow & Protocol

## Purpose
This document specifies the WhatsApp Concierge commerce flow, URL encoding contracts, item payload formats, and concierge hand-off procedures for AISCHMIRA.STORE.

## Scope
Applies to the Shopping Bag drawer (`CartDrawer.tsx`), product page direct buy buttons (`StickyWhatsAppCTA.tsx`), and concierge inquiry components (`FloatingWhatsApp.tsx`, `app/contact/page.tsx`).

## Overview
AISCHMIRA operates a luxury concierge commerce model. Rather than forcing customers through rigid e-commerce checkout forms, purchase intent is seamlessly transferred to a personal human sales concierge on WhatsApp (`+62 851-2134-4848`).

---

## Commerce Flow Architecture

```text
1. Customer selects Product, Color, Size ──► Adds item to Shopping Bag
2. Shopping Bag calculates totals ─────────► Customer clicks "Proceed to WhatsApp Checkout"
3. WhatsApp Helper (`lib/whatsapp.ts`) ──────► Generates URI: https://wa.me/6285121344848?text=<ENCODED_MESSAGE>
4. Customer redirected to WhatsApp ───────► Human Concierge assists with shipping & payment
```

---

## Message Contract Format

```text
Hello AISCHMIRA, I would like to place an order:

1. Bianca Silk Dress
   SKU: AIS-SLK-BL-S
   Color: Blush | Size: S
   Quantity: 1

2. Safira Wide Leg Trousers
   SKU: AIS-TRS-BLK-M
   Color: Black | Size: M
   Quantity: 2

Please let me know the total with shipping and how to proceed with payment.
Thank you.
```

---

## Implementation

### Utility Helper (`lib/whatsapp.ts`)
```typescript
import { CartItem, Product, Variant } from "@/types";

export const WHATSAPP_NUMBER = "6285121344848";

type CartItemWithDetails = CartItem & { product: Product; variant: Variant };

export function getWhatsAppCheckoutUrl(cartItems: CartItemWithDetails[]) {
  let message = "Hello AISCHMIRA, I would like to place an order:\n\n";

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   SKU: ${item.variant.sku}\n`;
    message += `   Color: ${item.variant.color} | Size: ${item.variant.size}\n`;
    message += `   Quantity: ${item.quantity}\n\n`;
  });

  message += "Please let me know the total with shipping and how to proceed with payment.\nThank you.";

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
```

---

## Examples
See `components/layout/CartDrawer.tsx` for production button integration consuming `getWhatsAppCheckoutUrl`.

## Future Improvements
- Integrate WhatsApp Business API webhooks for automated order confirmation messages.

## References
- `AGENTS.md`
- `DATA_MODEL.md`
- `lib/whatsapp.ts`

## Change History
- **2026-07-29**: Created WhatsApp Concierge Checkout protocol specification.
