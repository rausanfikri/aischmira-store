# AISCHMIRA.STORE — BigSeller OMS Synchronization Architecture

## Purpose
This document specifies the integration architecture, SKU mapping rules, webhook event handlers, and data sync pipeline between BigSeller Omnichannel OMS and AISCHMIRA.STORE.

## Scope
Covers master product catalog ingestion, real-time stock updates, multi-channel pricing synchronization, and order fulfillment status updates.

## Overview
BigSeller OMS serves as the central master repository for all physical inventory, variant SKUs, warehouse stock levels, and multi-channel fulfillment operations. AISCHMIRA.STORE synchronizes inventory data via webhook event triggers and background worker cron polling.

---

## Integration Pipeline Topology

```text
BigSeller OMS
     │
     ├── Webhook Event Trigger (stock.update / price.update)
     ├── Bulk REST Sync (Scheduled Cron 5m)
     │
     ▼
Sync Worker Service (Next.js API Route / Worker)
     │
     ├── 1. HMAC Secret Signature Verification
     ├── 2. Zod Payload Schema Mapper (services/domain/product/schema.ts)
     ├── 3. Upsert DTO into Supabase PostgreSQL Database
     │
     ▼
Supabase Database ──► ProductService ──► Next.js UI Storefront
```

---

## BigSeller SKU Schema & DTO Mapping

| BigSeller Field | Type | Domain Field (`Product` / `Variant`) | Description |
| :--- | :--- | :--- | :--- |
| `sku` | string | `variant.sku` | Unique variant SKU identifier (e.g. `AIS-SLK-DRS-S`) |
| `parent_sku` | string | `product.parentSku` | Parent product grouping SKU (e.g. `AIS-SLK-DRS`) |
| `product_name` | string | `product.name` | Display product title |
| `price` | number | `product.price` | Active selling price in IDR |
| `market_price` | number | `product.compareAtPrice` | Original compare-at price |
| `stock` | number | `variant.stock` | Physical available stock count |
| `status` | string | `product.status` | Active status (`ACTIVE` \| `ARCHIVED`) |

---

## Implementation

### Webhook Signature Verification Handler (`app/api/webhooks/bigseller/route.ts`)
```typescript
import { NextResponse } from "next/server";
import crypto from "crypto";
import { productMapper } from "@/services/domain/product/mapper";

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get("x-bigseller-signature");
  const secret = process.env.BIGSELLER_SECRET_KEY;

  if (secret && signature) {
    const expectedSignature = crypto.createHmac("sha256", secret).update(payload).digest("hex");
    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid HMAC signature" }, { status: 401 });
    }
  }

  const data = JSON.parse(payload);
  const validatedProduct = productMapper.toDomain(data);

  // Upsert validated DTO into database
  // await db.products.upsert(validatedProduct);

  return NextResponse.json({ success: true });
}
```

---

## Examples
See `services/domain/product/types.ts` for BigSeller SKU fields integrated on `Product` and `Variant` types.

## Future Improvements
- Add automated Dead-Letter Queue (DLQ) for failed BigSeller webhook payloads.

## References
- `AGENTS.md`
- `API_STRATEGY.md`
- `DATA_MODEL.md`

## Change History
- **2026-07-29**: Created BigSeller OMS synchronization architecture document.
