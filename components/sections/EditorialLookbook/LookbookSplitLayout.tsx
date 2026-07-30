"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LookbookBlock } from "@/domain/lookbook/entity";
import { cn } from "@/lib/utils";

interface LookbookSplitLayoutProps {
  block: LookbookBlock;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function LookbookSplitLayout({ block, index }: LookbookSplitLayoutProps) {
  const isImageLeft = block.layoutOrder === "image-left";
  const mainImage = block.images?.[0] || {
    src: "/images/products/placeholder.png",
    alt: "AISCHMIRA Campaign Photo",
  };

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-16 md:my-24">
      {/* Photography Column */}
      <motion.div
        initial={{ opacity: 0, x: isImageLeft ? -28 : 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: index * 0.12 + 0.1, ease }}
        className={cn(
          "relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-xs overflow-hidden bg-background border border-border/30 group",
          isImageLeft ? "lg:col-span-7 lg:order-1" : "lg:col-span-7 lg:order-2"
        )}
      >
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
          sizes="(max-width: 1024px) 100vw, 60vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
        {mainImage.caption && (
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-surface font-heading italic text-xl drop-shadow-sm font-light">
              {mainImage.caption}
            </span>
          </div>
        )}
      </motion.div>

      {/* Narrative Column */}
      <motion.div
        initial={{ opacity: 0, x: isImageLeft ? 28 : -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: index * 0.12 + 0.25, ease }}
        className={cn(
          "space-y-6 text-left flex flex-col justify-center",
          isImageLeft ? "lg:col-span-5 lg:order-2" : "lg:col-span-5 lg:order-1"
        )}
      >
        <div className="space-y-2">
          {block.subtitle && (
            <span className="font-body text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
              {block.subtitle}
            </span>
          )}
          {block.title && (
            <h3 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-text font-light leading-tight">
              {block.title}
            </h3>
          )}
        </div>

        {block.paragraphs && block.paragraphs.length > 0 && (
          <div className="space-y-4 font-body text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
            {block.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        )}

        {block.cta && (
          <div className="pt-4">
            <Link
              href={block.cta.href}
              className="inline-flex items-center gap-3 group font-body text-[10px] tracking-[0.25em] uppercase text-text font-medium hover:text-primary transition-colors py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
            >
              <span>{block.cta.label}</span>
              <span className="block w-6 h-px bg-text group-hover:bg-primary group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>
        )}
      </motion.div>
    </article>
  );
}
