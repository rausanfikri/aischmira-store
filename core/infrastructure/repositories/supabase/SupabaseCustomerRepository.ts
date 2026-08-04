import { ICustomerRepository } from '@/core/domain/customer/repository';
import { CustomerProfile, CustomerLoyaltyInfo, SavedLook, WishlistItem, ShoppingBagItem, LoyaltyTransaction } from '@/domain/customer';
import { CustomerMapper, AddressRow, PreferenceRow } from '@/core/infrastructure/mappers/customer.mapper';
import { Result, success, failure } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';
import { createClient as createBrowserClient } from '@/lib/supabase/client';

export class SupabaseCustomerRepository implements ICustomerRepository {
  private getClient() {
    return createBrowserClient();
  }

  public async getProfile(userId: string): Promise<Result<CustomerProfile, AppError>> {
    try {
      const supabase = this.getClient();
      
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      let profile = profileData;

      if (error && error.code === 'PGRST116') {
        const { data: authUser } = await supabase.auth.getUser();
        const user = authUser?.user;

        const newProfile = {
          id: userId,
          email: user?.email || '',
          full_name: user?.user_metadata?.full_name || user?.user_metadata?.name || '',
          first_name: user?.user_metadata?.given_name || '',
          last_name: user?.user_metadata?.family_name || '',
          avatar_url: user?.user_metadata?.avatar_url || user?.user_metadata?.picture || '',
          membership_tier: 'Classic',
        };

        const { data: inserted, error: insertErr } = await supabase
          .from('profiles')
          .insert(newProfile)
          .select('*')
          .single();

        if (!insertErr && inserted) {
          profile = inserted;

          await supabase.from('loyalty_accounts').insert({
            customer_id: userId,
            points_balance: 0,
            lifetime_points: 0,
            current_tier: 'Classic',
            referral_code: `ASC-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
          });
        }
      }

      if (!profile) {
        const fallbackProfile: CustomerProfile = {
          id: userId,
          email: '',
          fullName: 'Privé Member',
          membershipTier: 'Classic',
          memberSince: new Date().getFullYear().toString(),
          pointsBalance: 0,
          addresses: [],
        };
        return success(fallbackProfile);
      }

      const { data: addresses } = await supabase
        .from('addresses')
        .select('*')
        .eq('customer_id', userId);

      const { data: preferences } = await supabase
        .from('customer_preferences')
        .select('*')
        .eq('customer_id', userId)
        .single();

      const customerProfile = CustomerMapper.toProfile(
        profile,
        (addresses || []) as AddressRow[],
        preferences as PreferenceRow | null
      );
      return success(customerProfile);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to fetch customer profile';
      return failure(new AppError(msg, 'CUSTOMER_FETCH_ERROR'));
    }
  }

  public async updateProfile(userId: string, data: Partial<CustomerProfile>): Promise<Result<CustomerProfile, AppError>> {
    try {
      const supabase = this.getClient();
      const updatePayload: Record<string, unknown> = {
        updated_at: new Date().toISOString(),
      };

      if (data.fullName !== undefined) updatePayload.full_name = data.fullName;
      if (data.phone !== undefined) updatePayload.phone = data.phone;
      if (data.avatarUrl !== undefined) updatePayload.avatar_url = data.avatarUrl;

      const { error } = await supabase
        .from('profiles')
        .update(updatePayload)
        .eq('id', userId)
        .select('*')
        .single();

      if (error) {
        return failure(new AppError(error.message, 'PROFILE_UPDATE_ERROR'));
      }

      return this.getProfile(userId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to update profile';
      return failure(new AppError(msg, 'PROFILE_UPDATE_ERROR'));
    }
  }

  public async getLoyaltyInfo(userId: string): Promise<Result<CustomerLoyaltyInfo, AppError>> {
    try {
      const supabase = this.getClient();
      const { data: loyaltyData, error } = await supabase
        .from('loyalty_accounts')
        .select('*')
        .eq('customer_id', userId)
        .single();

      let loyalty = loyaltyData;

      if (error && error.code === 'PGRST116') {
        const newLoyalty = {
          customer_id: userId,
          points_balance: 0,
          lifetime_points: 0,
          current_tier: 'Classic',
          referral_code: `ASC-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
        };
        const { data: inserted } = await supabase
          .from('loyalty_accounts')
          .insert(newLoyalty)
          .select('*')
          .single();
        loyalty = inserted;
      }

      const loyaltyInfo = CustomerMapper.toLoyaltyInfo(loyalty);
      return success(loyaltyInfo);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to fetch loyalty info';
      return failure(new AppError(msg, 'LOYALTY_FETCH_ERROR'));
    }
  }

  public async getLoyaltyTransactions(userId: string): Promise<Result<LoyaltyTransaction[], AppError>> {
    try {
      const supabase = this.getClient();
      const { data, error } = await supabase
        .from('loyalty_transactions')
        .select('*')
        .eq('customer_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        return success([]);
      }
      return success(data || []);
    } catch {
      return success([]);
    }
  }

  public async getSavedLooks(userId: string): Promise<Result<SavedLook[], AppError>> {
    try {
      const supabase = this.getClient();
      const { data, error } = await supabase
        .from('saved_looks')
        .select('*')
        .eq('customer_id', userId);

      if (error) return success([]);
      return success((data || []).map(CustomerMapper.toSavedLook));
    } catch {
      return success([]);
    }
  }

  public async getWishlist(userId: string): Promise<Result<WishlistItem[], AppError>> {
    try {
      const supabase = this.getClient();
      const { data, error } = await supabase
        .from('wishlist')
        .select('*')
        .eq('customer_id', userId);

      if (error) return success([]);
      return success((data || []).map(CustomerMapper.toWishlistItem));
    } catch {
      return success([]);
    }
  }

  public async addToWishlist(userId: string, productId: string): Promise<Result<WishlistItem[], AppError>> {
    try {
      const supabase = this.getClient();
      await supabase
        .from('wishlist')
        .insert({ customer_id: userId, product_id: productId });

      return this.getWishlist(userId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to add to wishlist';
      return failure(new AppError(msg, 'WISHLIST_ADD_ERROR'));
    }
  }

  public async removeFromWishlist(userId: string, productId: string): Promise<Result<WishlistItem[], AppError>> {
    try {
      const supabase = this.getClient();
      await supabase
        .from('wishlist')
        .delete()
        .eq('customer_id', userId)
        .eq('product_id', productId);

      return this.getWishlist(userId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to remove from wishlist';
      return failure(new AppError(msg, 'WISHLIST_REMOVE_ERROR'));
    }
  }

  public async getShoppingBag(userId: string): Promise<Result<ShoppingBagItem[], AppError>> {
    try {
      const supabase = this.getClient();
      const { data, error } = await supabase
        .from('shopping_bag')
        .select('*')
        .eq('customer_id', userId);

      if (error) return success([]);
      return success((data || []).map(CustomerMapper.toShoppingBagItem));
    } catch {
      return success([]);
    }
  }

  public async syncShoppingBag(userId: string, items: ShoppingBagItem[]): Promise<Result<ShoppingBagItem[], AppError>> {
    try {
      const supabase = this.getClient();
      await supabase.from('shopping_bag').delete().eq('customer_id', userId);

      if (items.length > 0) {
        const payload = items.map((item) => ({
          customer_id: userId,
          product_id: item.productId,
          variant_id: item.variantId || null,
          quantity: item.quantity,
          size: item.size || null,
          color: item.color || null,
        }));
        await supabase.from('shopping_bag').insert(payload);
      }

      return this.getShoppingBag(userId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to sync shopping bag';
      return failure(new AppError(msg, 'SHOPPING_BAG_SYNC_ERROR'));
    }
  }
}
