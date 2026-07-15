"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { instagramImages } from "@/data/homepage";

export function InstagramPreview() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl text-text font-light tracking-widest uppercase mb-4"
          >
            Follow Us
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="font-body text-text/60 mb-6"
          >
            @aischmira.store
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-24 bg-primary"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2">
          {instagramImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href="https://instagram.com" // Placeholder
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full aspect-square block overflow-hidden"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                   {/* We would typically put an Instagram icon here, but we are keeping it simple */}
                   <span className="opacity-0 group-hover:opacity-100 text-white font-body text-xs tracking-widest uppercase transition-opacity duration-300">
                     View on IG
                   </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
