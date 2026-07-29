# AISCHMIRA Project Constitution

## Vision
AISCHMIRA is a luxury fashion flagship website, delivering an editorial, calm, and premium digital experience that reflects the brand's physical elegance.

## Mission
To provide a seamless, high-touch commerce experience that blends beautiful product storytelling with personalized WhatsApp concierge service, laying the foundation for a future-proof, enterprise-grade e-commerce ecosystem.

## Product Principles
1. **Luxury First**: The digital experience must feel as premium as the physical garments.
2. **Editorial Focus**: Products are presented as stories, with minimal clutter and whitespace-led design.
3. **High-Touch Commerce**: Purchasing is a conversation, not just a transaction. WhatsApp is our checkout.
4. **Member Ecosystem**: Every interaction builds towards a long-term loyalty and member experience.

## Engineering Principles
1. **Long-Term Platform**: Treat AISCHMIRA as a long-term software product, not a disposable prototype.
2. **Clean Architecture**: Strict separation of concerns (Presentation, Application, Domain, Infrastructure).
3. **Explicit Contracts**: Layers communicate via well-defined interfaces and DTOs.
4. **Source of Truth**: BigSeller for inventory/pricing; Supabase for web/customer data.

## Architecture Principles
1. **Domain-Driven**: Organize code by business capabilities (`product`, `collection`, `checkout`), not technical layers.
2. **Dependency Inversion**: High-level modules (Domain) should not depend on low-level modules (Infrastructure).
3. **Repository Pattern**: Data access is abstracted behind interfaces.
4. **Feature Flags**: New modules are built behind flags to allow continuous integration without premature exposure.

## UI / UX Principles
1. **Whitespace is Luxury**: Use generous margins and padding.
2. **Photography is the Product**: Images must be high-quality and unencumbered by UI elements.
3. **Typography is Branding**: Strict adherence to the `Inter` and `Cormorant` typographic scale.
4. **Subtle Motion**: Animations should be intentional, smooth, and never distracting.

## Documentation Principles
1. **Docs as Code**: Documentation lives in the repository and evolves with the codebase.
2. **ADR Driven**: Major architectural decisions are recorded as ADRs.
3. **Traceability**: Implementation must trace back to Feature Specs -> Business Rules -> Product Requirements.

## Coding Principles
1. **TypeScript Strictness**: No `any`. Use Zod for runtime boundary validation.
2. **Composition over Inheritance**: Build complex UIs and services from simple, reusable primitives.
3. **SOLID & DRY**: Write maintainable, testable, and non-redundant code.
4. **Predictable Errors**: Use the `Result` pattern for service operations instead of scattered try/catch blocks.

## Performance Principles
1. **Server-First**: Prefer React Server Components (RSC). Use `"use client"` only when necessary.
2. **Optimized Assets**: Next/Image for all media.
3. **Edge Ready**: Architecture must support edge deployment where possible.

## Accessibility Principles
1. **Semantic HTML**: Use proper tags (`nav`, `main`, `article`).
2. **Keyboard Navigable**: All interactive elements must be accessible without a mouse.
3. **Screen Reader Ready**: Aria labels and alt text for all meaningful visual content.

## Security Principles
1. **Zero Trust**: Validate all input at the boundaries (Zod).
2. **No Secrets in Client**: Environment variables with secrets must never leak to the browser.
3. **Least Privilege**: Database access (future Supabase) must use strict Row Level Security (RLS).

## Definition of Done
A task is complete only when:
- Architecture boundaries are respected.
- Build and Lint pass with zero errors.
- Documentation is updated.
- It is fully responsive and accessible.
- No existing UI behavior is broken.

## AI Collaboration Rules
1. Read `AGENTS.md` and this Constitution first.
2. Understand the architecture before writing code.
3. Never bypass the domain layer to fetch data directly in the UI.
4. Optimize for maintainability over speed.

## Future Evolution Principles
1. Prepare for Supabase integration (Phase 3).
2. Prepare for BigSeller synchronization (Phase 4).
3. Design the system to handle multiple regions and languages eventually.
