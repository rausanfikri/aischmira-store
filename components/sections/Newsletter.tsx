"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend required, just reset the form and show success (or simply reset)
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl sm:text-3xl text-text font-light tracking-[0.2em] uppercase mb-6"
        >
          Join The Insider
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-text/70 mb-10 max-w-lg mx-auto"
        >
          Subscribe to receive updates, access to exclusive deals, and more.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 sm:gap-0"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 bg-transparent border-b border-text/30 px-4 py-3 font-body text-sm text-text placeholder:text-text/40 focus:outline-none focus:border-text transition-colors"
          />
          <button
            type="submit"
            className="sm:ml-4 px-8 py-3 bg-text text-background font-body text-sm tracking-widest uppercase hover:bg-text/90 transition-colors"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
