"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[900px] flex items-center justify-center overflow-hidden"
      aria-label="Hero — AISCHMIRA"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://picsum.photos/seed/aischmira-hero-2/1920/1080"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Gradient overlay — bottom heavy for elegant editorial look */}
        <div className="absolute inset-0 bg-gradient-to-b from-text/20 via-text/40 to-text/60" />
      </div>

      {/* Content — centered editorial */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto">

        {/* Eyebrow tag */}
        <motion.span
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-body text-[10px] tracking-[0.3em] uppercase text-surface/70 mb-8 block"
        >
          New Collection — 2025
        </motion.span>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-surface leading-[1.05] tracking-tight mb-6"
        >
          Crafted to comfort,
          <br />
          <span className="italic">Designed to stand out.</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="w-16 h-px bg-accent mb-6 origin-left"
        />

        {/* Subheadline */}
        <motion.p
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="font-body text-base sm:text-lg text-surface/75 font-light tracking-wide max-w-xl mb-10"
        >
          Elegance in every curve and every moment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="#featured-collections"
            className="btn-primary bg-primary text-primary-foreground hover:bg-primary-hover rounded-lg px-8 py-3.5 text-[12px] tracking-[0.15em]"
            aria-label="Jelajahi koleksi AISCHMIRA"
          >
            Explore Collection
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-surface/60 text-surface rounded-lg px-8 py-3.5 font-body text-[12px] tracking-[0.15em] uppercase hover:bg-surface/10 hover:border-surface transition-all duration-300"
            aria-label="Belanja via WhatsApp"
          >
            Shop via WhatsApp
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-surface/40">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-surface/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
