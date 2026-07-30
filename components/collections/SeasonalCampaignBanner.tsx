"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function SeasonalCampaignBanner() {
  return (
    <section className="relative w-full py-28 md:py-40 overflow-hidden bg-black text-surface">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/products/placeholder.png"
          alt="AISCHMIRA Seasonal Campaign"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl space-y-6">
          
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary font-bold block"
          >
            Autumn / Winter 2026 Campaign
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-surface tracking-wide leading-tight"
          >
            &ldquo;Quiet Luxury is not loud; it speaks in silence and impeccable touch.&rdquo;
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-xs md:text-sm text-surface/80 leading-relaxed font-light tracking-wide max-w-xl"
          >
            Immerse yourself in our seasonal lookbook campaign, celebrating double-faced wool, organic Mulberry silk satin, and hand-sculpted artisan buttons.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/journal"
              className="bg-primary text-black hover:bg-surface hover:text-black transition-colors duration-300 font-body text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 rounded-sm font-bold inline-block"
            >
              Discover Lookbook Campaign
            </Link>
            <Link
              href="/collections/femme"
              className="border border-surface/40 text-surface hover:border-surface hover:bg-surface/10 transition-colors duration-300 font-body text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 rounded-sm font-medium inline-block"
            >
              Shop FW26 Edit
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
