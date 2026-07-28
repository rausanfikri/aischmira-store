"use client";

import * as React from "react";
import Link from "next/link";

export const CATEGORIES_DATA = [
  { name: "Outerwear", slug: "outerwear" },
  { name: "Tops", slug: "tops" },
  { name: "Bottoms", slug: "bottoms" },
  { name: "Dress", slug: "dress" },
  { name: "Accessories", slug: "accessories" },
  { name: "Long Pyjama Set", slug: "long-pyjama" },
  { name: "Short Pyjama Set", slug: "short-pyjama" },
];

export function DropdownCategories() {
  return (
    <div className="w-screen bg-surface border-t border-border/40 shadow-xl">
      <div className="mx-auto w-full max-w-[760px] px-8 py-10">
        <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-6 text-center border-b border-border/30 pb-3">
          Apparel Categories
        </h4>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-body text-xs tracking-widest uppercase text-text/80 text-center font-light">
          {CATEGORIES_DATA.map((item) => (
            <li key={item.name}>
              <Link
                href={`/collections?category=${encodeURIComponent(item.slug)}`}
                className="hover:text-primary transition-colors block py-3.5 px-3 bg-background hover:bg-surface border border-border/30 rounded-sm font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
