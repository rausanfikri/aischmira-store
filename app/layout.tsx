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
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aischmira.store"),
  title: "AISCHMIRA | Elegant Women's Fashion",
  description: "AISCHMIRA menghadirkan koleksi fashion wanita elegan, modern, dan timeless untuk perempuan Indonesia dengan kualitas premium.",
  authors: [{ name: "AISCHMIRA" }],
  openGraph: {
    siteName: "AISCHMIRA",
    title: "AISCHMIRA | Elegant Women's Fashion",
    description: "AISCHMIRA menghadirkan koleksi fashion wanita elegan, modern, dan timeless untuk perempuan Indonesia dengan kualitas premium.",
    images: ["/logo/logo-primary.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISCHMIRA | Elegant Women's Fashion",
    description: "AISCHMIRA menghadirkan koleksi fashion wanita elegan, modern, dan timeless untuk perempuan Indonesia dengan kualitas premium.",
    images: ["/logo/logo-primary.png"],
  },
  alternates: {
    canonical: "https://aischmira.store",
  }
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
      <body className="min-h-full flex flex-col font-body">
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
