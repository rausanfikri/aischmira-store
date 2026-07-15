"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const WHATSAPP_URL = "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://picsum.photos/seed/aischmira-hero-1/1920/1080"
          alt="Elegance in Every Thread"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-6"
        >
          Elegance in Every Thread
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-body text-base sm:text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mb-10"
        >
          Discover timeless modest fashion crafted for modern women.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-text font-body text-sm tracking-widest uppercase hover:bg-white/90 transition-colors duration-300 shadow-soft"
          >
            Shop Now
          </Link>
          <Link
            href="#featured-collections"
            className="px-8 py-4 bg-transparent border border-white text-white font-body text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
          >
            Explore Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
