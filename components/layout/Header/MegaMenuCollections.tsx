"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { Collection } from "@/domain/collection/entity";

/* ────────────────────────────────────────────────────
   Slug sets for grouping collections in the mega menu.
   When a CMS `group` field is available, this logic
   should be replaced by a domain-level grouping.
   ──────────────────────────────────────────────────── */
const SIGNATURE_SLUGS = new Set(["femme", "her", "she"]);
const SPECIAL_SLUGS = new Set([
  "am-monogram",
  "floral-meadow",
  "chili-chic",
  "garlic-bloom",
  "spice-blossom",
]);

interface MegaMenuCollectionsProps {
  collections: Collection[];
}

export function MegaMenuCollections({ collections }: MegaMenuCollectionsProps) {
  const signature = collections.filter((c) => SIGNATURE_SLUGS.has(c.slug));
  const special = collections.filter((c) => SPECIAL_SLUGS.has(c.slug));
  const classic = collections.filter(
    (c) => !SIGNATURE_SLUGS.has(c.slug) && !SPECIAL_SLUGS.has(c.slug)
  );

  return (
    <div className="w-screen flex justify-start bg-surface/98 backdrop-blur-lg border-t border-border/30 shadow-lg rounded-b-md">
      <div className="mx-auto w-full max-w-[1280px] px-8 lg:px-12 py-10 lg:py-12 grid grid-cols-12 gap-8 lg:gap-10">
        {/* Section 1: Signature Collections */}
        <div className="col-span-3 space-y-5 border-r border-border/20 pr-6">
          <div className="flex items-center gap-1.5 pb-2.5 border-b border-border/20">
            <Sparkles size={12} className="text-primary" />
            <h4 className="font-body text-[9px] tracking-[0.3em] uppercase text-primary font-bold">
              Signature
            </h4>
          </div>
          <ul className="flex flex-col gap-2.5" role="list">
            {signature.map((item) => (
              <li key={item.id}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`/collections/${item.slug}`}
                    className="group/item flex items-center justify-between p-3 bg-background/60 border border-primary/15 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className="font-heading italic text-lg text-text group-hover/item:text-primary font-light transition-colors">
                      {item.name}
                    </span>
                    <span className="font-body text-[7px] tracking-[0.3em] uppercase bg-primary/8 text-primary px-2 py-0.5 font-bold">
                      Signature
                    </span>
                  </Link>
                </NavigationMenu.Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Classic Collections */}
        <div className="col-span-4 space-y-5 border-r border-border/20 pr-6">
          <h4 className="font-body text-[9px] tracking-[0.3em] uppercase text-text-muted font-bold pb-2.5 border-b border-border/20">
            Classic Line
          </h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2" role="list">
            {classic.map((item) => (
              <li key={item.id}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`/collections/${item.slug}`}
                    className="font-body text-xs tracking-wider text-text/70 hover:text-text transition-colors block py-1.5 font-light"
                  >
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Silk Scarves */}
        <div className="col-span-2 space-y-5">
          <h4 className="font-body text-[9px] tracking-[0.3em] uppercase text-text-muted font-bold pb-2.5 border-b border-border/20">
            Silk Scarves
          </h4>
          <ul className="flex flex-col gap-2" role="list">
            {special.map((item) => (
              <li key={item.id}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`/collections/${item.slug}`}
                    className="font-body text-xs tracking-wider text-text/70 hover:text-text transition-colors block py-1.5 font-light"
                  >
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Editorial Preview Card */}
        <div className="col-span-3 relative aspect-[3/4] rounded-sm overflow-hidden border border-border/20 bg-background group">
          <Image
            src="/images/products/placeholder.png"
            alt="AISCHMIRA Flagship Collection"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            sizes="25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex flex-col justify-end p-6 text-surface">
            <span className="font-body text-[7px] tracking-[0.3em] uppercase text-surface/70 mb-1.5">
              Flagship Catalog
            </span>
            <NavigationMenu.Link asChild>
              <Link href="/collections">
                <h5 className="font-heading italic text-xl font-light drop-shadow-md hover:text-primary-light transition-colors">
                  Explore All Collections &rarr;
                </h5>
              </Link>
            </NavigationMenu.Link>
          </div>
        </div>
      </div>
    </div>
  );
}
