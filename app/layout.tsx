import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aischmira.store"),
  title: "AISCHMIRA | Elegant Women's Fashion",
  description:
    "Crafted to comfort. Designed to stand out. Discover timeless fashion for modern women.",
  authors: [{ name: "AISCHMIRA" }],
  keywords: ["fashion wanita", "baju muslim", "modest fashion", "aischmira", "busana elegan"],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
    shortcut: "/favicon.png",
  },
  openGraph: {
    siteName: "AISCHMIRA",
    title: "AISCHMIRA | Elegant Women's Fashion",
    description:
      "Crafted to comfort. Designed to stand out. Discover timeless fashion for modern women.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AISCHMIRA — Elegant Women's Fashion",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISCHMIRA | Elegant Women's Fashion",
    description:
      "Crafted to comfort. Designed to stand out. Discover timeless fashion for modern women.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://aischmira.store",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id-ID"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-text">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 pt-[104px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
