# Integration Map

## BigSeller
- **Role**: Master Inventory and OMS.
- **Data Owned**: SKU definitions, Stock levels, Base Pricing.
- **Integration Type**: Webhooks (Inbound), API Polling (Outbound).
- **Boundary**: Updates Supabase database; UI never queries directly.

## Supabase
- **Role**: Website Database & Authentication.
- **Data Owned**: Product Cache (synced from BigSeller), Editorial Content, Member Profiles, Wishlists, Loyalty Points.
- **Integration Type**: REST/GraphQL via Supabase Client SDK.
- **Boundary**: Read by Application Use Cases.

## WhatsApp Business
- **Role**: Checkout and Customer Service.
- **Data Owned**: Conversation history, manual payment proofs.
- **Integration Type**: Deep links (`wa.me`).

## Meta Pixel / Google Analytics
- **Role**: Marketing Analytics.
- **Data Owned**: User behavioral data.
- **Integration Type**: Client-side script injection.
- **Boundary**: Triggered via centralized `EventDispatcher`.

## Vercel
- **Role**: Hosting & Edge Compute.
- **Data Owned**: Deployment environments, logs.
- **Integration Type**: CI/CD from GitHub.
