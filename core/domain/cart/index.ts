import { z } from 'zod';
import { Result } from '../types/Result';

export const CartItemSchema = z.object({
  sku: z.string(),
  quantity: z.number().int().min(1),
  priceSnapshot: z.number(), // Price at time of adding
});

export const CartSchema = z.object({
  id: z.string(), // Guest session ID or Member ID
  items: z.array(CartItemSchema),
  updatedAt: z.string().datetime(),
});

export type CartItem = z.infer<typeof CartItemSchema>;
export type Cart = z.infer<typeof CartSchema>;

export interface ICartRepository {
  getCart(id: string): Promise<Result<Cart>>;
  saveCart(cart: Cart): Promise<Result<Cart>>;
}
