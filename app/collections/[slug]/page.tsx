import Link from "next/link";
import { notFound } from "next/navigation";
import { products, collections, slugify } from "@/services/storefront";
import { ProductGrid } from "@/components/ProductGrid";
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { return { title: (await params).slug.replaceAll("-", " ") }; }
export default async function Page({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { const slug = (await params).slug; const name = collections.find(c => slugify(c) === slug); if (!name)
    notFound(); const selected = products.filter(p => p.collection === name); return <section className="section"><Link href="/collections">← Collections</Link><h1>{name}</h1><nav className="filter-links" aria-label="Sub-collections">{[...new Set(selected.map(p => p.subCollection))].map(s => <Link key={s} href={`/sub-collections/${slugify(name)}--${slugify(s)}`}>{s}</Link>)}</nav><ProductGrid products={selected}/></section>; }
