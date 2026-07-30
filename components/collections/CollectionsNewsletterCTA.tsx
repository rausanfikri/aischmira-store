"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

export function CollectionsNewsletterCTA() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-36 bg-surface border-t border-border/40 text-center">
      <div className="container-custom max-w-3xl mx-auto space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-primary font-bold block">
            AISCHMIRA Privé Membership
          </span>
          <h2 className="font-heading italic text-3xl sm:text-4xl md:text-5xl text-text leading-tight">
            Be First to Receive New Collection Previews
          </h2>
          <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed font-light max-w-xl mx-auto">
            Join our private atelier circle for private drop invitations, lookbook previews, and exclusive access to limited mulberry silk capsule releases.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-md mx-auto"
        >
          {subscribed ? (
            <div className="p-6 bg-background border border-primary/40 rounded-sm flex items-center justify-center gap-3 text-text">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-body text-xs tracking-wide uppercase font-medium">
                Welcome to AISCHMIRA Privé. Your invitation is confirmed.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text/40 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-background border border-border/60 rounded-sm py-3.5 pl-11 pr-4 font-body text-xs text-text placeholder:text-text/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-text text-surface hover:bg-primary transition-colors font-body text-[10px] tracking-[0.25em] uppercase py-3.5 px-8 rounded-sm font-medium whitespace-nowrap"
              >
                Join Privé
              </button>
            </form>
          )}
        </motion.div>

        <p className="font-body text-[9px] tracking-widest uppercase text-text/40 font-light">
          Quiet Luxury Guarantee &bull; Zero Spam &bull; Unsubscribe Anytime
        </p>

      </div>
    </section>
  );
}
