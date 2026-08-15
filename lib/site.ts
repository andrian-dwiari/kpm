export const site = {
  name: "Kontrakan Pak Mukhadin",
  shortName: "Pak Mukhadin",
  address: "Jombang, Ciputat, South Tangerang City, Banten 15414, Indonesia",
  addressShort: "Jombang, Ciputat, Tangerang Selatan",
  mapsUrl: "https://share.google/UMgJZKFYcjgzi0x1O",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Jombang,+Ciputat,+South+Tangerang+City,+Banten+15414&output=embed",
  phoneDisplay: "0856-7203-189",
  phoneRaw: "08567203189",
  whatsappNumber: "628567203189",
  url: "https://kontrakanpakmukhadin.vercel.app",
} as const;

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  default:
    "Halo Pak Mukhadin, saya ingin menanyakan informasi dan ketersediaan kontrakan.",
  price:
    "Halo Pak Mukhadin, saya ingin menanyakan harga dan ketersediaan kontrakan.",
  detail:
    "Halo Pak Mukhadin, saya ingin menanyakan detail unit kontrakan (ukuran, kamar, dan fasilitas).",
  visit:
    "Halo Pak Mukhadin, saya ingin menanyakan kemungkinan dan waktu untuk melihat unit kontrakan.",
} as const;
