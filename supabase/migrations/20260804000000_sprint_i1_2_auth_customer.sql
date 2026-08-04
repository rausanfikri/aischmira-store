-- ====================================================
-- AISCHMIRA.STORE — Sprint I1.2 Supabase PostgreSQL Schema
-- Customer Domain, Authentication & Loyalty Infrastructure
-- ====================================================

-- Enable UUID Extension if missing
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table (Linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  membership_tier TEXT DEFAULT 'Classic',
  bigseller_customer_id TEXT, -- Prepared for future BigSeller OMS mapping
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Addresses Table
CREATE TABLE IF NOT EXISTS public.addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  label TEXT DEFAULT 'Default Residence',
  is_default BOOLEAN DEFAULT FALSE,
  street TEXT NOT NULL,
  city TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT DEFAULT 'Indonesia',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Customer Preferences Table
CREATE TABLE IF NOT EXISTS public.customer_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID UNIQUE NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  preferred_size TEXT,
  preferred_color TEXT,
  preferred_category TEXT,
  newsletter_subscribed BOOLEAN DEFAULT TRUE,
  whatsapp_notifications BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Loyalty Accounts Table
CREATE TABLE IF NOT EXISTS public.loyalty_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID UNIQUE NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  points_balance INT DEFAULT 0,
  lifetime_points INT DEFAULT 0,
  current_tier TEXT DEFAULT 'Classic',
  referral_code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Loyalty Transactions Table
CREATE TABLE IF NOT EXISTS public.loyalty_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount INT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('EARNED', 'REDEEMED', 'EXPIRED')),
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Wishlist Table
CREATE TABLE IF NOT EXISTS public.wishlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(customer_id, product_id)
);

-- 7. Shopping Bag Table
CREATE TABLE IF NOT EXISTS public.shopping_bag (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  variant_id TEXT,
  quantity INT DEFAULT 1,
  size TEXT,
  color TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Saved Looks Table
CREATE TABLE IF NOT EXISTS public.saved_looks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  season TEXT,
  product_skus TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Order History Reference Table (Preparation for BigSeller & Checkout)
CREATE TABLE IF NOT EXISTS public.order_history_reference (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  order_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'Processing',
  total_amount NUMERIC(12, 2) NOT NULL,
  item_count INT DEFAULT 1,
  skus TEXT[] DEFAULT '{}',
  bigseller_order_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loyalty_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loyalty_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shopping_bag ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_looks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_history_reference ENABLE ROW LEVEL SECURITY;

-- Profiles RLS
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Addresses RLS
CREATE POLICY "Users can view own addresses" ON public.addresses FOR SELECT USING (auth.uid() = customer_id);
CREATE POLICY "Users can manage own addresses" ON public.addresses FOR ALL USING (auth.uid() = customer_id);

-- Customer Preferences RLS
CREATE POLICY "Users can view own preferences" ON public.customer_preferences FOR SELECT USING (auth.uid() = customer_id);
CREATE POLICY "Users can update own preferences" ON public.customer_preferences FOR ALL USING (auth.uid() = customer_id);

-- Loyalty Accounts RLS
CREATE POLICY "Users can view own loyalty account" ON public.loyalty_accounts FOR SELECT USING (auth.uid() = customer_id);

-- Loyalty Transactions RLS
CREATE POLICY "Users can view own loyalty transactions" ON public.loyalty_transactions FOR SELECT USING (auth.uid() = customer_id);

-- Wishlist RLS
CREATE POLICY "Users can manage own wishlist" ON public.wishlist FOR ALL USING (auth.uid() = customer_id);

-- Shopping Bag RLS
CREATE POLICY "Users can manage own shopping bag" ON public.shopping_bag FOR ALL USING (auth.uid() = customer_id);

-- Saved Looks RLS
CREATE POLICY "Users can view own saved looks" ON public.saved_looks FOR SELECT USING (auth.uid() = customer_id);

-- Order History RLS
CREATE POLICY "Users can view own orders" ON public.order_history_reference FOR SELECT USING (auth.uid() = customer_id);

-- ====================================================
-- AUTO-PROVISIONING DATABASE TRIGGER
-- Automatic Profile & Loyalty Account Creation on New User Registration
-- ====================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, membership_tier)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture'),
    'Classic'
  );

  INSERT INTO public.loyalty_accounts (customer_id, points_balance, lifetime_points, current_tier, referral_code)
  VALUES (
    NEW.id,
    0,
    0,
    'Classic',
    'ASC-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT), 1, 6))
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
