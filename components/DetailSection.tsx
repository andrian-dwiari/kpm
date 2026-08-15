import { MessageCircle, Ruler, BedDouble, ClipboardList } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappUrl, whatsappMessages } from "@/lib/site";

const pending = [
  { icon: Ruler, label: "Ukuran unit" },
  { icon: BedDouble, label: "Jumlah kamar" },
  { icon: ClipboardList, label: "Fasilitas & ketentuan sewa" },
];

export default function DetailSection() {
  return (
    <section id="detail-hunian" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="rounded-xl2 border border-border bg-sand/50 p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow text-accent">Detail Hunian</p>
                <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  Butuh Detail Unit? Kami Siap Membantu.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-ink2">
                  Informasi detail unit seperti ukuran, jumlah kamar,
                  fasilitas, dan ketentuan sewa dapat ditanyakan langsung
                  kepada pemilik agar Anda mendapat gambaran paling akurat.
                </p>

                <div className="mt-8">
                  <Button
                    href={buildWhatsappUrl(whatsappMessages.detail)}
                    icon={MessageCircle}
                  >
                    Tanyakan Detail Unit
                  </Button>
                </div>
              </div>

              <ul className="grid gap-3">
                {pending.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-dashed border-border bg-white/70 px-5 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                      <item.icon size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted">Tersedia via WhatsApp</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
