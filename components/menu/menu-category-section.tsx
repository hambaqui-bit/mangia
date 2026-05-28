import { Stagger } from "@/components/motion/stagger";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { getMenuItemKey, getSupportingItems } from "@/lib/menu";
import { cn } from "@/lib/utils";
import type { MenuCategory, MenuItem } from "@/types/menu";
import { MenuCard } from "./menu-card";

const toneClass: Record<MenuCategory["tone"], string> = {
  ember: "from-[#100b08] via-[#070504] to-[#120c08]",
  charcoal: "from-[#050505] via-[#0d0d0c] to-[#050505]",
  cream: "from-[#130f0b] via-[#090705] to-[#1b130d]",
  crimson: "from-[#120607] via-[#070504] to-[#160b08]",
};

function FeaturedMenuPanel({
  item,
  categoryTitle,
  isAlt,
}: {
  item: MenuItem;
  categoryTitle: string;
  isAlt: boolean;
}) {
  const hasImage = Boolean(item.image);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.095),rgba(255,255,255,0.035))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl",
        isAlt && "lg:-translate-y-8",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(230,189,115,0.14),transparent_36%)] opacity-80" />
      <div className="relative grid gap-5 md:grid-cols-[0.92fr_1.08fr] md:items-stretch">
        {hasImage ? (
          <MediaFrame
            src={item.image as string}
            alt={item.name}
            className="min-h-[18rem] rounded-[1.5rem] md:min-h-[24rem]"
            sizes="(max-width: 768px) 100vw, 36vw"
          />
        ) : (
          <div className="relative min-h-[16rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(230,189,115,0.2),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))]">
            <span className="absolute bottom-4 left-5 font-serif text-8xl text-white/[0.055]">
              01
            </span>
          </div>
        )}

        <div className="flex min-h-full flex-col justify-between p-2 md:p-5">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#e6bd73]">
              Spotlight / {categoryTitle}
            </p>
            <div className="mt-5 flex items-start justify-between gap-5">
              <h3 className="text-balance font-serif text-4xl leading-[0.95] text-white md:text-5xl">
                {item.name}
              </h3>
              {item.price ? (
                <p className="shrink-0 font-serif text-3xl leading-none text-[#f0d49a] md:text-4xl">
                  {item.price}
                </p>
              ) : null}
            </div>
            {item.description ? (
              <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-white/64 md:text-base md:leading-8">
                {item.description}
              </p>
            ) : null}
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
            <span className="h-px flex-1 bg-gradient-to-r from-[#e6bd73]/55 to-transparent" />
            <span className="text-[0.66rem] uppercase tracking-[0.24em] text-white/38">
              Seleccion Mangia
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function MenuCategorySection({
  category,
  index,
}: {
  category: MenuCategory;
  index: number;
}) {
  const { featuredItem: feature, supportingItems } = getSupportingItems(category.items);
  const isAlt = index % 2 === 1;
  const gridClass =
    supportingItems.length <= 2
      ? "md:grid-cols-2 xl:grid-cols-2"
      : index % 3 === 0
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <section
      id={category.id}
      className={cn("relative overflow-hidden bg-gradient-to-br py-20 md:py-28", toneClass[category.tone])}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute left-1/2 top-12 h-72 w-[min(42rem,80vw)] -translate-x-1/2 rounded-full bg-[#e6bd73]/[0.055] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center",
            isAlt && "lg:grid-cols-[1.18fr_0.82fr]",
          )}
        >
          <div className={cn(isAlt && "lg:order-2")}>
            <SectionHeading
              eyebrow={category.eyebrow}
              title={category.title}
              description={category.description}
            />
          </div>
          <div className={cn(isAlt && "lg:order-1")}>
            <FeaturedMenuPanel item={feature} categoryTitle={category.title} isAlt={isAlt} />
          </div>
        </div>

        {supportingItems.length > 0 ? (
          <div className="mt-10 md:mt-14">
            <div className="mb-5 flex items-center gap-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/42">
                Mas de {category.title}
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
            </div>
            <Stagger className={cn("grid gap-4", gridClass)}>
              {supportingItems.map((item, itemIndex) => (
                <MenuCard
                  key={getMenuItemKey(category.id, item, itemIndex)}
                  item={item}
                  index={itemIndex}
                />
              ))}
            </Stagger>
          </div>
        ) : null}
      </div>
    </section>
  );
}
