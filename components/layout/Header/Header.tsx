"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { HeaderContainer } from "./HeaderContainer";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { NavIcons } from "./NavIcons";
import MobileNav from "@/components/layout/MobileNav";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { scrolled } = useScrollPosition(30);

  const isTransparent = isHomePage && !scrolled;

  return (
    <HeaderContainer scrolled={scrolled} isTransparent={isTransparent}>
      {/* 
        CSS GRID HEADER ARCHITECTURE
        grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr)
        Mathematically guarantees Logo remains perfectly centered relative to the viewport/container.
      */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center w-full">
        
        {/* Left Column: Mobile Toggle & Desktop Nav Links (Collections & Categories side-by-side) */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <MobileNav />
          </div>
          <NavLinks isTransparent={isTransparent} />
        </div>

        {/* Center Column: AISCHMIRA Brand Flagship Logo */}
        <div className="flex items-center justify-center">
          <Logo scrolled={scrolled} />
        </div>

        {/* Right Column: Action Controls (Search, Account, Wishlist, Bag) */}
        <div className="flex items-center justify-end">
          <NavIcons isTransparent={isTransparent} />
        </div>

      </div>
    </HeaderContainer>
  );
}
