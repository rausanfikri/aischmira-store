"use client";

import * as React from "react";
import Link from "next/link";
import { customerService } from "@/services/customer.service";
import { CustomerProfile, CustomerOrderSummary, CustomerLoyaltyInfo } from "@/domain/customer";
import { Crown, ShoppingBag, Heart, Sparkles, MapPin, ShieldCheck } from "lucide-react";

export default function AccountDashboardPage() {
  const [profile, setProfile] = React.useState<CustomerProfile | null>(null);
  const [orders, setOrders] = React.useState<CustomerOrderSummary[]>([]);
  const [loyalty, setLoyalty] = React.useState<CustomerLoyaltyInfo | null>(null);

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  React.useEffect(() => {
    customerService.getCustomerProfile().then((res) => {
      if (res.isSuccess) setProfile(res.value);
    });
    customerService.getCustomerOrders().then((res) => {
      if (res.isSuccess) setOrders(res.value);
    });
    customerService.getCustomerLoyalty().then((res) => {
      if (res.isSuccess) setLoyalty(res.value);
    });
  }, []);

  return (
    <div className="space-y-10">
      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <div className="bg-background p-6 border border-border/40 rounded-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-body text-[9px] tracking-widest uppercase text-text/50">Client Identity</span>
            <Crown size={16} className="text-amber-700" />
          </div>
          <div>
            <h3 className="font-heading italic text-2xl text-text font-light">
              {profile?.fullName || "Lady Katherine"}
            </h3>
            <p className="font-body text-xs text-text/60 font-light mt-0.5">
              Member since {profile?.memberSince || "2024"}
            </p>
          </div>
          <div className="pt-2 border-t border-border/30 font-body text-[10px] tracking-widest uppercase text-text/50 space-y-1">
            <p>Size: <span className="text-text font-medium">{profile?.preferredSize}</span></p>
            <p>Palette: <span className="text-text font-medium">{profile?.preferredColor}</span></p>
          </div>
        </div>

        {/* Loyalty Balance */}
        <div className="bg-background p-6 border border-border/40 rounded-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-body text-[9px] tracking-widest uppercase text-text/50">Privé Reward Points</span>
            <Sparkles size={16} className="text-amber-700" />
          </div>
          <div>
            <h3 className="font-heading italic text-3xl text-text font-light">
              {loyalty?.currentPoints.toLocaleString() || "2,450"} <span className="text-sm font-body not-italic text-text/60">Pts</span>
            </h3>
            <p className="font-body text-xs text-text/60 font-light mt-0.5">
              {loyalty?.pointsToNextTier.toLocaleString()} pts to Privé Noir Status
            </p>
          </div>
          <div className="pt-2 border-t border-border/30">
            <Link href="/account/loyalty" className="font-body text-[9px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1">
              View Privé Privileges &rarr;
            </Link>
          </div>
        </div>

        {/* Orders Overview */}
        <div className="bg-background p-6 border border-border/40 rounded-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-body text-[9px] tracking-widest uppercase text-text/50">Order Sanctuary</span>
            <ShoppingBag size={16} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading italic text-3xl text-text font-light">
              {orders.length} <span className="text-sm font-body not-italic text-text/60">Orders</span>
            </h3>
            <p className="font-body text-xs text-text/60 font-light mt-0.5">
              {orders.filter((o) => o.status === "Processing").length} Active in Concierge Process
            </p>
          </div>
          <div className="pt-2 border-t border-border/30">
            <Link href="/account/orders" className="font-body text-[9px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1">
              Track Order History &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <h2 className="font-heading italic text-2xl text-text font-light">
            Recent Concierge Orders
          </h2>
          <Link href="/account/orders" className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline">
            View All Orders &rarr;
          </Link>
        </div>

        {orders.length === 0 ? (
          <p className="font-body text-xs text-text/50 font-light py-4">No recent orders found.</p>
        ) : (
          <div className="divide-y divide-border/30">
            {orders.map((order) => (
              <div key={order.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-heading italic text-lg text-text font-light">{order.orderNumber}</span>
                    <span className={`font-body text-[9px] tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                      order.status === "Delivered"
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="font-body text-[10px] tracking-widest uppercase text-text/50 mt-1">
                    Date: {order.date} &bull; Items: {order.itemCount}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-body text-sm font-medium text-text block">
                    {formatter.format(order.totalAmount)}
                  </span>
                  <Link href="/account/orders" className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline">
                    View Concierge Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Privé Loyalty Privileges Highlights */}
      {loyalty && (
        <div className="bg-surface/80 p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <h2 className="font-heading italic text-2xl text-text font-light flex items-center gap-2">
              <Crown size={20} className="text-amber-700" /> {loyalty.tier} Member Privileges
            </h2>
            <Link href="/account/loyalty" className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline">
              Full Privé Benefits &rarr;
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loyalty.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-xs text-text/80 leading-relaxed font-light">
                <ShieldCheck size={16} className="text-amber-700 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Client Sanctuary Quick Shortcuts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link
          href="/wishlist"
          className="p-5 bg-background border border-border/40 rounded-sm hover:border-primary transition-colors space-y-2 group"
        >
          <Heart size={20} className="text-primary group-hover:scale-110 transition-transform" />
          <h4 className="font-heading italic text-lg text-text font-light">Personal Closet</h4>
          <p className="font-body text-[10px] tracking-widest uppercase text-text/50">Saved Garments &rarr;</p>
        </Link>

        <Link
          href="/account/saved-looks"
          className="p-5 bg-background border border-border/40 rounded-sm hover:border-primary transition-colors space-y-2 group"
        >
          <Sparkles size={20} className="text-amber-700 group-hover:scale-110 transition-transform" />
          <h4 className="font-heading italic text-lg text-text font-light">Saved Looks</h4>
          <p className="font-body text-[10px] tracking-widest uppercase text-text/50">Outfit Assemblies &rarr;</p>
        </Link>

        <Link
          href="/account/profile"
          className="p-5 bg-background border border-border/40 rounded-sm hover:border-primary transition-colors space-y-2 group"
        >
          <MapPin size={20} className="text-primary group-hover:scale-110 transition-transform" />
          <h4 className="font-heading italic text-lg text-text font-light">Addresses</h4>
          <p className="font-body text-[10px] tracking-widest uppercase text-text/50">Residences & Villas &rarr;</p>
        </Link>

        <Link
          href="/account/settings"
          className="p-5 bg-background border border-border/40 rounded-sm hover:border-primary transition-colors space-y-2 group"
        >
          <ShieldCheck size={20} className="text-emerald-700 group-hover:scale-110 transition-transform" />
          <h4 className="font-heading italic text-lg text-text font-light">Security</h4>
          <p className="font-body text-[10px] tracking-widest uppercase text-text/50">Passkeys & Privacy &rarr;</p>
        </Link>
      </div>
    </div>
  );
}
