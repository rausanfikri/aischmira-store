import * as React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerData } from "@/data/footer";

import { socialMediaLinks } from "@/data/socials";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-text text-background/80" role="contentinfo">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="block relative w-40 h-10 mb-4"
              aria-label="AISCHMIRA Home"
            >
              <Image 
                src="/logo/logo-secondary.png" 
                alt="AISCHMIRA Logo" 
                fill
                className="object-contain object-left" 
              />
            </Link>
            <p className="font-body text-sm leading-relaxed text-background/60 max-w-xs">
              {footerData.brandDescription}
            </p>
            <div className="flex items-center gap-2 text-background/50 text-sm">
              <MapPin size={14} strokeWidth={1.5} />
              <span className="font-body">Indonesia</span>
            </div>
            <div className="flex items-center gap-2 text-background/50 text-sm">
              <Mail size={14} strokeWidth={1.5} />
              <span className="font-body">hello@aischmira.store</span>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-2 flex-wrap">
              {socialMediaLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    title={social.name}
                    className="h-9 w-9 flex items-center justify-center border border-background/20 hover:border-primary hover:text-primary text-background/50 transition-all duration-300 rounded-full"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-sm font-body text-sm hover:bg-[#20bd5a] transition-colors"
              >
                <FaWhatsapp size={18} />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {footerData.linkGroups.map((group) => (
            <div key={group.title} className="space-y-5">
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-background/40 font-medium">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/60 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-background/30 tracking-wide">
            {footerData.copyright}
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-xs text-background/30 hover:text-background/60 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
