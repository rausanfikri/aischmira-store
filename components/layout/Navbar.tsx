"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/useUIStore";
import DesktopNav from "./DesktopNav";

// Dynamically load heavy modals only when triggered
const SearchModal = dynamic(() => import("./SearchModal"), { ssr: false });
const CartDrawer = dynamic(() => import("./CartDrawer"), { ssr: false });
const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false });

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

function NavLogo({ inverted = false, scrolled = false }: { inverted?: boolean, scrolled?: boolean }) {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    return (
      <LogoMark className={inverted ? "text-surface text-xl" : "text-[1.1rem] sm:text-2xl"} />
    );
  }

  return (
    <span className="relative flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="AISCHMIRA"
        width={300}
        height={100}
        className={cn(
          "object-contain transition-all duration-300",
          inverted ? "h-14 brightness-0 invert" : "",
          !inverted && "w-[120px] sm:w-[150px] lg:w-[180px]",
          scrolled && "scale-90"
        )}
        priority
        onError={() => setImgError(true)}
      />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  
  // Global UI State
  const setActiveMenu = useUIStore((state) => state.setActiveMenu);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const setCartOpen = useUIStore((state) => state.setCartOpen);
  const mobileOpen = useUIStore((state) => state.mobileOpen);
  const setMobileOpen = useUIStore((state) => state.setMobileOpen);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "top-0 bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm"
            : "top-[40px] bg-transparent"
        )}
        role="banner"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[80px] lg:h-[96px] items-center justify-between relative">

            {/* Left Nav (Desktop) */}
            <div className="hidden lg:flex items-center flex-1" aria-label="Desktop Left Navigation">
              <DesktopNav />
            </div>

            {/* Center Logo */}
            <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
              <Link href="/" className="relative flex" aria-label="AISCHMIRA — Home">
                <NavLogo scrolled={scrolled} />
              </Link>
            </div>

            {/* Right Nav (Icons) */}
            <div className="flex items-center justify-end gap-5 flex-1">
              {/* Desktop Icons */}
              <div className="hidden lg:flex items-center gap-6">
                <button onClick={() => setSearchOpen(true)} className="text-text hover:text-primary transition-colors" aria-label="Search">
                  <Search size={20} strokeWidth={1.5} />
                </button>
                
                <div className="relative group">
                  <button className="text-text hover:text-primary transition-colors flex items-center gap-1" aria-label="Account">
                    <User size={20} strokeWidth={1.5} />
                  </button>
                  {/* Account Dropdown */}
                  <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-surface shadow-xl border border-border/50 rounded-sm w-56 p-6 flex flex-col gap-4 font-body text-[10px] tracking-widest uppercase">
                      <div className="border-b border-border/50 pb-4 mb-2">
                        <p className="text-text/40 text-[9px] mb-3">Welcome</p>
                        <div className="flex flex-col gap-3">
                          <button className="text-left hover:text-primary transition-colors font-medium">Sign In</button>
                          <button className="text-left hover:text-primary transition-colors">Register</button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-text/70">
                        <button className="text-left hover:text-primary transition-colors">Dashboard</button>
                        <button className="text-left hover:text-primary transition-colors">My Orders</button>
                        <button className="text-left hover:text-primary transition-colors">Wishlist</button>
                        <button className="text-left hover:text-primary transition-colors">Rewards</button>
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={() => setCartOpen(true)} className="text-text hover:text-primary transition-colors relative" aria-label="Shopping Bag">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 bg-primary text-surface text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    0
                  </span>
                </button>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
