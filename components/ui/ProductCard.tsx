"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Heart } from "lucide-react";
import { useShopStore } from "@/store/useShopStore";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);
  const isWishlisted = wishlist.some((w) => w.productId === product.id);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group flex flex-col gap-3.5">
      
      {/* Image Container with Aspect Ratio [3/4] */}
      <div className="relative aspect-[3/4] bg-surface overflow-hidden rounded-sm border border-border/30">
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-border/20 flex items-center justify-center font-heading italic text-text/40">
            AISCHMIRA
          </div>
        )}

        {/* Wishlist Heart Action Overlay */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm border border-border/40 flex items-center justify-center text-text/60 hover:text-primary transition-colors focus:outline-none"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={16}
            strokeWidth={1.5}
            className={cn("transition-colors", isWishlisted && "fill-primary text-primary")}
          />
        </button>
        
        {/* Quick View Details Button Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3.5 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex justify-center">
          <span className="bg-surface/90 backdrop-blur-md text-text font-body text-[9px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-sm border border-border/40 shadow-md whitespace-nowrap font-medium">
            Explore Product &rarr;
          </span>
        </div>
      </div>

      {/* Info Header & Price */}
      <div className="flex flex-col gap-1 text-left">
        <span className="font-body text-[9px] tracking-[0.2em] uppercase text-text/40 font-medium">
          {product.categoryId}
        </span>
        <h3 className="font-heading text-lg md:text-xl text-text group-hover:text-primary transition-colors line-clamp-1 font-light">
          {product.name}
        </h3>
        <p className="font-body text-xs tracking-wider text-text/75 font-normal">
          {formatter.format(product.basePrice)}
        </p>
      </div>

    </Link>
  );
}
