"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { collectionsData } from "@/data/collections";

export function FeaturedCollection() {
  return (
    <section id="featured-collections" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl text-text font-light tracking-widest uppercase mb-4"
          >
            Featured Collections
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-24 bg-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {collectionsData.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative flex flex-col items-center"
            >
              <Link href={`#`} className="relative w-full aspect-[3/4] overflow-hidden rounded-md shadow-soft mb-6 block">
                <Image
                  src={collection.coverImage}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </Link>
              <h3 className="font-heading text-2xl tracking-[0.2em] text-text mb-2 uppercase">{collection.name}</h3>
              <p className="font-body text-sm text-text/60 text-center mb-4 px-4 line-clamp-2">
                {collection.description}
              </p>
              <p className="font-body text-xs text-primary tracking-wider uppercase mb-4">
                12 Products
              </p>
              <Link
                href={`#`}
                className="font-body text-sm tracking-widest uppercase border-b border-text text-text pb-1 hover:text-primary hover:border-primary transition-colors"
              >
                Explore
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
