"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import type { Category } from "@/domain/category/entity";

interface DropdownCategoriesProps {
  categories: Category[];
}

export function DropdownCategories({ categories }: DropdownCategoriesProps) {
  return (
    <div className="w-screen bg-surface/98 backdrop-blur-lg border-t border-border/30 shadow-lg rounded-b-md">
      <div className="mx-auto w-full max-w-[760px] px-8 py-10">
        <h4 className="font-body text-[9px] tracking-[0.3em] uppercase text-text-muted font-bold mb-6 text-center border-b border-border/20 pb-3">
          Apparel Categories
        </h4>
        <ul
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-body text-xs tracking-wider uppercase text-text/80 text-center font-light"
          role="list"
        >
          {categories.map((item) => (
            <li key={item.id}>
              <NavigationMenu.Link asChild>
                <Link
                  href={`/collections?category=${encodeURIComponent(item.slug)}`}
                  className="block py-3.5 px-3 bg-background/60 hover:bg-surface border border-border/20 hover:border-primary/30 transition-all duration-300 font-medium"
                >
                  {item.name}
                </Link>
              </NavigationMenu.Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
