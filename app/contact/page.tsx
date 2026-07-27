import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AISCHMIRA",
  description: "Get in touch with the AISCHMIRA concierge.",
};

export default function ContactPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Contact Us</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50 leading-relaxed">
            We are here to assist you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          
          {/* Details */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-heading italic text-2xl text-text mb-4">Concierge Services</h2>
              <p className="font-body text-sm font-light text-text/70 leading-relaxed mb-6">
                For styling advice, order inquiries, or assistance with returns, our dedicated team is at your disposal.
              </p>
              <a 
                href="https://wa.me/6285121344848" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-text text-surface font-body text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-whatsapp transition-colors rounded-sm"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h2 className="font-heading italic text-2xl text-text mb-4">Headquarters</h2>
              <address className="font-body text-sm font-light text-text/70 leading-relaxed not-italic">
                AISCHMIRA Studio<br />
                Jakarta, Indonesia<br />
                <br />
                <a href="mailto:info@aischmira.com" className="hover:text-primary transition-colors">info@aischmira.com</a>
              </address>
            </div>
            
            <div>
              <h2 className="font-heading italic text-2xl text-text mb-4">Hours of Operation</h2>
              <p className="font-body text-sm font-light text-text/70 leading-relaxed">
                Monday — Friday<br />
                9:00 AM — 6:00 PM (WIB)
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface p-8 md:p-12 border border-border/20">
            <h2 className="font-heading italic text-2xl text-text mb-8">Send an Inquiry</h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-body text-[10px] tracking-widest uppercase text-text/70">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-body text-[10px] tracking-widest uppercase text-text/70">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-body text-[10px] tracking-widest uppercase text-text/70">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-body text-[10px] tracking-widest uppercase text-text/70">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="border-b border-border/50 bg-transparent py-2 font-body text-sm text-text focus:outline-none focus:border-text transition-colors resize-none" 
                ></textarea>
              </div>
              <button type="button" className="mt-4 bg-transparent border border-text text-text font-body text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-text hover:text-surface transition-colors rounded-sm">
                Submit
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
