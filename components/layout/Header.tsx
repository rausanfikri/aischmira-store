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
  const { scrolled } = useScrollPosition(40);

  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);
  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Top home transparent vs scroll background
  const headerBgClass = isHomePage
    ? scrolled
      ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40 py-3"
      : "bg-transparent text-surface py-5"
    : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40 py-3";

  const textClass = isHomePage && !scrolled ? "text-surface hover:text-primary-light" : "text-text hover:text-primary";

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300",
        headerBgClass
      )}
    >
      <div className="container-hero flex items-center justify-between">
        
        {/* Left: Mobile Toggle & Desktop Mega Navigation */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <DesktopNav isTransparent={isHomePage && !scrolled} />
          </div>
        </div>

        {/* Center: Brand Flagship Logo */}
        <Link href="/" className="relative flex items-center justify-center transition-all duration-300">
          <Image
            src="/logo/aischmira-logo.png"
            alt="AISCHMIRA Flagship"
            width={180}
            height={50}
            className={cn(
              "object-contain transition-all duration-300",
              scrolled ? "h-[42px] w-auto md:h-[48px]" : "h-[48px] w-auto md:h-[58px]"
            )}
            priority
          />
        </Link>

        {/* Right: Icon Controls (Search, Account, Wishlist, Cart Drawer) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            className={cn("p-1.5 transition-colors", textClass)}
            aria-label="Search Catalog"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          {/* Account Profile Link */}
          <Link
            href="/account/dashboard"
            className={cn("p-1.5 transition-colors hidden sm:block", textClass)}
            aria-label="Member Account"
          >
            <UserIcon size={20} strokeWidth={1.5} />
          </Link>

          {/* Wishlist Link */}
          <Link
            href="/wishlist"
            className={cn("p-1.5 transition-colors relative", textClass)}
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
            className={cn("p-1.5 transition-colors relative flex items-center gap-1", textClass)}
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
