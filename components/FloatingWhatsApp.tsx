import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl, whatsappMessages } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsappUrl(whatsappMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp dengan Kontrakan Pak Mukhadin"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-accent-dark pl-4 pr-4 text-ivory shadow-lift transition-all duration-300 hover:bg-ink hover:-translate-y-0.5 sm:bottom-7 sm:right-7 sm:pr-5"
    >
      <MessageCircle size={22} aria-hidden="true" className="shrink-0" />
      <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline-block">
        Chat WhatsApp
      </span>
    </a>
  );
}
