"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function HeroImage() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/hero/hero-bg.png"
        alt="AISCHMIRA New Collection — FEMME, HER, SHE"
        fill
        className="object-cover object-center"
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative w-full min-h-svh flex flex-col items-center justify-center overflow-hidden bg-text"
      aria-label="AISCHMIRA New Collection Hero"
    >
      <HeroImage />

      {/* Centered Editorial Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-8 py-24 md:py-32 text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-surface/80 font-medium mb-6"
        >
          NEW COLLECTION
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease }}
          className="font-heading italic text-4xl sm:text-6xl md:text-8xl text-surface font-light tracking-wide leading-tight"
        >
          FEMME &bull; HER &bull; SHE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="font-body text-xs md:text-sm text-surface/70 font-light tracking-[0.25em] uppercase mt-6 mb-10"
        >
          AISCHMIRA Flagship 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          <Link
            href="/products"
            className="inline-block bg-surface text-text font-body text-[10px] tracking-[0.25em] uppercase py-4 px-12 font-medium transition-all duration-300 hover:bg-primary hover:text-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs cursor-pointer"
          >
            SHOP NOW
          </Link>
        </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-[8px] tracking-[0.3em] uppercase text-surface/50">
          Scroll
        </span>
        <span className="block w-px h-6 bg-surface/30" />
      </motion.div>
    </section>
  );
}
