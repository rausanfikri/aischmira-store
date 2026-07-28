"use client";

import * as React from "react";
import { Product } from "@/types";
import { useShopStore } from "@/store/useShopStore";
import { Heart, Ruler, Share2, MessageCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { SizeGuideModal } from "@/components/ui/SizeGuideModal";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const addToCart = useShopStore((state) => state.addToCart);
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);
  const isWishlisted = wishlist.some((w) => w.productId === product.id);

  const [selectedVariantId, setSelectedVariantId] = React.useState(product.variants[0]?.id || "");
  const [quantity, setQuantity] = React.useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = React.useState(false);
  const [showAddedToast, setShowAddedToast] = React.useState(false);

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  // Get unique sizes and colors
  const sizes = Array.from(new Set(product.variants.map((v) => v.size)));
  const colors = Array.from(new Set(product.variants.map((v) => v.color)));

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addToCart({
      productId: product.id,
      variantId: selectedVariant.id,
      quantity,
    });
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 3000);
  };

  const handleWhatsAppInquiry = () => {
    const selectedColorName = selectedVariant?.color || "Standard";
    const selectedSizeName = selectedVariant?.size || "Standard";
    
    const message = `Hello AISCHMIRA,\n\nI'm interested in:\nProduct: ${product.name}\nSize: ${selectedSizeName}\nColor: ${selectedColorName}\nPrice: ${formatter.format(selectedVariant?.price || product.basePrice)}\n\nCould you please assist me?`;
    const url = getWhatsAppInquiryUrl(message);
    window.open(url, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  return (
    <div className="flex flex-col h-full lg:sticky lg:top-32 space-y-6">
      
      {/* Category & Share */}
      <div className="flex items-center justify-between">
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50">
          {product.categoryId} &bull; AISCHMIRA FLAGSHIP
        </span>
        <button
          onClick={handleShare}
          className="text-text/60 hover:text-text transition-colors p-1"
          aria-label="Share product"
        >
          <Share2 size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Title & Price */}
      <div>
        <h1 className="font-heading italic text-3xl md:text-5xl text-text mb-3">{product.name}</h1>
        <div className="flex items-center gap-4">
          <p className="font-body text-xl md:text-2xl font-light text-text/90">
            {formatter.format(selectedVariant?.price || product.basePrice)}
          </p>
          {selectedVariant?.stock && selectedVariant.stock < 5 ? (
            <span className="font-body text-[9px] tracking-widest uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full">
              Limited &bull; Only {selectedVariant.stock} left
            </span>
          ) : (
            <span className="font-body text-[9px] tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              In Stock &bull; Concierge Ready
            </span>
          )}
        </div>
      </div>

      {/* Short Story snippet */}
      {product.story && (
        <p className="font-body text-xs leading-relaxed text-text/70 italic border-l-2 border-primary/40 pl-4 py-1">
          &ldquo;{product.story}&rdquo;
        </p>
      )}

      {/* Selectors */}
      <div className="space-y-6 pt-2">
        {/* Color Selection */}
        {colors.length > 0 && colors[0] !== "OS" && (
          <div className="space-y-2.5">
            <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block">
              Color: <span className="text-text font-medium">{selectedVariant?.color}</span>
            </span>
            <div className="flex gap-2.5 flex-wrap">
              {colors.map((color) => {
                const variant = product.variants.find((v) => v.color === color);
                const isSelected = selectedVariant?.color === color;
                return (
                  <button
                    key={color}
                    onClick={() => variant && setSelectedVariantId(variant.id)}
                    className={cn(
                      "font-body text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 rounded-sm font-medium",
                      isSelected
                        ? "border-text text-text bg-surface shadow-sm"
                        : "border-border/50 text-text/60 hover:border-border hover:text-text"
                    )}
                  >
                    {color}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Size Selection */}
        {sizes.length > 0 && sizes[0] !== "OS" && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-body text-[10px] tracking-widest uppercase text-text/60">
                Size: <span className="text-text font-medium">{selectedVariant?.size}</span>
              </span>
              <button
                onClick={() => setIsSizeGuideOpen(true)}
                className="flex items-center gap-1.5 text-text/60 hover:text-primary transition-colors font-body text-[10px] tracking-widest uppercase"
              >
                <Ruler size={14} /> Size Guide
              </button>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              {sizes.map((size) => {
                const variant = product.variants.find((v) => v.color === selectedVariant?.color && v.size === size);
                const isSelected = selectedVariant?.size === size;
                const isAvailable = variant && variant.stock > 0;
                return (
                  <button
                    key={size}
                    disabled={!isAvailable}
                    onClick={() => variant && setSelectedVariantId(variant.id)}
                    className={cn(
                      "w-12 h-12 flex items-center justify-center font-body text-[10px] tracking-widest uppercase border transition-all duration-300 rounded-sm font-medium",
                      !isAvailable
                        ? "opacity-30 cursor-not-allowed border-border/50 text-text relative after:content-[''] after:absolute after:w-[120%] after:h-[1px] after:bg-text after:rotate-45"
                        : isSelected
                        ? "border-text text-text bg-surface shadow-sm"
                        : "border-border/50 text-text/70 hover:border-border hover:text-text"
                    )}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Quantity Counter */}
        <div className="space-y-2.5">
          <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block">Quantity</span>
          <div className="inline-flex items-center border border-border/60 rounded-sm bg-surface">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3.5 py-2 text-text/70 hover:text-text transition-colors font-body text-sm"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-4 font-body text-xs font-medium text-text">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3.5 py-2 text-text/70 hover:text-text transition-colors font-body text-sm"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-sm font-medium shadow-sm text-center"
        >
          Add to Bag
        </button>
        
        <button
          onClick={handleWhatsAppInquiry}
          className="flex-1 bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:opacity-90 transition-opacity rounded-sm font-medium flex items-center justify-center gap-2 text-center"
        >
          <MessageCircle size={15} /> Order via WhatsApp
        </button>

        <button
          onClick={() => toggleWishlist(product.id)}
          className="w-full sm:w-14 py-4 sm:py-0 flex items-center justify-center border border-border/70 hover:border-primary hover:text-primary transition-colors rounded-sm"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={20} strokeWidth={1.5} className={cn("transition-colors", isWishlisted && "fill-primary text-primary")} />
        </button>
      </div>

      {/* Added to Bag Toast Banner */}
      {showAddedToast && (
        <div className="p-4 bg-emerald-900 text-white rounded-sm font-body text-xs flex items-center justify-between animate-fadeIn">
          <span className="flex items-center gap-2">
            <Check size={16} /> Added to your shopping bag.
          </span>
          <a href="/cart" className="underline uppercase text-[10px] tracking-widest hover:text-primary">
            View Bag &rarr;
          </a>
        </div>
      )}

      {/* Accordion Details */}
      <Accordion.Root type="multiple" defaultValue={["desc"]} className="border-t border-border/50 pt-2">
        <Accordion.Item value="desc" className="border-b border-border/50">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
              Description & Craftsmanship
              <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden">
            <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-5">
              {product.description}
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {product.material && (
          <Accordion.Item value="mat" className="border-b border-border/50">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
                Details & Care
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden">
              <div className="font-body text-sm font-light leading-relaxed text-text/70 pb-5 space-y-2">
                <p><span className="font-medium text-text">Composition:</span> {product.material}</p>
                <p><span className="font-medium text-text">Care:</span> {product.careInstruction}</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        )}

        {product.shippingInfo && (
          <Accordion.Item value="ship" className="border-b border-border/50">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
                Complimentary Shipping & Concierge Returns
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden">
              <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-5">
                {product.shippingInfo} All orders are hand-packaged in signature AISCHMIRA luxury boxes with personal inspection certificates.
              </p>
            </Accordion.Content>
          </Accordion.Item>
        )}
      </Accordion.Root>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
