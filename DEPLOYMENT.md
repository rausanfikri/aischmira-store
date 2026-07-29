# AISCHMIRA.STORE — Enterprise Deployment & CI/CD Specification

## Purpose
This document specifies the deployment architecture, hosting configuration, production build pipeline, and environment setup for AISCHMIRA.STORE.

## Scope
Covers production deployment to Vercel, Turbopack build optimization, static page pre-rendering, and deployment quality assurance.

## Overview
AISCHMIRA.STORE is deployed as a high-performance Next.js App Router application on the **Vercel Platform**, leveraging Edge Network Caching, Turbopack compilation, and automated production pre-rendering.

| Environment | Platform | URL | Branch |
| :--- | :--- | :--- | :--- |
| **Production** | Vercel | [aischmira.store](https://aischmira.store) | `main` |
| **Staging / Preview** | Vercel Preview | `*.vercel.app` | Feature branches |

---

## Deployment Architecture

```text
GitHub Push (main branch)
     │
     ▼
Vercel GitHub Integration
     │
     ├── 1. Install Dependencies (npm ci)
     ├── 2. Run Quality Checks (eslint)
     ├── 3. Execute Turbopack Production Build (next build)
     ├── 4. Static Page Pre-rendering (59 routes)
     │
     ▼
Vercel Edge Network (Global CDN Deployment)
```

---

## Build Pipeline Configuration

### Build & Deploy Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: `20.x`

### Environment Variable Injection
Production environment variables are configured securely in the Vercel Dashboard under **Project Settings > Environment Variables**:

| Variable Name | Environment | Purpose |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production / Preview | Canonical site URL (`https://aischmira.store`) |
| `NEXT_PUBLIC_SUPABASE_URL` | All | Supabase project endpoint URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | All | Supabase public anonymous API key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server Only | Supabase admin key (never exposed to client) |

---

## Implementation & Manual Deployment

### Deploying via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Preview Deployment
vercel

# Production Deployment
vercel --prod
```

---

## Examples
See `next.config.ts` for remote image hostname optimization and Turbopack build settings.

## Future Improvements
- Integrate automated post-deploy lighthouse CI performance audit runs.
- Configure staging environment preview links for team design reviews.

## References
- `AGENTS.md`
- `docs/09_DEPLOYMENT.md`
- `ENVIRONMENT.md`

## Change History
- **2026-07-29**: Created enterprise deployment specification document.
