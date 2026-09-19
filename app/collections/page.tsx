import Link from "next/link";
import { collections, slugify } from "@/services/storefront";
export const metadata = { title: "Collections" };
export default function Page() { return <section className="section"><p className="eyebrow">Find your perspective</p><h1>Collections</h1><div className="collection-grid">{collections.map(c => <Link className="collection-panel" key={c} href={`/collections/${slugify(c)}`}><h2>{c}</h2><span>Explore ↗</span></Link>)}</div></section>; }
