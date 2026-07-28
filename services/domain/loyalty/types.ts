export type LoyaltyTier = "Privilege" | "Privé" | "VIP" | "Black";

export interface RewardItem {
  id: string;
  title: string;
  pointsCost: number;
  code: string;
  description: string;
}

export interface MemberProfile {
  id: string;
  name: string;
  email: string;
  tier: LoyaltyTier;
  points: number;
  referralCode: string;
  orderCount: number;
  joinedDate: string;
}
