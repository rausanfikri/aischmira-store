import Link from "next/link";
import { products, categories, slugify } from "@/services/storefront";
import { ProductGrid } from "@/components/ProductGrid";
export const metadata = { title: "Shop the collection" };
export default function Page() { return <section className="section"><p className="eyebrow">The complete edit</p><h1>The collection</h1><p className="intro">Explore {products.length} product stories, drawn from our latest collection.</p><nav className="filter-links" aria-label="Shop by category">{categories.map(c => <Link key={c} href={`/categories/${slugify(c)}`}>{c}</Link>)}</nav><ProductGrid products={products}/></section>; }
