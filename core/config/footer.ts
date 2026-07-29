export const FOOTER_CONFIG = {
  brandDescription: "AISCHMIRA - Premium Women's Fashion from Indonesia, designed for elegance and timeless beauty.",
  linkGroups: [
    {
      id: 'fg_shop',
      title: 'Shop',
      links: [
        { id: 'fl_all', label: 'All Products', href: '/products' },
        { id: 'fl_collections', label: 'Collections', href: '/collections' },
      ],
    },
    {
      id: 'fg_care',
      title: 'Customer Care',
      links: [
        { id: 'fl_contact', label: 'Contact Us', href: '/contact' },
        { id: 'fl_shipping', label: 'Shipping & Returns', href: '/shipping' },
        { id: 'fl_faq', label: 'FAQ', href: '/faq' },
      ],
    },
    {
      id: 'fg_legal',
      title: 'Legal & Policies',
      links: [
        { id: 'fl_privacy', label: 'Privacy Policy', href: '/privacy-policy' },
        { id: 'fl_terms', label: 'Terms of Service', href: '/terms' },
      ],
    },
  ],
  socialLinks: [
    { id: 'fs_ig', label: 'Instagram', href: 'https://instagram.com/aischmira' },
    { id: 'fs_tt', label: 'TikTok', href: 'https://tiktok.com/@aischmira' },
    { id: 'fs_wa', label: 'WhatsApp Concierge', href: 'https://wa.me/6285121344848' },
  ],
  newsletter: {
    title: 'Editorial Dispatch',
    description: 'Subscribe to receive private preview invitations and seasonal editorial releases.',
    buttonText: 'Subscribe',
  },
  copyright: '© 2026 AISCHMIRA. All rights reserved.',
} as const;
