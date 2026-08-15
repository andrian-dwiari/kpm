"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, DoorOpen, Sofa, BedDouble, Milestone, Trees } from "lucide-react";
import { galleryItems } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap = {
  fasad: DoorOpen,
  "ruang-utama": Sofa,
  kamar: BedDouble,
  akses: Milestone,
  lingkungan: Trees,
} as const;

function PlaceholderVisual({ id, label }: { id: string; label: string }) {
  const Icon = iconMap[id as keyof typeof iconMap] ?? Sofa;
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sand to-ivory"
      role="img"
      aria-label={`Placeholder foto — ${label}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-xl border border-dashed border-accent/25"
      />
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-accent-dark shadow-soft">
        <Icon size={24} aria-hidden="true" />
      </span>
      <p className="text-sm font-medium text-ink2">{label}</p>
    </div>
  );
}

export default function PropertyGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = galleryItems[activeIndex];

  const goTo = (delta: number) => {
    setActiveIndex((prev) => (prev + delta + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="galeri" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Galeri Hunian</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Kenali Hunian Anda Sebelum Berkunjung
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-border shadow-card transition-shadow duration-300 hover:shadow-lift sm:aspect-[16/10]"
              aria-label={`Perbesar foto: ${active.label}`}
            >
              <PlaceholderVisual id={active.id} label={active.label} />
              <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink2 opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
                Klik untuk memperbesar
              </span>
            </button>

            <div className="grid grid-cols-3 gap-3 lg:grid-cols-2">
              {galleryItems.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`relative aspect-square overflow-hidden rounded-xl border transition-all duration-300 ${
                    i === activeIndex
                      ? "border-accent shadow-soft ring-1 ring-accent/40"
                      : "border-border hover:-translate-y-0.5 hover:shadow-soft"
                  }`}
                  aria-label={`Lihat foto ${item.label}`}
                  aria-pressed={i === activeIndex}
                >
                  <PlaceholderVisual id={item.id} label={item.label} />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-sm text-muted">
          Foto unit dapat diperbarui sesuai ketersediaan terbaru.
        </p>
      </div>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto diperbesar: ${active.label}`}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-xl2 border border-border bg-ivory shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] w-full sm:aspect-[16/10]">
              <PlaceholderVisual id={active.id} label={active.label} />
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft"
              aria-label="Tutup"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => goTo(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft"
              aria-label="Foto berikutnya"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
