"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/domain/product";
import { useShopStore } from "@/store/useShopStore";
import { Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

interface FeaturedProductsProps {
  products?: Product[];
}

export function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const handleWhatsAppOrder = (productName: string, price: number) => {
    const message = `Hello AISCHMIRA Concierge, I would like to order the ${productName} (${formatter.format(price)}). Could you assist me with available sizes and delivery?`;
    const url = getWhatsAppInquiryUrl(message);
    window.open(url, "_blank");
  };

  return (
    <section className="bg-surface py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-3">
              Curated Highlights
            </span>
            <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text">
              Featured Flagship Pieces
            </h2>
          </div>
          <Link
            href="/collections"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-text hover:text-primary transition-colors border-b border-text hover:border-primary pb-1 font-medium self-start md:self-auto"
          >
            Explore Full Library &rarr;
          </Link>
        </div>

        {/* 4-Column Luxury Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
          {products.map((product, idx) => {
            const isWishlisted = wishlist.some((w) => w.productId === product.sku);
            return (
              <motion.div
                key={product.sku}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group flex flex-col relative"
              >
                {/* Image Box */}
                <div className="relative aspect-[3/4] w-full bg-background overflow-hidden rounded-sm mb-4 border border-border/30">
                  <Link href={`/products/${product.slug}`} className="block inset-0 absolute">
                    <Image
                      src={product.images[0] || "/images/products/placeholder.png"}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </Link>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.sku)}
                    className="absolute top-3 right-3 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full text-text hover:text-primary transition-colors shadow-sm"
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      size={16}
                      strokeWidth={1.5}
                      className={cn("transition-colors", isWishlisted && "fill-primary text-primary")}
                    />
                  </button>
                </div>

                {/* Information */}
                <div className="flex flex-col space-y-2 flex-1">
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/50">
                    {product.categoryId}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-heading italic text-lg text-text group-hover:text-primary transition-colors line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <p className="font-body text-xs font-light text-text/80">
                    {formatter.format(product.price)}
                  </p>

                  {/* WhatsApp Quick CTA */}
                  <button
                    onClick={() => handleWhatsAppOrder(product.name, product.price)}
                    className="mt-3 w-full bg-whatsapp text-white font-body text-[9px] tracking-[0.2em] uppercase py-2.5 rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 font-medium"
                  >
                    <MessageCircle size={13} /> Order via WhatsApp
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
