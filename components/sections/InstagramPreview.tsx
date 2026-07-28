"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";

export function InstagramPreview() {
  const instagramPosts = [
    { id: 1, handle: "@aischmira", caption: "Pure Mulberry Silk Editorial" },
    { id: 2, handle: "@aischmira", caption: "The FEMME Collection" },
    { id: 3, handle: "@aischmira", caption: "Architectural Tailoring" },
    { id: 4, handle: "@aischmira", caption: "Artisanal Details" },
    { id: 5, handle: "@aischmira", caption: "Signature Monogram Scarf" },
    { id: 6, handle: "@aischmira", caption: "Designed in Indonesia" },
  ];

  return (
    <section className="bg-background py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Social Community
          </span>
          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text font-light">
            On Instagram
          </h2>
          <p className="font-body text-xs tracking-editorial uppercase text-text/60 font-light">
            Tag @aischmira to be featured in our private journal.
          </p>
        </div>

        {/* 6 Photo Square Grid (3x2 Desktop, 2x3 Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/aischmira"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-square bg-surface overflow-hidden rounded-sm group border border-border/30 shadow-xs"
              aria-label={`View AISCHMIRA Instagram Post — ${post.caption}`}
            >
              <Image
                src="/images/products/placeholder.png"
                alt={`AISCHMIRA Instagram Editorial — ${post.caption}`}
                fill
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-surface p-4 text-center space-y-2">
                <FaInstagram size={26} className="text-surface" />
                <span className="font-body text-[9px] tracking-widest uppercase text-surface/80 line-clamp-2">
                  {post.caption}
                </span>
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
