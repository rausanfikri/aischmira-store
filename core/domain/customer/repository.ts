import { CustomerProfile, CustomerLoyaltyInfo, SavedLook, WishlistItem, ShoppingBagItem, LoyaltyTransaction } from '@/domain/customer';
import { Result } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export interface ICustomerRepository {
  /**
   * Get customer profile by user ID.
   * If customer record does not exist yet (e.g. fresh OAuth sign-in), creates initial profile & loyalty record.
   */
  getProfile(userId: string): Promise<Result<CustomerProfile, AppError>>;

  /**
   * Update customer profile information.
   */
  updateProfile(userId: string, data: Partial<CustomerProfile>): Promise<Result<CustomerProfile, AppError>>;

  /**
   * Get customer loyalty details.
   */
  getLoyaltyInfo(userId: string): Promise<Result<CustomerLoyaltyInfo, AppError>>;

  /**
   * Get loyalty transactions.
   */
  getLoyaltyTransactions(userId: string): Promise<Result<LoyaltyTransaction[], AppError>>;

  /**
   * Get customer saved looks.
   */
  getSavedLooks(userId: string): Promise<Result<SavedLook[], AppError>>;

  /**
   * Get customer wishlist.
   */
  getWishlist(userId: string): Promise<Result<WishlistItem[], AppError>>;

  /**
   * Add item to customer wishlist.
   */
  addToWishlist(userId: string, productId: string): Promise<Result<WishlistItem[], AppError>>;

  /**
   * Remove item from customer wishlist.
   */
  removeFromWishlist(userId: string, productId: string): Promise<Result<WishlistItem[], AppError>>;

  /**
   * Get customer shopping bag.
   */
  getShoppingBag(userId: string): Promise<Result<ShoppingBagItem[], AppError>>;

  /**
   * Add or update shopping bag items for authenticated customer.
   */
  syncShoppingBag(userId: string, items: ShoppingBagItem[]): Promise<Result<ShoppingBagItem[], AppError>>;
}
