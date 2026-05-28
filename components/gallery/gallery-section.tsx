import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/ui/section-heading";
import { slugify } from "@/lib/menu";
import { cn } from "@/lib/utils";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-[#050403] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Editorial gallery"
          title="Una marca que se reconoce en segundos."
          description="Composiciones verticales, textura, nightlife y producto real para que cada bloque se sienta como campana, no como relleno."
          align="center"
        />
        <Stagger className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-4 md:auto-rows-[20rem]">
          {galleryItems.map((item, index) => (
            <StaggerItem
              key={`gallery-${slugify(item.title)}-${index}`}
              className={cn(
                "group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]",
                item.span === "wide" && "md:col-span-2",
                item.span === "tall" && "md:row-span-2",
              )}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-[1600ms] group-hover:scale-105"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgdmlsbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIGZpbGw9IiMwNTA0MDMiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjIiIHI9IjgiIGZpbGw9IiNlNmJkNzMiIG9wYWNpdHk9Ii4yIi8+PC9zdmc+"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-[1600ms] group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.66rem] uppercase tracking-[0.26em] text-[#e6bd73]">{item.kicker}</p>
                <h3 className="mt-2 font-serif text-2xl text-white">{item.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
