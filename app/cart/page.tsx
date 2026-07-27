"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "@/store/useShopStore";
import { productsData } from "@/data/products";
import { Minus, Plus, X } from "lucide-react";
import { getWhatsAppCheckoutUrl } from "@/lib/whatsapp";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useShopStore();

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  const cartItemsWithDetails = cart.map((item) => {
    const product = productsData.find((p) => p.id === item.productId);
    const variant = product?.variants.find((v) => v.id === item.variantId);
    return { ...item, product, variant };
  }).filter((item) => item.product && item.variant);

  const subtotal = cartItemsWithDetails.reduce((sum, item) => sum + (item.variant!.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cartItemsWithDetails.length === 0) return;
    // We already filtered items without product or variant above, so we can safely cast to the combined type.
    const url = getWhatsAppCheckoutUrl(cartItemsWithDetails as (typeof cartItemsWithDetails[0] & { product: NonNullable<typeof cartItemsWithDetails[0]['product']>; variant: NonNullable<typeof cartItemsWithDetails[0]['variant']> })[]);
    window.open(url, "_blank");
  };

  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Shopping Bag</h1>
        </div>

        {cartItemsWithDetails.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Items List */}
            <div className="flex-1">
              <div className="hidden md:grid grid-cols-12 pb-4 border-b border-border/50 text-[10px] font-body tracking-widest uppercase text-text/50">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
                <div className="col-span-1"></div>
              </div>
              
              <div className="flex flex-col gap-8 py-8 border-b border-border/50">
                {cartItemsWithDetails.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Mobile layout uses flex, desktop uses grid */}
                    <div className="col-span-6 flex gap-4 md:gap-6 items-center">
                      <div className="relative w-20 h-28 bg-surface shrink-0">
                        <Image src={item.variant!.images[0] || item.product!.images[0]} alt={item.product!.name} fill className="object-cover object-center" />
                      </div>
                      <div className="flex flex-col">
                        <Link href={`/products/${item.product!.slug}`} className="font-heading text-lg md:text-xl text-text hover:text-primary transition-colors">
                          {item.product!.name}
                        </Link>
                        <span className="font-body text-[10px] tracking-widest text-text/60 mt-1">Color: {item.variant!.color} | Size: {item.variant!.size}</span>
                        <span className="font-body text-xs mt-2 md:hidden">{formatter.format(item.variant!.price)}</span>
                      </div>
                    </div>

                    <div className="col-span-2 flex justify-start md:justify-center">
                      <div className="flex items-center gap-4 border border-border/50 px-3 py-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-text/50 hover:text-text"><Minus size={14} /></button>
                        <span className="font-body text-xs w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-text/50 hover:text-text"><Plus size={14} /></button>
                      </div>
                    </div>

                    <div className="col-span-3 hidden md:block text-right font-body text-sm">
                      {formatter.format(item.variant!.price * item.quantity)}
                    </div>

                    <div className="col-span-1 flex justify-end">
                      <button onClick={() => removeFromCart(item.id)} className="text-text/40 hover:text-text transition-colors p-2">
                        <X size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-surface p-8">
                <h2 className="font-heading italic text-2xl text-text mb-8">Order Summary</h2>
                
                <div className="flex flex-col gap-4 font-body text-sm font-light text-text/80 pb-6 border-b border-border/50">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatter.format(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between font-body text-base mt-6 mb-8">
                  <span>Total</span>
                  <span>{formatter.format(subtotal)}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-whatsapp transition-colors rounded-sm"
                >
                  Checkout via WhatsApp
                </button>
                <p className="font-body text-[10px] text-center text-text/50 mt-4 leading-relaxed">
                  By checking out, you will be redirected to WhatsApp to confirm your order with our concierge.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-body text-xs tracking-widest uppercase text-text/50 mb-8">Your bag is currently empty.</p>
            <Link href="/collections" className="inline-block border-b border-text pb-1 font-body text-[10px] tracking-widest uppercase hover:text-primary transition-colors">
              Continue Shopping
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
