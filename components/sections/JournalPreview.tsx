"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function JournalPreview() {
  const articles = [
    {
      id: 1,
      title: "The Art of Layering",
      date: "October 12, 2026",
      category: "Style Guide",
      image: "/images/products/placeholder.png",
      excerpt: "Discover how to seamlessly transition your wardrobe through the seasons with our definitive guide to elegant layering.",
    },
    {
      id: 2,
      title: "Behind the Seams: The Silk Collection",
      date: "September 28, 2026",
      category: "Craftsmanship",
      image: "/images/products/placeholder.png",
      excerpt: "An exclusive look into the creation of our latest silk collection, from initial sketches to the final hand-stitched border.",
    },
    {
      id: 3,
      title: "Minimalism Mastered",
      date: "September 15, 2026",
      category: "Editorial",
      image: "/images/products/placeholder.png",
      excerpt: "Embracing the quiet luxury of simplicity. How to curate a capsule wardrobe that speaks volumes with less.",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block mb-3 font-medium">
              Editorial Insights
            </span>
            <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text font-light">
              The AISCHMIRA Journal
            </h2>
          </div>

          <Link
            href="/journal"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-text hover:text-primary transition-colors border-b border-text hover:border-primary pb-1 font-medium inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            Read All Articles <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col group bg-surface border border-border/30 rounded-sm overflow-hidden p-6 hover:shadow-md transition-all duration-500"
            >
              <Link href="/journal" className="block relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-background">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>

              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 font-body text-[9px] tracking-widest uppercase">
                  <span className="text-primary font-bold">{article.category}</span>
                  <span className="text-text/40">{article.date}</span>
                </div>

                <Link href="/journal">
                  <h3 className="font-heading italic text-2xl text-text group-hover:text-primary transition-colors mb-3 font-light leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="font-body text-xs font-light text-text/70 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <Link
                  href="/journal"
                  className="mt-auto font-body text-[9px] tracking-widest uppercase text-text/80 group-hover:text-primary transition-colors inline-flex items-center gap-1 font-medium"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
