import { Phone } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { siteConfig, whatsappUrl } from "@/data/site";

export function FinalCta() {
  return (
    <section className="bg-[#090605] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(230,189,115,0.14),rgba(255,255,255,0.045))] p-6 md:p-10">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#e6bd73]/12 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#e6bd73]">Ready to book</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none text-white md:text-6xl">
                Reserva, llega y deja que la mesa haga el resto.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">{siteConfig.address}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PremiumButton href={whatsappUrl} target="_blank">Reservar por WhatsApp</PremiumButton>
              <a
                href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                className="group relative inline-flex min-h-[3.35rem] items-center justify-center gap-3 overflow-hidden rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.105),rgba(255,255,255,0.035))] px-6 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#e6bd73]/35 hover:bg-white/[0.105] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_70px_rgba(0,0,0,0.36)] focus:outline-none focus:ring-2 focus:ring-[#d8b87b]/45 focus:ring-offset-2 focus:ring-offset-[#050403] active:translate-y-[1px]"
              >
                <span className="pointer-events-none absolute inset-x-5 top-px h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-70" />
                <Phone className="relative h-4 w-4 text-[#e6bd73] transition duration-500 group-hover:scale-110" aria-hidden="true" />
                <span className="relative">Llamar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
