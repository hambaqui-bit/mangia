"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, siteConfig, whatsappUrl } from "@/data/site";
import { slugify } from "@/lib/menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-500",
        scrolled
          ? "border-white/10 bg-[#070504]/82 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "border-transparent bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Ir al inicio">
          <span className="font-serif text-2xl uppercase tracking-[0.25em] text-white md:text-3xl">
            Mangia
          </span>
          <span className="hidden h-px w-12 bg-[#e6bd73]/70 md:block" />
        </a>

        <nav className="hidden items-center gap-8 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/66 lg:flex">
          {navItems.map((item, index) => (
            <a key={`desktop-nav-${slugify(item.href)}-${index}`} href={item.href} className="transition hover:text-[#e6bd73]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative hidden min-h-11 items-center gap-2 overflow-hidden rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035))] px-5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_35px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#e6bd73]/35 hover:bg-white/[0.105] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_22px_55px_rgba(0,0,0,0.34)] active:translate-y-[1px] md:inline-flex"
          >
            <span className="absolute inset-x-4 top-px h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <Phone className="h-4 w-4 text-[#e6bd73] transition duration-500 group-hover:scale-110" aria-hidden="true" />
            {siteConfig.phone.replace("+57 ", "")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.105),rgba(255,255,255,0.035))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_35px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#e6bd73]/35 hover:bg-white/[0.105] active:translate-y-[1px] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden">
          <div className="mx-4 mt-3 overflow-hidden rounded-3xl border border-white/10 bg-[#070504]/96 p-3 shadow-2xl backdrop-blur-2xl">
            {navItems.map((item, index) => (
              <a
                key={`mobile-nav-${slugify(item.href)}-${index}`}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-4 text-sm uppercase tracking-[0.18em] text-white/76 transition hover:bg-white/[0.06] hover:text-[#e6bd73]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="relative mt-2 flex min-h-12 items-center justify-center overflow-hidden rounded-2xl border border-[#f8dca4]/50 bg-[linear-gradient(135deg,#f6d998_0%,#d6a957_48%,#f1c879_100%)] px-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#130d08] shadow-[inset_0_1px_0_rgba(255,255,255,0.58),0_18px_45px_rgba(230,189,115,0.18)] transition active:translate-y-[1px]"
            >
              <span className="absolute inset-x-5 top-px h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
