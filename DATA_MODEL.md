# AISCHMIRA.STORE — Enterprise Domain Data Model Specification

**Version:** 1.4.0 (Sprint F2.5 — Navigation & Configuration Model)  
**Source of Truth:** `domain/navigation/`, `core/config/`  

---

## 1. Navigation Entity Specification (`domain/navigation/entity.ts`)

```typescript
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavigationItem[];
}

export interface NavigationGroup {
  id: string;
  title: string;
  links: NavigationItem[];
}

export interface NavigationConfig {
  mainNav: NavigationItem[];
  utilityNav: NavigationItem[];
  footerNav: NavigationGroup[];
  mobileNav: NavigationItem[];
}
```

---

## 2. Navigation Repository Contract (`domain/navigation/repository.ts`)

```typescript
export interface INavigationRepository {
  getNavigation(): Promise<Result<NavigationConfig, AppError>>;
  getFooterNavigation(): Promise<Result<NavigationGroup[], AppError>>;
}
```
