# Design System

## Brand Color Tokens

The official AISCHMIRA palette is defined once in `styles/theme.css` and consumed through Tailwind semantic utilities and CSS variables. Components must not introduce literal brand colors.

| Token | Value | Intended use |
| --- | --- | --- |
| `--color-primary` | `#D9AE20` | Primary CTA, button, link, active state |
| `--color-primary-hover` | `#C08E18` | Primary hover state |
| `--color-primary-light` | `#F9F2D8` | Warm section tint, badge, highlight, hover background |
| `--color-secondary` | `#D5A12A` | Supporting brand treatment |
| `--color-accent` | `#D19D28` | Restrained divider, label, quote, small highlight |
| `--color-background` | `#FAFAF8` | Off-white page background |
| `--color-surface` | `#FFFFFF` | Cards, navigation, form surfaces |
| `--color-text` | `#2B2B2B` | Primary text |
| `--color-text-secondary` | `#6D6D6D` | Secondary text and metadata |
| `--color-border` | `#ECE8DE` | Warm borders and dividers |

The primary scale (`50` through `900`) is also defined from `#D9AE20`. Gold should remain a premium accent; do not fill the entire page with gold. Use off-white, warm white, white, and cream surfaces. Avoid black or gold page backgrounds.

## Typography

- Heading: Cormorant Garamond.
- Body: Inter.
- Use the existing typography tokens and utilities rather than arbitrary sizes.

## Shape and Elevation

- Follow the radius scale in `styles/theme.css`.
- Use soft, low-contrast shadows from the token scale.
- Use the 300ms normal transition for primary button color changes.
