import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authentication | AISCHMIRA Flagship",
  description: "Access your AISCHMIRA account, order status, and Privé loyalty privileges.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-[104px] pb-24 md:pb-32 justify-center">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-surface border border-border/30 rounded-sm overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
          
          {/* Editorial Brand Image Panel (Desktop left) */}
          <div className="hidden md:flex md:col-span-5 relative bg-black flex-col justify-between p-10 text-surface">
            <Image
              src="/images/products/placeholder.png"
              alt="AISCHMIRA Flagship Editorial"
              fill
              className="object-cover object-center opacity-60"
              priority
            />
            <div className="relative z-10">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-surface/80">AISCHMIRA PRIVÉ</span>
            </div>
            <div className="relative z-10 space-y-3">
              <h2 className="font-heading italic text-3xl leading-snug">Timeless Elegance & Exclusive Concierge</h2>
              <p className="font-body text-xs text-surface/80 font-light leading-relaxed">
                Enjoy priority access to new collection drops, bespoke tailoring advice, and signature loyalty rewards.
              </p>
            </div>
          </div>

          {/* Form Content Area */}
          <div className="md:col-span-7 p-8 md:p-14 flex flex-col justify-center bg-background/50">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
