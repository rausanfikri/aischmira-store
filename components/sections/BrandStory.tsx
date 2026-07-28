"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gem, Scissors, Compass, Heart } from "lucide-react";

export function BrandStory() {
  return (
    <section className="bg-surface py-24 md:py-36 border-b border-border/40 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        {/* Centered Editorial Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 max-w-2xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-body text-[9px] tracking-[0.4em] uppercase text-primary font-bold block"
          >
            The Brand Philosophy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text font-light"
          >
            The AISCHMIRA Narrative
          </motion.h2>

          <p className="font-body text-xs md:text-sm tracking-editorial uppercase text-text/60 font-light leading-relaxed">
            Where understated elegance meets Indonesian heritage and pure silk perfection.
          </p>
        </div>

        {/* Content Split: Narrative & 4 Core Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Narrative Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light leading-snug">
              &ldquo;Minimalism is not the absence of detail, but the presence of perfection.&rdquo;
            </h3>

            <p className="font-body text-sm md:text-base text-text/75 leading-relaxed font-light">
              AISCHMIRA is a luxury fashion house dedicated to crafting timeless apparel for the modern visionary. Conceived with an unwavering dedication to pure mulberry silk, architectural tailoring, and quiet sophistication.
            </p>

            <p className="font-body text-sm text-text/70 leading-relaxed font-light">
              Proudly designed and hand-assembled in Indonesia, each garment celebrates the harmony of raw natural textures and refined modern silhouettes.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium hover:bg-primary transition-colors shadow-sm"
              >
                Discover Brand Story &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Editorial Stacked Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative h-[420px] sm:h-[500px] w-full rounded-sm overflow-hidden bg-background border border-border/30"
          >
            <Image
              src="/images/products/placeholder.png"
              alt="AISCHMIRA Heritage Craftsmanship"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-1000"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-surface font-heading italic text-2xl drop-shadow-md">
                Handcrafted in Indonesia
              </span>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Badge Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-border/30">
          
          <div className="p-6 bg-background rounded-sm border border-border/30 space-y-2 text-center">
            <Scissors size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />
            <h4 className="font-heading italic text-xl text-text">Artisanal Craftsmanship</h4>
            <p className="font-body text-[11px] text-text/60 font-light">Hand-rolled hems & blind stitching</p>
          </div>

          <div className="p-6 bg-background rounded-sm border border-border/30 space-y-2 text-center">
            <Gem size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />
            <h4 className="font-heading italic text-xl text-text">Premium Materials</h4>
            <p className="font-body text-[11px] text-text/60 font-light">100% Pure Mulberry Silk & Linen</p>
          </div>

          <div className="p-6 bg-background rounded-sm border border-border/30 space-y-2 text-center">
            <Heart size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />
            <h4 className="font-heading italic text-xl text-text">Designed in Indonesia</h4>
            <p className="font-body text-[11px] text-text/60 font-light">Empowering local women artisans</p>
          </div>

          <div className="p-6 bg-background rounded-sm border border-border/30 space-y-2 text-center">
            <Compass size={20} className="text-primary mx-auto mb-2" strokeWidth={1.25} />
            <h4 className="font-heading italic text-xl text-text">Timeless Elegance</h4>
            <p className="font-body text-[11px] text-text/60 font-light">Silhouettes that transcend trends</p>
          </div>

        </div>

      </div>
    </section>
  );
}
