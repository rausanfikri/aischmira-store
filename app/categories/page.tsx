import { Metadata } from "next";
import Link from "next/link";
import { categoriesData } from "@/data/categories";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Categories | AISCHMIRA Flagship",
  description: "Explore the 6 core categories of AISCHMIRA: Outerwear, Tops, Bottoms, Dress, Pyjamas, and Accessories.",
};

export default function CategoriesPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Curated Wardrobe Architecture
          </span>
          <h1 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-text font-light">
            Flagship Categories
          </h1>
          <p className="font-body text-xs sm:text-sm text-text/60 font-light leading-relaxed">
            Discover tailored silhouettes and luxury fabrics across our six core fashion categories.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {categoriesData.map((category, index) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group p-8 bg-surface/60 hover:bg-surface border border-border/40 hover:border-primary transition-all duration-300 rounded-sm flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-body text-[10px] tracking-widest text-text/40 font-mono">
                    0{index + 1}
                  </span>
                  <span className="font-body text-[9px] tracking-widest uppercase text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Explore <ArrowRight size={11} />
                  </span>
                </div>
                <h2 className="font-heading italic text-2xl sm:text-3xl text-text group-hover:text-primary transition-colors font-light">
                  {category.name}
                </h2>
                <p className="font-body text-xs text-text/60 font-light mt-3 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border/20 mt-6 flex items-center justify-between">
                <span className="font-body text-[9px] tracking-[0.2em] uppercase text-text/50">
                  Category
                </span>
                <span className="font-body text-[9px] tracking-widest uppercase text-text group-hover:text-primary transition-colors font-medium">
                  View Collection &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
