"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LookbookBlock } from "@/domain/lookbook/entity";

interface LookbookImageGalleryProps {
  block: LookbookBlock;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function LookbookImageGallery({ block, index }: LookbookImageGalleryProps) {
  const images = block.images || [];

  return (
    <article className="my-20 md:my-32 space-y-10">
      {/* Header */}
      {(block.title || block.subtitle) && (
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
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

      {/* 3-Column Editorial Photography Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {images.map((img, imgIdx) => (
          <motion.div
            key={imgIdx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: index * 0.12 + imgIdx * 0.15, ease }}
            className="relative w-full aspect-[3/4] rounded-xs overflow-hidden bg-background border border-border/30 group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
            {img.caption && (
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-surface font-body text-[11px] tracking-wider font-light drop-shadow-sm">
                  {img.caption}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </article>
  );
}
