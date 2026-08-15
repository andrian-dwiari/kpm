# Kontrakan Pak Mukhadin

Website frontend untuk usaha kontrakan **Kontrakan Pak Mukhadin** di Jombang, Ciputat, Tangerang Selatan. Dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

## Struktur proyek

```
app/            → layout, page, global styles, SEO metadata
components/     → semua section & UI reusable (Navbar, Hero, Gallery, dst)
lib/            → data konten (lib/data.ts) & konstanta bisnis (lib/site.ts)
public/         → aset statis (favicon)
```

## Mengganti foto unit dengan foto asli

Galeri (`components/PropertyGallery.tsx`) saat ini menggunakan visual placeholder
elegan berbasis ikon, bukan foto asli. Untuk memasukkan foto sungguhan:

1. Simpan foto ke `public/images/` (misalnya `fasad.jpg`, `ruang-utama.jpg`, dst).
2. Di `components/PropertyGallery.tsx`, ganti komponen `<PlaceholderVisual />`
   dengan `next/image` yang menunjuk ke file tersebut — gunakan `id` dari
   `lib/data.ts` (`galleryItems`) untuk memetakan setiap foto ke kartu yang sesuai.
3. Ilustrasi rumah pada Hero dan About (`components/HomeMotif.tsx`) juga bisa
   diganti dengan foto asli tampak depan kontrakan bila diinginkan.

## Mengubah informasi bisnis

Semua data bisnis (nomor WhatsApp, alamat, link Google Maps) terpusat di
`lib/site.ts`. Konten section (navigasi, keunggulan, FAQ, langkah sewa)
terpusat di `lib/data.ts`.

## Deploy ke Vercel

1. Push project ini ke repository Git (GitHub/GitLab/Bitbucket).
2. Import repository di [vercel.com/new](https://vercel.com/new).
3. Vercel akan otomatis mendeteksi Next.js — klik **Deploy**.
