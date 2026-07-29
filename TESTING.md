# AISCHMIRA.STORE — Enterprise Quality Assurance & Testing Strategy

## Purpose
This document defines the testing strategy, frameworks, test directory conventions, and quality gates for AISCHMIRA.STORE.

## Scope
Covers unit testing for domain services and mappers, component integration testing, and end-to-end (E2E) testing for core luxury user journeys.

## Overview
AISCHMIRA enforces high software reliability. The testing architecture is structured to validate domain business logic, Zod schema payload transformations, and key interactive user flows (Catalog filtering, Cart Drawer state, WhatsApp Checkout link generation).

---

## Testing Framework Strategy

| Test Layer | Framework | Scope & Target |
| :--- | :--- | :--- |
| **Unit Testing** | Vitest | Pure helper functions (`lib/`), Zod schemas (`schema.ts`), payload mappers (`mapper.ts`), and Domain Services (`service.ts`). |
| **Component Testing** | React Testing Library | Interactive UI components (`ProductCard`, `SearchModal`, `CartDrawer`, `HeaderShell`). |
| **E2E Testing** | Playwright | Full user journey flows across Desktop, Tablet, and Mobile viewports. |
| **Linting & Types** | ESLint & TypeScript | Code formatting, type safety, and framework convention compliance (`npm run lint`). |

---

## Architecture & Directory Layout

```text
tests/
  unit/
    lib/                 Unit tests for pure utility functions
    services/            Unit tests for domain services & payload mappers
  components/            Component integration tests
  e2e/                   Playwright E2E scenario scripts
    homepage.spec.ts     Homepage editorial rendering & navigation links
    catalog.spec.ts      Collection filtering & product detail navigation
    cart.spec.ts         Add to bag, quantity updates, and WhatsApp checkout URL contract
```

---

## Implementation

### Example: Unit Test for WhatsApp Checkout Contract (Vitest)
```typescript
import { describe, it, expect } from "vitest";
import { getWhatsAppCheckoutUrl } from "@/lib/whatsapp";

describe("getWhatsAppCheckoutUrl", () => {
  it("should generate a valid WhatsApp URL with encoded cart items", () => {
    const items = [
      {
        productId: "p1",
        quantity: 1,
        product: { name: "Bianca Silk Dress" } as any,
        variant: { sku: "AIS-SLK-BL-S", color: "Blush", size: "S" } as any,
      },
    ];

    const url = getWhatsAppCheckoutUrl(items as any);
    expect(url).toContain("https://wa.me/6285121344848?text=");
    expect(url).toContain(encodeURIComponent("Bianca Silk Dress"));
    expect(url).toContain(encodeURIComponent("AIS-SLK-BL-S"));
  });
});
```

---

## Quality Gate Standards

All Pull Requests and releases must satisfy:
1. `npm run lint` — Zero ESLint errors or warnings.
2. `npm run build` — Clean compilation and pre-rendering of all 59 static pages.
3. 100% pass rate across unit tests and critical E2E scenarios.

---

## Examples
See `services/domain/product/service.ts` for domain logic isolated for unit testability.

## Future Improvements
- Integrate Vitest into GitHub Actions CI pipeline.
- Set up automated Playwright visual regression testing for header navigation.

## References
- `AGENTS.md`
- `CODING_STANDARDS.md`
- `docs/16_TESTING.md`

## Change History
- **2026-07-29**: Created enterprise testing strategy document.
