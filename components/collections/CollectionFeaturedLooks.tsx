"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Collection } from "@/domain/collection";
import { Product } from "@/domain/product";

interface CollectionFeaturedLooksProps {
  collection: Collection;
  products: Product[];
}

export function CollectionFeaturedLooks({ collection, products }: CollectionFeaturedLooksProps) {
  if (!collection || !products || products.length === 0) return null;

  // Take up to 3 featured products to display as editorial key looks
  const keyLooks = products.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-background border-b border-border/40 overflow-hidden">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
            Featured Editorial Looks
          </span>
          <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl text-text">
            Key Silhouettes from {collection.name}
          </h2>
          <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed font-light">
            Sculptural tailoring and fluid silk drapes captured in high-fashion editorial styling.
          </p>
        </div>

        {/* Lookbook Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {keyLooks.map((product, idx) => {
            const coverImage = product.images?.[0] || collection.coverImage || "/images/products/placeholder.png";
            return (
              <motion.div
                key={product.sku}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`group relative flex flex-col rounded-sm overflow-hidden bg-surface border border-border/40 shadow-sm ${
                  idx === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                {/* Look Imagery */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-background">
                  <Image
                    src={coverImage}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-[8px] tracking-[0.25em] uppercase text-surface/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-sm border border-surface/20">
                      Look 0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-surface space-y-1">
                    <span className="font-body text-[8px] tracking-[0.2em] uppercase text-primary font-bold">
                      {product.material || "Mulberry Silk"}
                    </span>
                    <h3 className="font-heading italic text-2xl text-surface">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="font-body text-xs text-text/70 line-clamp-2 leading-relaxed font-light">
                    {product.story || product.description}
                  </p>
                  <div className="pt-3 border-t border-border/30 flex items-center justify-between font-body text-[10px] tracking-widest uppercase">
                    <span className="text-text/50 font-medium">Flagship Piece</span>
                    <span className="text-text font-bold">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: product.currency || "IDR", maximumFractionDigits: 0 }).format(product.price)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
