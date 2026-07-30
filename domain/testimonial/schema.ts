import { z } from 'zod';

export const TestimonialAuthorSchema = z.object({
  name: z.string().min(1),
  location: z.string().optional(),
  avatar: z.string().optional(),
  title: z.string().optional(),
  verified: z.boolean().default(true),
});

export const TestimonialSchema = z.object({
  id: z.string().min(1),
  author: TestimonialAuthorSchema,
  quote: z.string().min(1),
  story: z.string().optional(),
  purchasedCollection: z.string().optional(),
  purchasedProduct: z.string().optional(),
  type: z.enum(['EDITORIAL_QUOTE', 'CUSTOMER_STORY', 'PRESS_MENTION', 'FEATURED_COMMUNITY']).default('EDITORIAL_QUOTE'),
  featured: z.boolean().default(true),
  rating: z.number().optional(),
  date: z.string().optional(),
});

export const CommunityStatSchema = z.object({
  id: z.string().min(1),
  value: z.string().min(1),
  label: z.string().min(1),
  description: z.string().min(1),
});

export type TestimonialDTO = z.infer<typeof TestimonialSchema>;
export type CommunityStatDTO = z.infer<typeof CommunityStatSchema>;
