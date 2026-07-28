# AISCHMIRA.STORE — HeaderShell Report
**Sprint:** HOTFIX — Premium Header Architecture v3 (Production Ready)
**Date:** July 28, 2026

---

## 1. HeaderShell Architecture

`HeaderShell.tsx` isolates all shell, positioning, background, and scrolling concerns from content layout:

- **Sticky Positioning**: `sticky top-0 left-0 right-0 z-40`
- **Glass Background**: Consumes `--header-bg` (`rgba(255, 255, 255, 0.88)`) top & `--header-bg-scrolled` (`rgba(255, 255, 255, 0.96)`) scrolled
- **Backdrop Filter**: `backdrop-blur-xl`
- **Height Transitions**: `h-[var(--header-height)]` (`84px`) &rarr; `h-[var(--header-height-scrolled)]` (`72px`)
- **Render Prop API**: Passes `{ scrolled }` boolean down to children for logo size scaling without re-rendering layout DOM tree.
