"use client";

import * as React from "react";
import { HeaderShell } from "./HeaderShell";
import { HeaderContainer } from "./HeaderContainer";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
import { NavIcons } from "./NavIcons";
import MobileNav from "@/components/layout/MobileNav";
import { services } from "@/services";
import type { Collection } from "@/domain/collection/entity";
import type { Category } from "@/domain/category/entity";

import { useUIStore } from "@/store/useUIStore";
import { SearchModal } from "@/components/search/SearchModal";

export function Header() {
  const [collections, setCollections] = React.useState<Collection[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const searchOpen = useUIStore((state) => state.searchOpen);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);

  React.useEffect(() => {
    let isMounted = true;
    Promise.all([
      services.collection.getCollections(),
      services.category.getCategories(),
    ]).then(([colRes, catRes]) => {
      if (isMounted) {
        if (colRes.isSuccess) setCollections(colRes.value);
        if (catRes.isSuccess) setCategories(catRes.value);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <HeaderShell>
        {({ scrolled }) => (
          <HeaderContainer>
            {/* 
              CSS GRID HEADER COMPOSITION
              grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr)
              Mathematically guarantees Logo remains perfectly centered relative to the container/viewport.
            */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center w-full">
              {/* Left Column: Mobile Drawer Toggle & Desktop Navigation Links */}
              <div className="flex items-center gap-4">
                <div className="lg:hidden">
                  <MobileNav collections={collections} categories={categories} />
                </div>
                <Navigation collections={collections} categories={categories} />
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
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
