import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, WishlistItem } from '@/types';

interface ShopState {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'addedAt'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  clearCart: () => void;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      
      addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(
          (c) => c.productId === item.productId && c.variantId === item.variantId
        );

        if (existingItem) {
          return {
            cart: state.cart.map((c) =>
              c.id === existingItem.id
                ? { ...c, quantity: c.quantity + item.quantity }
                : c
            ),
          };
        }

        return {
          cart: [
            ...state.cart,
            {
              ...item,
              id: Math.random().toString(36).substr(2, 9),
              addedAt: new Date().toISOString(),
            },
          ],
        };
      }),

      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((c) => c.id !== id),
      })),

      updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((c) =>
          c.id === id ? { ...c, quantity: Math.max(1, quantity) } : c
        ),
      })),

      toggleWishlist: (productId) => set((state) => {
        const exists = state.wishlist.some((w) => w.productId === productId);
        if (exists) {
          return {
            wishlist: state.wishlist.filter((w) => w.productId !== productId),
          };
        }
        return {
          wishlist: [
            ...state.wishlist,
            { productId, addedAt: new Date().toISOString() },
          ],
        };
      }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'aischmira-shop-storage',
    }
  )
);
