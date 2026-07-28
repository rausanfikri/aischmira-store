# AISCHMIRA.STORE — Service Layer Report
**Sprint:** Sprint 2E — CMS Ready Architecture & Data Layer
**Date:** July 28, 2026

---

## Service Layer Abstractions

All UI components and route pages consume domain Service abstractions rather than raw static files:

1. **`ProductService`**:
   - `getAllProducts()`
   - `getProductBySlug(slug)`
   - `getProductById(id)`
   - `getFeaturedProducts(limit)`
   - `getProductsByCollection(collectionId)`
   - `getProductsByCategory(categoryId)`

2. **`CollectionService`**:
   - `getAllCollections()`
   - `getCollectionBySlug(slug)`
   - `getCollectionById(id)`
   - `getFeaturedCollections(limit)`

3. **`CategoryService`**:
   - `getAllCategories()`
   - `getCategoryBySlug(slug)`
   - `getCategoryById(id)`

4. **`HomepageService`**:
   - `getHero()`
   - `getCraftsmanshipPillars()`
   - `getTestimonials()`

5. **`NavigationService`**:
   - `getFooterNavigation()`

6. **`JournalService`**:
   - `getAllArticles()`
   - `getArticleBySlug(slug)`
   - `getFeaturedArticles(limit)`

7. **`LoyaltyService`**:
   - `getMemberProfile()`
   - `getAvailableRewards()`
   - `calculateEarnedPoints(purchaseAmount)`
