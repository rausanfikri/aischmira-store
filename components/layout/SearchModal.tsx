"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";
import { productsData } from "@/data/products";

export default function SearchModal() {
  const searchOpen = useUIStore((state) => state.searchOpen);
  const setSearchOpen = useUIStore((state) => state.setSearchOpen);
  const [query, setQuery] = React.useState("");

  const filteredProducts = React.useMemo(() => {
    if (!query.trim()) return productsData.slice(0, 3);
    return productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return (
    <Dialog.Root open={searchOpen} onOpenChange={setSearchOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center p-6 pt-24 md:pt-32 overflow-y-auto data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut">
          
          {/* Close button */}
          <Dialog.Close asChild>
            <button
              className="absolute top-8 right-8 text-text/70 hover:text-text transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
              aria-label="Close search"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </Dialog.Close>
          
          {/* Fullscreen Input Bar */}
          <div className="w-full max-w-4xl relative mb-12">
            <Dialog.Title className="sr-only">Search AISCHMIRA Catalog</Dialog.Title>
            <Dialog.Description className="sr-only">Search for products, collections, and materials.</Dialog.Description>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, collections, scarves..."
              className="w-full bg-transparent border-b border-text/30 focus:border-primary text-2xl md:text-4xl font-heading font-light py-4 pr-12 outline-none placeholder:text-text/30 transition-colors uppercase tracking-wider"
              autoFocus
              aria-label="Search catalog input"
            />
            <Search size={24} className="absolute right-0 top-1/2 -translate-y-1/2 text-text/40" strokeWidth={1.5} />
          </div>

          {/* Search Content Grid */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-10 text-left pb-16">
            
            {/* Recent Searches */}
            <div>
              <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-5 border-b border-border/30 pb-2">
                Recent Searches
              </h3>
              <ul className="flex flex-col gap-3 font-heading italic text-xl text-text/80">
                <li><button onClick={() => setQuery("Silk")} className="hover:text-primary transition-colors">Silk Scarves</button></li>
                <li><button onClick={() => setQuery("Blazer")} className="hover:text-primary transition-colors">Priscila Blazer</button></li>
                <li><button onClick={() => setQuery("Trousers")} className="hover:text-primary transition-colors">Safira Trousers</button></li>
              </ul>
            </div>

            {/* Popular Collections */}
            <div>
              <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-5 border-b border-border/30 pb-2">
                Suggested Collections
              </h3>
              <ul className="flex flex-col gap-3 font-heading italic text-xl text-text/80">
                <li><Link href="/collections/femme" onClick={() => setSearchOpen(false)} className="hover:text-primary transition-colors block">FEMME Collection</Link></li>
                <li><Link href="/collections/her" onClick={() => setSearchOpen(false)} className="hover:text-primary transition-colors block">HER Edit</Link></li>
                <li><Link href="/collections/she" onClick={() => setSearchOpen(false)} className="hover:text-primary transition-colors block">SHE Signature</Link></li>
              </ul>
            </div>

            {/* Matching Products Preview */}
            <div>
              <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-text/40 font-bold mb-5 border-b border-border/30 pb-2">
                {query.trim() ? `Search Results (${filteredProducts.length})` : "Featured Highlights"}
              </h3>
              <div className="flex flex-col gap-4">
                {filteredProducts.slice(0, 3).map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/products/${prod.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-4 group focus:outline-none w-full text-left"
                  >
                    <div className="w-12 h-16 bg-surface overflow-hidden shrink-0 relative rounded-sm border border-border/30">
                      <Image
                        src={prod.images[0]}
                        alt={prod.name}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading italic text-lg text-text group-hover:text-primary transition-colors line-clamp-1">
                        {prod.name}
                      </span>
                      <span className="font-body text-[10px] tracking-widest text-text/60 uppercase">
                        {formatter.format(prod.basePrice)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
