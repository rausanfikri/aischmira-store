"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { orderService } from "@/services/order.service";
import { OrderEntity } from "@/domain/order";
import { ChevronRight, ArrowLeft, Truck, ShieldCheck, MessageCircle, CheckCircle2, Clock } from "lucide-react";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = params.orderId as string;

  const [order, setOrder] = React.useState<OrderEntity | null>(null);
  const [loading, setLoading] = React.useState(true);

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  React.useEffect(() => {
    if (!orderId) return;
    orderService.getOrderById(orderId).then((res) => {
      if (res.isSuccess) setOrder(res.value);
      setLoading(false);
    });
  }, [orderId]);

  if (loading) {
    return (
      <div className="py-20 text-center font-body text-xs tracking-widest uppercase text-text/50">
        Loading order sanctuary details...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="font-heading italic text-3xl text-text font-light">Order Not Found</h2>
        <p className="font-body text-xs text-text/50 font-light">The requested order reference could not be located.</p>
        <Link href="/account/orders" className="font-body text-[10px] tracking-widest uppercase text-primary underline">
          Back to Order Sanctuary &rarr;
        </Link>
      </div>
    );
  }

  const handleConciergeInquiry = () => {
    const msg = `Hello AISCHMIRA Concierge, I have an inquiry regarding my Order Reference: ${order.orderNumber}. Could you please assist me with tracking updates? Thank you!`;
    const url = getWhatsAppInquiryUrl(msg);
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-text/50">
          <li>
            <Link href="/account/orders" className="hover:text-text transition-colors flex items-center gap-1">
              <ArrowLeft size={12} /> Orders
            </Link>
          </li>
          <li>
            <ChevronRight size={10} className="text-text/30" />
          </li>
          <li className="text-text font-medium">{order.orderNumber}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="border-b border-border/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary">
              AISCHMIRA Privé &bull; Order Review
            </span>
            <span className="font-body text-[9px] tracking-widest uppercase px-3 py-0.5 rounded-full border bg-amber-50 text-amber-800 border-amber-200 font-medium">
              {order.status}
            </span>
          </div>
          <h1 className="font-heading italic text-3xl md:text-5xl text-text font-light">
            {order.orderNumber}
          </h1>
          <p className="font-body text-xs text-text/50 font-light mt-1">
            Purchased on {order.date} via {order.source}
          </p>
        </div>

        <button
          onClick={handleConciergeInquiry}
          className="bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-3.5 px-6 rounded-sm hover:opacity-95 transition-opacity inline-flex items-center gap-2 shrink-0 font-medium"
        >
          <MessageCircle size={16} /> Consult Concierge
        </button>
      </div>

      {/* Interactive Tracking Timeline */}
      {order.tracking && (
        <div className="bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/30 pb-4 gap-2">
            <div>
              <span className="font-body text-[9px] tracking-widest uppercase text-text/50">Shipping Courier</span>
              <h3 className="font-heading italic text-xl text-text font-light flex items-center gap-2">
                <Truck size={18} className="text-primary" /> {order.tracking.courier}
              </h3>
            </div>
            <div className="text-left sm:text-right font-body text-xs">
              <span className="text-text/50 block">Tracking Reference:</span>
              <span className="font-mono text-text font-medium">{order.tracking.trackingNumber}</span>
            </div>
          </div>

          {/* Events Timeline */}
          <div className="space-y-6 relative pl-6 border-l-2 border-border/40">
            {order.tracking.events.map((evt, idx) => (
              <div key={idx} className="relative">
                <span
                  className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center ${
                    evt.completed ? "border-emerald-600 text-emerald-600" : "border-border/60 text-text/30"
                  }`}
                >
                  {evt.completed ? <CheckCircle2 size={12} className="text-emerald-600" /> : <Clock size={10} />}
                </span>
                <div>
                  <h4 className={`font-heading italic text-lg font-light ${evt.completed ? "text-text" : "text-text/40"}`}>
                    {evt.title}
                  </h4>
                  <p className="font-body text-[10px] tracking-widest uppercase text-text/50 mt-0.5">
                    {evt.date} &bull; Location: {evt.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Items Table & Financial Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Purchased Products */}
        <div className="lg:col-span-8 bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
          <h2 className="font-heading italic text-2xl text-text border-b border-border/40 pb-4 font-light">
            Purchased Garments ({order.items.length})
          </h2>

          <div className="divide-y divide-border/30">
            {order.items.map((item) => (
              <div key={item.sku} className="py-4 flex gap-4 items-center">
                <div className="relative w-20 h-28 bg-surface shrink-0 rounded-sm overflow-hidden border border-border/30">
                  <Image
                    src={item.image}
                    alt={item.productName}
                    fill
                    className="object-cover object-center"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="font-heading italic text-xl text-text font-light truncate">
                    {item.productName}
                  </h3>
                  <p className="font-body text-[10px] tracking-widest uppercase text-text/50">
                    SKU: {item.variantSku || item.sku}
                  </p>
                  <p className="font-body text-xs text-text/70">
                    Color: {item.variantColor} | Size: {item.variantSize}
                  </p>
                  <p className="font-body text-xs font-medium text-text pt-1">
                    {item.quantity} x {formatter.format(item.unitPrice)} = {formatter.format(item.subtotal)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {order.customerNotes && (
            <div className="pt-4 border-t border-border/30">
              <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block mb-1">
                Special Atelier & Tailoring Notes
              </span>
              <p className="font-body text-xs text-text/80 italic bg-surface/50 p-3 rounded-sm border border-border/30">
                &ldquo;{order.customerNotes}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Right: Summary & Delivery Card */}
        <div className="lg:col-span-4 space-y-6">
          {/* Order Financial Summary */}
          <div className="bg-background p-6 border border-border/40 rounded-sm space-y-4">
            <h3 className="font-heading italic text-xl text-text border-b border-border/40 pb-3 font-light">
              Financial Summary
            </h3>

            <div className="space-y-3 font-body text-xs text-text/80 font-light pb-4 border-b border-border/30">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-medium text-text">{formatter.format(order.summary.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Concierge Express Shipping</span>
                <span>{order.summary.shipping === 0 ? "Complimentary" : formatter.format(order.summary.shipping)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (VAT Included)</span>
                <span>IDR 0</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline font-body font-medium">
              <span className="text-xs uppercase tracking-widest">Grand Total</span>
              <span className="font-heading italic text-2xl text-text font-light">
                {formatter.format(order.summary.grandTotal)}
              </span>
            </div>
          </div>

          {/* Delivery Recipient Card */}
          <div className="bg-background p-6 border border-border/40 rounded-sm space-y-3">
            <h3 className="font-heading italic text-xl text-text border-b border-border/40 pb-3 font-light">
              Delivery Recipient
            </h3>
            <div className="font-body text-xs text-text/80 space-y-1 font-light">
              <p className="font-medium text-text">{order.recipientName}</p>
              <p>{order.recipientPhone}</p>
              <p>{order.shippingAddress}</p>
              <p>{order.city}</p>
            </div>
            <div className="pt-3 border-t border-border/30 font-body text-[10px] text-emerald-800 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-700" /> Direct WhatsApp Concierge Verified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
