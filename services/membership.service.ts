import { MembershipEntity, MembershipTier, PointsActivity, StyleProfile } from '@/domain/membership';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class MembershipService {
  private readonly mockTiers: MembershipTier[] = [
    {
      id: 'tier_classic',
      name: 'Classic',
      threshold: 0,
      colorToken: 'border-slate-300 bg-slate-50 text-slate-700',
      description: 'Welcome to the AISCHMIRA digital flagship ecosystem.',
      benefits: [
        'Complimentary Concierge Standard Delivery',
        'Digital Membership Identity Access',
        'Seasonal Brand Journal Subscriptions',
      ],
    },
    {
      id: 'tier_silver',
      name: 'Silver',
      threshold: 1000,
      colorToken: 'border-slate-400 bg-slate-100 text-slate-800',
      description: 'Elevated privileges for discerning fashion enthusiasts.',
      benefits: [
        'Complimentary Express Concierge Delivery',
        '24-Hour Priority Drop Window Access',
        'Birthday Month Bonus Points (2x Multiplier)',
      ],
    },
    {
      id: 'tier_gold',
      name: 'Gold',
      threshold: 2500,
      colorToken: 'border-amber-400 bg-amber-50 text-amber-900',
      description: 'Dedicated bespoke service and priority private allocations.',
      benefits: [
        'Complimentary Concierge Express Worldwide Shipping',
        '48-Hour Priority Window for Limited Edition Atelier Drops',
        'Personal Dedicated Bespoke Styling Director',
        'Signature Calligraphic Gift Packaging Included',
        'Boutique Private Appointment Privileges in Flagship Showrooms',
      ],
    },
    {
      id: 'tier_platinum',
      name: 'Platinum',
      threshold: 5000,
      colorToken: 'border-neutral-700 bg-neutral-900 text-neutral-100',
      description: 'Exclusive access to Paris & Milan Runway previews.',
      benefits: [
        'All Gold Privileges Included',
        '72-Hour First-Look Runway & Atelier Pre-Order Allocations',
        'Invitations to Private Fashion Week Showroom Events',
        'Complimentary Custom Tailoring Alterations',
      ],
    },
    {
      id: 'tier_vip_atelier',
      name: 'VIP Atelier',
      threshold: 10000,
      colorToken: 'border-amber-500 bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-950 text-amber-200',
      description: 'By invitation only. Direct access to Creative Director custom designs.',
      benefits: [
        'Private One-on-One Atelier Fittings with Lead Designer',
        'Bespoke Custom Monogramming & Custom Fabric Sourcing',
        'Unlimited Express Global Delivery & Personal Courier',
      ],
    },
  ];

  private readonly mockMembership: MembershipEntity = {
    memberId: 'cust_01h8x9p',
    fullName: 'Lady Katherine Vance',
    memberSince: '2024',
    currentTier: 'Gold',
    currentPoints: 2450,
    lifetimePoints: 6800,
    nextTierRequirement: 5000,
    pointsToNextTier: 2550,
    membershipCardNumber: 'ASC-PRIVE-8891-2026',
    styleProfile: {
      preferredCollections: ['Femme Silk Collection', 'Her Editorial Blazer Line', 'Resort Sanctuary'],
      preferredCategories: ['Silk Slip Dresses', 'Tailored Blazers', 'Wide-Leg Trousers'],
      preferredColors: ['Midnight Black', 'Silk Ivory', 'Emerald Luxe'],
      preferredSize: 'M (EU 38 / UK 10)',
      preferredFit: 'Relaxed Tailored / Fluid Drape',
      preferredMaterials: ['100% Mulberry Silk', 'Italian Virgin Wool', 'Organic Linen'],
      preferredOccasion: 'Evening Soirée / Executive Gala / Private Resort',
    },
  };

  private readonly mockPointsHistory: PointsActivity[] = [
    {
      id: 'pts_04',
      date: 'July 24, 2026',
      type: 'Earn',
      description: 'Order ASC-2026-8891 Purchase Bonus (The Bianca Silk Slip Dress)',
      points: 960,
    },
    {
      id: 'pts_03',
      date: 'June 12, 2026',
      type: 'Earn',
      description: 'Order ASC-2026-7712 Purchase Bonus (The Safira Wide-Leg Trousers)',
      points: 385,
    },
    {
      id: 'pts_02',
      date: 'May 01, 2026',
      type: 'Tier Bonus',
      description: 'Gold Privé Tier Anniversary Points Reward',
      points: 500,
    },
    {
      id: 'pts_01',
      date: 'January 15, 2026',
      type: 'Earn',
      description: 'Profile Style Sanctuary Completion Reward',
      points: 605,
    },
  ];

  public async getMembershipProfile(): Promise<Result<MembershipEntity, AppError>> {
    return success(this.mockMembership);
  }

  public async getMembershipTiers(): Promise<Result<MembershipTier[], AppError>> {
    return success(this.mockTiers);
  }

  public async getPointsHistory(): Promise<Result<PointsActivity[], AppError>> {
    return success(this.mockPointsHistory);
  }

  public async getStyleProfile(): Promise<Result<StyleProfile, AppError>> {
    return success(this.mockMembership.styleProfile);
  }
}

export const membershipService = new MembershipService();
