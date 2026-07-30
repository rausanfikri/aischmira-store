"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { LookbookBlock } from "@/domain/lookbook/entity";

interface LookbookQuoteBlockProps {
  block: LookbookBlock;
  index: number;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function LookbookQuoteBlock({ block, index }: LookbookQuoteBlockProps) {
  if (!block.quote) return null;

  return (
    <article className="my-20 md:my-32 flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: index * 0.12, ease }}
        className="max-w-4xl space-y-6"
      >
        <p className="font-heading italic text-3xl sm:text-5xl lg:text-6xl text-text font-light leading-snug drop-shadow-xs">
          &ldquo;{block.quote}&rdquo;
        </p>

        {block.author && (
          <p className="font-body text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-primary font-bold">
            — {block.author}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay: index * 0.12 + 0.3, ease }}
        className="mt-12 w-[1px] h-20 bg-primary/30 origin-top"
        aria-hidden="true"
      />
    </article>
  );
}
