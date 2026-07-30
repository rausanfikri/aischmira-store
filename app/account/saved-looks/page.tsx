"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { customerService } from "@/services/customer.service";
import { SavedLook } from "@/domain/customer";
import { Sparkles, ArrowRight, ShoppingBag } from "lucide-react";

export default function SavedLooksPage() {
  const [looks, setLooks] = React.useState<SavedLook[]>([]);

  React.useEffect(() => {
    customerService.getSavedLooks().then((res) => {
      if (res.isSuccess) setLooks(res.value);
    });
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border/40 pb-4">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-primary block mb-1">
          AISCHMIRA Privé &bull; Outfit Assemblies
        </span>
        <h2 className="font-heading italic text-3xl text-text font-light flex items-center gap-2">
          <Sparkles size={24} className="text-amber-700" /> Curated Saved Looks
        </h2>
      </div>

      <p className="font-body text-xs text-text/60 leading-relaxed font-light">
        Your private collection of outfit ensembles styled during fashion week presentations and personal showroom consultations.
      </p>

      {/* Looks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {looks.map((look) => (
          <div key={look.id} className="bg-background border border-border/40 rounded-sm overflow-hidden flex flex-col group">
            <div className="relative aspect-[4/3] bg-surface overflow-hidden">
              <Image
                src={look.imageUrl}
                alt={look.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm border border-border/40 px-3 py-1 rounded-full font-body text-[9px] tracking-widest uppercase text-text/80">
                {look.season}
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <div>
                <h3 className="font-heading italic text-2xl text-text font-light">
                  {look.name}
                </h3>
                <p className="font-body text-[10px] tracking-widest uppercase text-text/50 mt-1">
                  Ensemble Pieces: {look.productSkus.join(", ")}
                </p>
              </div>

              <div className="pt-2 border-t border-border/30 flex items-center justify-between">
                <Link
                  href="/collections"
                  className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1.5"
                >
                  <ShoppingBag size={14} /> Request Look via Concierge <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
