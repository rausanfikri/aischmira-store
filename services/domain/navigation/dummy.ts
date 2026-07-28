import { FooterNavigation } from "./types";

export const dummyFooterNav: FooterNavigation = {
  brandDescription: "AISCHMIRA is a luxury fashion brand crafting timeless apparel, pure silk garments, and modern silhouettes for the discerning visionary.",
  sections: [
    {
      title: "Collections",
      items: [
        { name: "FEMME Signature", href: "/collections/femme" },
        { name: "HER Collection", href: "/collections/her" },
        { name: "SHE Collection", href: "/collections/she" },
        { name: "Silk Scarves", href: "/collections/am-monogram-scarf" },
        { name: "All Collections", href: "/collections" },
      ],
    },
    {
      title: "Client Care",
      items: [
        { name: "Concierge Styling", href: "https://wa.me/6285121344848", isExternal: true },
        { name: "Size Guide & Fit", href: "/faq#sizing" },
        { name: "Shipping & Delivery", href: "/faq#shipping" },
        { name: "Garment Care", href: "/faq#care" },
        { name: "Client Support", href: "/contact" },
      ],
    },
    {
      title: "House of AISCHMIRA",
      items: [
        { name: "Brand Narrative", href: "/about" },
        { name: "Craftsmanship & Silk", href: "/about#craft" },
        { name: "Editorial Journal", href: "/journal" },
        { name: "Privé Membership", href: "/account/profile" },
      ],
    },
    {
      title: "Legal & Governance",
      items: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Preferences", href: "/privacy-policy#cookies" },
      ],
    },
  ],
  copyright: "© 2026 AISCHMIRA. ALL RIGHTS RESERVED. HANDCRAFTED IN INDONESIA.",
};
