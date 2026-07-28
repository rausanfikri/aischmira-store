import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | AISCHMIRA",
  description: "The requested editorial page or collection could not be located.",
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-background">
      <div className="container-editorial space-y-8 max-w-[760px] mx-auto">
        
        {/* Eyebrow Badge */}
        <span className="font-body text-[10px] tracking-[0.35em] uppercase text-text/50 block font-medium">
          404 &bull; AISCHMIRA FLAGSHIP
        </span>

        {/* Heading */}
        <h1 className="font-heading italic text-5xl sm:text-6xl md:text-7xl text-text font-light leading-tight">
          Page Unreachable
        </h1>

        {/* Narrative Description */}
        <p className="font-body text-xs sm:text-sm text-text/70 tracking-editorial uppercase leading-relaxed font-light prose-reading">
          The editorial story, product, or collection page you are seeking has been relocated or is currently unavailable in our digital archive.
        </p>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium hover:bg-primary transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <ArrowLeft size={14} /> Return to Flagship Home
          </Link>

          <Link
            href="/collections"
            className="w-full sm:w-auto border border-border/70 text-text hover:border-primary hover:text-primary font-body text-[10px] tracking-[0.2em] uppercase py-4 px-10 rounded-sm font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <Compass size={14} /> Explore Collections
          </Link>
        </div>

      </div>
    </div>
  );
}
