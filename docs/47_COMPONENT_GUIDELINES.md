# AISCHMIRA — Component Architecture Guidelines
**Document ID:** 47_COMPONENT_GUIDELINES  
**Date:** July 28, 2026  

---

## 1. Single Responsibility & Pure Composition

- **Primitives (`components/ui/`)**: Generic reusable components (Button, Container, ImageLightbox, SizeGuideModal). Zero domain dependencies.
- **Layout Chrome (`components/layout/`)**: Site chrome, header, footer, search modal, cart drawer, and mobile drawer.
- **Feature Sections (`components/sections/` / `components/products/`)**: Composed domain modules consuming domain models (`Product`, `Collection`).

---

## 2. Component Guidelines

1. **Named Exports**: Prefer named exports for components (`export function ProductGallery...`).
2. **Strict Props Interfaces**: Always define explicit TypeScript interfaces for component props.
3. **No Direct External API Calls**: UI components consume domain state via providers or custom hooks (`useShoppingBag`, `useSearch`).
