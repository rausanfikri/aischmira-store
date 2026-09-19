import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
export const metadata: Metadata = { title: { default: "AISCHMIRA · Quiet confidence", template: "%s | AISCHMIRA" }, description: "Explore the AISCHMIRA collection. Storefront prototype.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="en"><body><Header /><main id="main">{children}</main><footer><Link className="wordmark" href="/">AISCHMIRA</Link><p>Considered pieces. Everyday presence.</p><div className="footer-links"><Link href="/products">Explore the collection</Link><Link href="/bazaar">Visit us</Link><Link href="/account">Your account</Link></div><p className="muted">Instagram · Facebook · Threads · TikTok · YouTube · X<br />@aischmira</p><small>© AISCHMIRA · Working storefront prototype</small></footer></body></html>; }
