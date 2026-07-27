"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="section-padding bg-section-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Centered Editorial Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-body text-[9px] tracking-[0.4em] uppercase text-primary mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-[0.1em] uppercase mb-8"
          >
            The Aischmira Story
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-divider origin-center"
          />
        </div>

        {/* Content — centered editorial text + stacked images */}
        <div className="flex flex-col items-center w-full">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-16 sm:mb-24"
          >
            <p className="font-body text-base sm:text-lg text-text-secondary leading-[2.2] mb-6 max-w-xl font-light">
              AISCHMIRA adalah brand fashion wanita yang menghadirkan busana
              elegan, timeless, dan nyaman digunakan oleh perempuan modern
              Indonesia.
            </p>
            <p className="font-body text-base sm:text-lg text-text-secondary leading-[2.2] mb-12 max-w-xl font-light">
              We believe in the power of minimalism mixed with luxurious
              touches. Every thread, every cut, and every silhouette is
              designed to empower your daily journey with grace and confidence.
            </p>

            <Link
              href="/about"
              className="inline-block border-b border-text text-text hover:text-primary hover:border-primary transition-colors duration-300 pb-1 font-body text-xs tracking-[0.2em] uppercase"
            >
              Discover More
            </Link>
          </motion.div>

          {/* Editorial Image Grid */}
          <div className="relative h-[500px] sm:h-[700px] w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute top-0 right-4 sm:right-12 w-[65%] sm:w-[60%] h-[80%] overflow-hidden bg-surface rounded-md shadow-sm"
            >
              <Image
                src="https://picsum.photos/seed/aischmira-story-1/800/1000"
                alt="AISCHMIRA Editorial"
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-[2s] ease-out"
                quality={85}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-0 left-4 sm:left-12 w-[50%] h-[60%] overflow-hidden bg-surface border-4 border-background rounded-md shadow-sm"
            >
              <Image
                src="https://picsum.photos/seed/aischmira-story-2/800/800"
                alt="AISCHMIRA Details"
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-[2s] ease-out"
                quality={85}
              />
            </motion.div>

            {/* Accent dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute top-[68%] right-[32%] sm:right-[38%] w-2.5 h-2.5 rounded-full bg-accent z-30" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
