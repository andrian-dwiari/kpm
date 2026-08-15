export const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Fasilitas", href: "#detail-hunian" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "FAQ", href: "#faq" },
] as const;

export const trustPoints = [
  {
    title: "Lokasi Jelas",
    description: "Jombang, Ciputat",
  },
  {
    title: "Komunikasi Mudah",
    description: "Langsung melalui WhatsApp",
  },
  {
    title: "Hunian Praktis",
    description: "Cocok untuk kebutuhan tempat tinggal",
  },
] as const;

export const highlights = [
  {
    title: "Lokasi Mudah Ditemukan",
    description:
      "Berada di kawasan Jombang, Ciputat, Tangerang Selatan — cukup cek titik lokasinya lewat Google Maps.",
  },
  {
    title: "Komunikasi Langsung",
    description:
      "Calon penyewa dapat menghubungi langsung melalui WhatsApp untuk menanyakan informasi dan ketersediaan.",
  },
  {
    title: "Informasi Lebih Jelas",
    description:
      "Alamat dan lokasi Google Maps tersedia sehingga Anda bisa mempertimbangkan lokasi sebelum datang.",
  },
  {
    title: "Lebih Praktis",
    description:
      "Proses bertanya dan mendapatkan informasi dapat dilakukan langsung, tanpa perantara yang berbelit.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Hubungi",
    description: "Klik tombol WhatsApp dan sampaikan kebutuhan tempat tinggal Anda.",
  },
  {
    number: "02",
    title: "Tanya Ketersediaan",
    description:
      "Dapatkan informasi mengenai unit dan detail kontrakan yang tersedia saat ini.",
  },
  {
    number: "03",
    title: "Atur Kunjungan",
    description:
      "Jika lokasi dan kebutuhan sudah sesuai, lanjutkan komunikasi untuk mengatur waktu melihat unit.",
  },
] as const;

export const faqs = [
  {
    question: "Apakah unit masih tersedia?",
    answer:
      "Untuk mengetahui ketersediaan terbaru, silakan hubungi langsung melalui WhatsApp.",
  },
  {
    question: "Di mana lokasi Kontrakan Pak Mukhadin?",
    answer:
      "Kontrakan berada di Jombang, Ciputat, South Tangerang City, Banten 15414, Indonesia.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi harga?",
    answer:
      "Silakan hubungi melalui WhatsApp untuk mendapatkan informasi harga dan detail unit terbaru.",
  },
  {
    question: "Bagaimana cara melihat lokasi?",
    answer: "Lokasi dapat dicek melalui Google Maps yang tersedia di website ini.",
  },
  {
    question: "Bagaimana cara menghubungi pemilik?",
    answer: "Anda dapat menghubungi langsung melalui WhatsApp di 0856-7203-189.",
  },
  {
    question: "Apakah bisa melihat unit terlebih dahulu?",
    answer:
      "Silakan komunikasikan melalui WhatsApp untuk menanyakan kemungkinan dan waktu kunjungan.",
  },
] as const;

export const galleryItems = [
  { id: "fasad", label: "Tampak Depan", src: "/images/gallery/fasad.svg" },
  { id: "ruang-utama", label: "Area Utama", src: "/images/gallery/ruang-utama.svg" },
  { id: "kamar", label: "Ruang Kamar", src: "/images/gallery/kamar.svg" },
  { id: "akses", label: "Akses & Jalan Masuk", src: "/images/gallery/akses.svg" },
  { id: "lingkungan", label: "Lingkungan Sekitar", src: "/images/gallery/lingkungan.svg" },
] as const;
