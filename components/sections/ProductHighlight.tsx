"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { productsData } from "@/data/products";

export function ProductHighlight() {
  const WHATSAPP_URL = "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl text-text font-light tracking-widest uppercase mb-4"
          >
            Best Collection
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-24 bg-primary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md shadow-soft mb-4 bg-background">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.isFeatured && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase text-text font-body">
                    Best Seller
                  </div>
                )}
                {/* Hover CTA */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center bg-white/95 backdrop-blur py-3 font-body text-xs tracking-widest uppercase text-text hover:bg-primary hover:text-white transition-colors"
                  >
                    Order via WhatsApp
                  </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="font-body text-[11px] tracking-widest uppercase text-text/50">
                  {product.categoryId}
                </p>
                <h3 className="font-heading text-lg text-text tracking-wide truncate">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-text/80">
                  Rp {product.basePrice.toLocaleString("id-ID")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <Link
              href={WHATSAPP_URL}
              className="px-8 py-4 bg-transparent border border-text text-text font-body text-sm tracking-widest uppercase hover:bg-text hover:text-white transition-colors duration-300"
            >
              View All Products
            </Link>
        </div>
      </div>
    </section>
  );
}
