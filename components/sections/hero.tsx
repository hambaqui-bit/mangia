import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#050403]">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Mesa premium de Mangia Grill & Cream"
        fill
        priority
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNiAyNCIgdmlsbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMjQiIGZpbGw9IiMwOTA2MDQiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjYiIHI9IjgiIGZpbGw9IiNiOTc2MzgiIG9wYWNpdHk9Ii4zIi8+PC9zdmc+"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(230,189,115,0.22),transparent_32%),linear-gradient(90deg,rgba(0,0,0,0.86),rgba(0,0,0,0.34)_48%,rgba(0,0,0,0.72))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050403] to-transparent" />
      <div className="absolute inset-0 opacity-[0.075] mix-blend-overlay [background-image:url('/noise.svg')]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#f1d49a] backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.city} / Grill & Cream
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 text-balance font-serif text-[clamp(4.2rem,14vw,12rem)] leading-[0.82] tracking-[0.04em] text-white">
              Mangia
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/72 md:text-2xl md:leading-10">
              Un gastrobar premium donde el fuego, la cocteleria y la heladeria artesanal se sienten como una noche cinematografica.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="#reserve">Reservar mesa</PremiumButton>
              <PremiumButton href="#menu" variant="ghost">Explorar menu</PremiumButton>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] px-4 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl md:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
