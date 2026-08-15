import { MessageCircle } from "lucide-react";
import Button from "./Button";
import HomeMotif from "./HomeMotif";
import Reveal from "./Reveal";
import { buildWhatsappUrl, whatsappMessages } from "@/lib/site";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative rounded-xl2 border border-border bg-sand/50 p-8 sm:p-10">
            <HomeMotif className="w-full text-accent-dark" />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <p className="eyebrow">Tentang Kontrakan Pak Mukhadin</p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Hunian yang Dibuat untuk Terasa Seperti Rumah
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink2">
            <p>
              Memilih tempat tinggal bukan hanya soal alamat. Kenyamanan,
              lingkungan, akses, dan kemudahan berkomunikasi dengan pemilik
              juga menjadi bagian penting dari keputusan itu.
            </p>
            <p>
              Kontrakan Pak Mukhadin menawarkan pilihan hunian di Jombang,
              Ciputat bagi Anda yang membutuhkan tempat tinggal yang praktis
              dan nyaman, dengan proses tanya-jawab yang singkat dan jelas
              langsung bersama pemiliknya.
            </p>
          </div>

          <div className="mt-8">
            <Button
              href={buildWhatsappUrl(whatsappMessages.default)}
              variant="secondary"
              icon={MessageCircle}
            >
              Tanya Ketersediaan
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
