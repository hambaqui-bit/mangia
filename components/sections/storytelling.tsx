import { Play } from "lucide-react";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiencePillars } from "@/data/site";
import { slugify } from "@/lib/menu";

export function Storytelling() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#050403] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow="La experiencia Mangia"
            title="Luces bajas, fuego alto y una mesa que pide quedarse."
            description="Mangia se mueve entre restaurante, gastrobar y heladeria premium. La experiencia no depende de una sola categoria: se construye con entrada, plato fuerte, cocktail y final dulce."
          />
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {experiencePillars.map((pillar, index) => (
              <Reveal key={`pillar-${slugify(pillar.label)}-${index}`}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#e6bd73]">{pillar.label}</p>
                  <p className="mt-4 text-sm leading-7 text-white/58">{pillar.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Parallax distance={28} className="group">
          <MediaFrame
            src="/images/interior/lounge.jpg"
            alt="Interior premium de Mangia"
            className="aspect-[4/5] rounded-[2rem] md:aspect-[5/6]"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
          <div className="pointer-events-none -mt-24 ml-5 mr-5 rounded-3xl border border-white/10 bg-black/42 p-5 backdrop-blur-2xl md:ml-10 md:mr-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#e6bd73]">Mangia interior</p>
                <p className="mt-2 font-serif text-3xl text-white">Una escena lista para celebrar.</p>
              </div>
              <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] md:inline-flex">
                <Play className="h-4 w-4 text-[#e6bd73]" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
