"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "@/store/useShopStore";
import { checkoutService } from "@/services/checkout.service";
import { whatsAppService, CheckoutCustomerDetails, CheckoutShippingPreference } from "@/services/whatsapp.service";
import { BagItemWithProduct, OrderSummary } from "@/services/shopping-bag.service";
import { ShieldCheck, MessageCircle, ArrowRight, Gift, ChevronRight, Truck, Store, UserCheck } from "lucide-react";

export default function CheckoutPage() {
  const cart = useShopStore((state) => state.cart);

  const [items, setItems] = React.useState<BagItemWithProduct[]>([]);
  const [summary, setSummary] = React.useState<OrderSummary>({
    subtotal: 0,
    estimatedDiscount: 0,
    estimatedShipping: 0,
    estimatedTax: 0,
    grandTotal: 0,
    itemCount: 0,
    freeShippingThreshold: 3000000,
    remainingForFreeShipping: 3000000,
    progressPercent: 0,
  });

  // Customer Form State
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");

  // Preferences State
  const [shippingMethod, setShippingMethod] = React.useState<'concierge_express' | 'boutique_pickup' | 'personal_courier'>("concierge_express");
  const [isGiftWrapped, setIsGiftWrapped] = React.useState(false);
  const [giftNote, setGiftNote] = React.useState("");
  const [specialNotes, setSpecialNotes] = React.useState("");

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  // Resolve checkout review items via CheckoutService
  React.useEffect(() => {
    if (cart.length === 0) {
      requestAnimationFrame(() => {
        setItems([]);
      });
      return;
    }

    checkoutService.prepareCheckoutReview(cart).then((res) => {
      if (res.isSuccess) {
        setItems(res.value.items);
        setSummary(res.value.summary);
      }
    });
  }, [cart]);

  // Construct dynamic payload for live preview & URL generation
  const payload = React.useMemo(() => {
    const customer: CheckoutCustomerDetails = {
      fullName: fullName.trim() || undefined,
      phone: phone.trim() || undefined,
      email: email.trim() || undefined,
      address: address.trim() || undefined,
      city: city.trim() || undefined,
    };

    const shipping: CheckoutShippingPreference = {
      method: shippingMethod,
    };

    return {
      items,
      summary,
      customer,
      shipping,
      gift: {
        isGiftWrapped,
        giftNote: isGiftWrapped ? giftNote : undefined,
      },
      specialNotes: specialNotes.trim() || undefined,
    };
  }, [items, summary, fullName, phone, email, address, city, shippingMethod, isGiftWrapped, giftNote, specialNotes]);

  // Live WhatsApp message preview
  const liveMessagePreview = React.useMemo(() => {
    if (items.length === 0) return "";
    return whatsAppService.buildConciergeMessage(payload);
  }, [items, payload]);

  const handleLaunchWhatsApp = async () => {
    if (items.length === 0) return;
    const urlRes = await checkoutService.generateWhatsAppUrl(payload);
    if (urlRes.isSuccess) {
      window.open(urlRes.value, "_blank");
    }
  };

  if (items.length === 0) {
    return (
      <main className="pt-28 md:pt-36 pb-24 md:pb-32 bg-background min-h-screen">
        <div className="container-custom text-center py-20 bg-surface/40 border border-border/30 rounded-sm max-w-2xl mx-auto space-y-6">
          <h1 className="font-heading italic text-3xl md:text-4xl text-text font-light">Your Shopping Bag is Empty</h1>
          <p className="font-body text-xs tracking-widest uppercase text-text/50 max-w-md mx-auto leading-relaxed">
            Please add luxury garments to your shopping bag before entering concierge checkout.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 px-8 rounded-sm font-medium hover:bg-primary transition-colors"
          >
            Explore Collections <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 md:pt-36 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="container-custom">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text/50">
            <li>
              <Link href="/" className="hover:text-text transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={10} className="text-text/30" />
            </li>
            <li>
              <Link href="/bag" className="hover:text-text transition-colors">
                Shopping Bag
              </Link>
            </li>
            <li>
              <ChevronRight size={10} className="text-text/30" />
            </li>
            <li className="text-text font-medium">Concierge Checkout Review</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary block">
            AISCHMIRA Privé &bull; Order Consultation
          </span>
          <h1 className="font-heading italic text-4xl md:text-6xl text-text font-light">
            WhatsApp Concierge Checkout
          </h1>
          <p className="font-body text-xs tracking-widest uppercase text-text/60 leading-relaxed">
            Review your selected garments below. Final order confirmation, payment transfer details, and shipping are arranged directly with your private sales director on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Review Sections & Inputs */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Itemized Order Review */}
            <div className="bg-surface p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <h2 className="font-heading italic text-2xl text-text font-light">
                  Selected Garments ({summary.itemCount})
                </h2>
                <Link href="/bag" className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline">
                  Edit Bag &rarr;
                </Link>
              </div>

              <div className="divide-y divide-border/30">
                {items.map((item) => (
                  <div key={item.id} className="py-4 flex items-center gap-4">
                    <div className="relative w-16 h-20 bg-background rounded-sm overflow-hidden shrink-0 border border-border/30">
                      <Image
                        src={item.variant.images?.[0] || item.product.images?.[0] || "/images/products/placeholder.png"}
                        alt={item.product.name}
                        fill
                        className="object-cover object-center"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading italic text-lg text-text truncate font-light">
                        {item.product.name}
                      </h3>
                      <p className="font-body text-[10px] tracking-widest uppercase text-text/50">
                        SKU: {item.variant.sku || item.product.sku} &bull; {item.variant.color} / {item.variant.size}
                      </p>
                      <p className="font-body text-xs text-text/70 mt-0.5">
                        Qty: {item.quantity} &bull; {formatter.format(item.itemSubtotal)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Customer Information (Optional Consultation Details) */}
            <div className="bg-surface p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-border/40 pb-4">
                <UserCheck size={18} className="text-primary" />
                <h2 className="font-heading italic text-2xl text-text font-light">
                  Delivery & Contact Information
                </h2>
              </div>
              <p className="font-body text-xs text-text/60 leading-relaxed font-light">
                Providing your contact details here automatically includes them in your WhatsApp message, speeding up concierge processing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Lady Katherine Vance"
                    className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-primary rounded-sm"
                  />
                </div>
                <div>
                  <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+62 812 3456 7890"
                    className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-primary rounded-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="concierge@aischmira.store"
                    className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-primary rounded-sm"
                  />
                </div>
                <div>
                  <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-1.5">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter street & building number..."
                    className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-primary rounded-sm"
                  />
                </div>
                <div>
                  <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-1.5">
                    City & Province
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Jakarta Selatan"
                    className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-primary rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* 3. Shipping & Packaging Preferences */}
            <div className="bg-surface p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
              <h2 className="font-heading italic text-2xl text-text border-b border-border/40 pb-4 font-light">
                Shipping & Atelier Preferences
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setShippingMethod("concierge_express")}
                  className={`p-4 border rounded-sm text-left space-y-2 transition-all ${
                    shippingMethod === "concierge_express"
                      ? "border-primary bg-primary/5 text-text"
                      : "border-border/40 bg-background text-text/70 hover:border-text"
                  }`}
                >
                  <Truck size={18} className="text-primary" />
                  <span className="font-heading italic text-base text-text block">Concierge Express</span>
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Complimentary</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingMethod("boutique_pickup")}
                  className={`p-4 border rounded-sm text-left space-y-2 transition-all ${
                    shippingMethod === "boutique_pickup"
                      ? "border-primary bg-primary/5 text-text"
                      : "border-border/40 bg-background text-text/70 hover:border-text"
                  }`}
                >
                  <Store size={18} className="text-primary" />
                  <span className="font-heading italic text-base text-text block">Boutique Pickup</span>
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Jakarta Flagship</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingMethod("personal_courier")}
                  className={`p-4 border rounded-sm text-left space-y-2 transition-all ${
                    shippingMethod === "personal_courier"
                      ? "border-primary bg-primary/5 text-text"
                      : "border-border/40 bg-background text-text/70 hover:border-text"
                  }`}
                >
                  <Truck size={18} className="text-primary" />
                  <span className="font-heading italic text-base text-text block">Personal Courier</span>
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Same-Day Delivery</span>
                </button>
              </div>

              {/* Signature Gift Options */}
              <div className="pt-4 border-t border-border/30 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isGiftWrapped}
                    onChange={(e) => setIsGiftWrapped(e.target.checked)}
                    className="accent-primary"
                  />
                  <span className="font-body text-xs font-medium text-text flex items-center gap-2">
                    <Gift size={16} /> Signature Gift Box & Calligraphic Card
                  </span>
                </label>

                {isGiftWrapped && (
                  <textarea
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Enter calligraphic gift message..."
                    rows={2}
                    className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-primary rounded-sm"
                  />
                )}
              </div>

              {/* Special Atelier Notes */}
              <div className="pt-2">
                <label className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-1.5">
                  Special Tailoring or Fit Notes
                </label>
                <textarea
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g. Requesting waist adjustment advice or custom hem length..."
                  rows={2}
                  className="w-full bg-background border border-border/50 p-3 font-body text-xs text-text focus:outline-none focus:border-primary rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Message Preview & WhatsApp CTA */}
          <div className="lg:col-span-5">
            <div className="bg-surface p-6 md:p-8 border border-border/40 rounded-sm sticky top-32 space-y-6">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <h2 className="font-heading italic text-2xl text-text font-light flex items-center gap-2">
                  <MessageCircle size={20} className="text-whatsapp" /> Live WhatsApp Message
                </h2>
                <span className="font-body text-[9px] tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Live Preview
                </span>
              </div>

              {/* Live Preview Box */}
              <div className="bg-background/90 p-4 border border-border/50 rounded-sm font-mono text-[11px] text-text/80 leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto border-l-2 border-l-whatsapp">
                {liveMessagePreview}
              </div>

              {/* Order Summary Subtotal */}
              <div className="space-y-3 font-body text-xs font-light text-text/80 pt-2 border-t border-border/30">
                <div className="flex justify-between">
                  <span>Subtotal ({summary.itemCount} items)</span>
                  <span className="font-medium text-text">{formatter.format(summary.subtotal)}</span>
                </div>
                <div className="flex justify-between font-body text-base font-medium text-text pt-2 border-t border-border/30">
                  <span>Grand Total</span>
                  <span className="font-heading italic text-2xl text-text">{formatter.format(summary.grandTotal)}</span>
                </div>
              </div>

              {/* Primary WhatsApp Action Button */}
              <button
                onClick={handleLaunchWhatsApp}
                className="w-full bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:opacity-95 transition-opacity rounded-sm font-medium shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> Continue to WhatsApp Concierge
              </button>

              <div className="space-y-2 text-center pt-2">
                <p className="font-body text-[10px] text-text/50 leading-relaxed flex items-center justify-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-700" /> Private Consultation &bull; Admin Verification &bull; Secure Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
