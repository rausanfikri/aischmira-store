"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { StoreMedia } from "./StoreMedia";
import { money } from "@/lib/commerce";
import { useBag } from "@/store/bag";
import type { StoreProduct } from "@/types/storefront";
export function ProductDetail({ product }: {
    product: StoreProduct;
}) {
    const [color, setColor] = useState(product.variants[0].color);
    const [sku, setSku] = useState("");
    const [image, setImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [notice, setNotice] = useState("");
    const bag = useBag();
    const colors = [...new Set(product.variants.map(v => v.color))];
    const variants = product.variants.filter(v => v.color === color);
    const selected = variants.find(v => v.sku === sku);
    const visual = selected || variants[0];
    function add() { if (!selected || selected.status !== "ACTIVE")
        return; const existing = bag.lines.find(l => l.sku === selected.sku); bag.setLines(existing ? bag.lines.map(l => l.sku === selected.sku ? { ...l, quantity: l.quantity + quantity } : l) : [...bag.lines, { sku: selected.sku, quantity }]); setNotice(useBag.getState().error || "Added to your bag."); }
    return <div className="product-detail"><div><StoreMedia variant={visual} name={product.name} index={image} priority/><div className="thumbnails">{visual.media.map((m, i) => <button key={m.src} onClick={() => setImage(i)} aria-label={`View image ${i + 1}`} aria-pressed={image === i}><Image src={m.src} alt={m.alt} width={70} height={94}/></button>)}</div></div><div className="product-info"><p className="eyebrow">{product.collection} / {product.subCollection}</p><h1>{product.name}</h1><p>{product.category}</p><p className="price">{BigInt(visual.startPrice) > BigInt(visual.finalPrice) && <del>{money(visual.startPrice)}</del>} {money(visual.finalPrice)}</p><p className="description">{product.description}</p><fieldset><legend>Colour — {color}</legend><div className="choices">{colors.map(c => { const v = product.variants.find(v => v.color === c)!; return <button key={c} aria-pressed={color === c} onClick={() => { setColor(c); setSku(""); setImage(0); setNotice(""); }}><span className="swatch" style={{ backgroundColor: v.colorCode || "transparent" }}/>{c}</button>; })}</div></fieldset><fieldset><legend>Size {selected ? `— ${selected.size}` : "— select your size"}</legend><div className="choices">{variants.map(v => <button key={v.sku} aria-pressed={sku === v.sku} disabled={v.status !== "ACTIVE"} onClick={() => { setSku(v.sku); setNotice(""); }}>{v.size}</button>)}</div></fieldset><p className="muted">SKU: {selected?.sku || "Select a size"}</p><label className="quantity-label">Quantity<input type="number" min="1" max="999" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/></label><button className="button wide" disabled={!selected || !bag.ready || !!bag.error || !Number.isInteger(quantity) || quantity < 1 || quantity > 999} onClick={add}>Add to bag</button><p role="status">{notice || bag.error} {notice === "Added to your bag." && <Link href="/bag">View bag ↗</Link>}</p><details open><summary>Fabric & details</summary><p>{visual.fabric || "Fabric information has not yet been supplied."}</p><p>Official colour code: {visual.colorCode || "Not supplied"}</p></details><p className="muted">Storefront demo. Confirm product details with our concierge before ordering.</p></div></div>;
}
