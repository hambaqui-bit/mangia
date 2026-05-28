import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mangia Grill & Cream | Premium Gastrobar en Aguachica",
    template: "%s | Mangia Grill & Cream",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Mangia",
    "Mangia Grill & Cream",
    "restaurante Aguachica",
    "gastrobar Aguachica",
    "hamburguesas premium",
    "cocktails",
    "heladeria",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Mangia Grill & Cream | Premium Gastrobar en Aguachica",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1170,
        height: 2080,
        alt: "Mangia Grill & Cream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangia Grill & Cream",
    description: siteConfig.description,
    images: ["/images/hero/hero-main.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full bg-[#050403] font-sans text-white">{children}</body>
    </html>
  );
}
