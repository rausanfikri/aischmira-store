# TASKS — AISCHMIRA.STORE

## Current Sprint: Sprint 2E — CMS Ready Architecture & Data Layer
- [x] Create domain modules under `services/domain/` (`product`, `collection`, `category`, `homepage`, `navigation`, `journal`, `loyalty`)
- [x] Implement Zod schemas (`schema.ts`) in each domain module for runtime payload validation
- [x] Implement Product model with BigSeller SKU fields (`id`, `sku`, `parentSku`, `compareAtPrice`, `currency`, `status`, `isActive`, `isFeatured`)
- [x] Create Service Layer abstractions (`ProductService`, `CollectionService`, `CategoryService`, `HomepageService`, `NavigationService`, `JournalService`, `LoyaltyService`)
- [x] Create payload mappers (`mapper.ts`) to validate external DTOs
- [x] Re-export domain types in `types/index.ts` and `services/index.ts` for backward compatibility
- [x] Update documentation (`ARCHITECTURE.md`, `ROADMAP.md`, `CHANGELOG.md`, `TASKS.md`)
- [x] Verify `npm run lint` (0 errors, 0 warnings)
- [x] Verify `npm run build` (59 static routes compiled cleanly)
- [x] Generate 6 deliverable reports (`DATA_LAYER_REPORT.md`, `DOMAIN_ARCHITECTURE_REPORT.md`, `SERVICE_LAYER_REPORT.md`, `FUTURE_INTEGRATION_NOTES.md`, `DATA_LAYER_FILES_CHANGED.md`, `DATA_LAYER_TECHNICAL_DEBT.md`)
