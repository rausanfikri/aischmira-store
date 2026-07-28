import { notFound } from "next/navigation";
import Link from "next/link";
import { productsData } from "@/data/products";
import { collectionsData } from "@/data/collections";
import { Metadata } from "next";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductCard } from "@/components/ui/ProductCard";
import { RecentlyViewed } from "@/components/products/RecentlyViewed";
import { StickyWhatsAppCTA } from "@/components/products/StickyWhatsAppCTA";
import { ChevronRight, MessageCircle, Sparkles, Gem } from "lucide-react";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found | AISCHMIRA" };
  
  return {
    title: `${product.name} | AISCHMIRA`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const collection = collectionsData.find((c) => c.id === product.collectionId);

  const relatedProducts = product.relatedProductIds 
    ? productsData.filter((p) => product.relatedProductIds?.includes(p.id))
    : productsData.filter((p) => p.collectionId === product.collectionId && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-8 md:pt-12 pb-28 md:pb-36 bg-background min-h-screen">
      <div className="container-custom">

        {/* 1. Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-text/50">
            <li><Link href="/" className="hover:text-text transition-colors">Home</Link></li>
            <li><ChevronRight size={10} className="text-text/30" /></li>
            <li><Link href="/collections" className="hover:text-text transition-colors">Collections</Link></li>
            {collection && (
              <>
                <li><ChevronRight size={10} className="text-text/30" /></li>
                <li><Link href={`/collections/${collection.slug}`} className="hover:text-text transition-colors">{collection.name}</Link></li>
              </>
            )}
            <li><ChevronRight size={10} className="text-text/30" /></li>
            <li className="text-text font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* 2. Sticky Desktop Gallery & Product Information Split View */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24 md:mb-32">
          
          {/* Gallery */}
          <div className="w-full lg:w-7/12">
            <ProductGallery images={product.images} />
          </div>

          {/* Product Info & Selectors */}
          <div className="w-full lg:w-5/12">
            <ProductInfo product={product} />
          </div>

        </div>

      </div>

      {/* 3. Product Story, Designer Notes & Materials Composition Section */}
      <div className="w-full bg-surface py-20 md:py-28 mb-24 md:mb-32 border-y border-border/40">
        <div className="container-editorial text-center space-y-8">
          <div className="space-y-3">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block font-medium">
              Editorial Narrative
            </span>
            <h3 className="font-heading italic text-3xl md:text-5xl text-text font-light">
              The Inspiration & Craftsmanship
            </h3>
          </div>
          
          <p className="font-body text-sm md:text-base leading-relaxed text-text/75 font-light prose-reading">
            {product.story || "A testament to enduring style, this piece blends classic construction with contemporary aesthetics to deliver unparalleled elegance."}
          </p>

          {/* Designer Notes & Material Badges */}
          <div className="pt-6 border-t border-border/30 max-w-xl mx-auto flex flex-col items-center gap-4">
            <span className="font-body text-[9px] tracking-[0.25em] uppercase text-primary font-bold flex items-center gap-1.5">
              <Sparkles size={14} /> Designer Notes
            </span>
            <p className="font-body text-xs text-text/60 italic font-light">
              &ldquo;Hand-cut with precision to honor the movement of natural fibers, ensuring effortless drape and silhouette stability.&rdquo;
            </p>
            {product.material && (
              <span className="font-body text-[9px] tracking-widest uppercase bg-background border border-border/40 text-text/80 px-4 py-1.5 rounded-sm flex items-center gap-1.5 mt-2">
                <Gem size={12} className="text-primary" /> {product.material}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container-custom space-y-24 md:space-y-32">
        
        {/* 4. Related Products Grid */}
        {relatedProducts.length > 0 && (
          <section className="space-y-12">
            <div className="flex items-center justify-between border-b border-border/40 pb-6">
              <div>
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-text/50 block mb-1">
                  Styling Suggestions
                </span>
                <h2 className="font-heading italic text-3xl md:text-4xl text-text font-light">
                  Complete the Look
                </h2>
              </div>
              <Link
                href="/collections"
                className="font-body text-[10px] tracking-[0.2em] uppercase text-text hover:text-primary transition-colors border-b border-text hover:border-primary pb-0.5 font-medium"
              >
                View Catalog &rarr;
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* 5. Recently Viewed Products (Client Browsing History) */}
        <RecentlyViewed currentProductId={product.id} />

        {/* 6. Direct WhatsApp Concierge Styling CTA */}
        <section className="bg-surface p-10 md:p-16 border border-border/40 rounded-sm text-center space-y-6 max-w-[960px] mx-auto shadow-sm">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Dedicated Fashion Concierge
          </span>
          <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light">
            Need Personal Sizing or Styling Assistance?
          </h3>
          <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed font-light prose-reading">
            Connect directly with an AISCHMIRA fashion advisor on WhatsApp for instant guidance on fit, color matching, and worldwide delivery.
          </p>
          <div>
            <a
              href={`https://wa.me/6285121344848?text=Hello%20AISCHMIRA%20Concierge,%20I%20have%20a%20question%20regarding%20${encodeURIComponent(product.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium hover:opacity-95 transition-opacity"
            >
              <MessageCircle size={16} /> Consult Styling Concierge
            </a>
          </div>
        </section>

      </div>

      {/* 7. Sticky Mobile WhatsApp CTA Bar */}
      <StickyWhatsAppCTA product={product} />

    </div>
  );
}
