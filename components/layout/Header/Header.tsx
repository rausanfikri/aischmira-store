"use client";

import * as React from "react";
import { HeaderShell } from "./HeaderShell";
import { HeaderContainer } from "./HeaderContainer";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
import { NavIcons } from "./NavIcons";
import MobileNav from "@/components/layout/MobileNav";

export function Header() {
  return (
    <HeaderShell>
      {({ scrolled }) => (
        <HeaderContainer>
          {/* 
            CSS GRID HEADER COMPOSITION
            grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr)
            Mathematically guarantees Logo remains perfectly centered relative to the container/viewport.
          */}
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center w-full">
            
            {/* Left Column: Mobile Drawer Toggle & Navigation Links */}
            <div className="flex items-center gap-4">
              <div className="lg:hidden">
                <MobileNav />
              </div>
              <Navigation />
            </div>

            {/* Center Column: AISCHMIRA Brand Flagship Logo */}
            <div className="flex items-center justify-center">
              <Logo scrolled={scrolled} />
            </div>

            {/* Right Column: Action Controls (Search, Account, Wishlist, Bag) */}
            <div className="flex items-center justify-end">
              <NavIcons />
            </div>

          </div>
        </HeaderContainer>
      )}
    </HeaderShell>
  );
}
