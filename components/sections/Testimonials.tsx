export function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading italic text-3xl md:text-5xl text-text mb-16">The AISCHMIRA Woman</h2>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="font-body text-lg md:text-xl font-light italic leading-relaxed text-text/80 max-w-2xl mx-auto">
            "AISCHMIRA has completely transformed my understanding of everyday luxury. The attention to detail and the fluidity of the fabrics make every piece an absolute joy to wear."
          </p>
          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="font-body text-[10px] tracking-widest uppercase text-text/70">— Elena R., Jakarta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
