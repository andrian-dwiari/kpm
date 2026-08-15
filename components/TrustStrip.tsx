import { MapPin, MessageCircle, Home } from "lucide-react";
import { trustPoints } from "@/lib/data";
import Reveal from "./Reveal";

const icons = [MapPin, MessageCircle, Home];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-white/60">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {trustPoints.map((point, i) => {
            const Icon = icons[i] ?? MapPin;
            return (
              <Reveal key={point.title} delay={i * 90}>
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-serif text-base text-ink">{point.title}</p>
                    <p className="text-sm text-ink2">{point.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
