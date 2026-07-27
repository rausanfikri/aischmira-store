"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative w-full h-[100svh] min-h-[640px] max-h-[900px] flex items-center justify-center overflow-hidden bg-text"
      aria-label="Hero — AISCHMIRA"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://picsum.photos/seed/aischmira-hero-2/1920/1080"
          alt=""
          fill
          className="object-cover object-center scale-105 animate-image-drift"
          priority
          aria-hidden="true"
          quality={90}
        />
        {/* Gradient overlay — bottom heavy for elegant editorial look */}
        <div className="absolute inset-0 bg-gradient-to-b from-text/10 via-text/30 to-text/70" />
      </div>

      {/* Content — centered editorial */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto mt-10">

        {/* Eyebrow tag */}
        <motion.span
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          className="font-body text-[10px] tracking-[0.4em] uppercase text-surface/80 mb-8 block"
        >
          New Collection — 2025
        </motion.span>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.35 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-surface leading-[1.1] tracking-wide mb-8"
        >
          Crafted to comfort.
          <br />
          <span className="italic text-surface/90">Designed to stand out.</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="w-20 h-px bg-accent mb-8 origin-center"
        />

        {/* Subheadline */}
        <motion.p
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.7 }}
          className="font-body text-sm sm:text-base text-surface/80 font-light tracking-widest max-w-xl mb-12 uppercase"
        >
          Elegance in every curve and every moment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          <Link
            href="#featured-collections"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-10 py-4 font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 min-w-[220px]"
            aria-label="Jelajahi koleksi AISCHMIRA"
          >
            Explore Collection
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-surface/40 text-surface px-10 py-4 font-body text-[11px] tracking-[0.2em] uppercase hover:bg-surface hover:text-text transition-all duration-300 min-w-[220px]"
            aria-label="Belanja via WhatsApp"
          >
            Shop via WhatsApp
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-body text-[8px] tracking-[0.4em] uppercase text-surface/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-surface/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
