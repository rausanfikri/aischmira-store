"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LookbookBlock } from "@/domain/lookbook/entity";

interface LookbookEditorialTextProps {
  block: LookbookBlock;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function LookbookEditorialText({ block, index }: LookbookEditorialTextProps) {
  return (
    <article className="my-20 md:my-32 py-12 px-6 sm:px-12 bg-background border border-border/30 rounded-xs text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.0, delay: index * 0.12, ease }}
        className="max-w-2xl space-y-6"
      >
        {block.subtitle && (
          <span className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold block">
            {block.subtitle}
          </span>
        )}

        {block.title && (
          <h3 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-text font-light leading-tight">
            {block.title}
          </h3>
        )}

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
