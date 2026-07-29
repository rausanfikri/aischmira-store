# System Flows

## Website Rendering
1. **Next.js App Router** receives a request.
2. Server Component calls **Application Use Case** (e.g., `GetProductDetail`).
3. Use Case calls **Domain Repository** via DI interface.
4. Infrastructure resolves interface to **Concrete Repository** (currently Dummy, future Supabase).
5. Data is mapped to **Domain Entity**.
6. Server Component renders UI using the Domain Entity.

## BigSeller Inventory Sync (Phase 4)
1. BigSeller inventory changes.
2. BigSeller sends webhook to Next.js API Route `/api/webhooks/bigseller`.
3. API Route validates payload signature.
4. API Route calls `SyncInventoryUseCase`.
5. Use Case maps payload to Domain DTO.
6. Use Case calls `SupabaseInventoryRepository.upsert()`.
7. Cache is invalidated.

## Checkout Processing
1. UI collects Cart items.
2. Calls `FormatWhatsAppOrderUseCase`.
3. Use Case builds the string payload.
4. UI redirects to `https://wa.me/...`.
5. No backend state mutation occurs during this flow currently.

## Analytics Events
1. UI component triggers `trackEvent('PRODUCT_VIEWED', payload)`.
2. `EventDispatcher` sends event to configured adapters (e.g., Console, Meta Pixel).
