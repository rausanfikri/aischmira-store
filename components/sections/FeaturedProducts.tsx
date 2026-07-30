"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/domain/product/entity";
import { ProductCard } from "@/components/ui/ProductCard";

interface FeaturedProductsProps {
  products?: Product[];
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section
      className="bg-surface py-24 md:py-36 border-b border-border/30 overflow-hidden"
      aria-label="AISCHMIRA Featured Flagship Products"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="space-y-3 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease }}
              className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-primary font-bold block"
            >
              Curated Highlights
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, delay: 0.15, ease }}
              className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-text font-light leading-tight"
            >
              Featured Flagship Pieces
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="font-body text-xs sm:text-sm tracking-widest uppercase text-text-muted font-light leading-relaxed"
            >
              Hand-finished garments crafted from pure mulberry silk, architectural cuts, and Indonesian heritage.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="self-start md:self-auto"
          >
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 group font-body text-[10px] tracking-[0.25em] uppercase text-text hover:text-primary transition-colors py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
            >
              <span>Explore Full Library</span>
              <span className="group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
            </Link>
          </motion.div>
        </div>

        {/* Curated Product Grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {products.map((product, idx) => (
            <motion.div
              key={product.sku}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
