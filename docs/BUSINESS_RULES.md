# Business Rules

## Inventory Ownership
- **BigSeller** is the absolute source of truth for all inventory counts (`availableStock`, `reservedStock`).
- The website cannot create or deduce inventory; it only mirrors what BigSeller reports.

## Pricing Ownership
- Base prices and multi-channel pricing rules are managed in BigSeller.
- The website displays the price provided by the integration layer; it does not calculate base prices.

## Discount Rules
- Percentage and fixed-amount discounts can be applied via the future marketing engine.
- Discounts cannot drop a product price below its defined cost floor.

## Campaign Rules
- Collections can be marked as `campaigns`, altering their presentation (e.g., editorial layouts).
- Campaign items may have restricted purchase rules (e.g., limit 1 per customer).

## Loyalty Rules (Future)
- Users earn points based on the final transaction value (excluding shipping/taxes).
- Points can be redeemed for tiers or specific rewards.
- Point values and conversion rates are centrally configured.

## Wishlist Rules (Future)
- Users can add active products to their wishlist.
- If a product becomes inactive or out of stock, it remains in the wishlist but is marked accordingly.

## Shopping Bag Rules
- Items in the shopping bag do NOT reserve inventory.
- Inventory is only reserved once the WhatsApp Concierge confirms the order manually.

## Checkout Rules
- The digital checkout process does not process payments.
- It aggregates the cart items and generates a structured message for the WhatsApp API.

## Refund Policy (Future)
- All refunds are handled manually via customer service. The website will only display policy documentation.

## Return Policy (Future)
- Returns require authorization via the Concierge.

## Shipping Assumptions
- Flat rate or calculated shipping is handled manually by the Concierge during the WhatsApp interaction. The website does not currently calculate live shipping rates.

## Marketplace Synchronization Assumptions
- BigSeller pushes stock updates to Shopee/Tokopedia/Lazada. The website receives these updates via webhook or polling to ensure the catalog reflects accurate availability.
