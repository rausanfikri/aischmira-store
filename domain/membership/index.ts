export type MembershipTierName = 'Classic' | 'Silver' | 'Gold' | 'Platinum' | 'Privé Noir' | 'VIP Atelier';

export interface MembershipTier {
  id: string;
  name: MembershipTierName;
  threshold: number;
  colorToken: string;
  description: string;
  benefits: string[];
}

export interface PointsActivity {
  id: string;
  date: string;
  type: 'Earn' | 'Redeem' | 'Tier Bonus' | 'Adjustment';
  description: string;
  points: number;
}

export interface StyleProfile {
  preferredCollections: string[];
  preferredCategories: string[];
  preferredColors: string[];
  preferredSize: string;
  preferredFit: string;
  preferredMaterials: string[];
  preferredOccasion: string;
}

export interface MembershipEntity {
  memberId: string;
  fullName: string;
  memberSince: string;
  currentTier: MembershipTierName;
  currentPoints: number;
  lifetimePoints: number;
  nextTierRequirement: number;
  pointsToNextTier: number;
  membershipCardNumber: string;
  styleProfile: StyleProfile;
}
