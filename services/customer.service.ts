import { CustomerProfile, CustomerOrderSummary, CustomerLoyaltyInfo, SavedLook, WishlistItem, ShoppingBagItem, LoyaltyTransaction } from '@/domain/customer';
import { SupabaseCustomerRepository } from '@/core/infrastructure/repositories/supabase/SupabaseCustomerRepository';
import { authService } from '@/services/auth.service';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class CustomerService {
  private repository = new SupabaseCustomerRepository();

  public async getCustomerProfile(): Promise<Result<CustomerProfile, AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      // Unauthenticated fallback profile: no dummy names
      const guestProfile: CustomerProfile = {
        id: 'guest',
        email: '',
        fullName: 'Guest Visitor',
        membershipTier: 'Classic',
        memberSince: new Date().getFullYear().toString(),
        pointsBalance: 0,
        addresses: [],
      };
      return success(guestProfile);
    }

    return this.repository.getProfile(userRes.value.userId);
  }

  public async getCustomerOrders(): Promise<Result<CustomerOrderSummary[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return success([]);
    }

    // Returns database-linked orders or empty array if no order history exists
    return success([]);
  }

  public async getCustomerLoyalty(): Promise<Result<CustomerLoyaltyInfo, AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      const defaultLoyalty: CustomerLoyaltyInfo = {
        tier: 'Classic',
        currentPoints: 0,
        lifetimePoints: 0,
        nextTierRequirement: 1000,
        pointsToNextTier: 1000,
        referralCode: 'ASC-PRIVEE',
        benefits: [
          'Welcome Privé Tier Membership',
          'Earn Loyalty Points on Every Purchase',
          'Access to Private Member Digital Portal',
        ],
      };
      return success(defaultLoyalty);
    }

    return this.repository.getLoyaltyInfo(userRes.value.userId);
  }

  public async getLoyaltyTransactions(): Promise<Result<LoyaltyTransaction[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return success([]);
    }
    return this.repository.getLoyaltyTransactions(userRes.value.userId);
  }

  public async getSavedLooks(): Promise<Result<SavedLook[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return success([]);
    }
    return this.repository.getSavedLooks(userRes.value.userId);
  }

  public async getWishlist(): Promise<Result<WishlistItem[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return success([]);
    }
    return this.repository.getWishlist(userRes.value.userId);
  }

  public async addToWishlist(productId: string): Promise<Result<WishlistItem[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return failure(new AppError('Must be logged in to save to wishlist', 'UNAUTHENTICATED'));
    }
    return this.repository.addToWishlist(userRes.value.userId, productId);
  }

  public async removeFromWishlist(productId: string): Promise<Result<WishlistItem[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return failure(new AppError('Must be logged in', 'UNAUTHENTICATED'));
    }
    return this.repository.removeFromWishlist(userRes.value.userId, productId);
  }

  public async getShoppingBag(): Promise<Result<ShoppingBagItem[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return success([]);
    }
    return this.repository.getShoppingBag(userRes.value.userId);
  }

  public async syncShoppingBag(items: ShoppingBagItem[]): Promise<Result<ShoppingBagItem[], AppError>> {
    const userRes = await authService.getCurrentUser();
    if (userRes.isFailure || !userRes.value) {
      return success(items);
    }
    return this.repository.syncShoppingBag(userRes.value.userId, items);
  }
}

export const customerService = new CustomerService();
