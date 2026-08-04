export type CustomerMembershipTier = 'Classic' | 'Privé Silver' | 'Privé Gold' | 'Privé Noir';

export interface CustomerAddress {
  id: string;
  label: string;
  isDefault: boolean;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CustomerPreferences {
  preferredSize?: string;
  preferredColor?: string;
  preferredCategory?: string;
  newsletterSubscribed: boolean;
  whatsappNotifications: boolean;
}

export interface CustomerProfile {
  id: string;
  email: string;
  fullName: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatarUrl?: string;
  membershipTier: CustomerMembershipTier;
  memberSince: string;
  pointsBalance: number;
  bigsellerCustomerId?: string;
  preferences?: CustomerPreferences;
  addresses: CustomerAddress[];
}

export interface CustomerEntity {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  membershipTier: CustomerMembershipTier;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerOrderSummary {
  id: string;
  orderNumber: string;
  date: string;
  totalAmount: number;
  status: 'Draft' | 'Processing' | 'Shipped' | 'Delivered';
  itemCount: number;
  skus: string[];
}

export interface CustomerLoyaltyInfo {
  tier: CustomerMembershipTier;
  currentPoints: number;
  lifetimePoints: number;
  nextTierRequirement: number;
  pointsToNextTier: number;
  referralCode: string;
  benefits: string[];
}

export interface LoyaltyTransaction {
  id: string;
  customer_id: string;
  amount: number;
  type: 'EARNED' | 'REDEEMED' | 'EXPIRED';
  description: string;
  created_at: string;
}

export interface SavedLook {
  id: string;
  name: string;
  season: string;
  productSkus: string[];
  imageUrl: string;
}

export interface WishlistItem {
  id: string;
  productId: string;
  addedAt: string;
}

export interface ShoppingBagItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  size?: string;
  color?: string;
  addedAt: string;
}

/**
 * Customer Data Transfer Object (DTO) for Supabase DB mapping
 */
export interface CustomerDTO {
  id: string;
  email: string;
  full_name: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  membership_tier: string;
  bigseller_customer_id: string | null;
  created_at: string;
  updated_at?: string;
}
