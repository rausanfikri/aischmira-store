"use client";

import Link from "next/link";
import { categoriesData } from "@/data/categories";
import { ArrowUpRight } from "lucide-react";

export function CategoriesSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/30" aria-label="Shop by Category">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block mb-2">
              Curated Wardrobe
            </span>
            <h2 className="font-heading italic text-3xl md:text-5xl text-text font-light">
              Explore by Category
            </h2>
          </div>
          <Link
            href="/categories"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-primary hover:underline flex items-center gap-1 font-medium"
          >
            View All Categories &rarr;
          </Link>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group p-5 md:p-6 bg-surface/50 hover:bg-surface border border-border/40 hover:border-primary transition-all duration-300 rounded-sm flex flex-col justify-between min-h-[140px] md:min-h-[160px]"
            >
              <div className="flex justify-between items-start">
                <span className="font-heading italic text-xl md:text-2xl text-text group-hover:text-primary transition-colors font-light">
                  {cat.name}
                </span>
                <ArrowUpRight size={16} className="text-text/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="font-body text-[10px] text-text/50 font-light line-clamp-2 leading-relaxed mt-4">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
