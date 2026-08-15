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

## Mengganti gambar dengan foto asli

Semua visual di website ini masih berupa **placeholder ilustrasi** (file `.svg`) yang tersimpan di:

```
public/images/hero-kontrakan.svg      → visual besar di Hero
public/images/about-kontrakan.svg     → visual di section Tentang
public/images/gallery/fasad.svg       → galeri: tampak depan
public/images/gallery/ruang-utama.svg → galeri: area utama
public/images/gallery/kamar.svg       → galeri: ruang kamar
public/images/gallery/akses.svg       → galeri: akses & jalan masuk
public/images/gallery/lingkungan.svg  → galeri: lingkungan sekitar
```

Untuk mengganti dengan foto asli, **cukup timpa (replace) file-file di atas** dengan
foto asli — gunakan nama file yang sama (boleh `.jpg`/`.png`, tinggal sesuaikan
ekstensi di `lib/data.ts` untuk galeri dan di `components/Hero.tsx` /
`components/AboutSection.tsx` untuk visual Hero & Tentang). Tidak perlu
mengubah struktur komponen lainnya.

Ilustrasi rumah kecil (brand mark) di Navbar & Footer (`components/HomeMotif.tsx`)
sengaja dibiarkan sebagai ikon vektor, bukan foto — ini adalah logo mark, bukan
galeri foto unit.

## Mengubah informasi bisnis

Semua data bisnis (nomor WhatsApp, alamat, link Google Maps) terpusat di
`lib/site.ts`. Konten section (navigasi, keunggulan, FAQ, langkah sewa)
terpusat di `lib/data.ts`.

## Deploy ke Vercel

1. Push project ini ke repository Git (GitHub/GitLab/Bitbucket).
2. Import repository di [vercel.com/new](https://vercel.com/new).
3. Vercel akan otomatis mendeteksi Next.js — klik **Deploy**.
