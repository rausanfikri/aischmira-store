"use client";

import * as React from "react";
import { membershipService } from "@/services/membership.service";
import { MembershipEntity, MembershipTier, PointsActivity } from "@/domain/membership";
import { Crown, Sparkles, Copy, Check, Palette, Shirt, ArrowRight, Award } from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
  const [membership, setMembership] = React.useState<MembershipEntity | null>(null);
  const [tiers, setTiers] = React.useState<MembershipTier[]>([]);
  const [pointsHistory, setPointsHistory] = React.useState<PointsActivity[]>([]);
  const [copiedLink, setCopiedLink] = React.useState(false);

  React.useEffect(() => {
    membershipService.getMembershipProfile().then((res) => {
      if (res.isSuccess) setMembership(res.value);
    });
    membershipService.getMembershipTiers().then((res) => {
      if (res.isSuccess) setTiers(res.value);
    });
    membershipService.getPointsHistory().then((res) => {
      if (res.isSuccess) setPointsHistory(res.value);
    });
  }, []);

  const handleCopyReferral = () => {
    if (!membership) return;
    const refUrl = `https://aischmira.store/invite/${membership.memberId}`;
    navigator.clipboard.writeText(refUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const progressPercent = membership
    ? Math.min(100, Math.round((membership.currentPoints / membership.nextTierRequirement) * 100))
    : 0;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-border/40 pb-4">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-amber-700 block mb-1">
          AISCHMIRA Privé &bull; Sanctuary Identity
        </span>
        <h2 className="font-heading italic text-3xl text-text font-light flex items-center gap-2">
          <Crown size={24} className="text-amber-700" /> Digital Membership & Loyalty
        </h2>
      </div>

      {/* Virtual Digital Membership Card */}
      <div className="relative w-full max-w-xl mx-auto aspect-[1.586/1] bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-amber-500/40 rounded-xl p-6 md:p-8 text-surface shadow-2xl overflow-hidden flex flex-col justify-between group">
        {/* Background Watermark & Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 blur-2xl rounded-full pointer-events-none" />

        {/* Card Header */}
        <div className="flex justify-between items-start z-10">
          <div>
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-amber-400/80 block">
              AISCHMIRA PRIVÉ
            </span>
            <span className="font-heading italic text-xl md:text-2xl tracking-wide text-surface font-light">
              Flagship Sanctuary
            </span>
          </div>
          <Crown size={28} className="text-amber-400 drop-shadow-md" />
        </div>

        {/* Card Body */}
        <div className="z-10 my-auto py-2">
          <span className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-amber-200/90 block">
            {membership?.membershipCardNumber || "ASC-PRIVE-8891-2026"}
          </span>
          <h3 className="font-heading italic text-2xl md:text-3xl text-surface mt-1 font-light tracking-wide">
            {membership?.fullName || "Lady Katherine Vance"}
          </h3>
        </div>

        {/* Card Footer */}
        <div className="flex justify-between items-end z-10 border-t border-amber-500/20 pt-4">
          <div>
            <span className="font-body text-[8px] tracking-widest uppercase text-surface/50 block">
              Privé Tier
            </span>
            <span className="font-body text-xs tracking-widest uppercase font-medium text-amber-400">
              {membership?.currentTier || "Gold"} Privé Member
            </span>
          </div>

          <div className="text-right">
            <span className="font-body text-[8px] tracking-widest uppercase text-surface/50 block">
              Member Since
            </span>
            <span className="font-body text-xs font-light text-surface/90">
              {membership?.memberSince || "2024"}
            </span>
          </div>
        </div>
      </div>

      {/* Tier Roadmap Progress Bar */}
      <div className="bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-body text-[9px] tracking-widest uppercase text-text/50">Tier Progression</span>
            <h3 className="font-heading italic text-2xl text-text font-light mt-1">
              Current Tier: <span className="text-amber-800 font-medium">{membership?.currentTier} Privé</span>
            </h3>
          </div>
          <div className="text-left sm:text-right font-body text-xs">
            <span className="text-text/50 block">Loyalty Balance</span>
            <span className="font-heading italic text-2xl text-amber-800 font-light">
              {membership?.currentPoints.toLocaleString()} <span className="font-body text-xs not-italic text-text/60">Points</span>
            </span>
          </div>
        </div>

        {/* Tier Milestones Roadmap */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-2">
          {tiers.map((t) => {
            const isCurrent = t.name === membership?.currentTier;
            return (
              <div
                key={t.id}
                className={`p-3 border rounded-sm text-center space-y-1 ${
                  isCurrent ? "border-amber-500 bg-amber-50/50 shadow-sm" : "border-border/40 bg-surface/40"
                }`}
              >
                <span className="font-heading italic text-base block text-text font-light">{t.name}</span>
                <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">
                  {t.threshold === 0 ? "Entry" : `${t.threshold.toLocaleString()} Pts`}
                </span>
                {isCurrent && (
                  <span className="inline-block font-body text-[8px] tracking-widest uppercase text-amber-800 font-medium bg-amber-100 px-2 py-0.5 rounded-full mt-1">
                    Active
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between font-body text-[10px] tracking-widest uppercase text-text/60">
            <span>Progress to Next Tier (Platinum)</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full bg-border/40 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-600 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="font-body text-[11px] text-text/50 font-light pt-1">
            Accumulate {membership?.pointsToNextTier.toLocaleString()} additional points to unlock Platinum privileges.
          </p>
        </div>
      </div>

      {/* Style Profile Preference Sanctuary */}
      {membership?.styleProfile && (
        <div className="bg-surface/60 p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <h3 className="font-heading italic text-2xl text-text font-light flex items-center gap-2">
              <Palette size={20} className="text-amber-700" /> Personal Style Profile
            </h3>
            <span className="font-body text-[9px] tracking-widest uppercase text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Concierge Tailored
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body text-xs">
            <div className="space-y-3 bg-background p-4 border border-border/30 rounded-sm">
              <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Sizing & Silhouette Fit</span>
              <p className="font-medium text-text flex items-center gap-2">
                <Shirt size={16} className="text-primary" /> Size: {membership.styleProfile.preferredSize}
              </p>
              <p className="text-text/70 font-light">Fit: {membership.styleProfile.preferredFit}</p>
            </div>

            <div className="space-y-3 bg-background p-4 border border-border/30 rounded-sm">
              <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Palette & Materials</span>
              <p className="font-medium text-text">Colors: {membership.styleProfile.preferredColors.join(", ")}</p>
              <p className="text-text/70 font-light">Textiles: {membership.styleProfile.preferredMaterials.join(", ")}</p>
            </div>

            <div className="md:col-span-2 space-y-3 bg-background p-4 border border-border/30 rounded-sm">
              <span className="font-body text-[9px] tracking-widest uppercase text-text/50 block">Curated Collections & Occasions</span>
              <p className="font-medium text-text">Collections: {membership.styleProfile.preferredCollections.join(" &bull; ")}</p>
              <p className="text-text/70 font-light">Occasion: {membership.styleProfile.preferredOccasion}</p>
            </div>
          </div>
        </div>
      )}

      {/* Points & Activity Ledger */}
      <div className="bg-background p-6 md:p-8 border border-border/40 rounded-sm space-y-6">
        <h3 className="font-heading italic text-2xl text-text border-b border-border/40 pb-4 font-light flex items-center gap-2">
          <Award size={20} className="text-amber-700" /> Points Activity & Ledger
        </h3>

        <div className="divide-y divide-border/30">
          {pointsHistory.map((item) => (
            <div key={item.id} className="py-4 flex items-center justify-between gap-4">
              <div>
                <span className="font-heading italic text-base text-text font-light block">{item.description}</span>
                <span className="font-body text-[10px] tracking-widest uppercase text-text/50">{item.date} &bull; Type: {item.type}</span>
              </div>
              <span className="font-heading italic text-xl text-amber-800 font-light font-medium">
                +{item.points} Pts
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Privé Referral Program Card */}
      <div className="bg-surface/80 p-6 md:p-8 border border-border/40 rounded-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-border/40 pb-3">
          <Sparkles size={18} className="text-amber-700" />
          <h3 className="font-heading italic text-2xl text-text font-light">Privé Invitation Program</h3>
        </div>
        <p className="font-body text-xs text-text/60 leading-relaxed font-light">
          Invite fellow fashion collectors to AISCHMIRA.STORE. Receive 500 bonus Privé reward points when an invited guest completes their first concierge consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <div className="flex-1 bg-background border border-border/50 p-3 font-mono text-xs text-text/80 rounded-sm truncate">
            https://aischmira.store/invite/{membership?.memberId || "cust_01h8x9p"}
          </div>
          <button
            onClick={handleCopyReferral}
            className="bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3 px-6 hover:bg-primary transition-colors rounded-sm font-medium flex items-center justify-center gap-2 shrink-0"
          >
            {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copiedLink ? "Copied" : "Copy Invitation Link"}
          </button>
        </div>
      </div>

      {/* Support CTA */}
      <div className="p-6 bg-background border border-border/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading italic text-xl text-text font-light">Questions regarding your Privé status?</h4>
          <p className="font-body text-xs text-text/50 font-light mt-0.5">
            Your personal styling director is available to assist with points redemption and private showroom bookings.
          </p>
        </div>
        <Link
          href="/checkout"
          className="shrink-0 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-3.5 px-6 rounded-sm hover:bg-primary transition-colors inline-flex items-center gap-2 font-medium"
        >
          Consult Concierge <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
