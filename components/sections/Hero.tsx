"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative w-full h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-text"
      aria-label="AISCHMIRA Flagship Hero"
    >
      {/* Editorial Cover Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="AISCHMIRA Luxury Fashion"
          fill
          className="object-cover object-center scale-[1.02] transition-transform duration-1000"
          priority
          fetchPriority="high"
          quality={95}
        />
        {/* Soft editorial gradient overlay */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto">
        
        {/* Eyebrow */}
        <motion.span
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase text-surface/80 mb-6 block font-medium"
        >
          AISCHMIRA &bull; FLAGSHIP 2026
        </motion.span>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 1.0, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.25 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-surface font-light leading-[1.08] mb-8"
        >
          Crafted to comfort.<br />
          <span className="italic text-surface/90 font-extralight">Designed to stand out.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="font-body text-xs sm:text-sm text-surface/80 font-light tracking-widest max-w-xl mb-12 uppercase leading-relaxed"
        >
          Timeless silhouettes, pure silk, and modern Indonesian craftsmanship.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          animate="animate"
          initial="initial"
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto"
        >
          <Link
            href="/collections"
            className="w-full sm:w-auto bg-surface text-text hover:bg-primary hover:text-surface transition-colors font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium shadow-md text-center"
          >
            Shop Collection
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto border border-surface/50 text-surface hover:bg-surface hover:text-text transition-colors font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium text-center"
          >
            Our Story
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
