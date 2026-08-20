"use client";

import Link from "next/link";
import { Product } from "@/domain/product";
import { ProductCard } from "@/components/ui/ProductCard";

interface ProductShowcaseProps {
  products: Product[];
}

export function ProductShowcase({ products }: ProductShowcaseProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background border-b border-border/30" aria-label="Curated Pieces">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block mb-2">
              New Arrivals
            </span>
            <h2 className="font-heading italic text-3xl md:text-5xl text-text font-light">
              Curated Silhouettes
            </h2>
          </div>
          <Link
            href="/products"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-primary hover:underline flex items-center gap-1 font-medium"
          >
            View Full Catalog &rarr;
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
