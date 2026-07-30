"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LookbookBlock } from "@/domain/lookbook/entity";

interface LookbookImagePairProps {
  block: LookbookBlock;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function LookbookImagePair({ block, index }: LookbookImagePairProps) {
  const images = block.images || [];
  const img1 = images[0] || { src: "/images/products/placeholder.png", alt: "AISCHMIRA Photo 1" };
  const img2 = images[1] || { src: "/images/products/placeholder.png", alt: "AISCHMIRA Photo 2" };

  return (
    <article className="my-20 md:my-32 space-y-8">
      {/* Header */}
      {(block.title || block.subtitle) && (
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          {block.subtitle && (
            <span className="font-body text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
              {block.subtitle}
            </span>
          )}
          {block.title && (
            <h3 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-text font-light">
              {block.title}
            </h3>
          )}
        </div>
      )}

      {/* Dual Portrait Frame Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Photo 1 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, delay: index * 0.12, ease }}
          className="relative w-full aspect-[3/4] rounded-xs overflow-hidden bg-background border border-border/30 group"
        >
          <Image
            src={img1.src}
            alt={img1.alt}
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
          {img1.caption && (
            <div className="absolute bottom-5 left-6 right-6">
              <span className="text-surface font-body text-xs tracking-wider font-light drop-shadow-sm">
                {img1.caption}
              </span>
            </div>
          )}
        </motion.div>

        {/* Photo 2 (Staggered offset downward on desktop for editorial rhythm) */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, delay: index * 0.12 + 0.2, ease }}
          className="relative w-full aspect-[3/4] rounded-xs overflow-hidden bg-background border border-border/30 group md:mt-12"
        >
          <Image
            src={img2.src}
            alt={img2.alt}
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
          {img2.caption && (
            <div className="absolute bottom-5 left-6 right-6">
              <span className="text-surface font-body text-xs tracking-wider font-light drop-shadow-sm">
                {img2.caption}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </article>
  );
}
