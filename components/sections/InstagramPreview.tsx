"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";

export function InstagramPreview() {
  const posts = [1, 2, 3, 4];

  return (
    <section className="bg-background py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Social Community
          </span>
          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text">
            On Instagram
          </h2>
          <p className="font-body text-xs tracking-editorial uppercase text-text/60 font-light">
            Tag @aischmira to be featured in our private journal.
          </p>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {posts.map((post, idx) => (
            <motion.a
              key={post}
              href="https://instagram.com/aischmira"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-square bg-surface overflow-hidden rounded-sm group border border-border/30"
              aria-label="View AISCHMIRA Instagram Post"
            >
              <Image
                src="/images/products/placeholder.png"
                alt="AISCHMIRA Instagram Editorial"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <FaInstagram size={28} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://instagram.com/aischmira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-surface text-text hover:bg-primary hover:text-surface transition-colors font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium border border-border/50 shadow-sm"
          >
            <FaInstagram size={16} /> Follow @aischmira
          </a>
        </div>

      </div>
    </section>
  );
}
