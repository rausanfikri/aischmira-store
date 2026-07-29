# Title: Design Token System
Status: Accepted
Date: 2026-07-29
Context: Hardcoded colors and spacing values lead to inconsistent UI and make it difficult to implement overarching theme changes (e.g., dark mode or brand refreshes).
Decision: Implement a strict design token system using `styles/theme.css` and Tailwind v4.
Alternatives Considered: Tailwind arbitrary values everywhere, CSS-in-JS. Arbitrary values break consistency. CSS-in-JS adds runtime overhead.
Consequences: UI components must only use defined design tokens. No hardcoded colors or random spacing values are allowed.
Future Review: When extending the design system for new sub-brands or major redesigns.
