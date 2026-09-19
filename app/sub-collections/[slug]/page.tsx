import { notFound } from "next/navigation";
import { products, slugify } from "@/services/storefront";
import { ProductGrid } from "@/components/ProductGrid";
export default async function Page({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const slug = (await params).slug; const selected = products.filter(p => [p.collection, p.category].some(parent => `${slugify(parent)}--${slugify(p.subCollection)}` === slug)); if (!selected.length)
    notFound(); return <section className="section"><p className="eyebrow">{selected[0].collection}</p><h1>{selected[0].subCollection}</h1><ProductGrid products={selected}/></section>; }
