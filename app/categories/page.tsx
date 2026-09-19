import Link from "next/link";
import { categories, slugify } from "@/services/storefront";
export const metadata = { title: "Categories" };
export default function Page() { return <section className="section"><p className="eyebrow">Find your perspective</p><h1>Categories</h1><div className="collection-grid">{categories.map(c => <Link className="collection-panel" key={c} href={`/categories/${slugify(c)}`}><h2>{c}</h2><span>Explore ↗</span></Link>)}</div></section>; }
