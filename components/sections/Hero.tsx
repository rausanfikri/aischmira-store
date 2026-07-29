"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────
   Motion presets — slow, deliberate, luxury pacing
   ──────────────────────────────────────────────────── */
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]; // smooth deceleration

function HeroImage() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/hero/hero-bg.png"
        alt="AISCHMIRA editorial campaign — luxury women's fashion"
        fill
        className="object-cover object-center"
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
      />
      {/* Layered editorial overlays — cinematic depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.04) 55%, rgba(0,0,0,0.42) 100%)",
        }}
      />
    </div>
  );
}

function HeroEyebrow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease }}
      className="flex items-center gap-3 mb-8 md:mb-10"
    >
      <span className="block w-8 h-px bg-surface/40" />
      <span className="font-body text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-surface/70 font-medium select-none">
        Flagship Collection 2026
      </span>
      <span className="block w-8 h-px bg-surface/40" />
    </motion.div>
  );
}

function HeroHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 0.4, ease }}
      className="font-heading text-[clamp(2.75rem,7vw,7rem)] leading-[1.04] tracking-[-0.01em] text-surface font-light text-center max-w-[18ch] mx-auto"
    >
      Crafted to&nbsp;comfort.
      <br />
      <span className="italic font-extralight text-surface/85">
        Designed to&nbsp;stand&nbsp;out.
      </span>
    </motion.h1>
  );
}

function HeroSubheadline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 0.75, ease }}
      className="font-body text-[11px] sm:text-xs md:text-[13px] text-surface/65 font-light tracking-[0.18em] uppercase leading-relaxed max-w-lg mx-auto text-center mt-8 md:mt-10"
    >
      Timeless silhouettes, pure silk, and modern Indonesian craftsmanship.
    </motion.p>
  );
}

function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.0, ease }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center mt-12 md:mt-14"
    >
      {/* Primary CTA */}
      <Link
        href="/collections"
        className="group relative w-full sm:w-auto bg-surface/95 text-text font-body text-[10px] tracking-[0.22em] uppercase py-4 px-12 font-medium text-center overflow-hidden transition-all duration-500 hover:bg-primary hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        <span className="relative z-10">Shop Collection</span>
      </Link>

      {/* Secondary CTA */}
      <Link
        href="/about"
        className="w-full sm:w-auto border border-surface/30 text-surface/90 font-body text-[10px] tracking-[0.22em] uppercase py-4 px-12 font-medium text-center transition-all duration-500 hover:bg-surface/10 hover:border-surface/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        Our Story
      </Link>
    </motion.div>
  );
}

function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6, ease }}
      className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <span className="font-body text-[8px] tracking-[0.35em] uppercase text-surface/40 select-none">
        Scroll
      </span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="block w-px h-6 bg-gradient-to-b from-surface/40 to-transparent"
      />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      className="relative w-full min-h-svh flex flex-col items-center justify-center overflow-hidden bg-text"
      aria-label="AISCHMIRA Flagship Hero"
    >
      <HeroImage />

      {/* Content — centered editorial composition */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-24 md:py-32">
        <HeroEyebrow />
        <HeroHeadline />
        <HeroSubheadline />
        <HeroCTA />
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
