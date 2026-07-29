# Title: BigSeller OMS as Source of Truth
Status: Accepted
Date: 2026-07-29
Context: AISCHMIRA operates physical studio stock and multi-channel fulfillment. Synchronizing inventory across multiple storefronts requires a single master inventory engine.
Decision: BigSeller Omnichannel OMS is designated as the absolute source of truth for stock quantities (`availableStock`, `reservedStock`), SKU definitions (`parentSku`, `sku`), and multi-channel pricing.
Alternatives Considered: Custom inventory management system. Building a custom system would require immense effort and distract from the core product.
Consequences: Website never mutates stock directly without going through BigSeller sync hooks. Inventory updates are received asynchronously via webhooks or scheduled cron polling.
Future Review: If BigSeller API rate limits or capabilities become a bottleneck.
