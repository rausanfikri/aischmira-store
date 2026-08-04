"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import type { Category } from "@/domain/category/entity";

interface CategoriesDropdownProps {
  categories: Category[];
  onItemClick?: () => void;
}

export function CategoriesDropdown({ categories, onItemClick }: CategoriesDropdownProps) {
  return (
    <div
      className="w-[540px] bg-white border border-border/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-md p-8 text-text font-body transition-all duration-200 animate-in fade-in slide-in-from-top-2"
      role="menu"
      aria-orientation="vertical"
      aria-label="Categories Dropdown Menu"
    >
      <div className="flex items-center justify-between pb-3 border-b border-border/20 mb-6">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 font-semibold flex items-center gap-1.5">
          <Tag size={13} className="text-amber-800" /> Flagship Categories
        </span>
        <Link
          href="/collections"
          onClick={onItemClick}
          className="font-body text-[9px] tracking-widest uppercase text-amber-800 hover:underline flex items-center gap-1 font-medium"
        >
          Explore All <ArrowRight size={11} />
        </Link>
      </div>

      <ul className="grid grid-cols-2 gap-3.5" role="none">
        {categories.map((cat) => (
          <li key={cat.id} role="none">
            <Link
              href={`/collections?category=${encodeURIComponent(cat.slug)}`}
              onClick={onItemClick}
              role="menuitem"
              className="group flex flex-col justify-between p-4 bg-surface/50 hover:bg-surface border border-border/30 hover:border-amber-700/40 transition-all duration-200 rounded-sm"
            >
              <div>
                <span className="font-heading italic text-xl text-text group-hover:text-amber-800 transition-colors font-light block">
                  {cat.name}
                </span>
                {cat.description && (
                  <span className="font-body text-[10px] text-text/50 font-light truncate block mt-1">
                    {cat.description}
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
