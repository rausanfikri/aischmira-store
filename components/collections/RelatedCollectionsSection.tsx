"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Collection } from "@/domain/collection";
import { ArrowUpRight } from "lucide-react";

interface RelatedCollectionsSectionProps {
  collections: Collection[];
}

export function RelatedCollectionsSection({ collections }: RelatedCollectionsSectionProps) {
  if (!collections || collections.length === 0) return null;

  // Filter 4 featured or classic collections for the curated edit strip
  const displayEdits = collections.slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border/40">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary font-bold block">
              Curated Edits & Stories
            </span>
            <h2 className="font-heading italic text-3xl sm:text-4xl text-text">
              Exploratory Capsules
            </h2>
          </div>
          <Link
            href="/collections"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-text/60 hover:text-primary transition-colors flex items-center gap-1 font-medium self-start md:self-auto"
          >
            <span>View Complete Directory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayEdits.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-surface border border-border/40 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
            >
              <Link href={`/collections/${item.slug}`} className="relative aspect-[3/4] w-full overflow-hidden block">
                <Image
                  src={item.coverImage || "/images/products/placeholder.png"}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-surface">
                  <span className="font-body text-[8px] tracking-[0.25em] uppercase text-surface/80 block mb-1">
                    {item.season || item.category || "Curated Capsule"}
                  </span>
                  <h3 className="font-heading italic text-2xl text-surface">
                    {item.name}
                  </h3>
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                <p className="font-body text-xs text-text/70 line-clamp-2 font-light">
                  {item.description}
                </p>
                <Link
                  href={`/collections/${item.slug}`}
                  className="font-body text-[9px] tracking-[0.2em] uppercase text-text font-medium hover:text-primary transition-colors block pt-1 border-t border-border/30"
                >
                  Explore Capsule &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
