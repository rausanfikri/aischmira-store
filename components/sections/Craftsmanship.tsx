"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Gem, Heart, Sparkles } from "lucide-react";

export function Craftsmanship() {
  const pillars = [
    {
      icon: Gem,
      title: "100% Pure Mulberry Silk",
      description:
        "Sourced from master weavers, offering a liquid-like drape, natural breathability, and subtle lustre that feels weightless against the skin.",
    },
    {
      icon: Scissors,
      title: "Hand-Rolled Hem Boundaries",
      description:
        "Every scarf edge and garment hem is finished by hand using traditional Indonesian embroidery and blind-stitching techniques.",
    },
    {
      icon: Sparkles,
      title: "Precision Architectural Cut",
      description:
        "Pattern pieces are hand-cut individually to honor the natural grain line of fine silk and wool, ensuring a flawless silhouette.",
    },
    {
      icon: Heart,
      title: "Crafted in Indonesia",
      description:
        "Designed and hand-assembled in small batches in Indonesia, honoring heritage textile artistry while empowering local women artisans.",
    },
  ];

  return (
    <section className="bg-surface py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block font-medium"
          >
            Artisanal Heritage
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text font-light"
          >
            The Art of Craftsmanship
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-xs md:text-sm tracking-editorial uppercase text-text/60 font-light leading-relaxed max-w-lg mx-auto"
          >
            Meticulous construction, uncompromised textiles, and timeless Indonesian artistry.
          </motion.p>
        </div>

        {/* 2-Column Split: Image Feature + 4 Craft Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Feature Editorial Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative aspect-[3/4] overflow-hidden rounded-sm border border-border/40 shadow-sm bg-background group"
          >
            <Image
              src="/images/products/placeholder.png"
              alt="AISCHMIRA Craftsmanship & Textile Detail"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <div className="text-surface space-y-1">
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-surface/70 block">
                  Artisan Studio
                </span>
                <p className="font-heading italic text-2xl drop-shadow-md">
                  Precision in Every Thread
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4 Pillars List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-background p-6 rounded-sm border border-border/30 space-y-3 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-surface border border-border/40 flex items-center justify-center text-primary shadow-xs">
                    <Icon size={18} strokeWidth={1.25} />
                  </div>
                  <h3 className="font-heading italic text-xl text-text font-light">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs text-text/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
