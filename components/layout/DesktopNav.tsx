"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const COLLECTIONS = {
  signature: [
    { name: "FEMME", slug: "femme", tag: "Signature Edit" },
    { name: "HER", slug: "her", tag: "Signature Edit" },
    { name: "SHE", slug: "she", tag: "Signature Edit" },
  ],
  classic: [
    { name: "Bianca", slug: "bianca" },
    { name: "Priscila", slug: "priscila" },
    { name: "Safira", slug: "safira" },
    { name: "Briana", slug: "briana" },
    { name: "Tifani", slug: "tifani" },
    { name: "Zamira", slug: "zamira" },
    { name: "Gendis", slug: "gendis" },
    { name: "Amara", slug: "amara" },
    { name: "Dasya", slug: "dasya" },
    { name: "Jolly", slug: "jolly" },
    { name: "Aveline", slug: "aveline" },
    { name: "Luna", slug: "luna" },
  ],
  special: [
    { name: "AM Monogram", slug: "am-monogram" },
    { name: "Floral Meadow", slug: "floral-meadow" },
    { name: "Chili Chic", slug: "chili-chic" },
    { name: "Garlic Bloom", slug: "garlic-bloom" },
    { name: "Spice Blossom", slug: "spice-blossom" },
  ],
};

const CATEGORIES = [
  { name: "Outerwear", slug: "outerwear" },
  { name: "Tops", slug: "tops" },
  { name: "Bottoms", slug: "bottoms" },
  { name: "Dress", slug: "dress" },
  { name: "Accessories", slug: "accessories" },
  { name: "Long Pyjama Set", slug: "long-pyjama" },
  { name: "Short Pyjama Set", slug: "short-pyjama" },
];

interface DesktopNavProps {
  isTransparent?: boolean;
}

export default function DesktopNav({ isTransparent }: DesktopNavProps) {
  const linkTextClass = isTransparent
    ? "text-surface/90 hover:text-surface"
    : "text-text/80 hover:text-primary";

  return (
    <NavigationMenu.Root className="relative z-10 flex items-center">
      <NavigationMenu.List className="flex items-center gap-8 m-0 p-0 list-none">
        
        {/* 1. Collections Mega Menu */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              "group flex items-center gap-1 font-body text-xs tracking-[0.2em] uppercase transition-colors py-6 bg-transparent outline-none font-medium",
              linkTextClass
            )}
          >
            Collections
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          
          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <div className="w-screen flex justify-start bg-surface border-t border-border/40 shadow-xl">
              <div className="mx-auto w-full max-w-[1280px] px-8 py-12 grid grid-cols-12 gap-10">
                
                {/* Section 1: Signature Collections (3 Cols) */}
                <div className="col-span-3 space-y-4 border-r border-border/30 pr-6">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-border/30">
                    <Sparkles size={13} className="text-primary" />
                    <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
                      Signature Collections
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase">
                    {COLLECTIONS.signature.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/collections/${item.slug}`}
                          className="group/item flex items-center justify-between p-2.5 rounded-sm bg-background border border-primary/20 hover:border-primary transition-all duration-300 shadow-xs"
                        >
                          <span className="font-heading italic text-lg text-text group-hover/item:text-primary font-light">
                            {item.name}
                          </span>
                          <span className="font-body text-[8px] tracking-widest uppercase bg-primary/10 text-primary px-2 py-0.5 rounded-xs font-bold">
                            Signature
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 2: Classic Collections (5 Cols, 2 Grid Sub-cols) */}
                <div className="col-span-4 space-y-4 border-r border-border/30 pr-6">
                  <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 font-bold pb-2 border-b border-border/30">
                    Classic Collections
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-body text-xs tracking-widest uppercase text-text/80">
                    {COLLECTIONS.classic.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/collections/${item.slug}`}
                          className="hover:text-primary transition-colors block py-1 border-b border-transparent hover:border-border/40 font-light"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3: Special Collections (2 Cols) */}
                <div className="col-span-2 space-y-4">
                  <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 font-bold pb-2 border-b border-border/30">
                    Special Scarves
                  </h4>
                  <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80 font-light">
                    {COLLECTIONS.special.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/collections/${item.slug}`}
                          className="hover:text-primary transition-colors block py-1 border-b border-transparent hover:border-border/40"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 4: Editorial Card Preview (3 Cols) */}
                <div className="col-span-3 relative aspect-[3/4] rounded-sm overflow-hidden border border-border/30 bg-background group">
                  <Image
                    src="/images/products/placeholder.png"
                    alt="AISCHMIRA Flagship Edit"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-surface">
                    <span className="font-body text-[8px] tracking-[0.25em] uppercase text-surface/80 mb-1">
                      Flagship Catalog
                    </span>
                    <h5 className="font-heading italic text-2xl font-light drop-shadow-md">
                      Explore All Collections &rarr;
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* 2. Categories Dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              "group flex items-center gap-1 font-body text-xs tracking-[0.2em] uppercase transition-colors py-6 bg-transparent outline-none font-medium",
              linkTextClass
            )}
          >
            Categories
            <ChevronDown
              size={12}
              className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          
          <NavigationMenu.Content className="absolute top-full left-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
            <div className="w-screen bg-surface border-t border-border/40 shadow-xl">
              <div className="mx-auto w-full max-w-[760px] px-8 py-10">
                <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-6 text-center border-b border-border/30 pb-3">
                  Apparel Categories
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-body text-xs tracking-widest uppercase text-text/80 text-center font-light">
                  {CATEGORIES.map((item) => (
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
          </NavigationMenu.Content>
        </NavigationMenu.Item>

      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-0 w-full overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu.Root>
  );
}
