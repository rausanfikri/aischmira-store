import { Bag } from "@/components/Bag";
import { products } from "@/services/storefront";
export const metadata = { title: "Checkout" };
export default function Page() { return <section className="section"><p className="eyebrow">A conversation away</p><h1>Checkout</h1><Bag products={products} checkout/></section>; }
