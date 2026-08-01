"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { savedLooksService } from "@/services/saved-looks.service";
import { SavedLookDetail } from "@/domain/look";
import { ProductCard } from "@/components/ui/ProductCard";
import { useShopStore } from "@/store/useShopStore";
import { ChevronRight, ShoppingBag, MessageCircle, Tag, Check } from "lucide-react";
import { getWhatsAppInquiryUrl } from "@/lib/whatsapp";

export default function LookDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [look, setLook] = React.useState<SavedLookDetail | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [addedToBag, setAddedToBag] = React.useState(false);

  const addToCart = useShopStore((state) => state.addToCart);
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

  React.useEffect(() => {
    if (!slug) return;
    savedLooksService.getLookDetails(slug).then((res) => {
      if (res.isSuccess) setLook(res.value);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-36 pb-24 bg-background text-center font-body text-xs tracking-widest uppercase text-text/50">
        Loading outfit sanctuary details...
      </div>
    );
  }

  if (!look) {
    return (
      <div className="min-h-screen pt-36 pb-24 bg-background text-center space-y-4 container-custom">
        <h1 className="font-heading italic text-3xl text-text font-light">Look Not Found</h1>
        <p className="font-body text-xs text-text/50 font-light">The requested outfit assembly reference could not be located.</p>
        <Link href="/account/saved-looks" className="font-body text-[10px] tracking-widest uppercase text-primary underline">
          Back to Digital Wardrobe &rarr;
        </Link>
      </div>
    );
  }

  const handleAddEntireLookToBag = () => {
    look.products.forEach((product) => {
      const variantId = product.variants?.[0]?.id || product.variants?.[0]?.sku || product.sku;
      addToCart({ productId: product.sku, variantId, quantity: 1 });
    });
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 4000);
  };

  const handleConsultStylist = () => {
    const msg = `Hello AISCHMIRA Styling Concierge,\n\nI am viewing the outfit assembly: "${look.name}" (${look.season}).\n\nI would like to inquire about bespoke fit adjustments and complete outfit availability. Thank you!`;
    const url = getWhatsAppInquiryUrl(msg);
    window.open(url, "_blank");
  };

  return (
    <main className="pt-28 md:pt-36 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="container-custom space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
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
              <Link href="/account/saved-looks" className="hover:text-text transition-colors">
                Digital Wardrobe
              </Link>
            </li>
            <li>
              <ChevronRight size={10} className="text-text/30" />
            </li>
            <li className="text-text font-medium">{look.name}</li>
          </ol>
        </nav>

        {/* Editorial Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Cover Photo */}
          <div className="lg:col-span-6 relative aspect-[3/4] bg-surface rounded-sm overflow-hidden border border-border/30 shadow-lg">
            <Image
              src={look.coverImage}
              alt={look.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border/40 px-3.5 py-1 rounded-full font-body text-[10px] tracking-widest uppercase text-text/80 flex items-center gap-1.5">
              <Tag size={12} className="text-amber-700" /> {look.occasion}
            </div>
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border border-border/40 px-3.5 py-1 rounded-full font-body text-[10px] tracking-widest uppercase text-text/80">
              {look.season}
            </div>
          </div>

          {/* Look Details & Story */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-amber-700 block">
                AISCHMIRA Privé &bull; Curated Assembly
              </span>
              <h1 className="font-heading italic text-4xl md:text-6xl text-text font-light">
                {look.name}
              </h1>
              <p className="font-body text-sm text-text/70 leading-relaxed font-light">
                {look.description}
              </p>
            </div>

            {/* Palette & Estimated Total */}
            <div className="p-6 bg-surface/60 border border-border/40 rounded-sm space-y-4 font-body text-xs">
              <div className="flex justify-between items-center">
                <span className="tracking-widest uppercase text-text/50">Curated Palette</span>
                <div className="flex items-center gap-2">
                  {look.colorPalette.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-border/40"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-3 border-t border-border/30 font-medium">
                <span className="tracking-widest uppercase text-text/60">Complete Assembly Value</span>
                <span className="font-heading italic text-3xl text-text font-light">
                  {formatter.format(look.totalEstimatedValue)}
                </span>
              </div>
            </div>

            {/* Outfit Story & Styling Notes */}
            <div className="space-y-4 border-t border-border/30 pt-6 font-body text-xs text-text/70 font-light leading-relaxed">
              <div>
                <h3 className="font-heading italic text-xl text-text font-light mb-1">Outfit Narrative</h3>
                <p>{look.outfitStory}</p>
              </div>

              <div>
                <h3 className="font-heading italic text-xl text-text font-light mb-1">Stylist Recommendation</h3>
                <p className="italic bg-background p-4 border border-border/30 rounded-sm">&ldquo;{look.stylingNotes}&rdquo;</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleAddEntireLookToBag}
                className="flex-1 bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 px-6 rounded-sm hover:bg-primary transition-colors font-medium shadow-sm flex items-center justify-center gap-2"
              >
                {addedToBag ? <Check size={16} className="text-emerald-400" /> : <ShoppingBag size={16} />}
                {addedToBag ? "Entire Look Added to Bag" : "Add Entire Look to Shopping Bag"}
              </button>

              <button
                onClick={handleConsultStylist}
                className="bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 px-6 rounded-sm hover:opacity-95 transition-opacity font-medium flex items-center justify-center gap-2 shrink-0"
              >
                <MessageCircle size={16} /> Consult Stylist
              </button>
            </div>
          </div>
        </div>

        {/* Included Garments Grid */}
        <section className="pt-16 border-t border-border/40 space-y-10">
          <div className="text-center space-y-2">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block">
              Ensemble Components
            </span>
            <h2 className="font-heading italic text-3xl md:text-4xl text-text font-light">
              Garments in This Look ({look.products.length})
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
            {look.products.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
