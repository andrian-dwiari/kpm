import { steps } from "@/lib/data";
import Reveal from "./Reveal";

export default function HowToRent() {
  return (
    <section className="bg-sand/40 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Proses</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Cara Menyewa, Semudah Ini
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 100}>
              <div className="relative h-full rounded-xl2 border border-border bg-white p-7 shadow-soft">
                <span className="font-serif text-3xl text-clay/80">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink2">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
