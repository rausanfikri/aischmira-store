"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-padding bg-section-cream border-t border-border/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-4 block"
        >
          Stay Connected
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text font-light tracking-widest uppercase mb-5"
        >
          Join The Insider
        </motion.h2>

        <div className="section-divider mb-6" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base text-[var(--color-text-secondary)] mb-10 max-w-md mx-auto"
        >
          Subscribe to receive updates on new collections, exclusive private sales, and editorial lookbooks.
        </motion.p>

        {/* Form Container */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-primary-light text-primary-hover rounded-xl font-body text-sm max-w-md mx-auto border border-primary/20"
          >
            Terima kasih telah berlangganan newsletter AISCHMIRA.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 items-stretch"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alamat email Anda"
              required
              aria-label="Alamat email untuk newsletter"
              className="flex-1 bg-surface border border-border px-5 py-3.5 rounded-lg font-body text-sm text-text placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-xs"
            />
            <button
              type="submit"
              className="btn-primary shrink-0 px-7 py-3.5"
            >
              Subscribe
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
