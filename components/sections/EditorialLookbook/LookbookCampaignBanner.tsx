"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LookbookBlock } from "@/domain/lookbook/entity";

interface LookbookCampaignBannerProps {
  block: LookbookBlock;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function LookbookCampaignBanner({ block, index }: LookbookCampaignBannerProps) {
  const heroImage = block.images?.[0] || {
    src: "/images/products/placeholder.png",
    alt: "AISCHMIRA Campaign Banner",
  };

  return (
    <article className="relative w-full overflow-hidden bg-background my-16 md:my-24">
      {/* Full-Bleed Photography Aspect Ratio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.3, delay: index * 0.15, ease }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-xs border border-border/30 group"
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          sizes="100vw"
          priority={index === 0}
          quality={92}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Floating Editorial Banner Header */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16 text-surface max-w-4xl space-y-3">
          {block.subtitle && (
            <span className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold block">
              {block.subtitle}
            </span>
          )}

          {block.title && (
            <h2 className="font-heading italic text-4xl sm:text-6xl lg:text-7xl font-light text-surface leading-none drop-shadow-md">
              {block.title}
            </h2>
          )}

          {block.headline && (
            <p className="font-body text-xs sm:text-sm tracking-wider uppercase text-surface/80 font-light max-w-2xl pt-2">
              {block.headline}
            </p>
          )}

          {heroImage.caption && (
            <span className="font-body text-[10px] text-surface/60 font-light pt-2 block italic">
              {heroImage.caption}
            </span>
          )}
        </div>
      </motion.div>
    </article>
  );
}
