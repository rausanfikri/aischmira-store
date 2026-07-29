# AISCHMIRA.STORE — Environment Variables & Configuration Strategy

## Purpose
This document specifies the environment variable management strategy, key naming standards, runtime security boundaries, and local setup rules for AISCHMIRA.STORE.

## Scope
Applies to all environment variables across local development (`.env.local`), Vercel preview environments, and production deployment.

## Overview
AISCHMIRA enforces strict client/server boundary security. Public variables accessible to browser bundles must be prefixed with `NEXT_PUBLIC_`. Private API keys, database connection strings, and webhook secret tokens must remain server-side and are strictly prohibited from client bundles.

---

## Environment Variable Schema & Registry

| Variable Name | Scope | Required | Default / Example Value | Description |
| :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Client & Server | Yes | `https://aischmira.store` | Canonical site URL for metadata & SEO |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Client & Server | Yes | `6285121344848` | Target concierge phone number |
| `NEXT_PUBLIC_SUPABASE_URL` | Client & Server | Optional | `https://xyz.supabase.co` | Supabase project endpoint URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client & Server | Optional | `eyJhbGciOi...` | Supabase public anonymous API key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server Only | Optional | `eyJhbGciOi...` | Supabase admin key (never prefix NEXT_PUBLIC_) |
| `BIGSELLER_APP_KEY` | Server Only | Optional | `bs_app_key_123` | BigSeller OMS API key |
| `BIGSELLER_SECRET_KEY` | Server Only | Optional | `bs_secret_456` | BigSeller webhook HMAC verification secret |

---

## Implementation & Security Boundary Rules

1. **Never Commit Secret Files**: `.env`, `.env.local`, and `.env.production` files must be listed in `.gitignore` and never committed to source control.
2. **Use `.env.example` Template**: Provide an updated, non-sensitive `.env.example` file in the root directory for team onboarding.
3. **Server Component Access**: Server Components (`app/**/page.tsx`), Route Handlers (`app/api/**/route.ts`), and Domain Services (`services/domain/`) can safely read private environment variables via `process.env`.
4. **Client Component Guard**: Client components (`"use client"`) will compile error or receive `undefined` if attempting to dereference non-`NEXT_PUBLIC_` variables.

---

## Examples

### Local Setup (`.env.local`)
```bash
# Copy example template
cp .env.example .env.local
```

### Reading Variables Safely in TypeScript
```typescript
// Server-Side Service (services/domain/product/service.ts)
const apiKey = process.env.BIGSELLER_APP_KEY;

// Client Component (components/layout/FloatingWhatsApp.tsx)
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285121344848";
```

---

## Future Improvements
- Integrate Zod environment variable parsing (`env.mjs`) to fail builds instantly if required production environment variables are missing.

## References
- `AGENTS.md`
- `DEPLOYMENT.md`
- `SECURITY.md`

## Change History
- **2026-07-29**: Initial specification of Environment Variable strategy and registry.
