import { MembershipEntity, MembershipTier, MembershipTierName, PointsActivity, StyleProfile } from '@/domain/membership';
import { customerService } from '@/services/customer.service';
import { authService } from '@/services/auth.service';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class MembershipService {
  private readonly defaultTiers: MembershipTier[] = [
    {
      id: 'tier_classic',
      name: 'Classic',
      threshold: 0,
      colorToken: 'border-slate-300 bg-slate-50 text-slate-700',
      description: 'Welcome to the AISCHMIRA digital flagship ecosystem.',
      benefits: [
        'Welcome Privé Tier Membership',
        'Earn Loyalty Points on Every Purchase',
        'Access to Private Member Digital Portal',
      ],
    },
    {
      id: 'tier_silver',
      name: 'Silver',
      threshold: 1000,
      colorToken: 'border-slate-400 bg-slate-100 text-slate-800',
      description: 'Elevated privileges for discerning fashion enthusiasts.',
      benefits: [
        'Complimentary Standard Express Shipping',
        '24-Hour Priority Access to Seasonal Drops',
        'Birthday Month Bonus Points',
      ],
    },
    {
      id: 'tier_gold',
      name: 'Gold',
      threshold: 5000,
      colorToken: 'border-amber-400 bg-amber-50 text-amber-900',
      description: 'Dedicated bespoke service and priority private allocations.',
      benefits: [
        'Complimentary Concierge Express Shipping',
        '48-Hour Early Access to Atelier Collections',
        'Dedicated Personal Styling Assistant',
        'Signature Calligraphic Gift Packaging Included',
      ],
    },
    {
      id: 'tier_noir',
      name: 'Privé Noir',
      threshold: 15000,
      colorToken: 'border-neutral-700 bg-neutral-900 text-neutral-100',
      description: 'Exclusive access to Paris & Milan Runway previews.',
      benefits: [
        'Bespoke Private Appointment privileges in Flagship Showrooms',
        'Dedicated Personal Stylist & Concierge Director',
        'Complimentary Worldwide Express Priority Shipping',
        '72-Hour Exclusive Priority Window for Atelier Limited Releases',
      ],
    },
  ];

  public async getMembershipProfile(): Promise<Result<MembershipEntity, AppError>> {
    const userRes = await authService.getCurrentUser();
    const profileRes = await customerService.getCustomerProfile();
    const loyaltyRes = await customerService.getCustomerLoyalty();

    const user = userRes.isSuccess ? userRes.value : null;
    const profile = profileRes.isSuccess ? profileRes.value : null;
    const loyalty = loyaltyRes.isSuccess ? loyaltyRes.value : null;

    const membershipEntity: MembershipEntity = {
      memberId: user?.userId || 'guest',
      fullName: profile?.fullName || user?.fullName || 'Privé Member',
      memberSince: profile?.memberSince || new Date().getFullYear().toString(),
      currentTier: (loyalty?.tier as unknown as MembershipTierName) || 'Classic',
      currentPoints: loyalty?.currentPoints || 0,
      lifetimePoints: loyalty?.lifetimePoints || 0,
      nextTierRequirement: loyalty?.nextTierRequirement || 1000,
      pointsToNextTier: loyalty?.pointsToNextTier || 1000,
      membershipCardNumber: user ? `ASC-PRIVE-${user.userId.substring(0, 8).toUpperCase()}` : 'ASC-PRIVE-GUEST',
      styleProfile: {
        preferredCollections: ['Femme Silk Collection', 'Editorial Blazer Line'],
        preferredCategories: [profile?.preferences?.preferredCategory || 'Silk Slip Dresses'],
        preferredColors: [profile?.preferences?.preferredColor || 'Midnight Black'],
        preferredSize: profile?.preferences?.preferredSize || 'M (EU 38)',
        preferredFit: 'Relaxed Tailored / Fluid Drape',
        preferredMaterials: ['100% Mulberry Silk', 'Italian Virgin Wool'],
        preferredOccasion: 'Evening Soirée / Executive Gala',
      },
    };

    return success(membershipEntity);
  }

  public async getMembershipTiers(): Promise<Result<MembershipTier[], AppError>> {
    return success(this.defaultTiers);
  }

  public async getPointsHistory(): Promise<Result<PointsActivity[], AppError>> {
    const txRes = await customerService.getLoyaltyTransactions();
    if (txRes.isSuccess && txRes.value.length > 0) {
      const activities: PointsActivity[] = txRes.value.map((tx) => ({
        id: tx.id,
        date: new Date(tx.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        type: tx.type === 'EARNED' ? 'Earn' : 'Redeem',
        description: tx.description,
        points: tx.amount,
      }));
      return success(activities);
    }

    return success([]);
  }

  public async getStyleProfile(): Promise<Result<StyleProfile, AppError>> {
    const profileRes = await this.getMembershipProfile();
    if (profileRes.isSuccess && profileRes.value.styleProfile) {
      return success(profileRes.value.styleProfile);
    }
    return success({
      preferredCollections: ['Femme Silk Collection'],
      preferredCategories: ['Silk Slip Dresses'],
      preferredColors: ['Midnight Black'],
      preferredSize: 'M (EU 38)',
      preferredFit: 'Relaxed Tailored',
      preferredMaterials: ['100% Mulberry Silk'],
      preferredOccasion: 'Evening Soirée',
    });
  }
}

export const membershipService = new MembershipService();
