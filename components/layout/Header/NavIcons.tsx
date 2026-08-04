"use client";

import * as React from "react";
import { Search, User as UserIcon, Heart, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";

export function NavIcons() {
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);
  const setAccountOpen = useUIStore((state) => state.setAccountOpen);
  const setWishlistOpen = useUIStore((state) => state.setWishlistOpen);
  
  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const iconBtnClass =
    "w-10 h-10 sm:w-11 sm:h-11 p-2 sm:p-2.5 flex items-center justify-center text-[var(--header-text)] hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs relative shrink-0 cursor-pointer";

  return (
    <div className="flex items-center justify-end gap-0.5 sm:gap-1.5 shrink-0">
      {/* 1. Search (Visible on all screen sizes) */}
      <button
        onClick={() => setSearchOpen(true)}
        className={iconBtnClass}
        aria-label="Search Catalog"
      >
        <Search size={18} strokeWidth={1.5} className="sm:w-[20px] sm:h-[20px]" />
      </button>

      {/* 2. Member Account (Visible on Tablet & Desktop) */}
      <button
        onClick={() => setAccountOpen(true)}
        className={`${iconBtnClass} hidden sm:flex`}
        aria-label="Member Account"
      >
        <UserIcon size={18} strokeWidth={1.5} className="sm:w-[20px] sm:h-[20px]" />
      </button>

      {/* 3. Wishlist (Visible on Tablet/Laptop/Desktop ≥ 640px; accessible in Mobile Drawer on < 640px) */}
      <button
        onClick={() => setWishlistOpen(true)}
        className={`${iconBtnClass} hidden sm:flex`}
        aria-label="Wishlist"
      >
        <Heart size={18} strokeWidth={1.5} className="sm:w-[20px] sm:h-[20px]" />
        {wishlist.length > 0 && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary text-surface font-body text-[8px] font-bold rounded-full flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
      </button>

      {/* 4. Shopping Bag (Visible on all screen sizes) */}
      <button
        onClick={() => setCartOpen(true)}
        className={iconBtnClass}
        aria-label="Shopping Bag"
      >
        <ShoppingBag size={18} strokeWidth={1.5} className="sm:w-[20px] sm:h-[20px]" />
        {cartCount > 0 && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-text text-surface font-body text-[8px] font-bold rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
