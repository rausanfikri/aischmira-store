"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/domain/product";

const WHATSAPP_URL =
  "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

interface ProductHighlightProps {
  products?: Product[];
}

export function ProductHighlight({ products = [] }: ProductHighlightProps) {
  return (
    <section className="section-padding bg-section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-[0.1em] uppercase mb-6"
          >
            New Arrival
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-divider origin-center mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-body text-[13px] sm:text-sm tracking-wide text-text-secondary max-w-lg font-light"
          >
            Our most-loved pieces — timeless silhouettes for every occasion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.sku}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[2/3] overflow-hidden bg-primary-light mb-6">
                <Image
                  src={product.images[0] || "/images/products/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  quality={90}
                />

                {/* Premium Badge */}
                {product.isFeatured && (
                  <div className="absolute top-4 left-4 bg-surface text-text px-4 py-1.5 text-[9px] tracking-[0.25em] uppercase font-body shadow-sm">
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
                    className="flex w-full items-center justify-center bg-text/90 backdrop-blur-sm text-surface py-3.5 font-body text-[10px] tracking-[0.2em] uppercase rounded-none hover:bg-primary transition-colors"
                  >
                    Shop via WhatsApp
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col items-center text-center space-y-2 px-1">
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-text/50">
                  {product.categoryId}
                </p>
                <h3 className="font-heading text-xl sm:text-2xl text-text tracking-wide font-light">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-text/70">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
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
