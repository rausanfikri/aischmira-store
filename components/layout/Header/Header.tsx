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
      <div className="flex items-center justify-between w-full">
        
        {/* Left: Mobile Toggle & Navigation Links */}
        <div className="flex items-center gap-4 min-w-[120px] md:min-w-[220px]">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <NavLinks isTransparent={isTransparent} />
        </div>

        {/* Center: Brand Flagship Logo */}
        <Logo scrolled={scrolled} />

        {/* Right: Action Controls (Search, Account, Wishlist, Cart) */}
        <NavIcons isTransparent={isTransparent} />

      </div>
    </HeaderContainer>
  );
}
