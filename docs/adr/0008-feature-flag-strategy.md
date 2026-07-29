# Title: Feature Flag Strategy
Status: Accepted
Date: 2026-07-29
Context: We need to build architecture for features (Wishlist, Loyalty, Member) that will not be immediately visible or active in the initial prototype or MVP.
Decision: Implement a centralized feature flag system in `core/config/features.ts`.
Alternatives Considered: Commenting out code, keeping features on separate long-lived branches. This leads to merge conflicts and stale code.
Consequences: Features can be merged to main and tested internally but hidden from production users.
Future Review: Review when evaluating a third-party feature flag provider (e.g., LaunchDarkly) if the static configuration becomes insufficient.
