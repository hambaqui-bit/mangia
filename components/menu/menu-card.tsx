import { StaggerItem } from "@/components/motion/stagger";
import { MediaFrame } from "@/components/ui/media-frame";
import type { MenuItem } from "@/types/menu";

export function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const hasImage = Boolean(item.image);

  return (
    <StaggerItem>
      <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#e6bd73]/35">
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#e6bd73]/12 blur-3xl" />
        </div>
        {hasImage ? (
          <MediaFrame
            src={item.image as string}
            alt={item.name}
            className="aspect-[4/5] rounded-[1.35rem]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(230,189,115,0.17),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
            <span className="font-serif text-7xl text-white/[0.06]">{String(index + 1).padStart(2, "0")}</span>
          </div>
        )}
        <div className="relative px-2 pb-2 pt-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-balance font-serif text-2xl leading-tight text-white">{item.name}</h3>
            {item.price ? (
              <span className="shrink-0 rounded-full border border-[#e6bd73]/25 bg-[#e6bd73]/10 px-3 py-1 text-sm text-[#f0d49a]">
                {item.price}
              </span>
            ) : null}
          </div>
          {item.description ? (
            <p className="mt-4 text-sm leading-7 text-white/58">{item.description}</p>
          ) : null}
        </div>
      </article>
    </StaggerItem>
  );
}
