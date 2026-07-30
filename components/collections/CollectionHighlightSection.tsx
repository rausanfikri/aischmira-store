"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Collection } from "@/domain/collection";
import { Sparkles, ArrowRight } from "lucide-react";

interface CollectionHighlightSectionProps {
  collection: Collection;
  productCount: number;
}

export function CollectionHighlightSection({ collection, productCount }: CollectionHighlightSectionProps) {
  if (!collection) return null;

  return (
    <section className="py-20 md:py-32 bg-surface border-y border-border/40 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Banner Column (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden rounded-sm bg-background border border-border/40 shadow-md">
              <Image
                src={collection.coverImage || "/images/products/placeholder.png"}
                alt={collection.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Season & Campaign Badges */}
              <div className="absolute top-6 left-6 flex flex-wrap items-center gap-3">
                {collection.season && (
                  <span className="font-body text-[9px] tracking-[0.25em] uppercase text-surface bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-surface/20">
                    {collection.season}
                  </span>
                )}
                {collection.campaignBadge && (
                  <span className="font-body text-[9px] tracking-[0.25em] uppercase text-primary bg-black/80 backdrop-blur-md border border-primary/40 px-3 py-1.5 rounded-sm font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-primary" />
                    {collection.campaignBadge}
                  </span>
                )}
              </div>

              {/* Bottom Image Overlay Title */}
              <div className="absolute bottom-8 left-8 right-8 text-surface">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-surface/80 block mb-2 font-light">
                  Spotlight Edit &bull; {productCount} {productCount === 1 ? "Curated Piece" : "Curated Pieces"}
                </span>
                <h3 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-surface tracking-wide drop-shadow-lg">
                  {collection.name}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Story Column (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">
                Flagship Highlight
              </span>
              <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-text leading-tight">
                {collection.subtitle || collection.title || collection.name}
              </h2>
              <p className="font-body text-xs md:text-sm text-text/80 leading-relaxed font-light">
                {collection.story || collection.description}
              </p>
            </div>

            {/* Designer Notes Accordion / Box */}
            {collection.designerNotes && (
              <div className="p-6 bg-background/80 border border-border/50 rounded-sm space-y-2">
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 font-medium block">
                  Designer&apos;s Atelier Note
                </span>
                <p className="font-body text-xs text-text/70 italic leading-relaxed">
                  &ldquo;{collection.designerNotes}&rdquo;
                </p>
              </div>
            )}

            {/* Materials List */}
            {collection.materials && collection.materials.length > 0 && (
              <div className="space-y-3">
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 font-medium block">
                  Signature Textiles
                </span>
                <div className="flex flex-wrap gap-2">
                  {collection.materials.map((material, idx) => (
                    <span
                      key={idx}
                      className="font-body text-[10px] tracking-wider uppercase text-text/80 bg-surface border border-border/60 px-3 py-1.5 rounded-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={`/collections/${collection.slug}`}
                className="group/cta inline-flex items-center gap-3 bg-text text-surface hover:bg-primary hover:text-surface transition-all duration-300 font-body text-[11px] tracking-[0.25em] uppercase px-8 py-4 rounded-sm font-medium shadow-sm"
              >
                <span>{collection.ctaLabel || "Explore Highlighted Edit"}</span>
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
