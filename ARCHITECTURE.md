# AISCHMIRA.STORE — Enterprise System Architecture

**Last Updated:** July 28, 2026 (Sprint 2D)  
**Status:** Enterprise Production Ready  

---

## 1. Overview

AISCHMIRA.STORE is built as an editorial luxury fashion flagship experience using Next.js App Router, TypeScript, Tailwind CSS v4, and Zustand.

---

## 2. Directory Architecture

```text
app/                     App Router routes and pages
components/
  layout/                Site Chrome & Layout Primitives
    SiteLayout.tsx       Global layout wrapper
    AnnouncementBar.tsx  40px sticky dismissible notification bar
    Header.tsx           Scroll-aware transparent/solid sticky header
    Navigation.tsx       Mega menu navigation trigger & wrapper
    DesktopNav.tsx       Collections & Categories mega menus
    MobileNavigation.tsx Mobile navigation drawer
    MegaMenu.tsx         Reusable mega menu content section
    SearchOverlay.tsx    Fullscreen search dialog
    ShoppingBagDrawer.tsx Slide-over shopping bag drawer
    AccountDrawer.tsx    Member account drawer
    Footer.tsx           Balanced 5-column luxury footer
  products/              Product Detail & Gallery Components
    ProductGallery.tsx   Sticky desktop image gallery with Lightbox
    ProductInfo.tsx      Product details, selectors & WhatsApp pre-filled CTA
    RecentlyViewed.tsx   Client browsing history tracker
  ui/                    Reusable primitives (Button, Container, Lightbox, SizeGuide)
providers/               React Context Providers
  AnnouncementProvider.tsx
  SearchProvider.tsx
  ShoppingBagProvider.tsx
  AccountProvider.tsx
  ModalProvider.tsx
hooks/                   Custom React Hooks
  useScrollPosition.ts   Scroll detection (threshold 40px)
  useAnnouncement.ts     LocalStorage dismissal persistence
  useShoppingBag.ts      Shopping bag state wrapper
  useSearch.ts           Search overlay state wrapper
data/                    Typed datasets (collections, products)
styles/                  Global CSS and design token source (theme.css)
store/                   Zustand global stores (useShopStore, useUIStore)
```

---

## 3. Provider Architecture

Context providers are centralized in `SiteLayout.tsx` to provide global state access without logic duplication:

```tsx
<AnnouncementProvider>
  <SearchProvider>
    <ShoppingBagProvider>
      <AccountProvider>
        <ModalProvider>
          <SiteLayout>{children}</SiteLayout>
        </ModalProvider>
      </AccountProvider>
    </ShoppingBagProvider>
  </SearchProvider>
</AnnouncementProvider>
```
