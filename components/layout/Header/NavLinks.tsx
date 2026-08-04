"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { CollectionsDropdown } from "./CollectionsDropdown";
import { CategoriesDropdown } from "./CategoriesDropdown";
import type { Collection } from "@/domain/collection/entity";
import type { Category } from "@/domain/category/entity";

interface NavLinksProps {
  collections: Collection[];
  categories: Category[];
}

export function NavLinks({ collections, categories }: NavLinksProps) {
  const triggerClass =
    "group flex items-center gap-1.5 font-body text-[11px] tracking-[0.2em] uppercase text-[var(--header-text)] hover:text-primary transition-colors py-6 bg-transparent outline-none font-medium focus-visible:ring-2 focus-visible:ring-primary rounded-xs cursor-pointer";

  return (
    <NavigationMenu.Root className="relative z-40 flex items-center">
      <NavigationMenu.List className="flex items-center gap-8 m-0 p-0 list-none">
        {/* 1. Collections Dropdown Trigger */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerClass} aria-label="Collections Menu">
            Collections
            <ChevronDown
              size={13}
              className="relative top-[0.5px] transition-transform duration-300 ease-out group-data-[state=open]:-rotate-180 text-text/60 group-hover:text-primary"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-full left-0 mt-1 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            <CollectionsDropdown collections={collections} />
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* 2. Categories Dropdown Trigger */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerClass} aria-label="Categories Menu">
            Categories
            <ChevronDown
              size={13}
              className="relative top-[0.5px] transition-transform duration-300 ease-out group-data-[state=open]:-rotate-180 text-text/60 group-hover:text-primary"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-full left-0 mt-1 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            <CategoriesDropdown categories={categories} />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full">
        <NavigationMenu.Viewport className="relative mt-1 overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn rounded-sm" />
      </div>
    </NavigationMenu.Root>
  );
}
