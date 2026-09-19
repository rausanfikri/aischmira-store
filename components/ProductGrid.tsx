import Link from "next/link";
import { StoreMedia } from "./StoreMedia";
import { money } from "@/lib/commerce";
import type { StoreProduct } from "@/types/storefront";
export function ProductGrid({ products }: {
    products: StoreProduct[];
}) { return <div className="product-grid">{products.map(p => <Link className="product-card" href={`/products/${p.slug}`} key={p.id}><StoreMedia variant={p.variants.find(v => v.media.length) || p.variants[0]} name={p.name}/><div className="card-meta"><span>{p.subCollection}</span><span>{money(p.variants.reduce((a, v) => BigInt(v.finalPrice) < BigInt(a) ? v.finalPrice : a, p.variants[0].finalPrice))}</span></div><h3>{p.name}</h3><p>{new Set(p.variants.map(v => v.color)).size} colours</p></Link>)}</div>; }
