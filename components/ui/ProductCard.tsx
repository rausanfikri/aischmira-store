import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return (
    <Link href={`/products/${product.slug}`} className="group flex flex-col gap-4">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-surface overflow-hidden">
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-border/20" />
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex justify-center">
          <span className="bg-surface/90 backdrop-blur-sm text-text font-body text-[10px] tracking-widest uppercase px-6 py-3 rounded-full shadow-lg whitespace-nowrap">
            View Details
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h3 className="font-heading text-lg md:text-xl text-text group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="font-body text-[10px] md:text-xs tracking-widest text-text/60">{formatter.format(product.basePrice)}</p>
      </div>
    </Link>
  );
}
