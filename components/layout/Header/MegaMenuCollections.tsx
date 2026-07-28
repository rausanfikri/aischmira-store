"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export const COLLECTIONS_DATA = {
  signature: [
    { name: "FEMME", slug: "femme" },
    { name: "HER", slug: "her" },
    { name: "SHE", slug: "she" },
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

export function MegaMenuCollections() {
  return (
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
            {COLLECTIONS_DATA.signature.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/collections/${item.slug}`}
                  className="group/item flex items-center justify-between p-2.5 rounded-sm bg-background border border-primary/25 hover:border-primary transition-all duration-300 shadow-xs"
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

        {/* Section 2: Classic Collections (4 Cols, 2 Grid Sub-cols) */}
        <div className="col-span-4 space-y-4 border-r border-border/30 pr-6">
          <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 font-bold pb-2 border-b border-border/30">
            Classic Line
          </h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-body text-xs tracking-widest uppercase text-text/80">
            {COLLECTIONS_DATA.classic.map((item) => (
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

        {/* Section 3: Special Scarves (2 Cols) */}
        <div className="col-span-2 space-y-4">
          <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 font-bold pb-2 border-b border-border/30">
            Silk Scarves
          </h4>
          <ul className="flex flex-col gap-3 font-body text-xs tracking-widest uppercase text-text/80 font-light">
            {COLLECTIONS_DATA.special.map((item) => (
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
  );
}
