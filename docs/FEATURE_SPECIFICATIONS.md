# Feature Specifications

## Homepage
- **Purpose**: Brand introduction and primary navigation hub.
- **Requirements**: Hero video/image, featured collections, latest arrivals, editorial blocks.
- **Data**: Driven by `HomepageConfig` domain model.

## Collections
- **Purpose**: Grouping products logically (e.g., "Summer 2026", "Essentials").
- **Requirements**: Grid layout, filtering (future), sorting.
- **Data**: Consumes `CollectionService.getCollectionBySlug`.

## Product Detail
- **Purpose**: Detailed view of a single SKU.
- **Requirements**: High-res image gallery, variant selection (size/color), material/care accordions, "Add to Bag" CTA.
- **Data**: Consumes `ProductService.getProductBySlug`.

## Search
- **Purpose**: Quick discovery.
- **Requirements**: Full-text search across product titles and descriptions.

## Wishlist
- **Purpose**: Save items for later.
- **Requirements**: Add/remove toggles on product cards. Requires local storage (guest) or database (member).
- **Status**: Hidden behind feature flag.

## Shopping Bag
- **Purpose**: Accumulate items for purchase.
- **Requirements**: Slide-out drawer, item quantity adjustment, total calculation, proceed to WhatsApp CTA.

## Checkout (WhatsApp)
- **Purpose**: Order submission.
- **Requirements**: Formats the bag contents into a readable string and redirects to `wa.me`.

## Member (Future)
- **Purpose**: Customer identity.
- **Requirements**: Registration, login, profile management, order history view.
- **Status**: Hidden behind feature flag.

## Loyalty (Future)
- **Purpose**: Retention.
- **Requirements**: Display current points, tier status, available rewards.
- **Status**: Hidden behind feature flag.
