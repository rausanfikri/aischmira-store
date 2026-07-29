# User Flows

## Guest Browsing & Discovery
1. User lands on Homepage.
2. Clicks on "Shop Latest Collection" in the Hero section.
3. Views the Collection Grid.
4. Clicks a Product Card to view the Product Detail Page (PDP).

## WhatsApp Checkout Flow
1. User is on PDP.
2. Selects Size/Variant.
3. Clicks "Add to Bag".
4. Bag Drawer opens.
5. User clicks "Proceed to Order".
6. System formats order details.
7. User is redirected to WhatsApp with a pre-filled message.
8. User sends the message to the Concierge.
9. Concierge handles payment and fulfillment.

## Wishlist Flow (Future)
1. User clicks the Heart icon on a Product Card.
2. If Guest: Saved to LocalStorage. Prompted to Login.
3. If Member: Saved to Supabase profile.
4. User navigates to Wishlist page to view saved items.

## Member Registration (Future)
1. User clicks "Account" icon.
2. Enters Email/Password or uses OAuth.
3. Supabase handles Auth.
4. User is redirected to Member Dashboard.

## Loyalty Earning (Future)
1. User completes a purchase via WhatsApp.
2. Admin marks order as "Completed" in internal system.
3. Webhook triggers LoyaltyService.
4. Points are added to Member's account.
5. User sees updated balance on their Dashboard.
