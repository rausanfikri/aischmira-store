"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileNav from "@/components/layout/MobileNav";
import { Search, Heart, ShoppingBag, User as UserIcon } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { scrolled } = useScrollPosition(30);

  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);
  const setAccountOpen = useUIStore((state) => state.setAccountOpen);
  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Background styling & height reduction
  const isTransparent = isHomePage && !scrolled;
  const headerBgClass = isTransparent
    ? "bg-transparent text-surface border-b border-transparent py-4 md:py-5"
    : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40 py-2.5 md:py-3";

  const textClass = isTransparent ? "text-surface hover:text-primary-light" : "text-text hover:text-primary";

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-in-out",
        headerBgClass
      )}
    >
      <div className="container-hero flex items-center justify-between">
        
        {/* Left: Mobile Toggle & Desktop Navigation */}
        <div className="flex items-center gap-4 min-w-[120px] md:min-w-[220px]">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <DesktopNav isTransparent={isTransparent} />
          </div>
        </div>

        {/* Center: Brand Flagship Logo (Desktop 52px unscrolled, 40px scrolled; Mobile 36px) */}
        <Link href="/" className="relative flex items-center justify-center shrink-0 transition-all duration-300 ease-in-out">
          <Image
            src="/logo/aischmira-logo.png"
            alt="AISCHMIRA Flagship"
            width={200}
            height={60}
            className={cn(
              "object-contain w-auto transition-all duration-300 ease-in-out",
              scrolled
                ? "h-[36px] md:h-[40px]"
                : "h-[36px] md:h-[52px]"
            )}
            priority
          />
        </Link>

        {/* Right: Icon Controls (Search, Account, Wishlist, Cart Drawer) */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 min-w-[120px] md:min-w-[220px]">
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            className={cn("p-1.5 transition-colors focus:outline-none", textClass)}
            aria-label="Search Catalog"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          {/* Account Profile Trigger */}
          <button
            onClick={() => setAccountOpen(true)}
            className={cn("p-1.5 transition-colors hidden sm:block focus:outline-none", textClass)}
            aria-label="Member Account"
          >
            <UserIcon size={20} strokeWidth={1.5} />
          </button>

          {/* Wishlist Link */}
          <Link
            href="/wishlist"
            className={cn("p-1.5 transition-colors relative focus:outline-none", textClass)}
            aria-label="Wishlist"
          >
            <Heart size={20} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-surface font-body text-[8px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Shopping Cart Drawer Trigger */}
          <button
            onClick={() => setCartOpen(true)}
            className={cn("p-1.5 transition-colors relative flex items-center gap-1 focus:outline-none", textClass)}
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

      </div>
    </header>
  );
}
