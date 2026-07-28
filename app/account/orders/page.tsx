"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle, ChevronDown, ChevronUp, PackageCheck, Truck, CheckCircle2 } from "lucide-react";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function OrdersPage() {
  const [expandedOrderId, setExpandedOrderId] = React.useState<string | null>("ORD-93812");

  const orders = [
    {
      id: "ORD-93812",
      date: "Jul 15, 2026",
      status: "Delivered",
      total: 3250000,
      trackingNumber: "JNE-8842910392",
      items: [
        {
          name: "Bianca Silk Dress",
          color: "Ivory White",
          size: "S",
          price: 1850000,
          quantity: 1,
          image: "/images/products/placeholder.png",
        },
        {
          name: "Priscila Tailored Blazer",
          color: "Midnight Black",
          size: "M",
          price: 1400000,
          quantity: 1,
          image: "/images/products/placeholder.png",
        },
      ],
    },
    {
      id: "ORD-84291",
      date: "Jun 02, 2026",
      status: "Delivered",
      total: 1150000,
      trackingNumber: "JNE-7731920194",
      items: [
        {
          name: "Safira Wide-Leg Trousers",
          color: "Champagne",
          size: "M",
          price: 1150000,
          quantity: 1,
          image: "/images/products/placeholder.png",
        },
      ],
    },
  ];

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  const handleOrderWhatsAppSupport = (orderId: string) => {
    const message = `Hello AISCHMIRA Concierge, I have an inquiry regarding my order ${orderId}. Could you assist me with tracking or assistance?`;
    const url = getWhatsAppInquiryUrl(message);
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading italic text-2xl md:text-3xl text-text mb-2">Order History & Concierge Tracking</h2>
        <p className="font-body text-xs text-text/60 font-light">View past purchases, itemized receipts, and order assistance.</p>
      </div>

      {orders.length > 0 ? (
        <div className="flex flex-col gap-6">
          {orders.map((order) => {
            const isExpanded = expandedOrderId === order.id;
            return (
              <div key={order.id} className="border border-border/40 bg-background rounded-sm overflow-hidden transition-all">
                
                {/* Summary Header Row */}
                <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-surface/40">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className="font-body text-sm text-text font-medium">{order.id}</span>
                      <span className="font-body text-[9px] tracking-widest uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                        {order.status}
                      </span>
                    </div>
                    <span className="font-body text-xs text-text/50">Placed on {order.date} &bull; AWB: {order.trackingNumber}</span>
                  </div>

                  <div className="flex items-center gap-6 self-between w-full md:w-auto justify-between md:justify-end">
                    <div className="text-left md:text-right">
                      <span className="font-body text-[10px] tracking-widest uppercase text-text/50 block">Total Amount</span>
                      <span className="font-body text-sm text-text font-medium">{formatter.format(order.total)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOrderWhatsAppSupport(order.id)}
                        className="font-body text-[10px] tracking-widest uppercase bg-whatsapp text-white px-3 py-2 rounded-sm hover:opacity-90 transition-opacity flex items-center gap-1.5"
                      >
                        <MessageCircle size={13} /> Support
                      </button>

                      <button
                        onClick={() => setExpandedOrderId(isExpanded ? null : order.id)}
                        className="p-2 border border-border/50 text-text/70 hover:text-text rounded-sm transition-colors"
                        aria-label="Toggle order details"
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Itemized Details */}
                {isExpanded && (
                  <div className="p-6 border-t border-border/40 space-y-6">
                    {/* Status Step Line */}
                    <div className="bg-surface/60 p-4 rounded-sm flex items-center justify-around font-body text-[10px] tracking-widest uppercase text-text/70">
                      <div className="flex items-center gap-2 text-emerald-800 font-medium">
                        <CheckCircle2 size={16} /> Order Placed
                      </div>
                      <div className="h-[1px] w-12 bg-emerald-500 hidden sm:block" />
                      <div className="flex items-center gap-2 text-emerald-800 font-medium">
                        <PackageCheck size={16} /> Tailored & Packaged
                      </div>
                      <div className="h-[1px] w-12 bg-emerald-500 hidden sm:block" />
                      <div className="flex items-center gap-2 text-emerald-800 font-medium">
                        <Truck size={16} /> Delivered
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="divide-y divide-border/30">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="py-4 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="relative w-16 h-20 bg-surface rounded-sm overflow-hidden shrink-0 border border-border/30">
                              <Image src={item.image} alt={item.name} fill className="object-cover object-center" />
                            </div>
                            <div>
                              <p className="font-heading italic text-base text-text">{item.name}</p>
                              <p className="font-body text-[10px] tracking-widest text-text/60 uppercase">
                                Color: {item.color} | Size: {item.size} | Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <span className="font-body text-xs font-medium text-text">{formatter.format(item.price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="border border-border/40 p-12 text-center bg-surface/30 rounded-sm">
          <p className="font-body text-xs tracking-widest uppercase text-text/50">You have no previous orders.</p>
        </div>
      )}
    </div>
  );
}
