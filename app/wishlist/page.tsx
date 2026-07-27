"use client";

import { useShopStore } from "@/store/useShopStore";
import { productsData } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";

export default function WishlistPage() {
  const wishlist = useShopStore((state) => state.wishlist);
  const wishlistedProducts = wishlist
    .map(w => productsData.find(p => p.id === w.productId))
    .filter(Boolean) as typeof productsData;

  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Wishlist</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50 leading-relaxed">
            Your curated selection of AISCHMIRA pieces.
          </p>
        </div>

        {wishlistedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-body text-xs tracking-widest uppercase text-text/50 mb-8">Your wishlist is currently empty.</p>
            <Link href="/collections" className="inline-block border-b border-text pb-1 font-body text-[10px] tracking-widest uppercase hover:text-primary transition-colors">
              Discover Collections
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
