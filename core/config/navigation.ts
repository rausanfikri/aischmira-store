export const NAVIGATION_CONFIG = {
  mainNav: [
    { id: 'nav_categories', label: 'Categories', href: '/categories' },
    { id: 'nav_collections', label: 'Collections', href: '/collections' },
  ],
  utilityNav: [
    { id: 'nav_search', label: 'Search', href: '/search' },
    { id: 'nav_wishlist', label: 'Wishlist', href: '/wishlist' },
    { id: 'nav_bag', label: 'Bag', href: '/bag' },
    { id: 'nav_account', label: 'Account', href: '/account' },
  ],
  mobileNav: [
    { id: 'm_nav_home', label: 'Home', href: '/' },
    { id: 'm_nav_categories', label: 'Categories', href: '/categories' },
    { id: 'm_nav_collections', label: 'Collections', href: '/collections' },
    { id: 'm_nav_about', label: 'About AISCHMIRA', href: '/about' },
    { id: 'm_nav_contact', label: 'Contact Concierge', href: '/contact' },
  ],
} as const;
