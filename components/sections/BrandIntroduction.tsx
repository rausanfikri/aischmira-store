"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function BrandIntroduction() {
  return (
    <section className="bg-surface py-24 md:py-36 border-b border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Large Editorial Story & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block font-medium">
              The Philosophy
            </span>

            <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl text-text font-light leading-snug">
              &ldquo;True elegance lies in quiet confidence, where every garment is thoughtfully crafted to honor the modern woman.&rdquo;
            </h2>

            <p className="font-body text-sm text-text/70 leading-relaxed font-light max-w-2xl">
              Founded with a singular vision, AISCHMIRA bridges Indonesian heritage artistry with contemporary minimalist luxury. Each piece is constructed from pure silk and premium textiles, designed to endure beyond transient seasonal trends.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="font-body text-[10px] tracking-[0.25em] uppercase text-text hover:text-primary transition-colors border-b border-text hover:border-primary pb-1 font-medium inline-flex items-center gap-2"
              >
                Read Our Story <span className="text-xs">&rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Small Elegant Framing Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] bg-background overflow-hidden rounded-sm border border-border/30 shadow-md">
              <Image
                src="/images/products/placeholder.png"
                alt="AISCHMIRA Atelier Craftsmanship"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
