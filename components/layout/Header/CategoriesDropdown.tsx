"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import type { Category } from "@/domain/category/entity";

interface CategoriesDropdownProps {
  categories: Category[];
}

export function CategoriesDropdown({ categories }: CategoriesDropdownProps) {
  return (
    <div className="w-[520px] bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-sm p-6 lg:p-8 font-body">
      <div className="flex items-center justify-between pb-3 border-b border-border/30 mb-5">
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 font-medium flex items-center gap-1.5">
          <Tag size={12} className="text-primary" /> Flagship Categories
        </span>
        <NavigationMenu.Link asChild>
          <Link
            href="/collections"
            className="font-body text-[9px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1 font-medium"
          >
            Browse All <ArrowRight size={10} />
          </Link>
        </NavigationMenu.Link>
      </div>

      <ul className="grid grid-cols-2 gap-3" role="menu">
        {categories.map((cat) => (
          <li key={cat.id} role="none">
            <NavigationMenu.Link asChild>
              <Link
                href={`/collections?category=${encodeURIComponent(cat.slug)}`}
                role="menuitem"
                className="group flex flex-col justify-between p-3.5 bg-surface/60 hover:bg-surface border border-border/30 hover:border-primary/40 transition-all duration-300 rounded-xs"
              >
                <div>
                  <span className="font-heading italic text-lg text-text group-hover:text-primary transition-colors font-light block">
                    {cat.name}
                  </span>
                  {cat.description && (
                    <span className="font-body text-[10px] text-text/50 font-light truncate block mt-0.5">
                      {cat.description}
                    </span>
                  )}
                </div>
              </Link>
            </NavigationMenu.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
