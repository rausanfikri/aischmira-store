"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lookbookImages } from "@/data/homepage";

export function Lookbook() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl text-text font-light tracking-widest uppercase mb-4"
          >
            Lookbook
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-24 bg-primary"
          />
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {lookbookImages.map((img, index) => {
            // Logic to create varying heights for a dynamic look
            let spanClass = "row-span-1";
            if (index === 0) spanClass = "row-span-2 md:col-span-2 lg:col-span-1 lg:row-span-2";
            if (index === 2) spanClass = "row-span-2";
            
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative w-full h-full overflow-hidden rounded-md group ${spanClass}`}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 flex justify-center">
            <Link
              href="/lookbook"
              className="px-8 py-4 bg-transparent border border-text text-text font-body text-sm tracking-widest uppercase hover:bg-text hover:text-white transition-colors duration-300"
            >
              View Full Lookbook
            </Link>
        </div>
      </div>
    </section>
  );
}
