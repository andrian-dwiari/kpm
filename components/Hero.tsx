import { MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Button from "./Button";
import { buildWhatsappUrl, whatsappMessages } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* subtle decorative arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full border border-accent/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 h-[280px] w-[280px] rounded-full border border-accent/10"
      />

      <div className="mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <p className="eyebrow text-accent">Hunian Nyaman di Ciputat</p>

          <h1 className="mt-5 max-w-xl font-serif text-[2.5rem] leading-[1.15] text-ink sm:text-5xl lg:text-[3.4rem]">
            Tempat Tinggal Nyaman untuk Memulai Hari dengan Tenang.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink2 sm:text-lg">
            Kontrakan Pak Mukhadin hadir sebagai pilihan hunian praktis dan
            nyaman di kawasan Jombang, Ciputat — dengan lokasi yang mudah
            dijangkau dan komunikasi langsung dengan pemilik.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={buildWhatsappUrl(whatsappMessages.default)}
              variant="primary"
              size="lg"
              icon={MessageCircle}
              className="w-full sm:w-auto"
            >
              Tanya Ketersediaan
            </Button>
            <Button
              href="#lokasi"
              variant="secondary"
              size="lg"
              icon={MapPin}
              className="w-full sm:w-auto"
            >
              Lihat Lokasi
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink2">
            <span>Lokasi jelas</span>
            <span className="h-1 w-1 rounded-full bg-muted" aria-hidden="true" />
            <span>Komunikasi langsung</span>
            <span className="h-1 w-1 rounded-full bg-muted" aria-hidden="true" />
            <span>Hunian nyaman</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-xl2 border border-border bg-sand shadow-card">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hero-kontrakan.svg"
                alt="Tampak depan Kontrakan Pak Mukhadin"
                fill
                unoptimized
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between bg-white p-6 sm:p-7">
              <div>
                <p className="font-serif text-lg text-ink">
                  Kontrakan Pak Mukhadin
                </p>
                <p className="mt-0.5 text-sm text-ink2">
                  Jombang, Ciputat, Tangerang Selatan
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                <MapPin size={18} aria-hidden="true" />
              </span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl border border-accent/20 bg-sand/60 sm:block"
          />
        </div>
      </div>
    </section>
  );
}
