"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function CollectionsEditorialIntro() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border/40">
      <div className="container-custom max-w-4xl mx-auto text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
            Creative Direction & Philosophy
          </span>
          <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl text-text font-light leading-snug">
            &ldquo;Every collection begins not with a garment, but with a narrative of form, tactile silence, and timeless lineage.&rdquo;
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-body text-xs md:text-sm text-text/70 leading-relaxed font-light max-w-2xl mx-auto"
        >
          Our collections represent complete editorial chapters in the AISCHMIRA universe. From the structured empowerment of <strong className="font-medium text-text">FEMME</strong> and <strong className="font-medium text-text">SHE</strong> to the delicate hand-rolled silk scarves of our <strong className="font-medium text-text">Atelier Monogram</strong>, each piece is designed to exist in harmony across seasons.
        </motion.p>

      </div>
    </section>
  );
}
