export interface CustomerAddress {
  id: string;
  label: string;
  isDefault: boolean;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CustomerProfile {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  membershipTier: 'Privé Standard' | 'Privé Silver' | 'Privé Gold' | 'Privé Noir';
  memberSince: string;
  pointsBalance: number;
  preferredSize: string;
  preferredColor: string;
  preferredCategory: string;
  addresses: CustomerAddress[];
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
  tier: string;
  currentPoints: number;
  nextTierRequirement: number;
  pointsToNextTier: number;
  benefits: string[];
}

export interface SavedLook {
  id: string;
  name: string;
  season: string;
  productSkus: string[];
  imageUrl: string;
}
