# AISCHMIRA — Provider Architecture
**Document ID:** 48_PROVIDER_ARCHITECTURE  
**Date:** July 28, 2026  

---

## 1. Provider System

All global React context providers reside in `providers/`:
- `AnnouncementProvider.tsx`: Manages announcement bar visibility and localStorage dismissal state.
- `SearchProvider.tsx`: Manages fullscreen search overlay open/close states.
- `ShoppingBagProvider.tsx`: Wraps shopping cart state, item mutations, subtotal calculations, and cart drawer triggers.
- `AccountProvider.tsx`: Manages member authentication state and loyalty points for future account integration.
- `ModalProvider.tsx`: Global modal registry provider.

---

## 2. Usage Pattern

```tsx
import { useShoppingBagContext } from "@/providers/ShoppingBagProvider";

export function CustomComponent() {
  const { cart, cartCount, setCartOpen } = useShoppingBagContext();
  return <button onClick={() => setCartOpen(true)}>Bag ({cartCount})</button>;
}
```
