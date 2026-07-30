"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Collection } from "@/domain/collection/entity";
import { CollectionCard } from "@/components/ui/CollectionCard";

interface NewCollectionsProps {
  collections?: Collection[];
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function NewCollections({ collections = [] }: NewCollectionsProps) {
  if (!collections || collections.length === 0) {
    return null;
  }

  const primaryCollection = collections[0];
  const secondaryCollections = collections.slice(1, 4);

  return (
    <section
      className="bg-background py-24 md:py-36 border-b border-border/30 overflow-hidden"
      aria-label="AISCHMIRA Featured Collections"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }}
            className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold block"
          >
            Flagship Releases 2026
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-text font-light leading-tight"
          >
            Featured Collections
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="font-body text-xs sm:text-sm tracking-widest uppercase text-text-muted font-light leading-relaxed max-w-xl"
          >
            Curated capsule edits designed for modern silhouettes, pure silk touch, and timeless elegance.
          </motion.p>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div className="space-y-12 lg:space-y-16">
          {/* Primary Featured Collection — Hero Split Layout */}
          {primaryCollection && (
            <CollectionCard
              collection={primaryCollection}
              variant="hero"
              index={0}
            />
          )}

          {/* Secondary Featured Collections — 2-Column Editorial Grid */}
          {secondaryCollections.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {secondaryCollections.map((col, idx) => (
                <CollectionCard
                  key={col.id}
                  collection={col}
                  variant="editorial"
                  index={idx + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
