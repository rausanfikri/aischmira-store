"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { productsData } from "@/data/products";

const WHATSAPP_URL =
  "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

export function ProductHighlight() {
  return (
    <section className="section-padding bg-section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-widest uppercase mb-5"
          >
            Best Collection
          </motion.h2>
          <div className="section-divider mb-5" />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-base text-[var(--color-text-secondary)] max-w-lg"
          >
            Our most-loved pieces — timeless silhouettes for every occasion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex flex-col"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-soft mb-4 bg-primary-light">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Best Seller Badge — gold accent */}
                {product.isFeatured && (
                  <div className="absolute top-3 left-3 bg-accent text-primary-foreground px-2.5 py-0.5 text-[9px] tracking-widest uppercase font-body rounded-sm">
                    Best Seller
                  </div>
                )}

                {/* Hover CTA */}
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${product.name} via WhatsApp`}
                    className="flex w-full items-center justify-center bg-primary text-primary-foreground py-3 font-body text-[11px] tracking-[0.15em] uppercase rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col space-y-1 px-1">
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
                  {product.categoryId}
                </p>
                <h3 className="font-heading text-lg text-text tracking-wide leading-snug">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-primary font-medium">
                  Rp {product.basePrice.toLocaleString("id-ID")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="Lihat semua produk AISCHMIRA via WhatsApp"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
