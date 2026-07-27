"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "We offer complimentary express shipping on all orders. Domestic orders typically arrive within 2-3 business days. International shipping times vary by destination, generally taking 5-10 business days."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and have all original tags attached. To initiate a return, please contact our concierge team via WhatsApp."
  },
  {
    question: "How do I care for my silk pieces?",
    answer: "We recommend dry cleaning for all our silk garments to preserve their luster and shape. If necessary, you may hand wash gently in cold water using a specialist silk detergent. Never wring or twist the fabric. Iron on the reverse side using a low heat setting."
  },
  {
    question: "Do you offer alterations?",
    answer: "Currently, we do not offer in-house alterations. However, our garments are constructed with generous seam allowances to easily accommodate adjustments by your local tailor."
  },
  {
    question: "How can I contact customer service?",
    answer: "Our dedicated concierge team is available via WhatsApp from Monday to Friday, 9am to 6pm (WIB). We strive to respond to all inquiries within 24 hours."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Frequently Asked Questions</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50 leading-relaxed">
            Information regarding orders, shipping, and care.
          </p>
        </div>

        <Accordion.Root type="multiple" className="border-t border-border/50">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="border-b border-border/50">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-6 font-heading text-lg md:text-xl text-text hover:text-primary transition-colors group text-left">
                  {faq.question}
                  <ChevronDown size={20} className="transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0 ml-4" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn">
                <p className="font-body text-sm font-light leading-relaxed text-text/70 pb-8 pr-12">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-16 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-text/50 mb-4">Still have questions?</p>
          <a href="/contact" className="inline-block border-b border-text pb-1 font-body text-[10px] tracking-widest uppercase hover:text-primary transition-colors">
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}
