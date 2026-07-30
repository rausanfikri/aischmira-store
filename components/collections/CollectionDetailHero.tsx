"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Collection } from "@/domain/collection";
import { ChevronRight, Sparkles, Layers } from "lucide-react";

interface CollectionDetailHeroProps {
  collection: Collection;
  productCount: number;
}

export function CollectionDetailHero({ collection, productCount }: CollectionDetailHeroProps) {
  if (!collection) return null;

  return (
    <header className="relative w-full overflow-hidden bg-text text-surface pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background Cover Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={collection.heroImage || collection.coverImage || "/images/products/placeholder.png"}
          alt={collection.name}
          fill
          className="object-cover object-center scale-[1.03] opacity-40"
          priority
          quality={95}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/70 to-black/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Breadcrumbs Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="flex justify-center"
          >
            <ol className="flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-surface/70">
              <li>
                <Link href="/" className="hover:text-surface transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={10} className="text-surface/40" />
              </li>
              <li>
                <Link href="/collections" className="hover:text-surface transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <ChevronRight size={10} className="text-surface/40" />
              </li>
              <li className="text-surface font-medium">{collection.name}</li>
            </ol>
          </motion.nav>

          {/* Eyebrow & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-surface/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-surface/20">
              {collection.season || collection.category || "Capsule Edit"}
            </span>
            {collection.campaignBadge && (
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary bg-black/80 backdrop-blur-md border border-primary/40 px-3 py-1.5 rounded-sm font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-primary" />
                {collection.campaignBadge}
              </span>
            )}
          </motion.div>

          {/* Collection Name Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-surface tracking-wide drop-shadow-xl font-light"
          >
            {collection.name}
          </motion.h1>

          {/* Subtitle & Editorial Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-3 max-w-2xl mx-auto"
          >
            {collection.subtitle && (
              <h2 className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-primary font-medium">
                {collection.subtitle}
              </h2>
            )}
            <p className="font-body text-xs md:text-sm lg:text-base tracking-editorial uppercase text-surface/90 leading-relaxed font-light drop-shadow-md">
              {collection.description}
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-6 flex flex-wrap justify-center items-center gap-6 sm:gap-12 font-body text-[10px] tracking-[0.25em] uppercase text-surface/70"
          >
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span>{productCount} {productCount === 1 ? "Curated Piece" : "Curated Pieces"}</span>
            </div>
            <div className="hidden sm:block text-surface/30">&bull;</div>
            <div>
              <span className="text-surface font-medium">Atelier Edition</span>
            </div>
            <div className="hidden sm:block text-surface/30">&bull;</div>
            <div>
              <span className="text-surface font-medium">Pure Mulberry Silk</span>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}
