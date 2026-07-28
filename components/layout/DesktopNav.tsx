"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const COLLECTIONS = {
  newest: [
    { name: "FEMME", slug: "femme" },
    { name: "HER", slug: "her" },
    { name: "SHE", slug: "she" },
  ],
  classic: [
    { name: "Bianca", slug: "bianca-silk-dress" },
    { name: "Priscila", slug: "priscila-tailored-blazer" },
    { name: "Safira", slug: "safira-wide-leg-trousers" },
    { name: "Briana", slug: "femme" },
    { name: "Tifani", slug: "her" },
    { name: "Zamira", slug: "she" },
    { name: "Gendis", slug: "femme" },
    { name: "Amara", slug: "her" },
    { name: "Dasya", slug: "she" },
    { name: "Jolly", slug: "femme" },
    { name: "Aveline", slug: "her" },
    { name: "Luna", slug: "she" },
  ],
  scarf: [
    { name: "AM Monogram", slug: "am-monogram-scarf" },
    { name: "Floral Meadow", slug: "floral-meadow-scarf" },
    { name: "Chili Chic", slug: "chili-chic-scarf" },
    { name: "Garlic Bloom", slug: "garlic-bloom-scarf" },
    { name: "Spice Blossom", slug: "spice-blossom-scarf" },
  ],
};

const CATEGORIES = [
  { name: "Outerwear", slug: "outerwear" },
  { name: "Tops", slug: "tops" },
  { name: "Bottoms", slug: "bottoms" },
  { name: "Dress", slug: "dress" },
  { name: "Accessories", slug: "accessories" },
  { name: "Long Pyjama Set", slug: "pyjamas" },
  { name: "Short Pyjama Set", slug: "pyjamas" },
];

interface DesktopNavProps {
  isTransparent?: boolean;
}

export default function DesktopNav({ isTransparent }: DesktopNavProps) {
  const linkTextClass = isTransparent
    ? "text-surface/90 hover:text-surface"
    : "text-text/80 hover:text-primary";
  return (
    <NavigationMenu.Root className="relative z-10 hidden lg:flex w-full items-center">
      <NavigationMenu.List className="flex items-center gap-8 m-0 p-0 list-none">
        
        {/* Collections Mega Menu */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={`group flex items-center gap-1 font-body text-[11px] tracking-[0.2em] uppercase ${linkTextClass} transition-colors py-6 bg-transparent outline-none font-medium`}>
            Collections
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          
          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <div className="w-screen flex justify-start bg-surface border-t border-border/40 shadow-xl">
              <div className="mx-auto w-full max-w-[1280px] px-8 py-12 grid grid-cols-4 gap-10">
                
                {/* Newest */}
                <div>
                  <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-primary font-bold mb-6 border-b border-border/30 pb-2">
                    Newest
                  </h4>
                  <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.newest.map((item) => (
                      <li key={item.name}>
                        <Link href={`/collections/${item.slug}`} className="hover:text-primary transition-colors block py-0.5">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Classic */}
                <div>
                  <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-6 border-b border-border/30 pb-2">
                    Classic
                  </h4>
                  <ul className="grid grid-cols-2 gap-3 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.classic.map((item) => (
                      <li key={item.name}>
                        <Link href={`/collections/${item.slug}`} className="hover:text-primary transition-colors block py-0.5">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scarf */}
                <div>
                  <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-6 border-b border-border/30 pb-2">
                    Scarf
                  </h4>
                  <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.scarf.map((item) => (
                      <li key={item.name}>
                        <Link href={`/collections/${item.slug}`} className="hover:text-primary transition-colors block py-0.5">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Editorial Collection Image Preview */}
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-border/30 bg-background group">
                  <Image
                    src="/images/products/placeholder.png"
                    alt="AISCHMIRA Flagship Edit"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="text-surface font-heading italic text-xl drop-shadow-md">
                      The Editorial Edit
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Categories Mega Menu */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={`group flex items-center gap-1 font-body text-[11px] tracking-[0.2em] uppercase ${linkTextClass} transition-colors py-6 bg-transparent outline-none font-medium`}>
            Categories
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          
          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <div className="w-screen bg-surface border-t border-border/40 shadow-xl">
              <div className="mx-auto w-full max-w-[1280px] px-8 py-12">
                <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-6 text-center border-b border-border/30 pb-2">
                  Browse Apparel Categories
                </h4>
                <ul className="grid grid-cols-4 gap-x-12 gap-y-4 font-body text-xs tracking-widest uppercase text-text/80 text-center">
                  {CATEGORIES.map((item) => (
                    <li key={item.name}>
                      <Link href="/collections" className="hover:text-primary transition-colors block py-2 border-b border-transparent hover:border-primary/20">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Journal Direct Link */}
        <NavigationMenu.Item>
          <Link
            href="/journal"
            className="font-body text-[11px] tracking-[0.2em] uppercase text-text/80 hover:text-primary transition-colors py-6 font-medium block"
          >
            Journal
          </Link>
        </NavigationMenu.Item>

        {/* About Direct Link */}
        <NavigationMenu.Item>
          <Link
            href="/about"
            className="font-body text-[11px] tracking-[0.2em] uppercase text-text/80 hover:text-primary transition-colors py-6 font-medium block"
          >
            About
          </Link>
        </NavigationMenu.Item>

      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-0 w-full overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu.Root>
  );
}
