import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal | AISCHMIRA",
  description: "Editorials, behind the scenes, and style inspiration from AISCHMIRA.",
};

const dummyArticles = [
  {
    id: 1,
    title: "The Art of Layering",
    date: "October 12, 2026",
    category: "Style Guide",
    image: "/images/hero/hero-bg.png",
    excerpt: "Discover how to seamlessly transition your wardrobe through the seasons with our definitive guide to elegant layering."
  },
  {
    id: 2,
    title: "Behind the Seams: The Silk Collection",
    date: "September 28, 2026",
    category: "Craftsmanship",
    image: "/images/hero/hero-bg.png",
    excerpt: "An exclusive look into the creation of our latest silk collection, from the initial sketches to the final stitch."
  },
  {
    id: 3,
    title: "Minimalism Mastered",
    date: "September 15, 2026",
    category: "Editorial",
    image: "/images/hero/hero-bg.png",
    excerpt: "Embracing the beauty of simplicity. How to curate a capsule wardrobe that speaks volumes with less."
  }
];

export default function JournalPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Journal</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50 leading-relaxed">
            Stories, inspiration, and the craft behind our collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {dummyArticles.map((article) => (
            <article key={article.id} className="flex flex-col group">
              <Link href={`/journal/${article.id}`} className="block relative aspect-[4/5] overflow-hidden mb-6">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
              </Link>
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/50">{article.category}</span>
                  <span className="font-body text-[9px] tracking-widest uppercase text-text/40">{article.date}</span>
                </div>
                <Link href={`/journal/${article.id}`}>
                  <h2 className="font-heading italic text-2xl text-text group-hover:text-primary transition-colors mb-4">{article.title}</h2>
                </Link>
                <p className="font-body text-sm font-light text-text/70 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <Link href={`/journal/${article.id}`} className="mt-auto self-start font-body text-[10px] tracking-widest uppercase text-text border-b border-text pb-0.5 hover:text-primary hover:border-primary transition-colors">
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
