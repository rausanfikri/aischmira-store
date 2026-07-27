import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | AISCHMIRA",
  description: "Discover the heritage and vision behind AISCHMIRA.",
};

export default function AboutPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      
      {/* Hero */}
      <div className="relative w-full h-[60vh] md:h-[80vh] mb-24 md:mb-32">
        <Image 
          src="/images/hero/hero-bg.png" 
          alt="AISCHMIRA Heritage" 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-4">
          <h1 className="font-heading italic text-5xl md:text-7xl text-surface mb-6 drop-shadow-lg">The Vision</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-16">
        
        <div className="space-y-6">
          <h2 className="font-heading italic text-3xl md:text-4xl text-text">Our Heritage</h2>
          <p className="font-body text-sm md:text-base leading-loose text-text/70">
            Founded with a passion for timeless elegance, AISCHMIRA represents the pinnacle of modern luxury fashion. We believe that true luxury lies in the meticulous details—the careful selection of premium fabrics, the precision of a tailored cut, and the subtle nuances that transform a garment into a piece of art.
          </p>
        </div>

        <div className="w-12 h-[1px] bg-accent mx-auto"></div>

        <div className="space-y-6">
          <h2 className="font-heading italic text-3xl md:text-4xl text-text">The Craftsmanship</h2>
          <p className="font-body text-sm md:text-base leading-loose text-text/70">
            Every piece in our collection is a testament to our commitment to quality. We partner with master artisans to ensure that our designs not only look beautiful but endure through the seasons. It is our philosophy that fashion should empower and inspire, bringing a sense of calm confidence to the women who wear it.
          </p>
        </div>

      </div>

    </div>
  );
}
