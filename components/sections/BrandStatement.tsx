"use client";

import Link from "next/link";

export function BrandStatement() {
  return (
    <section className="py-24 md:py-36 bg-surface/40 text-center" aria-label="Brand Statement">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
        <span className="font-body text-[10px] tracking-[0.35em] uppercase text-text/50 block">
          AISCHMIRA PHILOSOPHY
        </span>

        <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl text-text font-light leading-snug">
          Crafted to comfort. Designed to stand out.
        </h2>

        <p className="font-body text-xs sm:text-sm text-text/70 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
          Every piece is designed with architectural precision, fluid drapes, and the finest natural textiles. An editorial dialogue between modern Indonesian craftsmanship and timeless luxury.
        </p>

        <div className="pt-4">
          <Link
            href="/about"
            className="inline-block border-b border-text/40 pb-1 font-body text-[10px] tracking-[0.2em] uppercase text-text hover:text-primary hover:border-primary transition-colors"
          >
            Read Our Heritage Story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
