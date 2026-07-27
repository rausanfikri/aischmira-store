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
      className="bg-background text-text border-t border-border"
      role="contentinfo"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo with text fallback */}
            <Link
              href="/"
              className="block"
              aria-label="AISCHMIRA Home"
            >
              {imgError ? (
                <span
                  className="font-heading text-2xl sm:text-3xl tracking-[0.3em] uppercase text-text"
                  aria-hidden="true"
                >
                  AISCHMIRA
                </span>
              ) : (
                <Image
                  src="/logo.png"
                  alt="AISCHMIRA"
                  width={180}
                  height={50}
                  className="object-contain h-10 w-auto opacity-90"
                  onError={() => setImgError(true)}
                />
              )}
            </Link>

            <p className="font-body text-[13px] sm:text-sm leading-loose text-text-secondary max-w-sm font-light">
              {footerData.brandDescription}
            </p>

            {/* Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin size={14} strokeWidth={1} aria-hidden="true" />
                <span className="font-body font-light tracking-wide">Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <Mail size={14} strokeWidth={1} aria-hidden="true" />
                <span className="font-body font-light tracking-wide">hello@aischmira.store</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <Phone size={14} strokeWidth={1} aria-hidden="true" />
                <span className="font-body font-light tracking-wide">+62 851-2134-4848</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="font-body text-[9px] tracking-[0.2em] uppercase text-text-secondary mb-4">
                Follow Us
              </p>
              <div className="flex gap-3 flex-wrap">
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
                      className="h-10 w-10 flex items-center justify-center border border-border text-text-secondary hover:border-primary hover:text-primary transition-all duration-300 rounded-none"
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat dengan AISCHMIRA via WhatsApp"
                className="inline-flex items-center justify-center gap-3 bg-text text-surface px-8 py-3.5 rounded-none font-body text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 w-full sm:w-auto"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Link Groups */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerData.linkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="font-body text-[10px] tracking-[0.2em] uppercase text-text-secondary font-medium">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-text-secondary hover:text-text transition-colors duration-200"
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
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="font-body text-xs text-text-secondary tracking-wide">
            {footerData.copyright}
          </p>
          <div className="hidden sm:flex items-center gap-1 text-border">
            <span>·</span>
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-xs text-text-secondary hover:text-text transition-colors"
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
