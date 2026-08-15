import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappUrl, whatsappMessages } from "@/lib/site";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 border border-border bg-sand shadow-soft">
            <Image
              src="/images/about-kontrakan.svg"
              alt="Suasana Kontrakan Pak Mukhadin"
              fill
              unoptimized
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <p className="eyebrow text-accent">Tentang Kontrakan Pak Mukhadin</p>
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
