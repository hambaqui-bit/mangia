import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { siteConfig } from "@/data/site";

export function ActionHeader() {
  return <header className="sticky top-0 z-40 h-[68px] border-b border-white/15 bg-[#101312] text-white"><div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8"><Link href="/" className="flex min-h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#b7dacb]" aria-label="Volver a los accesos de Mangia"><ArrowLeft className="h-5 w-5" aria-hidden="true" /><span className="font-serif text-2xl">Mangia</span></Link><a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 text-sm text-[#f4b6cc] focus-visible:outline-2 focus-visible:outline-[#f4b6cc]"><InstagramIcon className="h-5 w-5" />Instagram</a></div></header>;
}
