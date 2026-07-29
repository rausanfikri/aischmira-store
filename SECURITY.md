# AISCHMIRA.STORE — Enterprise Security Guidelines & Compliance Specification

## Purpose
This document defines the security policies, input validation standards, credential boundaries, data protection rules, and Row Level Security (RLS) enforcement for AISCHMIRA.STORE.

## Scope
Applies to all frontend components, domain service layers, Supabase database schemas, external API webhooks, and deployment configurations.

## Overview
As a luxury digital flagship, maintaining customer privacy, protecting authentication credentials, and ensuring zero data leaks is paramount. AISCHMIRA enforces a defense-in-depth model across the entire application stack.

---

## Core Security Rules

### 1. Secret & Key Protection
- **Zero Credentials in Git**: Never commit API keys, database connection strings, JWT secrets, passwords, or payment tokens to the repository.
- **Client Bundle Isolation**: Read private keys strictly on the server (`process.env.SUPABASE_SERVICE_ROLE_KEY`). Only variables prefixed with `NEXT_PUBLIC_` may be exposed to browser JS bundles.

### 2. Input Sanitization & XSS Prevention
- **Zod Boundary Schema Validation**: Validate all incoming payload data at runtime using Zod schemas (`services/domain/*/schema.ts`).
- **No Direct HTML Injection**: Avoid `dangerouslySetInnerHTML` unless explicitly sanitized and reviewed. Next.js automatically escapes React JSX text expressions against XSS.

### 3. Database Security & Row Level Security (RLS)
- **Supabase RLS Enabled**: Row Level Security (RLS) must be enabled on every PostgreSQL table.
- **Public Read Rules**: Public anonymous users (`anon` role) are permitted `SELECT` access ONLY to active product catalog items (`status = 'ACTIVE'`, `isActive = true`).
- **Private Data Protection**: Customer profiles, order histories, and loyalty points balances require authenticated `auth.uid()` checks.

---

## Architecture & Data Access

```text
Browser Client (React UI)
     │ (Public Requests)
     ▼
Next.js Server / Edge Runtime (Service Layer)
     │ (Validates Input via Zod Schema)
     ▼
Supabase PostgreSQL (Row Level Security Policy Check)
```

---

## Implementation

### Example: Supabase Row Level Security Policy (SQL)
```sql
-- Enable RLS on Products Table
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access for Active Products
CREATE POLICY "Allow public read access to active products"
ON products FOR SELECT
USING (status = 'ACTIVE' AND is_active = true);

-- Enable RLS on Customer Loyalty Table
ALTER TABLE loyalty_accounts ENABLE ROW LEVEL SECURITY;

-- Restrict Loyalty Access to Account Owner Only
CREATE POLICY "Allow individual read access to loyalty account"
ON loyalty_accounts FOR SELECT
USING (auth.uid() = customer_id);
```

---

## Examples
See `services/domain/product/schema.ts` for reference runtime Zod payload validation rules.

## Future Improvements
- Configure Content Security Policy (CSP) headers in `next.config.ts`.
- Implement rate-limiting headers for public form endpoints (`/contact`).

## References
- `AGENTS.md`
- `ENVIRONMENT.md`
- `SUPABASE_SCHEMA.md`
- `docs/17_SECURITY_GUIDELINES.md`

## Change History
- **2026-07-29**: Formalized enterprise security guidelines and RLS specification.
