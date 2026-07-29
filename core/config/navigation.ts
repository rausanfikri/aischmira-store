export const NAVIGATION_CONFIG = {
  mainNav: [
    { id: 'nav_collection', label: 'Collection', href: '/collections' },
    { id: 'nav_about', label: 'About', href: '/about' },
    { id: 'nav_journal', label: 'Journal', href: '/journal' },
    { id: 'nav_contact', label: 'Contact', href: '/contact' },
  ],
  utilityNav: [
    { id: 'nav_search', label: 'Search', href: '/search' },
    { id: 'nav_wishlist', label: 'Wishlist', href: '/wishlist' },
    { id: 'nav_cart', label: 'Cart', href: '/cart' },
  ],
  mobileNav: [
    { id: 'm_nav_home', label: 'Home', href: '/' },
    { id: 'm_nav_collections', label: 'Collections', href: '/collections' },
    { id: 'm_nav_about', label: 'About AISCHMIRA', href: '/about' },
    { id: 'm_nav_journal', label: 'Editorial Journal', href: '/journal' },
    { id: 'm_nav_contact', label: 'Contact Concierge', href: '/contact' },
  ],
} as const;
