import { MapPin, MessageCircle } from "lucide-react";
import HomeMotif from "./HomeMotif";
import { navigation } from "@/lib/data";
import { buildWhatsappUrl, site, whatsappMessages } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/60">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 font-serif text-lg text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                <HomeMotif variant="mark" className="h-5 w-5" />
              </span>
              {site.name}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink2">
              Hunian kontrakan di Jombang, Ciputat, Tangerang Selatan.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Navigasi
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={buildWhatsappUrl(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink2 transition-colors hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Kontak
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink2">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-dark" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={16} className="shrink-0 text-accent-dark" aria-hidden="true" />
                <span>{site.phoneDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-6 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Cek lokasi sebelum berkunjung.</p>
        </div>
      </div>
    </footer>
  );
}
