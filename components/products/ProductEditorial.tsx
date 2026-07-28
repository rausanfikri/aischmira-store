"use client";

import * as React from "react";
import { Product } from "@/types";
import { ExtendedCollection } from "@/data/collections";
import { motion } from "framer-motion";
import { Sparkles, Gem, Palette, Heart } from "lucide-react";

interface ProductEditorialProps {
  product: Product;
  collection: ExtendedCollection | null;
}

/* Scroll-triggered fade-in variant */
const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function ProductEditorial({ product, collection }: ProductEditorialProps) {
  return (
    <div className="space-y-0">

      {/* The Story — Primary editorial narrative */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full bg-surface py-20 md:py-28 border-y border-border/40"
      >
        <div className="container-editorial text-center space-y-8">
          <div className="space-y-3">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block font-medium">
              The Story
            </span>
            <h3 className="font-heading italic text-3xl md:text-5xl text-text font-light">
              Inspiration & Narrative
            </h3>
          </div>

          <p className="font-body text-sm md:text-base leading-relaxed text-text/70 font-light prose-reading mx-auto">
            {product.story || "A testament to enduring style, this piece blends classic construction with contemporary aesthetics to deliver unparalleled elegance."}
          </p>

          {collection?.story && (
            <p className="font-body text-xs leading-relaxed text-text/55 italic font-light prose-reading mx-auto pt-2 border-t border-border/20 max-w-xl">
              From the <span className="text-primary font-medium">{collection.name}</span> collection — {collection.story}
            </p>
          )}
        </div>
      </motion.section>

      {/* Craftsmanship — Designer Notes & Techniques */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full py-16 md:py-24"
      >
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* Designer Notes */}
            <div className="space-y-5 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Sparkles size={14} className="text-primary" />
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-primary font-bold">
                  Designer Notes
                </span>
              </div>
              <p className="font-body text-sm text-text/65 italic font-light leading-relaxed">
                {collection?.designerNotes ||
                  "\u201CHand-cut with precision to honor the movement of natural fibers, ensuring effortless drape and silhouette stability.\u201D"}
              </p>
            </div>

            {/* Material Composition */}
            <div className="space-y-5 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Gem size={14} className="text-primary" />
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 font-bold">
                  Material & Composition
                </span>
              </div>
              {product.material ? (
                <p className="font-body text-sm text-text/65 font-light leading-relaxed">
                  {product.material}
                </p>
              ) : (
                <p className="font-body text-sm text-text/65 font-light leading-relaxed">
                  Crafted from carefully sourced premium fabrics selected for their luxurious hand-feel and lasting quality.
                </p>
              )}

              {/* Material origin badges */}
              {collection?.materials && collection.materials.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
                  {collection.materials.map((mat) => (
                    <span
                      key={mat}
                      className="font-body text-[9px] tracking-widest uppercase bg-surface border border-border/40 text-text/70 px-3 py-1.5 rounded-sm"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </motion.section>

      {/* Designed For — Lifestyle context */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full bg-surface py-16 md:py-24 border-y border-border/40"
      >
        <div className="container-editorial text-center space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-background border border-border/40 flex items-center justify-center mx-auto">
                <Palette size={16} className="text-primary" />
              </div>
              <h4 className="font-heading italic text-lg text-text font-light">Versatile Styling</h4>
              <p className="font-body text-[11px] text-text/55 leading-relaxed font-light">
                Designed to transition from morning meetings to evening occasions with effortless elegance.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-background border border-border/40 flex items-center justify-center mx-auto">
                <Heart size={16} className="text-primary" />
              </div>
              <h4 className="font-heading italic text-lg text-text font-light">Made With Care</h4>
              <p className="font-body text-[11px] text-text/55 leading-relaxed font-light">
                Every detail is considered — from hand-rolled hems to precisely matched patterns at the seams.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-background border border-border/40 flex items-center justify-center mx-auto">
                <Sparkles size={16} className="text-primary" />
              </div>
              <h4 className="font-heading italic text-lg text-text font-light">Timeless Investment</h4>
              <p className="font-body text-[11px] text-text/55 leading-relaxed font-light">
                Built to last beyond seasons. A piece that becomes more personal with every wear.
              </p>
            </div>

          </div>
        </div>
      </motion.section>

    </div>
  );
}
