# State Machines

## Product State
- `DRAFT`: Being edited, not visible on site.
- `ACTIVE`: Visible on site, purchasable.
- `ARCHIVED`: Not visible, kept for historical order records.

## Inventory State
- `IN_STOCK`: Available > 0.
- `LOW_STOCK`: Available < Threshold.
- `OUT_OF_STOCK`: Available = 0.

## Shopping Bag State
- `EMPTY`: Initial state.
- `ACTIVE`: Contains 1 or more items.

## Order State (Future - Admin side)
- `PENDING_PAYMENT`: WhatsApp conversation started.
- `PAID`: Payment confirmed by Concierge.
- `PROCESSING`: Preparing for shipment.
- `SHIPPED`: Handed to courier.
- `DELIVERED`: Received by customer.
- `CANCELLED`: Order aborted.

## Member State (Future)
- `UNVERIFIED`: Email not confirmed.
- `ACTIVE`: Normal member.
- `SUSPENDED`: Account disabled.
