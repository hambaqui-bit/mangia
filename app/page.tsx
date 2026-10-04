import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, ChevronRight, MapPin, MessageCircle, Truck, Users, UtensilsCrossed } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { LegacyLinks } from "@/components/layout/legacy-links";
import { RestaurantJsonLd } from "@/components/layout/json-ld";
import { siteConfig, whatsappUrl } from "@/data/site";

const actions = [
  { label: "Ver menú", href: "/menu", icon: UtensilsCrossed, color: "text-[#f0d49a]" },
  { label: "Pedir a domicilio", href: "/domicilios", icon: Truck, color: "text-[#b7dacb]" },
  { label: "Reservar mesa", href: "/reservas", icon: CalendarDays, color: "text-[#f4b6cc]" },
  { label: "Armar pedido para grupos", href: "/grupos", icon: Users, color: "text-[#b7dacb]" },
];

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-[#101312] px-4 py-7 text-white sm:py-10">
      <RestaurantJsonLd /><LegacyLinks />
      <div className="mx-auto max-w-[540px]">
        <header className="text-center">
          <Image src="/images/interior/lounge.jpg" alt="Mesa de Mangia Grill & Cream" width={104} height={104} priority className="mx-auto h-[104px] w-[104px] rounded-full border border-white/20 object-cover object-[50%_70%]" />
          <h1 className="mt-4 font-serif text-5xl leading-tight">Mangia</h1>
          <p className="mt-1 text-sm text-white/70">Grill & Cream · Aguachica</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 px-3 text-sm font-medium text-[#f4b6cc] hover:text-white focus-visible:outline-2 focus-visible:outline-[#f4b6cc]"><InstagramIcon className="h-5 w-5" />Instagram</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 px-3 text-sm font-medium text-[#b7dacb] hover:text-white focus-visible:outline-2 focus-visible:outline-[#b7dacb]"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp</a>
          </div>
        </header>
        <nav aria-label="Accesos de Mangia" className="mt-5 space-y-3">
          {actions.map(({ label, href, icon: Icon, color }) => (
            <Link key={href} href={href} className="flex min-h-[64px] items-center gap-4 rounded-lg border border-white/15 bg-[#1c211f] px-4 py-3 text-base font-medium transition hover:border-[#96c5b2]/60 hover:bg-[#262e2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7dacb]">
              <Icon className={`h-6 w-6 shrink-0 ${color}`} aria-hidden="true" /><span className="min-w-0 flex-1">{label}</span><ChevronRight className="h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
            </Link>
          ))}
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="flex min-h-[64px] items-center gap-4 rounded-lg border border-white/15 bg-[#1c211f] px-4 py-3 text-base font-medium hover:border-[#96c5b2]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7dacb]"><MapPin className="h-6 w-6 shrink-0 text-[#f0d49a]" aria-hidden="true" /><span className="flex-1">Cómo llegar</span><ArrowUpRight className="h-5 w-5 text-white/50" aria-hidden="true" /></a>
        </nav>
        <footer className="mt-5 text-center">
          <Link href="/conoce-mangia" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#b7dacb] underline underline-offset-4">Conoce Mangia<ChevronRight className="h-4 w-4" aria-hidden="true" /></Link>
          <p className="mt-3 text-xs leading-6 text-white/60">{siteConfig.address}<br />{siteConfig.hours}</p>
        </footer>
      </div>
    </main>
  );
}
