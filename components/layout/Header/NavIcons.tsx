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
    "p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs flex items-center justify-center",
    isTransparent ? "text-surface hover:text-primary" : "text-text/80 hover:text-primary"
  );

  return (
    <div className="flex items-center justify-end gap-2 sm:gap-4 w-full">
      {/* 1. Search */}
      <button
        onClick={() => setSearchOpen(true)}
        className={iconClass}
        aria-label="Search Catalog"
      >
        <Search size={20} strokeWidth={1.5} />
      </button>

      {/* 2. Account */}
      <button
        onClick={() => setAccountOpen(true)}
        className={cn(iconClass, "hidden sm:flex")}
        aria-label="Member Account"
      >
        <UserIcon size={20} strokeWidth={1.5} />
      </button>

      {/* 3. Wishlist */}
      <button
        onClick={() => setWishlistOpen(true)}
        className={cn(iconClass, "relative")}
        aria-label="Wishlist"
      >
        <Heart size={20} strokeWidth={1.5} />
        {wishlist.length > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-surface font-body text-[8px] font-bold rounded-full flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
      </button>

      {/* 4. Shopping Bag */}
      <button
        onClick={() => setCartOpen(true)}
        className={cn(iconClass, "relative")}
        aria-label="Shopping Bag"
      >
        <ShoppingBag size={20} strokeWidth={1.5} />
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-text text-surface font-body text-[8px] font-bold rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
