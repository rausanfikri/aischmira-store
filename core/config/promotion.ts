import { z } from 'zod';

export const PromotionConfigSchema = z.object({
  enabled: z.boolean(),
  label: z.string(),
  channel: z.string(),
  discountHighlight: z.string(),
  message: z.string(),
});

export type PromotionConfig = z.infer<typeof PromotionConfigSchema>;

export const PROMOTION_CONFIG: PromotionConfig = {
  enabled: true,
  label: 'GET 33% OFF',
  channel: 'WHATSAPP',
  discountHighlight: '33%',
  message: 'Saya ingin mendapatkan promo GET 33% OFF.',
};
