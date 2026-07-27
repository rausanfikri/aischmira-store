"use client";

import * as React from "react";
import { Product } from "@/types";
import { useShopStore } from "@/store/useShopStore";
import { Heart, Ruler, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const addToCart = useShopStore((state) => state.addToCart);
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);
  const isWishlisted = wishlist.some((w) => w.productId === product.id);

  const [selectedVariantId, setSelectedVariantId] = React.useState(product.variants[0]?.id || "");
  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  // Get unique sizes and colors
  const sizes = Array.from(new Set(product.variants.map(v => v.size)));
  const colors = Array.from(new Set(product.variants.map(v => v.color)));

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addToCart({
      productId: product.id,
      variantId: selectedVariant.id,
      quantity: 1
    });
  };

  return (
    <div className="flex flex-col h-full sticky top-32">
      <div className="flex items-center justify-between mb-4">
        <span className="font-body text-[9px] tracking-widest uppercase text-text/50">{product.categoryId}</span>
        <button className="text-text hover:text-primary transition-colors"><Share2 size={18} strokeWidth={1.5} /></button>
      </div>

      <h1 className="font-heading italic text-3xl md:text-5xl text-text mb-4">{product.name}</h1>
      <p className="font-body text-xl md:text-2xl font-light text-text/80 mb-8">{formatter.format(selectedVariant?.price || product.basePrice)}</p>

      {/* Selectors */}
      <div className="flex flex-col gap-8 mb-12">
        {/* Colors */}
        {colors.length > 0 && colors[0] !== "OS" && (
          <div className="flex flex-col gap-3">
            <span className="font-body text-[10px] tracking-widest uppercase text-text/60">Color: {selectedVariant?.color}</span>
            <div className="flex gap-3">
              {colors.map(color => {
                const variant = product.variants.find(v => v.color === color);
                const isSelected = selectedVariant?.color === color;
                return (
                  <button 
                    key={color}
                    onClick={() => variant && setSelectedVariantId(variant.id)}
                    className={cn(
                      "font-body text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300",
                      isSelected ? "border-text text-text bg-surface shadow-sm" : "border-border/50 text-text/50 hover:border-border hover:text-text"
                    )}
                  >
                    {color}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Sizes */}
        {sizes.length > 0 && sizes[0] !== "OS" && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-body text-[10px] tracking-widest uppercase text-text/60">Size: {selectedVariant?.size}</span>
              <button className="flex items-center gap-1 text-text/50 hover:text-primary transition-colors font-body text-[10px] tracking-widest uppercase">
                <Ruler size={14} /> Size Guide
              </button>
            </div>
            <div className="flex gap-3 flex-wrap">
              {sizes.map(size => {
                const variant = product.variants.find(v => v.color === selectedVariant?.color && v.size === size);
                const isSelected = selectedVariant?.size === size;
                const isAvailable = variant && variant.stock > 0;
                return (
                  <button 
                    key={size}
                    disabled={!isAvailable}
                    onClick={() => variant && setSelectedVariantId(variant.id)}
                    className={cn(
                      "w-12 h-12 flex items-center justify-center font-body text-[10px] tracking-widest uppercase border transition-all duration-300",
                      !isAvailable ? "opacity-30 cursor-not-allowed border-border/50 text-text relative after:content-[''] after:absolute after:w-[120%] after:h-[1px] after:bg-text after:rotate-45" : 
                      isSelected ? "border-text text-text bg-surface shadow-sm" : "border-border/50 text-text/70 hover:border-border hover:text-text"
                    )}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-12">
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-sm"
        >
          Add to Bag
        </button>
        <button 
          onClick={() => toggleWishlist(product.id)}
          className="w-14 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors rounded-sm"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={20} strokeWidth={1.5} className={cn("transition-colors", isWishlisted && "fill-primary text-primary")} />
        </button>
      </div>

      {/* Details Accordion */}
      <Accordion.Root type="multiple" defaultValue={["desc"]} className="border-t border-border/50 pt-8">
        <Accordion.Item value="desc" className="border-b border-border/50">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-5 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
              Description
              <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn">
            <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-6">
              {product.description}
            </p>
          </Accordion.Content>
        </Accordion.Item>
        
        {product.material && (
          <Accordion.Item value="mat" className="border-b border-border/50">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between py-5 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
                Details & Care
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn">
              <div className="font-body text-sm font-light leading-relaxed text-text/70 pb-6 space-y-4">
                <p>{product.material}</p>
                <p>{product.careInstruction}</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        )}

        {product.shippingInfo && (
          <Accordion.Item value="ship" className="border-b border-border/50">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between py-5 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
                Shipping & Returns
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn">
              <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-6">
                {product.shippingInfo}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        )}
      </Accordion.Root>

    </div>
  );
}
