"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/lib/data";
import Reveal from "./Reveal";

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
          <p className="eyebrow text-accent">Galeri Hunian</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Kenali Hunian Anda Sebelum Berkunjung
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-border bg-sand shadow-card transition-shadow duration-300 hover:shadow-lift sm:aspect-[16/10]"
              aria-label={`Perbesar foto: ${active.label}`}
            >
              <Image
                src={active.src}
                alt={active.label}
                fill
                unoptimized
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink2 shadow-soft">
                {active.label}
              </span>
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
                  className={`relative aspect-square overflow-hidden rounded-xl border bg-sand transition-all duration-300 ${
                    i === activeIndex
                      ? "border-accent shadow-soft ring-1 ring-accent/40"
                      : "border-border hover:-translate-y-0.5 hover:shadow-soft"
                  }`}
                  aria-label={`Lihat foto ${item.label}`}
                  aria-pressed={i === activeIndex}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    unoptimized
                    sizes="180px"
                    className="object-cover"
                  />
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
            <div className="relative aspect-[4/3] w-full bg-sand sm:aspect-[16/10]">
              <Image
                src={active.src}
                alt={active.label}
                fill
                unoptimized
                sizes="640px"
                className="object-cover"
              />
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
