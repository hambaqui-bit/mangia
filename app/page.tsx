import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, ChevronRight, MapPin, MessageCircle, UtensilsCrossed } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { LegacyLinks } from "@/components/layout/legacy-links";
import { EntryBackground } from "@/components/layout/entry-background";
import { RestaurantJsonLd } from "@/components/layout/json-ld";
import { siteConfig, whatsappUrl } from "@/data/site";

const actions = [
  { label: "Menú y pedidos", href: "/menu", icon: UtensilsCrossed },
  { label: "Reservar mesa", href: "/reservas", icon: CalendarDays },
];

const actionClass = "mangia-entry-action group flex min-h-16 items-center gap-3 rounded-full border border-white/10 bg-[#1a1e1c] px-4 py-2 text-[15px] font-medium text-[#eeeae3] sm:px-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7dacb]";
const arrowClass = "mangia-entry-arrow h-4 w-4 shrink-0 text-white/40";
const iconClass = "h-5 w-5 text-[#d9c79f]";

export default function HomePage() {
  return (
    <main className="relative isolate min-h-dvh px-4 py-7 pb-16 text-white sm:py-10 sm:pb-16">
      <EntryBackground />
      <RestaurantJsonLd /><LegacyLinks />
      <div className="mx-auto max-w-[420px]">
        <header className="text-center">
          <Image src="/images/interior/fachada-entrada.webp" alt="Fachada de Mangia Grill & Cream" width={88} height={88} priority className="mx-auto h-[88px] w-[88px] rounded-full border border-white/15 object-cover object-center" />
          <h1 className="mt-4 font-serif text-[36px] font-normal leading-tight text-[#f5f1e9]">MANGIA</h1>
          <p className="mt-1 text-[13px] text-white/80">Grill & Cream · Aguachica</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 px-3 text-sm font-medium text-[#f4b6cc] hover:text-white focus-visible:outline-2 focus-visible:outline-[#f4b6cc]"><InstagramIcon className="h-5 w-5" />Instagram</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 px-3 text-sm font-medium text-[#b7dacb] hover:text-white focus-visible:outline-2 focus-visible:outline-[#b7dacb]"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp</a>
          </div>
        </header>
        <nav aria-label="Accesos de Mangia" className="mt-5 space-y-2.5">
          {actions.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className={actionClass}>
              <span className="flex w-10 shrink-0 justify-center"><Icon className={iconClass} strokeWidth={1.6} aria-hidden="true" /></span><span className="min-w-0 flex-1">{label}</span><ChevronRight className={arrowClass} aria-hidden="true" />
            </Link>
          ))}
          <Link href="/conoce-mangia" aria-label="Conoce Mangia" className={actionClass}>
            <Image src="/images/gallery/gallery-1.jpg" alt="Fachada de Mangia Grill & Cream" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full border border-white/15 object-cover object-[50%_65%]" />
            <span className="min-w-0 flex-1">Conoce Mangia</span><ChevronRight className={arrowClass} aria-hidden="true" />
          </Link>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className={actionClass}><span className="flex w-10 shrink-0 justify-center"><MapPin className={iconClass} strokeWidth={1.6} aria-hidden="true" /></span><span className="min-w-0 flex-1">Cómo llegar</span><ArrowUpRight className={arrowClass} aria-hidden="true" /></a>
        </nav>
        <footer className="mt-5 text-center">
          <p className="mt-3 text-xs leading-6 text-white/75">{siteConfig.address}<br />{siteConfig.hours}</p>
        </footer>
      </div>
    </main>
  );
}
