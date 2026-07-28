import { z } from "zod";

export const memberProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  tier: z.enum(["Privilege", "Privé", "VIP", "Black"]),
  points: z.number().int().nonnegative(),
  referralCode: z.string(),
  orderCount: z.number().int().nonnegative(),
  joinedDate: z.string(),
});
