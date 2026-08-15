import { MapPinned, MessagesSquare, FileSearch, Zap } from "lucide-react";
import { highlights } from "@/lib/data";
import Reveal from "./Reveal";

const icons = [MapPinned, MessagesSquare, FileSearch, Zap];

export default function Highlights() {
  return (
    <section className="bg-sand/40 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">Keunggulan</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Kenapa Memilih Kontrakan Pak Mukhadin?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {highlights.map((item, i) => {
            const Icon = icons[i] ?? Zap;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-xl2 border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink2">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
