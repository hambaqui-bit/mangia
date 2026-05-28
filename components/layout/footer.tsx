import { siteConfig, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050403] py-14 md:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="md:col-span-2 lg:col-span-1">
          <p className="font-serif text-3xl uppercase tracking-[0.25em] text-white">Mangia</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/56">
            Grill, cocktails y heladeria premium en una atmosfera oscura, social y cinematografica.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#e6bd73]">Ubicacion</p>
          <div className="mt-5 space-y-3 text-sm text-white/62">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.city}, {siteConfig.region}</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#e6bd73]">Horario</p>
          <div className="mt-5 space-y-3 text-sm text-white/62">
            <p>Jueves a martes</p>
            <p>5:00 PM - 10:30 PM</p>
            <p className="text-white/36">Miercoles cerrado</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#e6bd73]">Conecta</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/62">
            <a className="transition hover:text-[#e6bd73]" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="transition hover:text-[#e6bd73]" href={siteConfig.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="transition hover:text-[#e6bd73]" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-white/10 px-4 pt-7 text-xs text-white/36 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 {siteConfig.name}. Todos los derechos reservados.</p>
        <p className="uppercase tracking-[0.22em]">Premium gastrobar experience</p>
      </div>
    </footer>
  );
}
