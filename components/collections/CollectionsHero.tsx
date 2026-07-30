"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface CollectionsHeroProps {
  totalCollections: number;
}

export function CollectionsHero({ totalCollections }: CollectionsHeroProps) {
  return (
    <header className="relative w-full overflow-hidden bg-surface border-b border-border/40 pt-16 md:pt-24 pb-20 md:pb-28">
      {/* Subtle Background Pattern Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-text/70 font-medium">
              AISCHMIRA Flagship Catalog &bull; {totalCollections} Curated Edits
            </span>
          </motion.div>

          {/* Main Editorial Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text tracking-wide leading-[1.08]"
          >
            Luxury Collections
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-xs md:text-sm lg:text-base tracking-editorial uppercase text-text/70 leading-relaxed font-light max-w-2xl mx-auto"
          >
            Explore our architectural capsule edits, fluid silk satin drapes, and heritage Indonesian motifs. Stories crafted before garments.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 font-body text-[10px] md:text-xs tracking-[0.25em] uppercase text-text/50"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">100%</span> Pure Mulberry Silk
            </div>
            <div className="hidden sm:block text-border">&bull;</div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">Hand-Rolled</span> Artisanal Borders
            </div>
            <div className="hidden sm:block text-border">&bull;</div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">Jakarta</span> Studio Design
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}
