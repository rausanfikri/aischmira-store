import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { productService } from "@/services/product.service";
import { collectionService } from "@/services/collection.service";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductCard } from "@/components/ui/ProductCard";
import { RecentlyViewed } from "@/components/products/RecentlyViewed";
import { StickyWhatsAppCTA } from "@/components/products/StickyWhatsAppCTA";
import { ProductEditorial } from "@/components/products/ProductEditorial";
import { ProductJsonLd } from "@/components/products/ProductJsonLd";
import { ChevronRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await productService.getProductBySlug(slug);
  const product = result.isSuccess ? result.value : null;

  if (!product) return { title: "Product Not Found | AISCHMIRA" };

  return {
    title: `${product.name} | AISCHMIRA Flagship Luxury`,
    description: product.description,
    openGraph: {
      title: `${product.name} | AISCHMIRA`,
      description: product.description,
      images: product.images && product.images[0] ? [{ url: product.images[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | AISCHMIRA`,
      description: product.description,
    },
  };
}

export async function generateStaticParams() {
  const result = await productService.getProducts();
  const products = result.isSuccess ? result.value : [];
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  
  // Fetch product via ProductService
  const productResult = await productService.getProductBySlug(slug);
  const product = productResult.isSuccess ? productResult.value : null;

  if (!product) notFound();

  // Fetch collections via CollectionService to resolve collection details
  const collectionsResult = await collectionService.getCollections();
  const collections = collectionsResult.isSuccess ? collectionsResult.value : [];
  const collection = collections.find((c) => c.id === product.collectionId) || null;

  // Fetch all products to get related products & complete the look
  const productsResult = await productService.getProducts();
  const allProducts = productsResult.isSuccess ? productsResult.value : [];

  const relatedProducts = allProducts
    .filter((p) => p.collectionId === product.collectionId && p.sku !== product.sku)
    .slice(0, 4);

  const whatsAppConciergeUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello AISCHMIRA Styling Concierge, I have an inquiry regarding ${product.name} (${product.sku}).`
  )}`;

  return (
    <main className="pt-8 md:pt-12 pb-28 md:pb-36 bg-background min-h-screen">
      {/* Dynamic JSON-LD Structured Data Schema for SEO */}
      <ProductJsonLd product={product} collection={collection} />

      <div className="container-custom">
        {/* 1. Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
          <ol className="flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-text/50 flex-wrap">
            <li>
              <Link href="/" className="hover:text-text transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={10} className="text-text/30" />
            </li>
            <li>
              <Link href="/collections" className="hover:text-text transition-colors">
                Collections
              </Link>
            </li>
            {collection && (
              <>
                <li>
                  <ChevronRight size={10} className="text-text/30" />
                </li>
                <li>
                  <Link href={`/collections/${collection.slug}`} className="hover:text-text transition-colors">
                    {collection.name}
                  </Link>
                </li>
              </>
            )}
            <li>
              <ChevronRight size={10} className="text-text/30" />
            </li>
            <li className="text-text font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* 2. Gallery & Product Information Split View */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24 md:mb-32">
          {/* Gallery Column */}
          <div className="w-full lg:w-7/12">
            <ProductGallery images={product.images || []} />
          </div>

          {/* Product Info & Selectors Column */}
          <div className="w-full lg:w-5/12">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* 3. Editorial Storytelling & Atelier Craftsmanship */}
      <ProductEditorial product={product} collection={collection} />

      <div className="container-custom space-y-24 md:space-y-32">
        {/* 4. Complete the Look / Styling Suggestions */}
        {relatedProducts.length > 0 && (
          <section className="space-y-10">
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
                <ProductCard key={p.sku} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* 5. Client Browsing History (Recently Viewed) */}
        <RecentlyViewed currentProductId={product.sku} allProducts={allProducts} />

        {/* 6. WhatsApp Personal Styling Concierge Section */}
        <section className="bg-surface p-10 md:p-16 border border-border/40 rounded-sm text-center space-y-6 max-w-[960px] mx-auto">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Dedicated Fashion Concierge
          </span>
          <h3 className="font-heading italic text-3xl md:text-4xl text-text font-light">
            Need Personal Sizing or Bespoke Tailoring Assistance?
          </h3>
          <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed font-light max-w-xl mx-auto">
            Connect directly with an AISCHMIRA fashion director on WhatsApp for instant guidance on fit, silk care, and worldwide delivery.
          </p>
          <div>
            <a
              href={whatsAppConciergeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium hover:opacity-95 transition-opacity shadow-md"
            >
              <MessageCircle size={16} /> Consult Styling Concierge
            </a>
          </div>
        </section>
      </div>

      {/* 7. Sticky Mobile WhatsApp CTA Bar */}
      <StickyWhatsAppCTA product={product} />
    </main>
  );
}
