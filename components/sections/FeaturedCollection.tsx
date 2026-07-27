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
    <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-[0.1em] uppercase mb-6"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="section-divider origin-center mb-6"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-body text-[13px] sm:text-sm tracking-wide text-text-secondary max-w-lg font-light"
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
      className="section-padding bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Collections"
          subtitle="Curated for the modern woman — discover our signature lines."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {collectionsData.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group flex flex-col items-center text-center"
            >
              <Link
                href="#"
                className="relative w-full aspect-[3/4] overflow-hidden mb-8 block"
                aria-label={`View ${collection.name} collection`}
              >
                <Image
                  src={collection.coverImage}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </Link>

              <h3 className="font-heading text-2xl tracking-[0.2em] text-text mb-3 uppercase">
                {collection.name}
              </h3>
              <p className="font-body text-[13px] text-text-secondary mb-6 px-4 line-clamp-2 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {collection.description}
              </p>
              <Link
                href="#"
                className="btn-ghost text-[10px] tracking-[0.2em]"
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
