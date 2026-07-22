"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lookbookImages } from "@/data/homepage";

export function Lookbook() {
  return (
    <section className="section-padding bg-section-light-blue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-widest uppercase mb-5"
          >
            Lookbook
          </motion.h2>
          <div className="section-divider mb-5" />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-base text-[var(--color-text-secondary)] max-w-md"
          >
            Editorial moments. Everyday elegance.
          </motion.p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px]">
          {lookbookImages.map((img, index) => {
            let spanClass = "row-span-1";
            if (index === 0) spanClass = "md:col-span-2 lg:col-span-1 lg:row-span-2";
            if (index === 2) spanClass = "row-span-2";

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative w-full h-full overflow-hidden rounded-xl group ${spanClass}`}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/lookbook"
            className="btn-outline"
            aria-label="Lihat lookbook lengkap AISCHMIRA"
          >
            View Full Lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}
