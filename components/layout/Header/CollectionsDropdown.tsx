"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import type { Collection } from "@/domain/collection/entity";

const SIGNATURE_SLUGS = new Set(["femme", "her", "she"]);

interface CollectionsDropdownProps {
  collections: Collection[];
}

export function CollectionsDropdown({ collections }: CollectionsDropdownProps) {
  const signatureCollections = collections.filter((c) => SIGNATURE_SLUGS.has(c.slug));
  const otherCollections = collections.filter((c) => !SIGNATURE_SLUGS.has(c.slug));

  return (
    <div className="w-[720px] bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-sm p-6 lg:p-8 font-body">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Signature Atelier Collections */}
        <div className="col-span-5 space-y-4 border-r border-border/30 pr-6">
          <div className="flex items-center gap-1.5 pb-2 border-b border-border/30">
            <Sparkles size={13} className="text-amber-700" />
            <h4 className="font-body text-[9px] tracking-[0.25em] uppercase text-amber-800 font-medium">
              Signature Atelier
            </h4>
          </div>
          <ul className="flex flex-col gap-2" role="menu">
            {signatureCollections.map((item) => (
              <li key={item.id} role="none">
                <NavigationMenu.Link asChild>
                  <Link
                    href={`/collections/${item.slug}`}
                    role="menuitem"
                    className="group/item flex items-center justify-between p-3 bg-surface/80 border border-border/40 hover:border-primary/50 transition-all duration-300 rounded-xs"
                  >
                    <div>
                      <span className="font-heading italic text-lg text-text group-hover/item:text-primary font-light transition-colors block">
                        {item.name}
                      </span>
                      {item.description && (
                        <span className="font-body text-[10px] text-text/50 font-light truncate block max-w-[160px]">
                          {item.description}
                        </span>
                      )}
                    </div>
                    <span className="font-body text-[8px] tracking-widest uppercase bg-amber-500/10 text-amber-800 px-2 py-0.5 font-medium rounded-xs">
                      Atelier
                    </span>
                  </Link>
                </NavigationMenu.Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Seasonal & Capsule Collections */}
        <div className="col-span-4 space-y-4 border-r border-border/30 pr-6">
          <h4 className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 font-medium pb-2 border-b border-border/30">
            Capsules & Scarves
          </h4>
          <ul className="flex flex-col gap-1.5" role="menu">
            {otherCollections.map((item) => (
              <li key={item.id} role="none">
                <NavigationMenu.Link asChild>
                  <Link
                    href={`/collections/${item.slug}`}
                    role="menuitem"
                    className="font-body text-xs tracking-wider text-text/70 hover:text-text hover:translate-x-1 transition-all duration-200 block py-1.5 font-light"
                  >
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Editorial Highlight */}
        <div className="col-span-3 flex flex-col justify-between bg-surface/60 p-4 border border-border/30 rounded-xs group">
          <div className="relative aspect-[3/4] w-full rounded-xs overflow-hidden mb-3">
            <Image
              src="/images/products/placeholder.png"
              alt="AISCHMIRA Collections"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="200px"
            />
          </div>
          <div>
            <span className="font-body text-[8px] tracking-widest uppercase text-text/50 block mb-1">
              Curated Catalog
            </span>
            <NavigationMenu.Link asChild>
              <Link
                href="/collections"
                className="font-heading italic text-base text-text hover:text-primary transition-colors flex items-center gap-1 font-light"
              >
                All Collections <ArrowRight size={12} />
              </Link>
            </NavigationMenu.Link>
          </div>
        </div>
      </div>
    </div>
  );
}
