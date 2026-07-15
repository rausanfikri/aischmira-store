import * as React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerData } from "@/data/footer";

const InstagramIcon = ({ size = 16, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
              className="block font-heading text-2xl font-light tracking-[0.4em] uppercase text-background hover:text-primary transition-colors"
            >
              AISCHMIRA
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
            <div className="flex gap-4 pt-2">
              {footerData.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="h-9 w-9 flex items-center justify-center border border-background/20 hover:border-primary hover:text-primary text-background/50 transition-all duration-300"
                >
                  <InstagramIcon size={16} strokeWidth={1.5} />
                </a>
              ))}
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
