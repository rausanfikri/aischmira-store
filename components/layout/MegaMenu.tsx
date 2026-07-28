"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

interface MegaMenuSection {
  title: string;
  items: { name: string; href: string }[];
}

interface MegaMenuProps {
  sections: MegaMenuSection[];
  previewImage?: string;
  previewTitle?: string;
  previewHref?: string;
}

export function MegaMenu({ sections, previewImage, previewTitle, previewHref }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 w-full bg-surface/98 backdrop-blur-md border-b border-border/40 shadow-luxury py-10 px-8 lg:px-20 animate-fadeIn z-40">
      <div className="container-hero grid grid-cols-12 gap-8">
        
        {/* Navigation Link Columns */}
        <div className="col-span-8 grid grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary font-bold block border-b border-border/30 pb-2">
                {sec.title}
              </span>
              <ul className="space-y-2.5">
                {sec.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className="font-body text-xs text-text/70 hover:text-text hover:translate-x-1 transition-all duration-200 inline-block font-light"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visual Editorial Preview Card */}
        {previewImage && (
          <div className="col-span-4 pl-8 border-l border-border/30">
            <Link href={previewHref || "/collections"} className="group block relative aspect-[4/3] rounded-sm overflow-hidden bg-background">
              <Image
                src={previewImage}
                alt={previewTitle || "Editorial Preview"}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="font-body text-[8px] tracking-[0.25em] uppercase text-surface/70 block mb-1">
                  Feature Spotlight
                </span>
                <h4 className="font-heading italic text-2xl text-surface">
                  {previewTitle || "Explore Collections"}
                </h4>
              </div>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
