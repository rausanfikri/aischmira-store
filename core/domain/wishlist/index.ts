import { z } from 'zod';
import { Result } from '../types/Result';

export const WishlistSchema = z.object({
  memberId: z.string(),
  productSkus: z.array(z.string()),
});

export type Wishlist = z.infer<typeof WishlistSchema>;

export interface IWishlistRepository {
  getWishlist(memberId: string): Promise<Result<Wishlist>>;
  addProduct(memberId: string, sku: string): Promise<Result<Wishlist>>;
  removeProduct(memberId: string, sku: string): Promise<Result<Wishlist>>;
}
