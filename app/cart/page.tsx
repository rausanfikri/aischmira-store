"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "@/store/useShopStore";
import { productsData } from "@/data/products";
import { Minus, Plus, X, ShieldCheck, Gift, ArrowRight } from "lucide-react";
import { getWhatsAppCheckoutUrl } from "@/lib/whatsapp";
import { ProductCard } from "@/components/ui/ProductCard";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useShopStore();
  const [promoCode, setPromoCode] = React.useState("");
  const [isGiftWrapped, setIsGiftWrapped] = React.useState(false);
  const [giftNote, setGiftNote] = React.useState("");

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  const cartItemsWithDetails = cart
    .map((item) => {
      const product = productsData.find((p) => p.id === item.productId);
      const variant = product?.variants.find((v) => v.id === item.variantId);
      return { ...item, product, variant };
    })
    .filter((item) => item.product && item.variant);

  const subtotal = cartItemsWithDetails.reduce((sum, item) => sum + item.variant!.price * item.quantity, 0);

  // Free delivery threshold e.g. IDR 3,000,000
  const freeDeliveryThreshold = 3000000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

  const handleCheckout = () => {
    if (cartItemsWithDetails.length === 0) return;
    const url = getWhatsAppCheckoutUrl(
      cartItemsWithDetails as (typeof cartItemsWithDetails[0] & {
        product: NonNullable<(typeof cartItemsWithDetails)[0]["product"]>;
        variant: NonNullable<(typeof cartItemsWithDetails)[0]["variant"]>;
      })[]
    );
    window.open(url, "_blank");
  };

  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-3">AISCHMIRA Concierge</span>
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-4">Your Shopping Bag</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/60">
            {cartItemsWithDetails.length} {cartItemsWithDetails.length === 1 ? "Selected Item" : "Selected Items"}
          </p>
        </div>

        {cartItemsWithDetails.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left: Cart Items & Gift Options */}
            <div className="flex-1 space-y-8">
              
              {/* Free Delivery Progress */}
              <div className="bg-surface p-6 border border-border/40 rounded-sm space-y-3">
                <div className="flex justify-between font-body text-xs text-text/80">
                  <span>
                    {remainingForFreeDelivery === 0
                      ? "✨ You qualify for Complimentary Concierge Express Shipping"
                      : `Add ${formatter.format(remainingForFreeDelivery)} for Complimentary Shipping`}
                  </span>
                  <span className="font-medium text-text">{progressPercent}%</span>
                </div>
                <div className="w-full bg-border/40 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 pb-4 border-b border-border/50 font-body text-[10px] tracking-widest uppercase text-text/50">
                <div className="col-span-6">Item Description</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total Price</div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-border/40 border-b border-border/40">
                {cartItemsWithDetails.map((item) => (
                  <div key={item.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Item Details */}
                    <div className="col-span-6 flex gap-4 md:gap-6 items-center">
                      <div className="relative w-20 h-28 bg-surface shrink-0 rounded-sm overflow-hidden border border-border/30">
                        <Image
                          src={item.variant!.images[0] || item.product!.images[0]}
                          alt={item.product!.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <Link
                          href={`/products/${item.product!.slug}`}
                          className="font-heading italic text-lg md:text-xl text-text hover:text-primary transition-colors"
                        >
                          {item.product!.name}
                        </Link>
                        <span className="font-body text-[10px] tracking-widest text-text/60 uppercase">
                          Color: {item.variant!.color} | Size: {item.variant!.size}
                        </span>
                        <span className="font-body text-xs font-light text-text/80 mt-1 md:hidden">
                          {formatter.format(item.variant!.price)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-left font-body text-[10px] tracking-widest text-red-700/70 hover:text-red-700 uppercase pt-2 flex items-center gap-1"
                        >
                          <X size={12} /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="col-span-3 flex justify-start md:justify-center">
                      <div className="flex items-center gap-4 border border-border/60 px-3 py-2 rounded-sm bg-background">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="text-text/50 hover:text-text p-1"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-body text-xs w-4 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-text/50 hover:text-text p-1"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="col-span-3 hidden md:block text-right font-body text-sm font-medium text-text">
                      {formatter.format(item.variant!.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Concierge Gift Options */}
              <div className="bg-surface/60 p-6 border border-border/40 rounded-sm space-y-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isGiftWrapped}
                      onChange={(e) => setIsGiftWrapped(e.target.checked)}
                      className="accent-primary"
                    />
                    <span className="font-body text-xs font-medium text-text flex items-center gap-2">
                      <Gift size={16} /> Signature Gift Box Packaging (Complimentary)
                    </span>
                  </label>
                </div>
                {isGiftWrapped && (
                  <textarea
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Enter personal calligraphic gift message for recipient..."
                    rows={2}
                    className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-text transition-colors rounded-sm"
                  />
                )}
              </div>
            </div>

            {/* Right: Summary Box */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-surface p-8 border border-border/40 rounded-sm sticky top-32 space-y-6">
                <h2 className="font-heading italic text-2xl text-text border-b border-border/40 pb-4">
                  Order Summary
                </h2>

                <div className="space-y-4 font-body text-xs font-light text-text/80 pb-6 border-b border-border/40">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-text">{formatter.format(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concierge Express Shipping</span>
                    <span>{remainingForFreeDelivery === 0 ? "Complimentary" : "Calculated at Checkout"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (VAT Included)</span>
                    <span>IDR 0</span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="PROMO CODE"
                    className="flex-1 bg-background border border-border/50 px-3 py-2 font-body text-[10px] tracking-widest uppercase text-text focus:outline-none focus:border-text rounded-sm"
                  />
                  <button className="bg-surface border border-border/60 font-body text-[10px] tracking-widest uppercase px-4 hover:bg-text hover:text-surface transition-colors rounded-sm">
                    Apply
                  </button>
                </div>

                <div className="flex justify-between items-baseline font-body text-base font-medium pt-2">
                  <span>Estimated Total</span>
                  <span className="font-heading italic text-2xl text-text">{formatter.format(subtotal)}</span>
                </div>

                {/* WhatsApp Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:opacity-95 transition-opacity rounded-sm font-medium shadow-sm flex items-center justify-center gap-2"
                >
                  Checkout via WhatsApp Concierge <ArrowRight size={14} />
                </button>

                <div className="space-y-2 pt-2 border-t border-border/30 text-center">
                  <p className="font-body text-[10px] text-text/50 leading-relaxed flex items-center justify-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-700" /> Handcrafted packaging &bull; Direct WhatsApp Concierge
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart View */
          <div className="space-y-16 py-12">
            <div className="text-center py-20 bg-surface/40 border border-border/30 rounded-sm max-w-2xl mx-auto space-y-6">
              <p className="font-heading italic text-3xl text-text">Your bag is currently empty</p>
              <p className="font-body text-xs tracking-widest uppercase text-text/50 max-w-md mx-auto leading-relaxed">
                Discover our latest silk dresses, tailored blazers, and luxury accessories.
              </p>
              <Link
                href="/collections"
                className="inline-block bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary transition-colors rounded-sm font-medium"
              >
                Explore Collections &rarr;
              </Link>
            </div>

            {/* Recommended Products Grid */}
            {productsData.length > 0 && (
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-text/50 block mb-2">Curated for You</span>
                  <h3 className="font-heading italic text-3xl text-text">Flagship Favorites</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
                  {productsData.slice(0, 4).map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
