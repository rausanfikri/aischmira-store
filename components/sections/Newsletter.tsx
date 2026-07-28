"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <section className="bg-surface py-24 md:py-36 border-b border-border/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text/50 block">
            Private Correspondence
          </span>

          <h2 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text">
            Join the AISCHMIRA Journal
          </h2>

          <p className="font-body text-xs md:text-sm tracking-editorial uppercase text-text/60 font-light leading-relaxed max-w-xl mx-auto">
            Receive exclusive collection previews and editorial updates.
          </p>

          {subscribed ? (
            <div className="p-4 bg-emerald-900 text-white rounded-sm font-body text-xs inline-flex items-center gap-2 animate-fadeIn">
              <Check size={16} /> Thank you for subscribing to the AISCHMIRA Journal.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-6 max-w-md mx-auto relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-border/80 pb-3 font-body text-xs text-text tracking-widest uppercase focus:outline-none focus:border-text transition-colors placeholder:text-text/30 pr-12"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 text-text/60 hover:text-text transition-colors p-1"
                aria-label="Subscribe to Journal"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-body text-[9px] text-text/40 tracking-widest uppercase pt-2">
            Unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
