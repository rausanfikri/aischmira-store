# AISCHMIRA.STORE — Supabase PostgreSQL Schema & Database Specification

## Purpose
This document specifies the database tables, relational schemas, indexes, Row Level Security (RLS) policies, and Supabase client configuration for AISCHMIRA.STORE.

## Scope
Covers relational tables for products, variants, collections, categories, customer profiles, addresses, and member loyalty accounts.

## Overview
Supabase PostgreSQL serves as the high-performance read store for public store requests and member account management, receiving synchronized DTOs from the BigSeller OMS pipeline.

---

## Relational Schema Definitions

```sql
-- 1. Categories Table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  parent_category_id UUID REFERENCES categories(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Collections Table
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  season TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Products Table (BigSeller OMS Synced)
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  parent_sku TEXT,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  price NUMERIC(12, 2) NOT NULL,
  compare_at_price NUMERIC(12, 2),
  currency TEXT DEFAULT 'IDR',
  description TEXT,
  fabric_details TEXT,
  care_instructions TEXT,
  category_slug TEXT REFERENCES categories(slug),
  collection_slug TEXT REFERENCES collections(slug),
  images TEXT[] DEFAULT '{}',
  colors TEXT[] DEFAULT '{}',
  sizes TEXT[] DEFAULT '{}',
  in_stock BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  status TEXT DEFAULT 'ACTIVE',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Product Variants Table
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  sku TEXT UNIQUE NOT NULL,
  color TEXT NOT NULL,
  size TEXT NOT NULL,
  stock INT DEFAULT 0,
  price NUMERIC(12, 2) NOT NULL,
  compare_at_price NUMERIC(12, 2)
);

-- 5. Customer Profiles Table (Linked to Supabase Auth)
CREATE TABLE customers (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  loyalty_tier TEXT DEFAULT 'SILVER',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Loyalty Accounts Table
CREATE TABLE loyalty_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  points_balance INT DEFAULT 0,
  lifetime_points INT DEFAULT 0,
  current_tier TEXT DEFAULT 'SILVER',
  referral_code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Row Level Security (RLS) Policies

```sql
-- Enable RLS on Products and Collections
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE loyalty_accounts ENABLE ROW LEVEL SECURITY;

-- Public Read Policy for Catalog
CREATE POLICY "Public catalog read access"
ON products FOR SELECT
USING (status = 'ACTIVE' AND is_active = true);

-- Customer Read Policy for Account Data
CREATE POLICY "Customer profile access"
ON customers FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Customer loyalty access"
ON loyalty_accounts FOR SELECT
USING (auth.uid() = customer_id);
```

---

## Examples
See `services/domain/product/service.ts` for database query abstractions consuming domain schema DTOs.

## Future Improvements
- Add automated PostgreSQL migration scripts using Supabase CLI.

## References
- `AGENTS.md`
- `DATA_MODEL.md`
- `SECURITY.md`
- `docs/14_DATABASE_PLAN.md`

## Change History
- **2026-07-29**: Created Supabase PostgreSQL database schema specification.
