import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">Pertanyaan Umum</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Yang Sering Ditanyakan
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl2 border border-border bg-white shadow-soft">
            {faqs.map((item) => (
              <details key={item.question} className="group px-6 py-5 sm:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base text-ink sm:text-lg">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-dark transition-transform duration-300 group-open:rotate-45">
                    <Plus size={16} aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink2 sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
