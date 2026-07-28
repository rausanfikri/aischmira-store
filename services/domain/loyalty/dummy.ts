import { MemberProfile, RewardItem } from "./types";

export const dummyMember: MemberProfile = {
  id: "MEM-2026-88",
  name: "Victoria Valence",
  email: "victoria@aischmira.com",
  tier: "Privé",
  points: 1250,
  referralCode: "VICTORIA-PRIVILEGE",
  orderCount: 5,
  joinedDate: "2026-01-15",
};

export const dummyRewards: RewardItem[] = [
  { id: "1", title: "Complimentary Silk Scarf Styling", pointsCost: 500, code: "SILKSTYLING500", description: "Bespoke 1-on-1 scarf styling consultation." },
  { id: "2", title: "Rp 500.000 Privé Voucher", pointsCost: 1000, code: "PRIVE500K", description: "Voucher applicable on any Mulberry Silk order." },
];
