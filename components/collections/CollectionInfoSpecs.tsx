"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Collection } from "@/domain/collection";
import { Sparkles, ShieldCheck, Feather, Globe } from "lucide-react";

interface CollectionInfoSpecsProps {
  collection: Collection;
}

export function CollectionInfoSpecs({ collection }: CollectionInfoSpecsProps) {
  if (!collection) return null;

  return (
    <section className="py-16 md:py-24 bg-surface border-b border-border/40">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. Signature Textiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-background border border-border/40 rounded-sm space-y-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Feather className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block font-medium">
                Textile Composition
              </span>
              <h3 className="font-heading italic text-xl text-text">Signature Fibers</h3>
            </div>
            {collection.materials && collection.materials.length > 0 ? (
              <ul className="space-y-1.5 font-body text-xs text-text/70 font-light">
                {collection.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-body text-xs text-text/70 font-light">
                100% Pure Mulberry Silk Satin & Organic Natural Linen.
              </p>
            )}
          </motion.div>

          {/* 2. Craftsmanship Lineage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-background border border-border/40 rounded-sm space-y-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block font-medium">
                Artisanal Lineage
              </span>
              <h3 className="font-heading italic text-xl text-text">Hand-Rolled Hem</h3>
            </div>
            <p className="font-body text-xs text-text/70 leading-relaxed font-light">
              Crafted in limited artisan batches in Indonesia. Every border is hand-stitched with French seams for lifetime durability.
            </p>
          </motion.div>

          {/* 3. Seasonal Release */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-background border border-border/40 rounded-sm space-y-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block font-medium">
                Atelier Timeline
              </span>
              <h3 className="font-heading italic text-xl text-text">
                {collection.season || "Permanent Edit"}
              </h3>
            </div>
            <p className="font-body text-xs text-text/70 leading-relaxed font-light">
              Designed as a perpetual wardrobe piece. Timeless cuts that transition effortlessly across seasons.
            </p>
          </motion.div>

          {/* 4. Enterprise Data Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-background border border-border/40 rounded-sm space-y-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Globe className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50 block font-medium">
                BigSeller Sync Ready
              </span>
              <h3 className="font-heading italic text-xl text-text">Multichannel Hub</h3>
            </div>
            <div className="space-y-1 font-body text-[10px] tracking-wider uppercase text-text/60 font-light">
              <div>Ref ID: <span className="font-mono text-text">{collection.id}</span></div>
              {collection.bigSellerCollectionId && (
                <div>BS Sync: <span className="font-mono text-text">{collection.bigSellerCollectionId}</span></div>
              )}
              <div>Status: <span className="text-primary font-bold">{collection.status}</span></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
