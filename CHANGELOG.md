# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Documentation sprint: `ARCHITECTURE.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `DECISIONS.md`.
- Rewrote `README.md` with full project overview, vision, and architecture summary.
- Created `ROADMAP.md` with phased development plan and success metrics.
- Created `TASKS.md` with sprint-based product backlog.

---

## [0.2.0] — 2026-07-22

### Added
- **Homepage sections**: Hero, FeaturedCollection, ProductHighlight, BrandStory, Lookbook, InstagramPreview, Newsletter.
- **Layout components**: Navbar (desktop + mobile drawer), Footer (social links, WhatsApp CTA), AnnouncementBar, FloatingWhatsApp.
- **Layout primitives**: Container, Grid, Section, Stack.
- **UI primitives**: Button (primary, outline, ghost, icon variants), Card, Badge, Typography (Heading, Text), Form (Input, Textarea, Select, Label, Checkbox, Radio, Message), Feedback (Spinner, Toast), Overlay (Modal, Drawer), Divider.
- **Brand identity integration**: Official logo with image-error fallback to text, favicon, OpenGraph and Twitter Card metadata.
- **Social media links**: Instagram, TikTok, Facebook, YouTube, Pinterest, LinkedIn, X, Threads — all using `react-icons`.
- **WhatsApp CTAs**: Hero section, product cards, footer, floating button — all linking to official WhatsApp Business number.
- **Framer Motion animations**: Fade, slide, and scale transitions across all sections (250–350ms, ease-in-out).
- **SEO metadata**: Title, description, keywords, canonical URL, OpenGraph, Twitter Card in `app/layout.tsx`.

### Changed
- **Design token palette**: Migrated to gold-based `#D9AE20` system with full 50–900 scale in `styles/theme.css`.
- **Global styles**: Added `.section-padding`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.section-divider` utilities in `styles/globals.css`.
- **Section backgrounds**: Alternating white, warm cream (`#FAFAF8`), and light gold tint (`#F9F2D8`) for editorial rhythm.

---

## [0.1.0] — 2026-07-15

### Added
- **Project scaffold**: Next.js 16 App Router with TypeScript strict mode.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`, PostCSS configuration.
- **Design token foundation**: `styles/theme.css` with color palette, spacing, radius, shadow, transition, z-index, and container tokens.
- **Typography**: Cormorant Garamond (headings) and Inter (body) via `next/font/google`.
- **Data layer**: Typed static data files for products, collections, navigation, footer, social media, homepage content, and testimonials.
- **Domain types**: TypeScript interfaces for Product, Collection, Content, and Layout in `types/`.
- **Utility library**: `cn()` class merger, price/date formatters, string helpers, theme token access.
- **ESLint configuration**: Next.js Core Web Vitals + TypeScript ruleset.
- **Project documentation**: Initial `docs/` folder with 25 documentation files covering project overview, requirements, roadmap, tech stack, design system, project structure, component library, data model, prompt guide, deployment, architecture, coding standards, Git workflow, API plan, database plan, UI/UX guidelines, testing, security, release plan, backlog, product vision, brand guidelines, content strategy, SEO strategy, analytics plan, and AI development workflow.
- **Agent instructions**: `AGENTS.md` with comprehensive AI collaboration rules.
