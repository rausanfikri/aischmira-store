"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { savedLooksService } from "@/services/saved-looks.service";
import { SavedLookEntity } from "@/domain/look";
import { Sparkles, ArrowRight, ShoppingBag, Eye, Tag } from "lucide-react";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function SavedLooksPage() {
  const [looks, setLooks] = React.useState<SavedLookEntity[]>([]);
  const [selectedOccasion, setSelectedOccasion] = React.useState<string>("all");

  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  React.useEffect(() => {
    savedLooksService.getSavedLooks().then((res) => {
      if (res.isSuccess) setLooks(res.value);
    });
  }, []);

  const occasions: Array<{ id: string; label: string }> = [
    { id: "all", label: "All Occasions" },
    { id: "Formal", label: "Formal & Evening" },
    { id: "Office", label: "Executive Office" },
    { id: "Travel", label: "Resort & Travel" },
    { id: "Ramadan", label: "Ramadan Sanctuary" },
    { id: "Wedding", label: "Wedding Guests" },
  ];

  const filteredLooks = looks.filter((look) => {
    if (selectedOccasion === "all") return true;
    return look.occasion === selectedOccasion;
  });

  const handleOrderLookWhatsApp = (look: SavedLookEntity) => {
    const message = `Hello AISCHMIRA Styling Concierge,\n\nI am interested in acquiring the complete outfit assembly: "${look.name}" (${look.season}).\n\nIncluded Garments: ${look.productSkus.join(", ")}\nEstimated Total: ${formatter.format(look.totalEstimatedValue)}\n\nPlease assist me with availability and tailoring consultations. Thank you!`;
    const url = getWhatsAppInquiryUrl(message);
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border/40 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-amber-700 block mb-1">
            AISCHMIRA Privé &bull; Personal Styling
          </span>
          <h2 className="font-heading italic text-3xl text-text font-light flex items-center gap-2">
            <Sparkles size={24} className="text-amber-700" /> Digital Wardrobe & Saved Looks
          </h2>
        </div>

        {/* Occasion Filter Pills */}
        <div className="flex flex-wrap gap-2 bg-background p-1 border border-border/40 rounded-sm">
          {occasions.map((occ) => (
            <button
              key={occ.id}
              onClick={() => setSelectedOccasion(occ.id)}
              className={`px-3 py-1.5 font-body text-[10px] tracking-widest uppercase transition-all rounded-sm ${
                selectedOccasion === occ.id
                  ? "bg-text text-surface font-medium"
                  : "text-text/60 hover:text-text"
              }`}
            >
              {occ.label}
            </button>
          ))}
        </div>
      </div>

      <p className="font-body text-xs text-text/60 leading-relaxed font-light">
        Your curated digital wardrobe of complete outfit ensembles styled during private flagship showroom consultations and runway presentations.
      </p>

      {/* Looks Grid */}
      {filteredLooks.length === 0 ? (
        <div className="py-16 text-center bg-background border border-border/30 rounded-sm space-y-3">
          <Sparkles size={36} className="text-text/20 mx-auto" />
          <p className="font-body text-xs tracking-widest uppercase text-text/50">No saved looks found for this occasion.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredLooks.map((look) => (
            <div key={look.id} className="bg-background border border-border/40 rounded-sm overflow-hidden flex flex-col group">
              {/* Cover Image */}
              <Link href={`/looks/${look.slug}`} className="relative aspect-[4/3] bg-surface overflow-hidden block">
                <Image
                  src={look.coverImage}
                  alt={look.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm border border-border/40 px-3 py-1 rounded-full font-body text-[9px] tracking-widest uppercase text-text/80 flex items-center gap-1.5">
                  <Tag size={10} className="text-amber-700" /> {look.occasion}
                </div>
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm border border-border/40 px-3 py-1 rounded-full font-body text-[9px] tracking-widest uppercase text-text/80">
                  {look.season}
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <Link href={`/looks/${look.slug}`}>
                    <h3 className="font-heading italic text-2xl text-text hover:text-primary transition-colors font-light">
                      {look.name}
                    </h3>
                  </Link>
                  <p className="font-body text-xs text-text/60 font-light line-clamp-2">
                    {look.description}
                  </p>
                </div>

                {/* Color Swatches & Details */}
                <div className="flex items-center justify-between pt-2 border-t border-border/30 font-body text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] tracking-widest uppercase text-text/50 mr-1">Palette:</span>
                    {look.colorPalette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-border/40 inline-block"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <span className="font-medium text-text">
                    {formatter.format(look.totalEstimatedValue)}
                  </span>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-border/30 flex items-center justify-between gap-3">
                  <Link
                    href={`/looks/${look.slug}`}
                    className="font-body text-[10px] tracking-widest uppercase text-text/70 hover:text-text flex items-center gap-1"
                  >
                    <Eye size={14} /> View Outfit Details
                  </Link>

                  <button
                    onClick={() => handleOrderLookWhatsApp(look)}
                    className="font-body text-[10px] tracking-widest uppercase text-primary hover:underline flex items-center gap-1 font-medium"
                  >
                    <ShoppingBag size={14} /> Order Assembly <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
