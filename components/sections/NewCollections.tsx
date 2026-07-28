"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { collectionsData } from "@/data/collections";

export function NewCollections() {
  const targetSlugs = ["femme", "her", "she"];
  const newCollections = targetSlugs
    .map((slug) => collectionsData.find((c) => c.slug === slug))
    .filter(Boolean) as typeof collectionsData;

  return (
    <section className="bg-background py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-3">
            Flagship Releases
          </span>
          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-4">
            New Collections
          </h2>
          <p className="font-body text-xs tracking-editorial uppercase text-text/60 font-light leading-relaxed">
            Curated capsule edits designed for modern silhouettes and timeless elegance.
          </p>
        </div>

        {/* 3-Column Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {newCollections.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group flex flex-col bg-surface border border-border/40 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              {/* Card Image */}
              <Link
                href={`/collections/${collection.slug}`}
                className="relative w-full aspect-[3/4] overflow-hidden bg-surface block"
              >
                <Image
                  src={collection.coverImage}
                  alt={collection.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-surface">
                  <span className="font-body text-[9px] tracking-[0.3em] uppercase text-surface/70 block mb-1">
                    Capsule Edit
                  </span>
                  <h3 className="font-heading italic text-3xl md:text-4xl text-surface">
                    {collection.name}
                  </h3>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                <p className="font-body text-xs text-text/70 leading-relaxed font-light line-clamp-3">
                  {collection.description}
                </p>

                <Link
                  href={`/collections/${collection.slug}`}
                  className="w-full bg-text text-surface hover:bg-primary transition-colors font-body text-[10px] tracking-[0.2em] uppercase py-3.5 rounded-sm font-medium text-center block"
                >
                  Shop Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
