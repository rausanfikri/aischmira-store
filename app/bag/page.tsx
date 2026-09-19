import { Bag } from "@/components/Bag";
import { products } from "@/services/storefront";
export const metadata = { title: "Your bag" };
export default function Page() { return <section className="section"><p className="eyebrow">Your personal edit</p><h1>The bag</h1><Bag products={products}/></section>; }
