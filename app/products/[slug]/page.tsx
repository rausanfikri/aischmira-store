import { notFound } from "next/navigation";
import { findProduct, products } from "@/services/storefront";
import { ProductDetail } from "@/components/ProductDetail";
export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const product = findProduct((await params).slug); return { title: product ? `${product.subCollection} / ${product.name}` : "Product not found" }; }
export default async function Page({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const product = findProduct((await params).slug); if (!product)
    notFound(); return <section className="section"><ProductDetail product={product}/></section>; }
