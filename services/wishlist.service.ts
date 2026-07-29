import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface WishlistState {
  productSkus: string[];
}

export class WishlistService {
  public async getWishlist(): Promise<Result<WishlistState, AppError>> {
    return success({ productSkus: [] });
  }
}

export const wishlistService = new WishlistService();
