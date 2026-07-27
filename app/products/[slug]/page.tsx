import { notFound } from "next/navigation";
import Link from "next/link";
import { productsData } from "@/data/products";
import { Metadata } from "next";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductCard } from "@/components/ui/ProductCard";

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

  const relatedProducts = product.relatedProductIds 
    ? productsData.filter((p) => product.relatedProductIds?.includes(p.id))
    : [];

  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      
      {/* Main Product Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 md:mb-32">
          {/* Left: Gallery */}
          <div className="w-full lg:w-3/5">
            <ProductGallery images={product.images} />
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-2/5">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* Brand Story / Full Width Image (Optional Editorial Moment) */}
      <div className="w-full bg-surface py-24 mb-24 md:mb-32 flex justify-center px-4">
        <div className="max-w-2xl text-center space-y-8">
          <h3 className="font-heading italic text-3xl md:text-4xl">The Inspiration</h3>
          <p className="font-body text-sm md:text-base leading-relaxed text-text/70">
            {product.story || "A testament to enduring style, this piece blends classic construction with contemporary aesthetics to deliver unparalleled elegance."}
          </p>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading italic text-3xl md:text-4xl text-text">Complete the Look</h2>
            <Link href="/collections" className="font-body text-[10px] tracking-widest uppercase text-text hover:text-primary transition-colors border-b border-text hover:border-primary pb-1">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
