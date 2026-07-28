# AISCHMIRA.STORE — Header Architecture Report
**Sprint:** HOTFIX — Premium Header Architecture v3 (Production Ready)
**Date:** July 28, 2026

---

## 1. Executive Summary

HOTFIX Header v3 implemented strict Single Responsibility Principle (SRP) by restructuring the Header into 11 dedicated module files under `components/layout/Header/`. It eliminated transparent header modes and hero-dependent text color switching, establishing a permanent, zero-layout-shift glass navigation system.

## 2. Component Hierarchy & Responsibilities

| Module File | Single Responsibility |
|---|---|
| `HeaderShell.tsx` | Sticky positioning, scroll detection (`scrolled`), glass background (`rgba(255,255,255,0.88)` / `0.96`), backdrop blur (`backdrop-blur-xl`), height transitions (`84px` &rarr; `72px`). |
| `HeaderContainer.tsx` | Inner container max-width wrapper (`container-hero`). |
| `Header.tsx` | Composition-only layout layer using CSS Grid `minmax(0, 1fr) auto minmax(0, 1fr)`. |
| `Navigation.tsx` | Semantic `<nav aria-label="Primary Header Navigation">` container wrapper. |
| `NavLinks.tsx` | Renders Collections and Categories navigation menu triggers side-by-side. |
| `MegaMenuCollections.tsx` | Luxury multi-column Mega Menu for Collections (Signature with gold badges, Classic in 2-col grid, Special scarf edits, Editorial cover card). |
| `DropdownCategories.tsx` | Single-column compact dropdown for Categories (7 unique items). |
| `NavIcons.tsx` | Action controls (Search, Account, Wishlist, Shopping Bag) with min 44x44px touch targets and `#D9AE20` gold hover states. |
| `Logo.tsx` | Renders logo image with CSS token height scaling (`52px` top, `44px` scrolled desktop, `36px` mobile). |
| `AnnouncementBar.tsx` | Structural wrapper module for top announcement bar. |
| `index.ts` | Clean module exports. |
