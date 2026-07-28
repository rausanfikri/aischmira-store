"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/useUIStore";
import { useShopStore } from "@/store/useShopStore";
import DesktopNav from "@/components/layout/DesktopNav";

// Dynamically load modals and drawers
const SearchModal = dynamic(() => import("@/components/layout/SearchModal"), { ssr: false });
const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });
const MobileNav = dynamic(() => import("@/components/layout/MobileNav"), { ssr: false });

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading font-light tracking-[0.3em] uppercase text-accent",
        className
      )}
      aria-hidden="true"
    >
      AISCHMIRA
    </span>
  );
}

function NavLogo({ scrolled = false }: { scrolled?: boolean }) {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    return <LogoMark className="text-xl sm:text-2xl" />;
  }

  return (
    <span className="relative flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="AISCHMIRA"
        width={240}
        height={80}
        className={cn(
          "object-contain transition-all duration-300",
          /* Desktop height: 48px to 56px. Mobile height: 36px to 42px */
          scrolled
            ? "h-[36px] sm:h-[44px] md:h-[48px] w-auto"
            : "h-[42px] sm:h-[52px] md:h-[58px] w-auto"
        )}
        priority
        onError={() => setImgError(true)}
      />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  // Global Store States
  const setActiveMenu = useUIStore((state) => state.setActiveMenu);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);
  const mobileOpen = useUIStore((state) => state.mobileOpen);
  const setMobileOpen = useUIStore((state) => state.setMobileOpen);

  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm border-b border-border/30"
            : "bg-[#FAF8F3]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none"
        )}
        role="banner"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div
            className={cn(
              "flex items-center justify-between relative transition-all duration-300",
              scrolled ? "h-[72px]" : "h-[88px]"
            )}
          >
            {/* Left Nav (Desktop) */}
            <div className="hidden lg:flex items-center flex-1" aria-label="Desktop Navigation">
              <DesktopNav />
            </div>

            {/* Center Logo */}
            <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
              <Link href="/" className="relative flex" aria-label="AISCHMIRA — Home">
                <NavLogo scrolled={scrolled} />
              </Link>
            </div>

            {/* Right Nav (Icon Controls Only) */}
            <div className="flex items-center justify-end gap-5 sm:gap-6 flex-1">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="text-text hover:text-primary transition-colors p-1"
                aria-label="Search Catalog"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              {/* Account Dropdown */}
              <div className="relative group hidden sm:block">
                <button
                  className="text-text hover:text-primary transition-colors flex items-center p-1"
                  aria-label="User Account"
                >
                  <User size={20} strokeWidth={1.5} />
                </button>
                {/* Account Prototype Dropdown */}
                <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-surface shadow-xl border border-border/50 rounded-sm w-56 p-6 flex flex-col gap-3 font-body text-[10px] tracking-widest uppercase">
                    <div className="border-b border-border/40 pb-3 mb-1">
                      <p className="text-text/40 text-[9px] mb-2 font-medium">AISCHMIRA Member</p>
                      <div className="flex flex-col gap-2">
                        <Link href="/login" className="text-left hover:text-primary transition-colors font-medium">Sign In</Link>
                        <Link href="/register" className="text-left hover:text-primary transition-colors">Register Account</Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 text-text/70">
                      <Link href="/account/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                      <Link href="/account/orders" className="hover:text-primary transition-colors">My Orders</Link>
                      <Link href="/wishlist" className="hover:text-primary transition-colors flex justify-between">
                        <span>Wishlist</span>
                        <span className="text-primary font-bold">{wishlist.length}</span>
                      </Link>
                      <Link href="/account/profile" className="hover:text-primary transition-colors">Points & Rewards</Link>
                      <Link href="/account/profile" className="hover:text-primary transition-colors">Profile Details</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wishlist Link Icon */}
              <Link
                href="/wishlist"
                className="text-text hover:text-primary transition-colors relative p-1 hidden sm:block"
                aria-label="View Wishlist"
              >
                <Heart size={20} strokeWidth={1.5} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-surface text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Drawer Trigger */}
              <button
                onClick={() => setCartOpen(true)}
                className="text-text hover:text-primary transition-colors relative p-1"
                aria-label="Shopping Bag"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-surface text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                className="lg:hidden flex h-10 w-10 items-center justify-center text-text/80 hover:text-text transition-colors rounded-full relative -mr-2"
              >
                {mobileOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamically Loaded Modals */}
      <SearchModal />
      <CartDrawer />
      <MobileNav />
    </>
  );
}
