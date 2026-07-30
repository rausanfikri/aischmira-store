"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Collection } from "@/domain/collection";
import { Quote } from "lucide-react";

interface CollectionEditorialStoryProps {
  collection: Collection;
}

export function CollectionEditorialStory({ collection }: CollectionEditorialStoryProps) {
  if (!collection) return null;

  return (
    <section className="py-20 md:py-32 bg-background border-b border-border/40">
      <div className="container-custom max-w-4xl mx-auto space-y-16">
        
        {/* Story Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
            The Editorial Narrative
          </span>
          <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text font-light leading-snug">
            &ldquo;{collection.story || collection.description}&rdquo;
          </h2>
        </motion.div>

        {/* Designer Notes Feature Box */}
        {collection.designerNotes && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="p-8 md:p-12 bg-surface border border-border/50 rounded-sm relative overflow-hidden space-y-4"
          >
            <Quote className="w-12 h-12 text-primary/15 absolute top-6 right-6 pointer-events-none" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">
              Designer Atelier Notes
            </span>
            <p className="font-body text-xs md:text-sm text-text/80 leading-relaxed italic font-light">
              {collection.designerNotes}
            </p>
            <div className="pt-2 flex items-center gap-3 font-body text-[10px] tracking-widest uppercase text-text/50">
              <span className="w-6 h-[1px] bg-primary" />
              <span>AISCHMIRA Creative Direction &bull; Jakarta Studio</span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
