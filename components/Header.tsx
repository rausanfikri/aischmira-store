"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useBag } from "@/store/bag";
const links = [["/products", "Shop"], ["/collections", "Collections"], ["/categories", "Categories"], ["/bazaar", "Visit us"], ["/account", "Account"]];
export function Header() {
    const dialog = useRef<HTMLDialogElement>(null);
    const trigger = useRef<HTMLButtonElement>(null);
    const { lines, hydrate } = useBag();
    useEffect(() => hydrate(), [hydrate]);
    function close() { dialog.current?.close(); trigger.current?.focus(); }
    return <><div className="demo-strip">STOREFRONT PREVIEW · Real products, illustrative content</div><header className="header"><button className="menu-button" ref={trigger} onClick={() => dialog.current?.showModal()} aria-label="Open navigation">Menu</button><Link className="wordmark" href="/">AISCHMIRA</Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([url, label]) => <Link key={url} href={url}>{label}</Link>)}</nav><Link href="/bag">Bag ({lines.reduce((n, l) => n + l.quantity, 0)})</Link></header><dialog ref={dialog} className="mobile-nav" onClose={() => trigger.current?.focus()}><button onClick={close}>Close</button><nav aria-label="Mobile navigation">{links.map(([url, label]) => <Link key={url} href={url} onClick={close}>{label}</Link>)}</nav></dialog></>;
}
