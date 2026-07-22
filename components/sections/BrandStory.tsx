"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="section-padding bg-section-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Centered Editorial Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-widest uppercase mb-5"
          >
            The Aischmira Story
          </motion.h2>
          <div className="section-divider" />
        </div>

        {/* Content — centered editorial text + side images on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content — centered on mobile, left-aligned within max-w on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p className="font-body text-base sm:text-lg text-[var(--color-text-secondary)] leading-[1.85] mb-6 max-w-xl">
              AISCHMIRA adalah brand fashion wanita yang menghadirkan busana
              elegan, timeless, dan nyaman digunakan oleh perempuan modern
              Indonesia.
            </p>
            <p className="font-body text-base sm:text-lg text-[var(--color-text-secondary)] leading-[1.85] mb-10 max-w-xl">
              We believe in the power of minimalism mixed with luxurious
              touches. Every thread, every cut, and every silhouette is
              designed to empower your daily journey with grace and confidence.
            </p>

            <Link
              href="/about"
              className="btn-ghost text-primary hover:text-primary-hover"
            >
              Discover More
            </Link>
          </motion.div>

          {/* Editorial Image Grid */}
          <div className="relative h-[480px] sm:h-[560px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-3/4 h-[68%] rounded-2xl overflow-hidden shadow-lg z-10"
            >
              <Image
                src="https://picsum.photos/seed/aischmira-story-1/800/1000"
                alt="AISCHMIRA Editorial"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-2/3 h-[52%] rounded-2xl overflow-hidden shadow-xl z-20 border-8 border-background"
            >
              <Image
                src="https://picsum.photos/seed/aischmira-story-2/800/800"
                alt="AISCHMIRA Details"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Accent dot */}
            <div className="absolute top-[68%] right-[24%] w-3 h-3 rounded-full bg-accent z-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
