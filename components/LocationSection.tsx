import { MapPin, Navigation } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">Lokasi</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Lokasi yang Mudah Anda Cek Sebelum Berkunjung
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between rounded-xl2 border border-border bg-white p-8 shadow-soft">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-lg text-ink">Alamat</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink2">
                  {site.address}
                </p>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm leading-relaxed text-ink2">
                    Gunakan Google Maps untuk mengecek posisi kontrakan dan
                    memperkirakan akses dari tempat kerja, kampus, keluarga,
                    atau aktivitas sehari-hari Anda.
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <Button href={site.mapsUrl} icon={Navigation} className="w-full">
                  Lihat di Google Maps
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-xl2 border border-border shadow-soft">
              <iframe
                title={`Peta lokasi ${site.name}`}
                src={site.mapsEmbedUrl}
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
