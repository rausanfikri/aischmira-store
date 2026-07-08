/**
 * Design Token Dictionary
 * 
 * Mengakses CSS variables secara terpusat untuk keperluan JavaScript/TypeScript.
 * Sangat berguna ketika dibutuhkan oleh logic JS (misal: Framer Motion variants, canvas, chart).
 */
export const theme = {
  colors: {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    background: "var(--background)",
    surface: "var(--surface)",
    text: "var(--text)",
    border: "var(--border)",
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)",
    info: "var(--info)",
    muted: "var(--muted)",
    accent: "var(--accent)",
  },
  spacing: {
    4: "var(--spacing-4)",
    8: "var(--spacing-8)",
    12: "var(--spacing-12)",
    16: "var(--spacing-16)",
    20: "var(--spacing-20)",
    24: "var(--spacing-24)",
    32: "var(--spacing-32)",
    40: "var(--spacing-40)",
    48: "var(--spacing-48)",
    64: "var(--spacing-64)",
    80: "var(--spacing-80)",
    96: "var(--spacing-96)",
    120: "var(--spacing-120)",
  },
  radius: {
    xs: "var(--radius-xs)",
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
    full: "var(--radius-full)",
  },
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
    soft: "var(--shadow-soft)",
    floating: "var(--shadow-floating)",
  },
  transition: {
    fast: "var(--transition-fast)",
    normal: "var(--transition-normal)",
    slow: "var(--transition-slow)",
  },
  zIndex: {
    base: "var(--z-base)",
    dropdown: "var(--z-dropdown)",
    sticky: "var(--z-sticky)",
    overlay: "var(--z-overlay)",
    modal: "var(--z-modal)",
    toast: "var(--z-toast)",
  },
  container: {
    max: "var(--container-max)",
    padding: "var(--container-padding)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  }
} as const;

export type ThemeColors = keyof typeof theme.colors;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeRadius = keyof typeof theme.radius;
export type ThemeShadow = keyof typeof theme.shadow;
export type ThemeBreakpoints = keyof typeof theme.breakpoints;
