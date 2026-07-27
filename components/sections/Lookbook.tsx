"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lookbookImages } from "@/data/homepage";

export function Lookbook() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-[0.1em] uppercase mb-6"
          >
            Lookbook
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-divider origin-center mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-body text-[13px] sm:text-sm tracking-wide text-text-secondary max-w-md font-light"
          >
            Editorial moments. Everyday elegance.
          </motion.p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {lookbookImages.map((img, index) => {
            let spanClass = "row-span-1";
            if (index === 0) spanClass = "md:col-span-2 lg:col-span-1 lg:row-span-2";
            if (index === 2) spanClass = "row-span-2";

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`relative w-full h-full overflow-hidden shadow-sm group bg-surface ${spanClass}`}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
                  quality={90}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
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
