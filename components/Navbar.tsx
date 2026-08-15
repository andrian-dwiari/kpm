"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { navigation } from "@/lib/data";
import { buildWhatsappUrl, site, whatsappMessages } from "@/lib/site";
import HomeMotif from "./HomeMotif";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Navigasi utama"
      >
        <Link
          href="#beranda"
          className="flex items-center gap-2.5 font-serif text-lg text-ink"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
            <HomeMotif variant="mark" className="h-5 w-5" />
          </span>
          <span className="leading-none">
            Kontrakan
            <span className="block text-sm font-sans font-medium tracking-wide text-ink2">
              Pak Mukhadin
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-ink2 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsappUrl(whatsappMessages.default)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-accent-dark px-5 py-2.5 text-sm font-semibold text-ivory shadow-soft transition-all duration-300 hover:bg-ink hover:-translate-y-0.5 hover:shadow-lift lg:inline-flex"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Tanya Ketersediaan
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={open}
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        <div
          className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ivory shadow-lift transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <span className="font-serif text-lg text-ink">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink"
              aria-label="Tutup menu navigasi"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 px-6 py-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-sand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6">
            <a
              href={buildWhatsappUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-dark px-5 py-3.5 text-sm font-semibold text-ivory shadow-soft"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Tanya Ketersediaan
            </a>
            <p className="mt-4 text-center text-xs text-muted">
              {site.phoneDisplay}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
