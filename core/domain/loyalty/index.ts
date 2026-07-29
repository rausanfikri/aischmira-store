import { z } from 'zod';
import { Result } from '../types/Result';

export const LoyaltyProfileSchema = z.object({
  memberId: z.string(),
  pointsBalance: z.number().int().min(0),
  tier: z.enum(['SILVER', 'GOLD', 'PLATINUM']).default('SILVER'),
});

export type LoyaltyProfile = z.infer<typeof LoyaltyProfileSchema>;

export interface ILoyaltyRepository {
  getProfile(memberId: string): Promise<Result<LoyaltyProfile | null>>;
  addPoints(memberId: string, points: number): Promise<Result<LoyaltyProfile>>;
}
