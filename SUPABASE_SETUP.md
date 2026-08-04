# AISCHMIRA.STORE — Supabase Setup & Configuration Guide

## Overview
This document provides step-by-step instructions for provisioning a Supabase project, setting up Google OAuth credentials, and applying PostgreSQL migrations.

---

## Environment Variables Configuration

Copy `.env.example` to `.env.local` and populate the keys:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 1. Google OAuth Setup in Supabase

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to **APIs & Services > Credentials**.
3. Create an **OAuth 2.0 Client ID** (Application type: *Web application*).
4. Set **Authorized Redirect URIs**:
   `https://<your-supabase-project-id>.supabase.co/auth/v1/callback`
5. Copy the generated **Client ID** and **Client Secret**.
6. Open your [Supabase Dashboard](https://supabase.com/dashboard).
7. Go to **Authentication > Providers > Google**.
8. Enable Google, paste the **Client ID** and **Client Secret**, and save.

---

## 2. Database Migration Execution

Apply the SQL migration script located at `supabase/migrations/20260804000000_sprint_i1_2_auth_customer.sql` via Supabase CLI or SQL Editor:

```bash
# Using Supabase CLI
supabase db push
```

Alternatively, open **SQL Editor** in the Supabase Dashboard, paste the contents of `supabase/migrations/20260804000000_sprint_i1_2_auth_customer.sql`, and execute.

---

## 3. Auto-Provisioning Verification

When a user logs in for the first time via Google OAuth:
1. `auth.users` receives a new user record.
2. PostgreSQL trigger `on_auth_user_created` automatically inserts:
   - A corresponding record in `public.profiles` (`membership_tier = 'Classic'`).
   - A corresponding record in `public.loyalty_accounts` (`points_balance = 0`, `current_tier = 'Classic'`).
