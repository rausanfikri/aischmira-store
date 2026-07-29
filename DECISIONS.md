# AISCHMIRA.STORE — Architecture Decision Records (ADR)

## Purpose
This document serves as the permanent record of major architectural and technical decisions made for AISCHMIRA.STORE to ensure long-term consistency, maintainability, and scalability.

## Scope
Applies to all software engineering, data modeling, frontend architecture, and integration decisions across the AISCHMIRA.STORE digital ecosystem.

## Overview
AISCHMIRA.STORE is built as an editorial luxury fashion flagship website. To balance rapid customer interaction with enterprise inventory management, key architectural boundaries have been established.

---

## Decision Records

### ADR-001: BigSeller OMS as Source of Truth for Inventory & Multi-Channel Pricing

- **Status**: Accepted
- **Context**: AISCHMIRA operates physical studio stock and multi-channel fulfillment. Synchronizing inventory across multiple storefronts requires a single master inventory engine.
- **Decision**: BigSeller Omnichannel OMS is designated as the absolute source of truth for stock quantities (`availableStock`, `reservedStock`), SKU definitions (`parentSku`, `sku`), and multi-channel pricing.
- **Consequences**: Website never mutates stock directly without going through BigSeller sync hooks. Inventory updates are received asynchronously via webhooks or scheduled cron polling.

---

### ADR-002: Supabase PostgreSQL as Website Data Layer

- **Status**: Accepted
- **Context**: Directly querying BigSeller OMS on every user page request would introduce latency and hit third-party API rate limits.
- **Decision**: Supabase PostgreSQL is chosen as the website's high-performance read store and authentication provider.
- **Consequences**: Read queries are executed with sub-10ms response times. Row Level Security (RLS) policies restrict public access to active catalog items (`status = 'ACTIVE'`).

---

### ADR-003: WhatsApp Concierge Commerce as Purchase Channel

- **Status**: Accepted
- **Context**: AISCHMIRA is a luxury fashion flagship brand focused on high-touch client relationships, custom sizing assistance, and personal styling advice — not a commodity discount marketplace.
- **Decision**: Shopping Bag checkout directs customers to a dedicated WhatsApp Concierge sales channel (`https://wa.me/6285121344848`) with structured order payloads.
- **Consequences**: Eliminates complex checkout drop-offs, increases customer order value, and reinforces luxury brand positioning.

---

### ADR-004: Domain-Oriented Service Architecture

- **Status**: Accepted
- **Context**: Mixing UI code with mock datasets or external API endpoints creates fragile codebases that break during backend migrations.
- **Decision**: Separate business logic into explicit domain modules under `services/domain/` (`product`, `collection`, `category`, `homepage`, `navigation`, `journal`, `loyalty`).
- **Consequences**: UI components consume domain Services (`ProductService`, `CollectionService`), allowing prototype mock data to be replaced with Supabase API calls in Phase 3 without changing a single line of UI code.

---

### ADR-005: Separation of Services, Repositories, and Mappers

- **Status**: Accepted
- **Context**: External API DTOs frequently change keys or return inconsistent data types.
- **Decision**: Enforce a 3-part data access pattern:
  1. **Mapper (`mapper.ts`)**: Transforms raw external DTOs into domain models.
  2. **Schema (`schema.ts`)**: Validates payloads at runtime using Zod.
  3. **Service (`service.ts`)**: Exposes domain methods to UI components.
- **Consequences**: Guarantees strict type safety across client boundaries and isolates external breaking changes.

---

### ADR-006: CSS Grid 3-Column Header Architecture & Design Tokens

- **Status**: Accepted
- **Context**: Flexbox layout with variable navigation link widths causes off-center brand logo alignment on wide viewports.
- **Decision**: Implement Header layout using CSS Grid (`grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr)`). Register visual design tokens in `styles/theme.css`.
- **Consequences**: Logo remains mathematically centered relative to the viewport regardless of navigation link labels or right icon counts.

---

## Architecture
```text
BigSeller OMS (Inventory Master)
     │ (Webhooks / Cron)
     ▼
Sync Worker Service (Zod Mappers)
     │ (Upsert DTOs)
     ▼
Supabase Database (Read Layer)
     │ (Client SDK)
     ▼
Next.js Domain Services (ProductService, etc.)
     │ (RSC & Hooks)
     ▼
Website UI & WhatsApp Concierge
```

## Implementation
All domain services must inherit from standard Service interfaces, validate return payloads with Zod schemas, and export pure functions or singleton service instances.

## Examples
See `services/domain/product/service.ts` for reference implementation.

## Future Improvements
- Implement GraphQL sync endpoints for real-time inventory subscriptions.
- Introduce automated regression testing for BigSeller webhook payloads.

## References
- `AGENTS.md`
- `docs/10_ARCHITECTURE.md`
- `docs/13_API_STRATEGY.md`

## Change History
- **2026-07-29**: Formalized initial Architecture Decision Records (ADR-001 through ADR-006).
