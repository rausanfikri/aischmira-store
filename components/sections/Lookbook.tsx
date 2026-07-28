"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Lookbook() {
  const lookbookItems = [
    { id: 1, title: "The Silk Editorial", span: "col-span-12 md:col-span-8", aspect: "aspect-[16/10]" },
    { id: 2, title: "Architectural Tailoring", span: "col-span-12 md:col-span-4", aspect: "aspect-[3/4]" },
    { id: 3, title: "Fluid Grace", span: "col-span-12 md:col-span-4", aspect: "aspect-[3/4]" },
    { id: 4, title: "Indonesian Heritage Modernized", span: "col-span-12 md:col-span-8", aspect: "aspect-[16/10]" },
  ];

  return (
    <section className="bg-background py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block mb-3">
            Editorial Lookbook
          </span>
          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text">
            Visual Journal
          </h2>
        </div>

        {/* Asymmetric Magazine Masonry Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {lookbookItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`${item.span} relative group overflow-hidden bg-surface rounded-sm border border-border/30`}
            >
              <div className={`relative w-full ${item.aspect}`}>
                <Image
                  src="/images/products/placeholder.png"
                  alt={`Lookbook Editorial — ${item.title}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-surface">
                  <span className="font-heading italic text-2xl md:text-3xl font-light drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
