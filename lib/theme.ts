/**
 * Design Token Dictionary — AISCHMIRA
 * 
 * Centralized JavaScript access to CSS token variables.
 * Allows programmatic access in client logic (Framer Motion variants, dynamic canvas, chart rendering).
 */
export const theme = {
  colors: {
    primary: "var(--color-primary)",
    primaryHover: "var(--color-primary-hover)",
    primaryLight: "var(--color-primary-light)",
    primaryForeground: "var(--color-primary-foreground)",

    secondary: "var(--color-secondary)",
    secondaryHover: "var(--color-secondary-hover)",
    accent: "var(--color-accent)",
    accentLight: "var(--color-accent-light)",

    background: "var(--color-background)",
    surface: "var(--color-surface)",
    surfaceHover: "var(--color-surface-hover)",

    text: "var(--color-text)",
    textSecondary: "var(--color-text-secondary)",
    textMuted: "var(--color-text-muted)",

    border: "var(--color-border)",
    borderHover: "var(--color-border-hover)",
    divider: "var(--color-divider)",

    success: "var(--color-success)",
    warning: "var(--color-warning)",
    danger: "var(--color-danger)",
    info: "var(--color-info)",

    overlay: "var(--color-overlay)",
    focus: "var(--color-focus)",
    disabled: "var(--color-disabled)",
    whatsapp: "var(--color-whatsapp)",
    whatsappHover: "var(--color-whatsapp-hover)",
  },
  typography: {
    fonts: {
      heading: "var(--font-cormorant)",
      body: "var(--font-inter)",
    },
    scale: {
      display: "text-display",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      title: "text-title",
      subtitle: "text-subtitle",
      bodyLg: "text-body-lg",
      body: "text-body",
      bodySm: "text-body-sm",
      caption: "text-caption",
      label: "text-label",
      button: "text-button",
      small: "text-small",
    },
  },
  spacing: {
    4: "var(--spacing-4)",     // 4px
    8: "var(--spacing-8)",     // 8px
    12: "var(--spacing-12)",   // 12px
    16: "var(--spacing-16)",   // 16px
    20: "var(--spacing-20)",   // 20px
    24: "var(--spacing-24)",   // 24px
    32: "var(--spacing-32)",   // 32px
    40: "var(--spacing-40)",   // 40px
    48: "var(--spacing-48)",   // 48px
    64: "var(--spacing-64)",   // 64px
    80: "var(--spacing-80)",   // 80px
    96: "var(--spacing-96)",   // 96px
    128: "var(--spacing-128)", // 128px
  },
  radius: {
    xs: "var(--radius-xs)",    // 2px
    sm: "var(--radius-sm)",    // 4px
    md: "var(--radius-md)",    // 6px
    lg: "var(--radius-lg)",    // 8px
    xl: "var(--radius-xl)",    // 12px
    "2xl": "var(--radius-2xl)", // 24px
    full: "var(--radius-full)", // 9999px
  },
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
    luxury: "var(--shadow-luxury)",
    hover: "var(--shadow-hover)",
  },
  transition: {
    fast: "var(--transition-fast)",     // 150ms
    normal: "var(--transition-normal)", // 300ms
    slow: "var(--transition-slow)",     // 500ms
  },
  zIndex: {
    base: "var(--z-base)",         // 0
    dropdown: "var(--z-dropdown)", // 100
    sticky: "var(--z-sticky)",     // 200
    overlay: "var(--z-overlay)",   // 300
    modal: "var(--z-modal)",       // 400
    toast: "var(--z-toast)",       // 500
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
} as const;

export type ThemeColors = keyof typeof theme.colors;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeRadius = keyof typeof theme.radius;
export type ThemeShadow = keyof typeof theme.shadow;
export type ThemeBreakpoints = keyof typeof theme.breakpoints;
