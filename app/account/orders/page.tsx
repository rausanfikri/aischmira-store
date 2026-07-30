"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { orderService } from "@/services/order.service";
import { OrderEntity } from "@/domain/order";
import { ShoppingBag, ArrowRight, Truck, MessageCircle, ChevronRight } from "lucide-react";

export default function OrdersPage() {
  const [orders, setOrders] = React.useState<OrderEntity[]>([]);
  const [filter, setFilter] = React.useState<"all" | "processing" | "delivered">("all");

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  React.useEffect(() => {
    orderService.getOrders().then((res) => {
      if (res.isSuccess) setOrders(res.value);
    });
  }, []);

  const filteredOrders = orders.filter((order) => {
    if (filter === "processing") return order.status === "Processing" || order.status === "Confirmed";
    if (filter === "delivered") return order.status === "Delivered" || order.status === "Completed";
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border/40 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary block mb-1">
            AISCHMIRA Privé &bull; Purchase History
          </span>
          <h2 className="font-heading italic text-3xl text-text font-light flex items-center gap-2">
            <ShoppingBag size={24} className="text-primary" /> Order Sanctuary
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 bg-background p-1 border border-border/40 rounded-sm">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 font-body text-[10px] tracking-widest uppercase transition-all rounded-sm ${
              filter === "all" ? "bg-text text-surface font-medium" : "text-text/60 hover:text-text"
            }`}
          >
            All ({orders.length})
          </button>
          <button
            onClick={() => setFilter("processing")}
            className={`px-3 py-1.5 font-body text-[10px] tracking-widest uppercase transition-all rounded-sm ${
              filter === "processing" ? "bg-text text-surface font-medium" : "text-text/60 hover:text-text"
            }`}
          >
            In Progress ({orders.filter((o) => o.status === "Processing").length})
          </button>
          <button
            onClick={() => setFilter("delivered")}
            className={`px-3 py-1.5 font-body text-[10px] tracking-widest uppercase transition-all rounded-sm ${
              filter === "delivered" ? "bg-text text-surface font-medium" : "text-text/60 hover:text-text"
            }`}
          >
            Delivered ({orders.filter((o) => o.status === "Delivered").length})
          </button>
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-16 bg-background border border-border/30 rounded-sm space-y-4">
          <ShoppingBag size={40} className="text-text/20 mx-auto" />
          <p className="font-body text-xs tracking-widest uppercase text-text/50">No orders found in this view.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-background border border-border/40 rounded-sm p-6 space-y-6">
              {/* Order Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border/30 gap-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-heading italic text-xl text-text font-light">{order.orderNumber}</span>
                    <span
                      className={`font-body text-[9px] tracking-widest uppercase px-3 py-0.5 rounded-full border ${
                        order.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="font-body text-[9px] tracking-widest uppercase text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {order.paymentStatus}
                    </span>
                  </div>
                  <p className="font-body text-[10px] tracking-widest uppercase text-text/50 mt-1">
                    Purchased on {order.date} &bull; Channel: {order.source}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="font-heading italic text-2xl text-text block font-light">
                    {formatter.format(order.summary.grandTotal)}
                  </span>
                </div>
              </div>

              {/* Items Summary */}
              <div className="divide-y divide-border/30">
                {order.items.map((item) => (
                  <div key={item.sku} className="py-3 flex items-center gap-4">
                    <div className="relative w-14 h-18 bg-surface rounded-sm overflow-hidden shrink-0 border border-border/30">
                      <Image
                        src={item.image}
                        alt={item.productName}
                        fill
                        className="object-cover object-center"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading italic text-base text-text truncate font-light">
                        {item.productName}
                      </h4>
                      <p className="font-body text-[10px] tracking-widest uppercase text-text/50">
                        SKU: {item.variantSku || item.sku} &bull; {item.variantColor} / {item.variantSize}
                      </p>
                      <p className="font-body text-xs text-text/70 mt-0.5">
                        Qty: {item.quantity} &bull; {formatter.format(item.subtotal)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Card Footer */}
              <div className="pt-4 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-text/60 font-body text-xs font-light">
                  <Truck size={16} className="text-primary" />
                  <span>{order.tracking?.courier} &bull; {order.shippingStatus}</span>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="flex-1 sm:flex-initial bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3 px-6 rounded-sm hover:bg-primary transition-colors text-center inline-flex items-center justify-center gap-2"
                  >
                    Order Details & Tracking <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Support Callout */}
      <div className="p-6 bg-surface/60 border border-border/40 rounded-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MessageCircle size={20} className="text-whatsapp shrink-0" />
          <div>
            <h4 className="font-heading italic text-lg text-text font-light">Require styling assistance or order modifications?</h4>
            <p className="font-body text-xs text-text/50 font-light">
              Your dedicated sales director is available for direct consultation.
            </p>
          </div>
        </div>
        <Link
          href="/checkout"
          className="shrink-0 font-body text-[10px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1"
        >
          Consult Concierge <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
