import Link from "next/link";
import { notFound } from "next/navigation";
import { products, categories, slugify } from "@/services/storefront";
import { ProductGrid } from "@/components/ProductGrid";
export async function generateMetadata({ params }: {
    params: Promise<{
        category: string;
    }>;
}) { return { title: (await params).category.replaceAll("-", " ") }; }
export default async function Page({ params }: {
    params: Promise<{
        category: string;
    }>;
}) { const slug = (await params).category; const name = categories.find(c => slugify(c) === slug); if (!name)
    notFound(); const selected = products.filter(p => p.category === name); return <section className="section"><Link href="/categories">← Categories</Link><h1>{name}</h1><nav className="filter-links" aria-label="Sub-collections">{[...new Set(selected.map(p => p.subCollection))].map(s => <Link key={s} href={`/sub-collections/${slugify(name)}--${slugify(s)}`}>{s}</Link>)}</nav><ProductGrid products={selected}/></section>; }
