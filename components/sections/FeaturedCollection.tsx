"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { collectionsData } from "@/data/collections";

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-widest uppercase mb-5"
      >
        {title}
      </motion.h2>
      <div className="section-divider mb-5" />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-base text-[var(--color-text-secondary)] max-w-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function FeaturedCollection() {
  return (
    <section
      id="featured-collections"
      className="section-padding bg-section-light-blue"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Collections"
          subtitle="Curated for the modern woman — discover our signature lines."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {collectionsData.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              <Link
                href="#"
                className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-soft mb-6 block"
                aria-label={`Lihat koleksi ${collection.name}`}
              >
                <Image
                  src={collection.coverImage}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
              </Link>

              <h3 className="font-heading text-2xl tracking-[0.2em] text-text mb-2 uppercase">
                {collection.name}
              </h3>
              <p className="font-body text-sm text-[var(--color-text-secondary)] mb-4 px-2 line-clamp-2">
                {collection.description}
              </p>
              <p className="font-body text-xs text-[var(--color-primary)] tracking-wider uppercase mb-4">
                12 Products
              </p>
              <Link
                href="#"
                className="btn-ghost text-text hover:text-[var(--color-primary)]"
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
