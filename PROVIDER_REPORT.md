# AISCHMIRA.STORE — Provider Report
**Sprint:** 2D — Enterprise Layout Architecture + Product Experience
**Date:** July 28, 2026

---

## 1. Provider Ecosystem Overview

All application context providers are organized in `providers/` and composed cleanly in `SiteLayout.tsx`:

| Provider | File | Responsibility |
| --- | --- | --- |
| **`AnnouncementProvider`** | `providers/AnnouncementProvider.tsx` | Manages announcement bar state and localStorage dismissal. |
| **`SearchProvider`** | `providers/SearchProvider.tsx` | Controls fullscreen search overlay visibility. |
| **`ShoppingBagProvider`** | `providers/ShoppingBagProvider.tsx` | Manages shopping bag items, quantities, subtotal, and cart drawer. |
| **`AccountProvider`** | `providers/AccountProvider.tsx` | Manages member user state, points, and future auth boundaries. |
| **`ModalProvider`** | `providers/ModalProvider.tsx` | Manages active global dialogs and modals. |

---

## 2. Zero Logic Duplication

Context hooks (`useAnnouncementContext`, `useSearchContext`, `useShoppingBagContext`, `useAccountContext`, `useModalContext`) ensure components access global state without logic duplication or prop drilling.
