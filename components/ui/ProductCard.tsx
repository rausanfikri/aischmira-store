"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useShopStore } from "@/store/useShopStore";
import { cn } from "@/lib/utils";
import type { Product as DomainProduct } from "@/domain/product/entity";
import type { Product as LegacyProduct } from "@/types";

// Support both domain entity and legacy type boundaries cleanly
type CombinedProduct = (DomainProduct | LegacyProduct) & {
  id?: string;
  sku?: string;
  price?: number;
  basePrice?: number;
  compareAtPrice?: number;
};

interface ProductCardProps {
  product: CombinedProduct;
  showWishlist?: boolean;
  showCategoryTag?: boolean;
  className?: string;
}

export function ProductCard({
  product,
  showWishlist = true,
  showCategoryTag = true,
  className,
}: ProductCardProps) {
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);

  const productId = product.sku || product.id || "";
  const price = product.price ?? product.basePrice ?? 0;
  const compareAtPrice = product.compareAtPrice;
  const categoryLabel = product.categoryId || "Capsule Edit";
  const primaryImage = product.images?.[0] || "/images/products/placeholder.png";
  const secondaryImage = product.images?.[1];

  const isWishlisted = wishlist.some((w) => w.productId === productId);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (productId) {
      toggleWishlist(productId);
    }
  };

  return (
    <article className={cn("group flex flex-col relative", className)}>
      {/* Image Container with Aspect Ratio [3/4] */}
      <div className="relative aspect-[3/4] w-full bg-background overflow-hidden rounded-xs border border-border/30 mb-3.5">
        <Link
          href={`/products/${product.slug}`}
          className="block w-full h-full relative"
          aria-label={`View ${product.name} details`}
        >
          {/* Primary Image */}
          <Image
            src={primaryImage}
            alt={`AISCHMIRA ${product.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={cn(
              "object-cover object-center transition-all duration-700 ease-out",
              secondaryImage
                ? "group-hover:opacity-0 group-hover:scale-[1.03]"
                : "group-hover:scale-[1.04]"
            )}
            quality={90}
          />

          {/* Secondary Hover Image (if available) */}
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`AISCHMIRA ${product.name} Detail`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              quality={90}
            />
          )}

          {/* Soft Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Status / Availability Badge */}
        {product.isFeatured && (
          <span className="absolute top-3 left-3 z-10 font-body text-[7px] tracking-[0.25em] uppercase bg-surface/90 backdrop-blur-md text-text px-2 py-0.5 rounded-xs font-semibold border border-border/30">
            Flagship
          </span>
        )}

        {/* Wishlist Heart Action Overlay */}
        {showWishlist && (
          <button
            onClick={handleWishlistClick}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-surface/85 backdrop-blur-sm border border-border/40 flex items-center justify-center text-text/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          >
            <Heart
              size={15}
              strokeWidth={1.5}
              className={cn("transition-colors", isWishlisted && "fill-primary text-primary")}
            />
          </button>
        )}

        {/* Hover Quick Action Label */}
        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex justify-center pointer-events-none">
          <span className="bg-surface/95 backdrop-blur-md text-text font-body text-[9px] tracking-[0.2em] uppercase px-4 py-2 rounded-xs border border-border/40 shadow-xs font-medium">
            Explore Piece &rarr;
          </span>
        </div>
      </div>

      {/* Info Header & Pricing */}
      <div className="flex flex-col space-y-1 text-left flex-1 justify-between">
        <div className="space-y-1">
          {showCategoryTag && (
            <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text-muted font-medium block">
              {categoryLabel}
            </span>
          )}
          <h3 className="font-heading italic text-lg sm:text-xl text-text font-light leading-snug group-hover:text-primary transition-colors line-clamp-1">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <span className="font-body text-xs sm:text-sm tracking-wider text-text font-light">
            {formatter.format(price)}
          </span>
          {compareAtPrice && compareAtPrice > price && (
            <span className="font-body text-[11px] text-text-muted line-through font-light">
              {formatter.format(compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
