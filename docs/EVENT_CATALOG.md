# Event Catalog

This catalog documents application events for analytics, auditing, and reactive business logic.

## Commerce Events
- `PRODUCT_VIEWED`: User lands on a PDP. Payload: SKU, Name, Price.
- `COLLECTION_VIEWED`: User views a collection page. Payload: CollectionSlug.
- `ITEM_ADDED_TO_BAG`: User adds an item to cart. Payload: SKU, Quantity.
- `ITEM_REMOVED_FROM_BAG`: User removes an item. Payload: SKU.
- `CHECKOUT_STARTED`: User clicks proceed to WhatsApp. Payload: CartTotal, Items.

## Member Events (Future)
- `MEMBER_REGISTERED`: New account created.
- `MEMBER_LOGGED_IN`: Session started.
- `WISHLIST_ITEM_ADDED`: Item saved. Payload: SKU.

## System Events
- `INVENTORY_SYNCED`: Webhook processed from BigSeller.
- `ERROR_ENCOUNTERED`: Application error caught by error boundary or logger. Payload: ErrorContext.
