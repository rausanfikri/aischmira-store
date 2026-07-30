"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BrandStoryBlock as BrandStoryBlockType } from "@/core/config/schema";
import { cn } from "@/lib/utils";

interface BrandStoryBlockProps {
  block: BrandStoryBlockType;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function BrandStoryBlock({ block, index }: BrandStoryBlockProps) {
  const isImageLeft = block.layoutOrder === "image-left";

  const imageAspectClass =
    block.image.aspectRatio === "landscape"
      ? "aspect-[16/10]"
      : block.image.aspectRatio === "square"
      ? "aspect-square"
      : "aspect-[4/5]";

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Visual Image Column */}
      <motion.div
        initial={{ opacity: 0, x: isImageLeft ? -28 : 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: index * 0.15 + 0.1, ease }}
        className={cn(
          "relative w-full rounded-xs overflow-hidden bg-background border border-border/30 group",
          imageAspectClass,
          isImageLeft ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
        )}
      >
        <Image
          src={block.image.src}
          alt={block.image.alt}
          fill
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
        {block.image.caption && (
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-surface font-heading italic text-xl sm:text-2xl drop-shadow-sm font-light">
              {block.image.caption}
            </span>
          </div>
        )}
      </motion.div>

      {/* Narrative Text Column */}
      <motion.div
        initial={{ opacity: 0, x: isImageLeft ? 28 : -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: index * 0.15 + 0.25, ease }}
        className={cn(
          "space-y-6 text-left flex flex-col justify-center",
          isImageLeft ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
        )}
      >
        <div className="space-y-2">
          <span className="font-body text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
            {block.eyebrow}
          </span>
          <h3 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-text font-light leading-tight">
            {block.title}
          </h3>
        </div>

        {block.quote && (
          <blockquote className="font-heading italic text-xl sm:text-2xl text-text/90 font-light border-l-2 border-primary/40 pl-4 py-1">
            &ldquo;{block.quote}&rdquo;
          </blockquote>
        )}

        {block.headline && (
          <p className="font-body text-xs sm:text-sm font-semibold tracking-wider text-text uppercase">
            {block.headline}
          </p>
        )}

        <div className="space-y-4 font-body text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
          {block.paragraphs.map((p, pIdx) => (
            <p key={pIdx}>{p}</p>
          ))}
        </div>

        {block.cta && (
          <div className="pt-4">
            <Link
              href={block.cta.href}
              className="inline-flex items-center gap-3 group font-body text-[10px] tracking-[0.25em] uppercase text-surface bg-text hover:bg-primary transition-colors py-3.5 px-8 rounded-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span>{block.cta.label}</span>
              <span className="group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
            </Link>
          </div>
        )}
      </motion.div>
    </article>
  );
}
