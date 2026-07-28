"use client";

import * as React from "react";
import { Search, User as UserIcon, Heart, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import { cn } from "@/lib/utils";

interface NavIconsProps {
  isTransparent?: boolean;
}

export function NavIcons({ isTransparent }: NavIconsProps) {
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);
  const setAccountOpen = useUIStore((state) => state.setAccountOpen);
  const setWishlistOpen = useUIStore((state) => state.setWishlistOpen);
  
  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const iconClass = cn(
    "p-1.5 transition-colors focus:outline-none",
    isTransparent ? "text-surface hover:text-primary-light" : "text-text hover:text-primary"
  );

  return (
    <div className="flex items-center justify-end gap-3 sm:gap-5 min-w-[120px] md:min-w-[220px]">
      {/* Search */}
      <button
        onClick={() => setSearchOpen(true)}
        className={iconClass}
        aria-label="Search Catalog"
      >
        <Search size={20} strokeWidth={1.5} />
      </button>

      {/* Account */}
      <button
        onClick={() => setAccountOpen(true)}
        className={cn(iconClass, "hidden sm:block")}
        aria-label="Member Account"
      >
        <UserIcon size={20} strokeWidth={1.5} />
      </button>

      {/* Wishlist */}
      <button
        onClick={() => setWishlistOpen(true)}
        className={cn(iconClass, "relative")}
        aria-label="Wishlist"
      >
        <Heart size={20} strokeWidth={1.5} />
        {wishlist.length > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-surface font-body text-[8px] font-bold rounded-full flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
      </button>

      {/* Shopping Bag */}
      <button
        onClick={() => setCartOpen(true)}
        className={cn(iconClass, "relative flex items-center gap-1")}
        aria-label="Shopping Bag"
      >
        <ShoppingBag size={20} strokeWidth={1.5} />
        {cartCount > 0 && (
          <span className="w-4 h-4 bg-text text-surface font-body text-[8px] font-bold rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
