import { MemberProfile, RewardItem } from "./types";
import { dummyMember, dummyRewards } from "./dummy";

export class LoyaltyService {
  static async getMemberProfile(): Promise<MemberProfile> {
    return dummyMember;
  }

  static async getAvailableRewards(): Promise<RewardItem[]> {
    return dummyRewards;
  }

  static calculateEarnedPoints(purchaseAmount: number): number {
    // 1 point per Rp 10.000 spent
    return Math.floor(purchaseAmount / 10000);
  }
}
