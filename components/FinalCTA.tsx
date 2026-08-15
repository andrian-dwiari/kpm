import { MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappUrl, site, whatsappMessages } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 border border-accent-dark/20 bg-accent-dark px-6 py-14 text-center sm:px-14 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full border border-ivory/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full border border-ivory/10"
            />

            <p className="eyebrow relative text-ivory/70">
              Kontrakan Pak Mukhadin
            </p>
            <h2 className="relative mx-auto mt-4 max-w-xl font-serif text-3xl leading-tight text-ivory sm:text-4xl">
              Sudah Menemukan Lokasi yang Anda Cari?
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-base leading-relaxed text-ivory/80">
              Jangan hanya membayangkan. Tanyakan ketersediaan dan detail
              kontrakan langsung melalui WhatsApp.
            </p>

            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={buildWhatsappUrl(whatsappMessages.default)}
                variant="ghost"
                size="lg"
                icon={MessageCircle}
                className="w-full border-transparent bg-ivory text-ink hover:bg-ivory/90 sm:w-auto"
              >
                Tanya Ketersediaan via WhatsApp
              </Button>
              <Button
                href="#lokasi"
                variant="secondary"
                size="lg"
                icon={MapPin}
                className="w-full border-ivory/30 text-ivory hover:border-ivory/60 hover:bg-ivory/5 sm:w-auto"
              >
                Lihat Lokasi
              </Button>
            </div>

            <p className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-ivory/70">
              <Phone size={15} aria-hidden="true" />
              {site.phoneDisplay}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
