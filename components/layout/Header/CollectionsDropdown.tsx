"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import type { Collection } from "@/domain/collection/entity";

const SIGNATURE_SLUGS = new Set(["femme", "her", "she"]);

interface CollectionsDropdownProps {
  collections: Collection[];
  onItemClick?: () => void;
}

export function CollectionsDropdown({ collections, onItemClick }: CollectionsDropdownProps) {
  const signatureCollections = collections.filter((c) => SIGNATURE_SLUGS.has(c.slug));
  const otherCollections = collections.filter((c) => !SIGNATURE_SLUGS.has(c.slug));

  return (
    <div
      className="w-[760px] bg-white border border-border/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-md p-8 text-text font-body transition-all duration-200 animate-in fade-in slide-in-from-top-2"
      role="menu"
      aria-orientation="vertical"
      aria-label="Collections Dropdown Menu"
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Signature Atelier Collections */}
        <div className="col-span-5 space-y-5 border-r border-border/20 pr-6">
          <div className="flex items-center gap-1.5 pb-2.5 border-b border-border/20">
            <Sparkles size={13} className="text-amber-700" />
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-amber-800 font-semibold">
              Signature Line
            </h4>
          </div>
          <ul className="flex flex-col gap-2.5" role="none">
            {/* Custom display for HER Long & HER Short alongside FEMME and SHE */}
            {signatureCollections.map((item) => {
              if (item.slug === "her") {
                return (
                  <React.Fragment key={item.id}>
                    <li role="none">
                      <Link
                        href="/collections/her?silhouette=long"
                        onClick={onItemClick}
                        role="menuitem"
                        className="group flex items-center justify-between p-3 bg-surface/50 hover:bg-surface border border-border/30 hover:border-amber-700/40 transition-all duration-200 rounded-sm"
                      >
                        <div>
                          <span className="font-heading italic text-lg text-text group-hover:text-amber-800 font-light transition-colors block">
                            HER Long
                          </span>
                          <span className="font-body text-[10px] text-text/50 font-light block">
                            Floor-length fluid drape
                          </span>
                        </div>
                        <span className="font-body text-[8px] tracking-widest uppercase bg-amber-700/10 text-amber-800 px-2 py-0.5 font-medium rounded-xs">
                          Signature
                        </span>
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        href="/collections/her?silhouette=short"
                        onClick={onItemClick}
                        role="menuitem"
                        className="group flex items-center justify-between p-3 bg-surface/50 hover:bg-surface border border-border/30 hover:border-amber-700/40 transition-all duration-200 rounded-sm"
                      >
                        <div>
                          <span className="font-heading italic text-lg text-text group-hover:text-amber-800 font-light transition-colors block">
                            HER Short
                          </span>
                          <span className="font-body text-[10px] text-text/50 font-light block">
                            Tailored knee-length cut
                          </span>
                        </div>
                        <span className="font-body text-[8px] tracking-widest uppercase bg-amber-700/10 text-amber-800 px-2 py-0.5 font-medium rounded-xs">
                          Signature
                        </span>
                      </Link>
                    </li>
                  </React.Fragment>
                );
              }

              return (
                <li key={item.id} role="none">
                  <Link
                    href={`/collections/${item.slug}`}
                    onClick={onItemClick}
                    role="menuitem"
                    className="group flex items-center justify-between p-3 bg-surface/50 hover:bg-surface border border-border/30 hover:border-amber-700/40 transition-all duration-200 rounded-sm"
                  >
                    <div>
                      <span className="font-heading italic text-lg text-text group-hover:text-amber-800 font-light transition-colors block">
                        {item.name === "SHE" ? "SHE Dress" : item.name}
                      </span>
                      {item.description && (
                        <span className="font-body text-[10px] text-text/50 font-light truncate block max-w-[160px]">
                          {item.description}
                        </span>
                      )}
                    </div>
                    <span className="font-body text-[8px] tracking-widest uppercase bg-amber-700/10 text-amber-800 px-2 py-0.5 font-medium rounded-xs">
                      Signature
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Middle Column: Seasonal & Classic Collections */}
        <div className="col-span-4 space-y-5 border-r border-border/20 pr-6">
          <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 font-semibold pb-2.5 border-b border-border/20">
            Capsules & Scarves
          </h4>
          <ul className="flex flex-col gap-2" role="none">
            {otherCollections.map((item) => (
              <li key={item.id} role="none">
                <Link
                  href={`/collections/${item.slug}`}
                  onClick={onItemClick}
                  role="menuitem"
                  className="font-body text-xs tracking-wider text-text/75 hover:text-amber-800 hover:translate-x-1 transition-all duration-200 block py-1.5 font-light"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Curated Highlight Card */}
        <div className="col-span-3 flex flex-col justify-between bg-surface/40 p-4 border border-border/20 rounded-sm group">
          <div className="relative aspect-[3/4] w-full rounded-xs overflow-hidden mb-3">
            <Image
              src="/images/products/she-dress/she-dress-hero-white-01.jpg"
              alt="AISCHMIRA Flagship Catalog"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="200px"
            />
          </div>
          <div>
            <span className="font-body text-[8px] tracking-widest uppercase text-text/50 block mb-1">
              Curated Edit
            </span>
            <Link
              href="/collections"
              onClick={onItemClick}
              className="font-heading italic text-base text-text hover:text-amber-800 transition-colors flex items-center gap-1 font-light"
            >
              All Collections <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
