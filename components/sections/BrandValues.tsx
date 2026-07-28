"use client";

import { motion } from "framer-motion";
import { Gem, Compass, Scissors, Heart } from "lucide-react";

export function BrandValues() {
  const values = [
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Pure silk, fine cottons, and sustainably sourced luxury textiles selected for tactile perfection.",
    },
    {
      icon: Compass,
      title: "Timeless Design",
      description: "Architectural silhouettes crafted to transcend seasonal trends and endure across generations.",
    },
    {
      icon: Scissors,
      title: "Crafted Carefully",
      description: "Meticulous tailoring, precision seam stitching, and individual quality inspection.",
    },
    {
      icon: Heart,
      title: "Designed in Indonesia",
      description: "Proudly conceived and hand-assembled by local master artisans in Indonesia.",
    },
  ];

  return (
    <section className="bg-surface py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-3">
            Our Commitment
          </span>
          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text">
            Brand Values
          </h2>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="bg-background p-8 rounded-sm border border-border/30 flex flex-col items-center text-center space-y-4 hover:border-primary/50 transition-colors"
              >
                <div className="p-3.5 bg-surface rounded-full border border-border/40 text-primary mb-2 shadow-sm">
                  <Icon size={22} strokeWidth={1.25} />
                </div>
                <h3 className="font-heading italic text-2xl text-text">
                  {val.title}
                </h3>
                <p className="font-body text-xs text-text/70 leading-relaxed font-light">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
