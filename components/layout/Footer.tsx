"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { footerData } from "@/data/footer";
import { socialMediaLinks } from "@/data/socials";

export function Footer() {
  const WHATSAPP_URL =
    "https://wa.me/6285121344848?text=Halo%20AISCHMIRA,%20saya%20tertarik%20dengan%20produk%20yang%20ada%20di%20website.";

  const [imgError, setImgError] = React.useState(false);

  return (
    <footer
      className="bg-[var(--color-text)] text-white/80"
      role="contentinfo"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo with text fallback */}
            <Link
              href="/"
              className="block"
              aria-label="AISCHMIRA Home"
            >
              {imgError ? (
                <span
                  className="font-heading text-2xl tracking-[0.3em] uppercase text-white"
                  aria-hidden="true"
                >
                  AISCHMIRA
                </span>
              ) : (
                <Image
                  src="/logo.png"
                  alt="AISCHMIRA"
                  width={160}
                  height={44}
                  className="object-contain h-10 w-auto brightness-0 invert opacity-90"
                  onError={() => setImgError(true)}
                />
              )}
            </Link>

            <p className="font-body text-sm leading-relaxed text-white/50 max-w-sm">
              {footerData.brandDescription}
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={13} strokeWidth={1.5} aria-hidden="true" />
                <span className="font-body">Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Mail size={13} strokeWidth={1.5} aria-hidden="true" />
                <span className="font-body">hello@aischmira.store</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
                <span className="font-body">+62 851-2134-4848</span>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <p className="font-body text-[10px] tracking-[0.15em] uppercase text-white/30 mb-3">
                Ikuti Kami
              </p>
              <div className="flex gap-2 flex-wrap">
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
                      className="h-9 w-9 flex items-center justify-center border border-white/15 text-white/40 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 rounded-full"
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat dengan AISCHMIRA via WhatsApp"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-body text-sm hover:bg-[#20bd5a] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Link Groups */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerData.linkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="font-body text-xs text-white/25 tracking-wide">
            {footerData.copyright}
          </p>
          <div className="hidden sm:flex items-center gap-1 text-white/15">
            <span>·</span>
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-xs text-white/25 hover:text-white/50 transition-colors"
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
