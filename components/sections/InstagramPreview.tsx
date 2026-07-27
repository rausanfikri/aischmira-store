"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { instagramImages } from "@/data/homepage";

export function InstagramPreview() {
  const INSTAGRAM_URL = "https://instagram.com/aischmira";

  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-[0.1em] uppercase mb-6"
          >
            Follow Us
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-divider origin-center mb-6"
          />
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 font-body text-[13px] sm:text-sm text-text-secondary hover:text-primary transition-colors duration-300 tracking-[0.1em] font-light uppercase"
            aria-label="Kunjungi profil Instagram @aischmira"
          >
            <FaInstagram size={16} className="text-primary" />
            <span>@aischmira</span>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat postingan Instagram ${img.alt}`}
                className="group relative w-full aspect-square block overflow-hidden rounded-md shadow-sm"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-text/0 group-hover:bg-text/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-surface font-body text-[10px] tracking-[0.2em] uppercase transition-opacity duration-500 flex items-center gap-2 border border-surface/40 px-4 py-2 rounded-none backdrop-blur-sm">
                    <FaInstagram size={12} />
                    View
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
