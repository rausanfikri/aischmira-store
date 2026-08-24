"use client";

import * as React from "react";
import { Product } from "@/domain/product";
import { useShopStore } from "@/store/useShopStore";
import { Heart, Ruler, Share2, MessageCircle, Check, ChevronDown, Gem, Shirt, Sparkles, Truck, Gift } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { SizeGuideModal } from "@/components/ui/SizeGuideModal";
import { getDirectProductWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";

interface ProductInfoProps {
  product: Product;
}

/* Staggered reveal animation for product info sections */
const revealVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function ProductInfo({ product }: ProductInfoProps) {
  const addToCart = useShopStore((state) => state.addToCart);
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const wishlist = useShopStore((state) => state.wishlist);

  const productId = product.sku || (product as unknown as { id?: string }).id || "product_id";
  const isWishlisted = wishlist.some((w) => w.productId === productId);

  // Available unique colors and sizes from DASHBOARD variants
  const colors = React.useMemo(() => {
    const set = new Set<string>();
    product.variants.forEach((v) => { if (v.color) set.add(v.color); });
    return Array.from(set);
  }, [product.variants]);

  const [selectedColor, setSelectedColor] = React.useState<string>(
    product.variants[0]?.color || colors[0] || "Standard"
  );

  // Filter available sizes for the currently selected color
  const availableSizesForColor = React.useMemo(() => {
    const list: string[] = [];
    product.variants
      .filter((v) => v.color.toLowerCase() === selectedColor.toLowerCase())
      .forEach((v) => {
        if (!list.includes(v.size)) list.push(v.size);
      });
    return list.length > 0 ? list : ["-"];
  }, [product.variants, selectedColor]);

  const [selectedSize, setSelectedSize] = React.useState<string>(
    product.variants[0]?.size || availableSizesForColor[0] || "-"
  );

  const effectiveSize = availableSizesForColor.includes(selectedSize)
    ? selectedSize
    : availableSizesForColor[0] || "-";

  // Resolve exact variant matching selectedColor + effectiveSize
  const selectedVariant = React.useMemo(() => {
    return (
      product.variants.find(
        (v) =>
          v.color.toLowerCase() === selectedColor.toLowerCase() &&
          v.size.toLowerCase() === effectiveSize.toLowerCase()
      ) ||
      product.variants.find(
        (v) => v.color.toLowerCase() === selectedColor.toLowerCase()
      ) ||
      product.variants[0]
    );
  }, [product.variants, selectedColor, effectiveSize]);

  const [quantity, setQuantity] = React.useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = React.useState(false);
  const [showAddedToast, setShowAddedToast] = React.useState(false);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: product.currency || "IDR",
    minimumFractionDigits: 0,
  });

  const currentPrice = selectedVariant?.price || product.price || product.basePrice || 0;
  const originalDefaultPrice = selectedVariant?.compareAtPrice || product.compareAtPrice;
  const skuCode = selectedVariant?.skuCode || selectedVariant?.sku || product.sku;

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addToCart({
      productId,
      variantId: selectedVariant.id || selectedVariant.sku,
      quantity,
    });
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 3000);
  };

  const handleWhatsAppCheckout = () => {
    const url = getDirectProductWhatsAppUrl({
      productName: product.name,
      collection: product.collection,
      color: selectedColor,
      size: effectiveSize,
      skuCode: skuCode || product.name,
      quantity,
      price: currentPrice,
    });
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
    }
  };

  return (
    <div className="flex flex-col h-full lg:sticky lg:top-32 space-y-6">
      {/* Category & Share */}
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        className="flex items-center justify-between"
      >
        <span className="font-body text-[9px] tracking-[0.25em] uppercase text-text/50">
          {product.category || product.categoryId} &bull; {product.collection || "AISCHMIRA"}
        </span>
        <button
          onClick={handleShare}
          className="text-text/50 hover:text-text transition-colors p-1"
          aria-label="Share product"
        >
          <Share2 size={16} strokeWidth={1.5} />
        </button>
      </motion.div>

      {/* Title, SKU & Price */}
      <motion.div variants={revealVariants} initial="hidden" animate="visible" custom={1} className="space-y-2">
        <h1 className="font-heading italic text-3xl md:text-5xl text-text font-light">{product.name}</h1>
        
        {skuCode && (
          <p className="font-body text-[10px] tracking-widest uppercase text-text/40">
            SKU: {skuCode}
          </p>
        )}

        <div className="flex items-center gap-3.5 flex-wrap pt-1">
          {originalDefaultPrice && originalDefaultPrice > currentPrice && (
            <span className="font-body text-base text-text-muted line-through font-light">
              {formatter.format(originalDefaultPrice)}
            </span>
          )}
          <p className="font-body text-xl md:text-2xl font-medium text-text">
            {formatter.format(currentPrice)}
          </p>
        </div>
      </motion.div>

      {/* Short Story snippet */}
      {product.story && (
        <motion.p
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-body text-xs leading-relaxed text-text/65 italic border-l-2 border-primary/30 pl-4 py-1"
        >
          &ldquo;{product.story}&rdquo;
        </motion.p>
      )}

      {/* Selectors */}
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="visible"
        custom={3}
        className="space-y-6 pt-2"
      >
        {/* Color Selection */}
        {colors.length > 0 && (
          <div className="space-y-2.5">
            <span className="font-body text-[10px] tracking-widest uppercase text-text/60 block">
              Color: <span className="text-text font-medium">{selectedColor}</span>
            </span>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => {
                const isSelected = selectedColor.toLowerCase() === color.toLowerCase();
                return (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "font-body text-[10px] tracking-widest uppercase px-3.5 py-2 border transition-all duration-300 rounded-xs font-medium cursor-pointer",
                      isSelected
                        ? "border-text text-text bg-surface shadow-xs"
                        : "border-border/60 text-text/60 hover:border-border hover:text-text"
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
        {availableSizesForColor.length > 0 && availableSizesForColor[0] !== "-" && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-body text-[10px] tracking-widest uppercase text-text/60">
                Size: <span className="text-text font-medium">{effectiveSize}</span>
              </span>
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(true)}
                className="flex items-center gap-1.5 text-text/60 hover:text-primary transition-colors font-body text-[10px] tracking-widest uppercase cursor-pointer"
              >
                <Ruler size={14} /> Size Guide
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {availableSizesForColor.map((size) => {
                const isSelected = effectiveSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-12 h-11 px-3 flex items-center justify-center font-body text-[10px] tracking-widest uppercase border transition-all duration-300 rounded-xs font-medium cursor-pointer",
                      isSelected
                        ? "border-text text-text bg-surface shadow-xs"
                        : "border-border/60 text-text/70 hover:border-border hover:text-text"
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
          <div className="inline-flex items-center border border-border/60 rounded-xs bg-surface">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3.5 py-2 text-text/70 hover:text-text transition-colors font-body text-sm cursor-pointer"
              aria-label="Decrease quantity"
            >
              &minus;
            </button>
            <span className="px-5 font-body text-xs font-medium text-text tabular-nums">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="px-3.5 py-2 text-text/70 hover:text-text transition-colors font-body text-sm cursor-pointer"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="visible"
        custom={4}
        className="flex flex-col sm:flex-row gap-3 pt-2"
      >
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors rounded-xs font-medium shadow-xs text-center cursor-pointer"
        >
          Add to Bag
        </button>

        <button
          type="button"
          onClick={handleWhatsAppCheckout}
          className="flex-1 bg-[#25D366] text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:opacity-90 transition-opacity rounded-xs font-medium flex items-center justify-center gap-2 text-center cursor-pointer"
        >
          <MessageCircle size={15} /> Checkout via WhatsApp
        </button>

        <button
          type="button"
          onClick={() => toggleWishlist(productId)}
          className="w-full sm:w-14 py-4 sm:py-0 flex items-center justify-center border border-border/70 hover:border-primary hover:text-primary transition-colors rounded-xs cursor-pointer"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} strokeWidth={1.5} className={cn("transition-colors", isWishlisted && "fill-primary text-primary")} />
        </button>
      </motion.div>

      {/* Added to Bag Toast Banner */}
      {showAddedToast && (
        <div className="p-4 bg-emerald-900 text-white rounded-xs font-body text-xs flex items-center justify-between animate-fadeIn">
          <span className="flex items-center gap-2">
            <Check size={16} /> Added to your shopping bag.
          </span>
          <a href="/bag" className="underline uppercase text-[10px] tracking-widest hover:text-primary">
            View Bag &rarr;
          </a>
        </div>
      )}

      {/* Loyalty Preview Card */}
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="visible"
        custom={5}
        className="p-5 bg-surface border border-border/40 rounded-sm space-y-2.5"
      >
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-primary" />
          <span className="font-body text-[9px] tracking-[0.25em] uppercase text-primary font-bold">
            AISCHMIRA Loyalty
          </span>
        </div>
        <p className="font-body text-xs text-text/70 leading-relaxed font-light">
          Earn loyalty points with every purchase. Member benefits and exclusive rewards coming soon.
        </p>
      </motion.div>

      {/* Accordion Details */}
      <Accordion.Root type="multiple" defaultValue={["desc"]} className="border-t border-border/40 pt-2">

        {/* Description & Craftsmanship */}
        <Accordion.Item value="desc" className="border-b border-border/40">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
              <span className="flex items-center gap-2">
                <Shirt size={14} className="text-text/40" /> Description & Craftsmanship
              </span>
              <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-5">
              {product.description}
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* Material & Fabric */}
        {product.material && (
          <Accordion.Item value="material" className="border-b border-border/40">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
                <span className="flex items-center gap-2">
                  <Gem size={14} className="text-text/40" /> Material & Fabric
                </span>
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-5">
                {product.material}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        )}

        {/* Care Guide */}
        {product.careInstruction && (
          <Accordion.Item value="care" className="border-b border-border/40">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
                <span className="flex items-center gap-2">
                  <Gift size={14} className="text-text/40" /> Care Guide
                </span>
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-5">
                {product.careInstruction}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        )}

        {/* Delivery & Packaging */}
        {product.shippingInfo && (
          <Accordion.Item value="shipping" className="border-b border-border/40">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-body text-[10px] tracking-widest uppercase text-text/80 hover:text-primary transition-colors group">
                <span className="flex items-center gap-2">
                  <Truck size={14} className="text-text/40" /> Delivery & Packaging
                </span>
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              <div className="font-body text-sm font-light leading-relaxed text-text/70 pb-5 space-y-3">
                <p>{product.shippingInfo}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-background border border-border/30 rounded-sm text-center space-y-1">
                    <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Shipping</span>
                    <span className="font-body text-xs text-text font-medium">Complimentary Express</span>
                  </div>
                  <div className="p-3 bg-background border border-border/30 rounded-sm text-center space-y-1">
                    <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Estimated</span>
                    <span className="font-body text-xs text-text font-medium">3 – 5 Business Days</span>
                  </div>
                  <div className="p-3 bg-background border border-border/30 rounded-sm text-center space-y-1">
                    <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Packaging</span>
                    <span className="font-body text-xs text-text font-medium">Signature Gift Box</span>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        )}
      </Accordion.Root>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
