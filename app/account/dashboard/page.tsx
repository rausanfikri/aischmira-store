import Link from "next/link";
import { Sparkles, ShoppingBag, MapPin, ArrowRight, Award } from "lucide-react";

export default function AccountDashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Welcome & Privé Points Banner */}
      <div className="bg-surface p-8 border border-border/30 rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Award size={18} className="text-primary" />
            <span className="font-body text-[10px] tracking-widest uppercase font-medium text-primary">Gold Privé Member</span>
          </div>
          <h2 className="font-heading italic text-3xl text-text mb-1">Welcome back, Jane</h2>
          <p className="font-body text-xs font-light text-text/70">jane.doe@example.com &bull; Member since 2025</p>
        </div>
        <div className="bg-background/80 px-6 py-4 rounded-sm border border-border/40 text-left md:text-right w-full md:w-auto">
          <p className="font-body text-[9px] tracking-widest uppercase text-text/50 mb-1">Privé Loyalty Balance</p>
          <p className="font-heading italic text-4xl text-primary flex items-baseline gap-1 md:justify-end">
            1,250 <span className="font-body text-xs text-text/60 not-italic uppercase tracking-widest">pts</span>
          </p>
          <p className="font-body text-[9px] text-emerald-800 uppercase tracking-widest mt-1">
            ✨ Next Tier: Platinum Privé (750 pts away)
          </p>
        </div>
      </div>

      {/* Grid Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Recent Orders Card */}
        <div className="bg-background p-6 border border-border/40 rounded-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <h3 className="font-heading italic text-xl text-text flex items-center gap-2">
                <ShoppingBag size={18} className="text-text/70" /> Recent Order
              </h3>
              <span className="font-body text-[9px] tracking-widest uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-full">
                Delivered
              </span>
            </div>
            <div className="space-y-1">
              <p className="font-body text-xs font-medium text-text">Order #ORD-93812</p>
              <p className="font-body text-[11px] text-text/60">Jul 15, 2026 &bull; 2 Pieces &bull; IDR 3.250.000</p>
              <p className="font-body text-[11px] italic text-text/70 pt-2">Bianca Silk Dress (S), Tailored Blazer (M)</p>
            </div>
          </div>
          <Link
            href="/account/orders"
            className="font-body text-[10px] tracking-widest uppercase text-text border-b border-text/40 pb-0.5 hover:text-primary hover:border-primary transition-colors inline-flex items-center gap-1.5 self-start"
          >
            View All Orders <ArrowRight size={12} />
          </Link>
        </div>

        {/* Primary Shipping Address Card */}
        <div className="bg-background p-6 border border-border/40 rounded-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <h3 className="font-heading italic text-xl text-text flex items-center gap-2">
                <MapPin size={18} className="text-text/70" /> Primary Address
              </h3>
              <span className="font-body text-[9px] tracking-widest uppercase text-text/50">
                Default
              </span>
            </div>
            <div className="space-y-1 font-body text-xs text-text/80 font-light leading-relaxed">
              <p className="font-medium text-text">Jane Doe (+62 812 3456 7890)</p>
              <p>Jl. Senopati No. 42, Kebayoran Baru</p>
              <p>Jakarta Selatan, DKI Jakarta 12190</p>
              <p>Indonesia</p>
            </div>
          </div>
          <Link
            href="/account/profile"
            className="font-body text-[10px] tracking-widest uppercase text-text border-b border-text/40 pb-0.5 hover:text-primary hover:border-primary transition-colors inline-flex items-center gap-1.5 self-start"
          >
            Edit Address <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* Privé Benefits Highlight */}
      <div className="bg-surface/60 p-6 border border-border/30 rounded-sm space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-primary" />
          <h4 className="font-heading italic text-lg text-text">Your Privé Privileges</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-body text-xs text-text/70 font-light pt-2">
          <div className="p-3 bg-background border border-border/20 rounded-sm">
            <strong className="block text-text font-normal uppercase text-[10px] tracking-widest mb-1">Private Sales</strong>
            Early 48-hour access to newly released seasonal capsule collections.
          </div>
          <div className="p-3 bg-background border border-border/20 rounded-sm">
            <strong className="block text-text font-normal uppercase text-[10px] tracking-widest mb-1">WhatsApp Concierge</strong>
            Direct priority hotline with your dedicated style advisor.
          </div>
          <div className="p-3 bg-background border border-border/20 rounded-sm">
            <strong className="block text-text font-normal uppercase text-[10px] tracking-widest mb-1">Complimentary Alterations</strong>
            Bespoke size adjustments on all flagship tailoring pieces.
          </div>
        </div>
      </div>
    </div>
  );
}
