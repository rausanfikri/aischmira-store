"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { instagramImages } from "@/data/homepage";

export function InstagramPreview() {
  const INSTAGRAM_URL = "https://instagram.com/aischmira";

  return (
    <section className="section-padding bg-section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-widest uppercase mb-5"
          >
            Follow Us
          </motion.h2>
          <div className="section-divider mb-4" />
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 font-body text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] tracking-wider"
            aria-label="Kunjungi profil Instagram @aischmira"
          >
            <FaInstagram size={16} />
            <span>@aischmira</span>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat postingan Instagram ${img.alt}`}
                className="group relative w-full aspect-square block overflow-hidden rounded-xl shadow-sm"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-body text-[10px] tracking-[0.2em] uppercase transition-opacity duration-300 flex items-center gap-1.5 border border-white/40 px-3 py-1.5 rounded-full backdrop-blur-xs">
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
