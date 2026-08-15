import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Kontrakan Pak Mukhadin | Kontrakan Nyaman di Jombang, Ciputat",
  description:
    "Cari kontrakan di Jombang, Ciputat? Kenali Kontrakan Pak Mukhadin, cek lokasi, lihat informasi hunian, dan hubungi langsung melalui WhatsApp untuk mengetahui ketersediaan terbaru.",
  keywords: [
    "kontrakan Ciputat",
    "kontrakan Jombang Ciputat",
    "kontrakan Tangerang Selatan",
    "kontrakan di Ciputat",
    "Kontrakan Pak Mukhadin",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: "Kontrakan Pak Mukhadin | Kontrakan Nyaman di Jombang, Ciputat",
    description:
      "Kenali Kontrakan Pak Mukhadin di Jombang, Ciputat — cek lokasi dan hubungi langsung melalui WhatsApp untuk mengetahui ketersediaan terbaru.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontrakan Pak Mukhadin | Kontrakan Nyaman di Jombang, Ciputat",
    description:
      "Kenali Kontrakan Pak Mukhadin di Jombang, Ciputat — cek lokasi dan hubungi langsung melalui WhatsApp.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jombang, Ciputat",
    addressLocality: "South Tangerang City",
    addressRegion: "Banten",
    postalCode: "15414",
    addressCountry: "ID",
  },
  telephone: site.phoneRaw,
  url: site.url,
  hasMap: site.mapsUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${dmSerif.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
