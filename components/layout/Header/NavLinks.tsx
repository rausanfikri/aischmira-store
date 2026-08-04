"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { CollectionsDropdown } from "./CollectionsDropdown";
import { CategoriesDropdown } from "./CategoriesDropdown";
import type { Collection } from "@/domain/collection/entity";
import type { Category } from "@/domain/category/entity";

interface NavLinksProps {
  collections: Collection[];
  categories: Category[];
}

type MenuState = "collections" | "categories" | null;

export function NavLinks({ collections, categories }: NavLinksProps) {
  const [openMenu, setOpenMenu] = React.useState<MenuState>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (menu: MenuState) => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenMenu(menu);
    }, 120);
  };

  const handleMouseLeave = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const handleClickToggle = (menu: MenuState) => {
    clearHoverTimeout();
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const triggerClass =
    "group flex items-center gap-1.5 font-body text-[11px] tracking-[0.2em] uppercase text-[var(--header-text)] hover:text-amber-800 transition-colors py-6 bg-transparent outline-none font-medium focus-visible:ring-2 focus-visible:ring-primary rounded-xs cursor-pointer";

  return (
    <div
      ref={containerRef}
      className="relative z-50 flex items-center gap-8"
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Collections Trigger & Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("collections")}
      >
        <button
          type="button"
          onClick={() => handleClickToggle("collections")}
          className={triggerClass}
          aria-expanded={openMenu === "collections"}
          aria-haspopup="true"
          aria-controls="collections-dropdown-panel"
          aria-label="Collections Dropdown Menu"
        >
          <span>Collections</span>
          <ChevronDown
            size={13}
            className={`relative top-[0.5px] transition-transform duration-300 ease-out text-text/60 group-hover:text-amber-800 ${
              openMenu === "collections" ? "-rotate-180 text-amber-800" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {openMenu === "collections" && (
          <div
            id="collections-dropdown-panel"
            className="absolute top-full left-0 pt-1 z-50"
            onMouseEnter={() => clearHoverTimeout()}
          >
            <CollectionsDropdown
              collections={collections}
              onItemClick={() => setOpenMenu(null)}
            />
          </div>
        )}
      </div>

      {/* 2. Categories Trigger & Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("categories")}
      >
        <button
          type="button"
          onClick={() => handleClickToggle("categories")}
          className={triggerClass}
          aria-expanded={openMenu === "categories"}
          aria-haspopup="true"
          aria-controls="categories-dropdown-panel"
          aria-label="Categories Dropdown Menu"
        >
          <span>Categories</span>
          <ChevronDown
            size={13}
            className={`relative top-[0.5px] transition-transform duration-300 ease-out text-text/60 group-hover:text-amber-800 ${
              openMenu === "categories" ? "-rotate-180 text-amber-800" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {openMenu === "categories" && (
          <div
            id="categories-dropdown-panel"
            className="absolute top-full left-0 pt-1 z-50"
            onMouseEnter={() => clearHoverTimeout()}
          >
            <CategoriesDropdown
              categories={categories}
              onItemClick={() => setOpenMenu(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
