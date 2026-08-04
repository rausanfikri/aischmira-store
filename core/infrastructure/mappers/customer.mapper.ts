import { CustomerProfile, CustomerLoyaltyInfo, CustomerMembershipTier, SavedLook, WishlistItem, ShoppingBagItem } from '@/domain/customer';

export interface ProfileRow {
  id: string;
  email?: string | null;
  full_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
  avatar_url?: string | null;
  membership_tier?: string | null;
  created_at?: string | null;
  points_balance?: number | null;
  bigseller_customer_id?: string | null;
}

export interface AddressRow {
  id: string;
  label?: string | null;
  is_default?: boolean | null;
  street?: string | null;
  city?: string | null;
  postal_code?: string | null;
  country?: string | null;
}

export interface PreferenceRow {
  preferred_size?: string | null;
  preferred_color?: string | null;
  preferred_category?: string | null;
  newsletter_subscribed?: boolean | null;
  whatsapp_notifications?: boolean | null;
}

export interface LoyaltyRow {
  current_tier?: string | null;
  points_balance?: number | null;
  lifetime_points?: number | null;
  referral_code?: string | null;
}

export interface WishlistRow {
  id: string;
  product_id: string;
  created_at?: string | null;
}

export interface ShoppingBagRow {
  id: string;
  product_id: string;
  variant_id?: string | null;
  quantity?: number | null;
  size?: string | null;
  color?: string | null;
  created_at?: string | null;
}

export interface SavedLookRow {
  id: string;
  name?: string | null;
  season?: string | null;
  product_skus?: string[] | null;
  image_url?: string | null;
}

export class CustomerMapper {
  public static toProfile(
    profileRow: ProfileRow,
    addressesRows: AddressRow[] = [],
    preferencesRow: PreferenceRow | null = null
  ): CustomerProfile {
    const fullName = profileRow.full_name || 
      [profileRow.first_name, profileRow.last_name].filter(Boolean).join(' ') || 
      profileRow.email?.split('@')[0] || 
      'Privé Member';

    return {
      id: profileRow.id,
      email: profileRow.email || '',
      fullName,
      firstName: profileRow.first_name || '',
      lastName: profileRow.last_name || '',
      phone: profileRow.phone || undefined,
      avatarUrl: profileRow.avatar_url || undefined,
      membershipTier: (profileRow.membership_tier as CustomerMembershipTier) || 'Classic',
      memberSince: profileRow.created_at ? new Date(profileRow.created_at).getFullYear().toString() : new Date().getFullYear().toString(),
      pointsBalance: profileRow.points_balance || 0,
      bigsellerCustomerId: profileRow.bigseller_customer_id || undefined,
      preferences: preferencesRow ? {
        preferredSize: preferencesRow.preferred_size || undefined,
        preferredColor: preferencesRow.preferred_color || undefined,
        preferredCategory: preferencesRow.preferred_category || undefined,
        newsletterSubscribed: preferencesRow.newsletter_subscribed ?? true,
        whatsappNotifications: preferencesRow.whatsapp_notifications ?? true,
      } : undefined,
      addresses: addressesRows.map((addr) => ({
        id: addr.id,
        label: addr.label || 'Default Address',
        isDefault: addr.is_default || false,
        street: addr.street || '',
        city: addr.city || '',
        postalCode: addr.postal_code || '',
        country: addr.country || 'Indonesia',
      })),
    };
  }

  public static toLoyaltyInfo(loyaltyRow: LoyaltyRow | null): CustomerLoyaltyInfo {
    const tier = (loyaltyRow?.current_tier as CustomerMembershipTier) || 'Classic';
    const currentPoints = loyaltyRow?.points_balance || 0;
    const lifetimePoints = loyaltyRow?.lifetime_points || 0;

    let nextTierRequirement = 1000;
    if (tier === 'Privé Silver') nextTierRequirement = 5000;
    if (tier === 'Privé Gold') nextTierRequirement = 15000;
    if (tier === 'Privé Noir') nextTierRequirement = 50000;

    const pointsToNextTier = Math.max(0, nextTierRequirement - currentPoints);

    const benefits = CustomerMapper.getTierBenefits(tier);

    return {
      tier,
      currentPoints,
      lifetimePoints,
      nextTierRequirement,
      pointsToNextTier,
      referralCode: loyaltyRow?.referral_code || `ASC-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      benefits,
    };
  }

  public static getTierBenefits(tier: CustomerMembershipTier): string[] {
    switch (tier) {
      case 'Privé Noir':
        return [
          'Bespoke Private Appointment privileges in Flagship Showrooms',
          'Dedicated Personal Stylist & Concierge Director',
          'Complimentary Worldwide Express Priority Shipping',
          '72-Hour Exclusive Priority Window for Atelier Limited Releases',
          'Invitation to Annual AISCHMIRA Gala & Private Previews',
        ];
      case 'Privé Gold':
        return [
          'Complimentary Concierge Express Shipping',
          '48-Hour Early Access to Atelier Collections',
          'Dedicated Personal Styling Assistant',
          'Signature Calligraphic Gift Packaging Included',
        ];
      case 'Privé Silver':
        return [
          'Complimentary Standard Domestic Express Shipping',
          '24-Hour Priority Access to Seasonal Drops',
          'Birthday Month Exclusive Privileges',
        ];
      case 'Classic':
      default:
        return [
          'Welcome Privé Tier Membership',
          'Earn Loyalty Points on Every Purchase',
          'Access to Private Member Digital Portal',
        ];
    }
  }

  public static toWishlistItem(row: WishlistRow): WishlistItem {
    return {
      id: row.id,
      productId: row.product_id,
      addedAt: row.created_at || new Date().toISOString(),
    };
  }

  public static toShoppingBagItem(row: ShoppingBagRow): ShoppingBagItem {
    return {
      id: row.id,
      productId: row.product_id,
      variantId: row.variant_id || undefined,
      quantity: row.quantity || 1,
      size: row.size || undefined,
      color: row.color || undefined,
      addedAt: row.created_at || new Date().toISOString(),
    };
  }

  public static toSavedLook(row: SavedLookRow): SavedLook {
    return {
      id: row.id,
      name: row.name || '',
      season: row.season || '',
      productSkus: row.product_skus || [],
      imageUrl: row.image_url || '',
    };
  }
}
