"use client";
import Link from "next/link";
import { useState } from "react";
import { useBag } from "@/store/bag";
import { money, resolveBag } from "@/lib/commerce";
import type { StoreProduct } from "@/types/storefront";
import { reviewCheckout } from "@/app/checkout/actions";
export function Bag({ products, checkout = false }: {
    products: StoreProduct[];
    checkout?: boolean;
}) {
    const bag = useBag();
    const [review, setReview] = useState<{
        message: string;
        url: string;
        signature: string;
    } | null>(null);
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    let total = BigInt(0);
    let invalid = "";
    try {
        total = resolveBag(bag.lines, products).reduce((sum, r) => sum + r.subtotal, BigInt(0));
    }
    catch (e) {
        invalid = (e as Error).message;
    }
    if (!bag.ready)
        return <p>Loading your bag…</p>;
    async function submit(form: FormData) { setBusy(true); setError(""); setReview(null); try {
        const result = await reviewCheckout(bag.lines, { name: String(form.get("name") || ""), phone: String(form.get("phone") || ""), address: String(form.get("address") || "") });
        setBusy(false);
        if ("error" in result)
            setError(result.error);
        else
            setReview({ ...result, signature: JSON.stringify(bag.lines) });
    }
    catch {
        setBusy(false);
        setError("Checkout review is unavailable. Please try again.");
    } }
    return <><div className="bag-layout"><div>{bag.lines.length === 0 ? <p>Your bag is waiting for something special. <Link href="/products">Explore the collection ↗</Link></p> : bag.lines.map(line => { const p = products.find(p => p.variants.some(v => v.sku === line.sku)); const v = p?.variants.find(v => v.sku === line.sku); return <article className="bag-line" key={line.sku}><div><h2>{p ? `${p.subCollection} / ${p.name}` : "Unavailable SKU"}</h2><p>{v?.color} / {v?.size}</p><p className="sku">{line.sku}</p>{v && <p>{money(v.finalPrice)} each</p>}<button className="text-button" onClick={() => bag.setLines(bag.lines.filter(l => l.sku !== line.sku))}>Remove</button></div><div><label>Quantity<input aria-label={`Quantity for ${line.sku}`} type="number" min="1" max="999" value={line.quantity} onChange={e => { const n = Number(e.target.value); if (Number.isInteger(n) && n >= 1 && n <= 999)
        bag.setLines(bag.lines.map(l => l.sku === line.sku ? { ...l, quantity: n } : l)); }}/></label>{v && <p>{money(BigInt(v.finalPrice) * BigInt(line.quantity))}</p>}</div></article>; })}</div><aside className="bag-summary"><h2>Your selection</h2><p className="total">Subtotal <span>{invalid ? "Needs review" : money(total)}</span></p><p>Shipping will be confirmed by our concierge.</p>{(invalid || bag.error) && <p role="alert">{invalid || bag.error}</p>}{bag.error && <button onClick={() => bag.setLines([])}>Clear bag</button>}{!checkout && bag.lines.length > 0 && !invalid && !bag.error && <Link className="button wide" href="/checkout">Continue to checkout ↗</Link>}<p className="muted">Demo order request. No payment is collected.</p></aside></div>{checkout && bag.lines.length > 0 && !invalid && !bag.error && <form className="checkout-form" onSubmit={event => { event.preventDefault(); void submit(new FormData(event.currentTarget)); }} onChange={() => setReview(null)}><h2>Customer information</h2><label>Name<input disabled={busy} name="name" autoComplete="name" required maxLength={120}/></label><label>Active WhatsApp number<input disabled={busy} name="phone" autoComplete="tel" type="tel" required maxLength={20} placeholder="+62…"/></label><label>Shipping address<textarea disabled={busy} name="address" autoComplete="street-address" required maxLength={1000} rows={4}/></label><button className="button" disabled={busy}>{busy ? "Preparing review…" : "Review order"}</button><p role="alert">{error}</p></form>}{review && review.signature === JSON.stringify(bag.lines) && <section className="order-review"><h2>Review your WhatsApp request</h2><pre>{review.message}</pre><a className="button" href={review.url} target="_blank" rel="noopener noreferrer">Open WhatsApp ↗</a><p>Opening WhatsApp does not submit or confirm your order.</p></section>}</>;
}
