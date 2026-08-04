import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, WishlistItem } from '@/types';
import { customerService } from '@/services/customer.service';
import { authService } from '@/services/auth.service';

interface ShopState {
  cart: CartItem[];
  wishlist: WishlistItem[];
  isInitialized: boolean;
  initializeUserStore: () => Promise<void>;
  addToCart: (item: Omit<CartItem, 'id' | 'addedAt'>) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  toggleWishlist: (productId: string) => Promise<void>;
  clearCart: () => void;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      isInitialized: false,

      initializeUserStore: async () => {
        try {
          const userRes = await authService.getCurrentUser();
          if (userRes.isSuccess && userRes.value) {
            // Load user database wishlist & shopping bag
            const [wishlistRes, bagRes] = await Promise.all([
              customerService.getWishlist(),
              customerService.getShoppingBag(),
            ]);

            if (wishlistRes.isSuccess && wishlistRes.value.length > 0) {
              set({
                wishlist: wishlistRes.value.map((w) => ({
                  productId: w.productId,
                  addedAt: w.addedAt,
                })),
              });
            }

            if (bagRes.isSuccess && bagRes.value.length > 0) {
              set({
                cart: bagRes.value.map((b) => ({
                  id: b.id,
                  productId: b.productId,
                  variantId: b.variantId || '',
                  quantity: b.quantity,
                  size: b.size,
                  color: b.color,
                  addedAt: b.addedAt,
                })),
              });
            }
          }
          set({ isInitialized: true });
        } catch {
          set({ isInitialized: true });
        }
      },

      addToCart: async (item) => {
        const newItem: CartItem = {
          ...item,
          id: Math.random().toString(36).substring(2, 11),
          addedAt: new Date().toISOString(),
        };

        const existingIndex = get().cart.findIndex(
          (c) => c.productId === item.productId && c.variantId === item.variantId
        );

        let updatedCart: CartItem[];
        if (existingIndex > -1) {
          updatedCart = get().cart.map((c, i) =>
            i === existingIndex ? { ...c, quantity: c.quantity + item.quantity } : c
          );
        } else {
          updatedCart = [...get().cart, newItem];
        }

        set({ cart: updatedCart });

        // Sync with database if authenticated
        const userRes = await authService.getCurrentUser();
        if (userRes.isSuccess && userRes.value) {
          await customerService.syncShoppingBag(
            updatedCart.map((c) => ({
              id: c.id,
              productId: c.productId,
              variantId: c.variantId,
              quantity: c.quantity,
              size: c.size,
              color: c.color,
              addedAt: c.addedAt,
            }))
          );
        }
      },

      removeFromCart: async (id) => {
        const updatedCart = get().cart.filter((c) => c.id !== id);
        set({ cart: updatedCart });

        const userRes = await authService.getCurrentUser();
        if (userRes.isSuccess && userRes.value) {
          await customerService.syncShoppingBag(
            updatedCart.map((c) => ({
              id: c.id,
              productId: c.productId,
              variantId: c.variantId,
              quantity: c.quantity,
              size: c.size,
              color: c.color,
              addedAt: c.addedAt,
            }))
          );
        }
      },

      updateQuantity: async (id, quantity) => {
        const updatedCart = get().cart.map((c) =>
          c.id === id ? { ...c, quantity: Math.max(1, quantity) } : c
        );
        set({ cart: updatedCart });

        const userRes = await authService.getCurrentUser();
        if (userRes.isSuccess && userRes.value) {
          await customerService.syncShoppingBag(
            updatedCart.map((c) => ({
              id: c.id,
              productId: c.productId,
              variantId: c.variantId,
              quantity: c.quantity,
              size: c.size,
              color: c.color,
              addedAt: c.addedAt,
            }))
          );
        }
      },

      toggleWishlist: async (productId) => {
        const exists = get().wishlist.some((w) => w.productId === productId);
        let updatedWishlist: WishlistItem[];

        if (exists) {
          updatedWishlist = get().wishlist.filter((w) => w.productId !== productId);
        } else {
          updatedWishlist = [
            ...get().wishlist,
            { productId, addedAt: new Date().toISOString() },
          ];
        }

        set({ wishlist: updatedWishlist });

        const userRes = await authService.getCurrentUser();
        if (userRes.isSuccess && userRes.value) {
          if (exists) {
            await customerService.removeFromWishlist(productId);
          } else {
            await customerService.addToWishlist(productId);
          }
        }
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'aischmira-shop-storage',
    }
  )
);
