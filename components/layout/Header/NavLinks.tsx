"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { MegaMenuCollections } from "./MegaMenuCollections";
import { DropdownCategories } from "./DropdownCategories";
import type { Collection } from "@/domain/collection/entity";
import type { Category } from "@/domain/category/entity";

interface NavLinksProps {
  collections: Collection[];
  categories: Category[];
}

export function NavLinks({ collections, categories }: NavLinksProps) {
  const triggerClass =
    "group flex items-center gap-1 font-body text-xs tracking-[0.2em] uppercase text-[var(--header-text)] hover:text-[var(--header-hover)] transition-colors py-6 bg-transparent outline-none font-medium focus-visible:ring-2 focus-visible:ring-primary rounded-xs";

  return (
    <NavigationMenu.Root className="relative z-10 flex items-center">
      <NavigationMenu.List className="flex items-center gap-8 m-0 p-0 list-none">
        {/* 1. Collections Trigger & Mega Menu */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerClass}>
            Collections
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <MegaMenuCollections collections={collections} />
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* 2. Categories Trigger & Dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerClass}>
            Categories
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <DropdownCategories categories={categories} />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-0 w-full overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu.Root>
  );
}
