"use client";

import { useShopStore } from "@/store/useShopStore";
import { useUIStore } from "@/store/useUIStore";

export function useShoppingBag() {
  const cart = useShopStore((state) => state.cart);
  const addToCart = useShopStore((state) => state.addToCart);
  const removeFromCart = useShopStore((state) => state.removeFromCart);
  const updateQuantity = useShopStore((state) => state.updateQuantity);
  const clearCart = useShopStore((state) => state.clearCart);

  const cartOpen = useUIStore((state) => state.cartOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return {
    cart,
    cartCount,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}
