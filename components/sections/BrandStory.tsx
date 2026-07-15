"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-text font-light tracking-widest uppercase mb-8">
              The Aischmira Story
            </h2>
            <div className="h-px w-24 bg-primary mb-8" />
            
            <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed mb-6">
              AISCHMIRA adalah brand fashion wanita yang menghadirkan busana elegan, timeless, dan nyaman digunakan oleh perempuan modern Indonesia.
            </p>
            <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed mb-10">
              We believe in the power of minimalism mixed with luxurious touches. Every thread, every cut, and every silhouette is designed to empower your daily journey with grace and confidence.
            </p>
            
            <Link
              href="/about"
              className="font-body text-sm tracking-widest uppercase border-b border-text text-text pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Discover More
            </Link>
          </motion.div>

          {/* Editorial Image Grid */}
          <div className="relative h-[600px] w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-3/4 h-[70%] rounded-md overflow-hidden shadow-soft z-10"
            >
              <Image
                src="https://picsum.photos/seed/aischmira-story-1/800/1000"
                alt="AISCHMIRA Editorial"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-2/3 h-[50%] rounded-md overflow-hidden shadow-soft z-20 border-8 border-background"
            >
              <Image
                src="https://picsum.photos/seed/aischmira-story-2/800/800"
                alt="AISCHMIRA Details"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
