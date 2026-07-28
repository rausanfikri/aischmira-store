import { z } from "zod";

export const heroSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  eyebrow: z.string(),
  primaryCtaText: z.string(),
  primaryCtaLink: z.string(),
  secondaryCtaText: z.string(),
  secondaryCtaLink: z.string(),
  bgImage: z.string(),
});

export const pillarSchema = z.object({
  title: z.string(),
  description: z.string(),
  iconName: z.string(),
});

export const testimonialSchema = z.object({
  id: z.string(),
  author: z.string(),
  city: z.string(),
  quote: z.string(),
  rating: z.number().min(1).max(5),
});
