"use client";

import { useShopStore } from "@/store/useShopStore";
import { productsData } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

export default function WishlistPage() {
  const wishlist = useShopStore((state) => state.wishlist);
  const wishlistedProducts = wishlist
    .map((w) => productsData.find((p) => p.id === w.productId))
    .filter(Boolean) as typeof productsData;

  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text/50">
            <li>
              <Link href="/" className="hover:text-text transition-colors">Home</Link>
            </li>
            <li>
              <ChevronRight size={12} className="text-text/30" />
            </li>
            <li>
              <Link href="/account/dashboard" className="hover:text-text transition-colors">Account</Link>
            </li>
            <li>
              <ChevronRight size={12} className="text-text/30" />
            </li>
            <li className="text-text font-medium">Wishlist</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-2">AISCHMIRA Privé</span>
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-4">Saved Wishlist</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/60 leading-relaxed">
            {wishlistedProducts.length} {wishlistedProducts.length === 1 ? "Curated Piece" : "Curated Pieces"} saved to your account.
          </p>
        </div>

        {wishlistedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-16 py-12">
            <div className="text-center py-20 bg-surface/40 border border-border/30 rounded-sm max-w-2xl mx-auto space-y-6">
              <Heart size={36} strokeWidth={1} className="mx-auto text-text/40" />
              <p className="font-heading italic text-3xl text-text">Your wishlist is empty</p>
              <p className="font-body text-xs tracking-widest uppercase text-text/50 max-w-md mx-auto leading-relaxed">
                Save pieces to your private wishlist by clicking the heart icon while browsing our collections.
              </p>
              <Link
                href="/collections"
                className="inline-block bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary transition-colors rounded-sm font-medium"
              >
                Discover Collections &rarr;
              </Link>
            </div>

            {/* Recommendations */}
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-2">Inspired Selection</span>
                <h3 className="font-heading italic text-3xl text-text">Explore Our Favorites</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
                {productsData.slice(0, 4).map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
