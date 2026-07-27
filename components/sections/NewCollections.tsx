import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/collections";

export function NewCollections() {
  const newCollections = collectionsData.filter(c => ["femme", "her", "she"].includes(c.slug));

  if (newCollections.length === 0) return null;

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-heading italic text-3xl md:text-5xl text-text mb-4">Latest Additions</h2>
          <Link href="/collections" className="font-body text-[10px] tracking-widest uppercase text-text/50 hover:text-text border-b border-text/30 hover:border-text pb-1 transition-colors">
            Discover All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newCollections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.slug}`} className="group block relative aspect-[3/4] overflow-hidden">
              <Image 
                src={collection.coverImage} 
                alt={collection.name} 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex flex-col justify-end p-8">
                <h3 className="font-heading italic text-3xl text-surface">{collection.name}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
