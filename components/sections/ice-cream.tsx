import { menuCategories } from "@/data/menu";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { MenuCard } from "@/components/menu/menu-card";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { getMenuItemKey } from "@/lib/menu";

const iceCream = menuCategories.filter((category) =>
  [
    "heladeria",
    "banana-split",
    "cholado",
    "brownies-con-helado",
    "toppings",
    "sabores",
  ].includes(category.id),
);

export function IceCreamExperience() {
  const heroItems = iceCream.flatMap((category) => category.items).filter((item) => item.image).slice(0, 4);

  return (
    <section id="cream-experience" className="relative overflow-hidden bg-[#120b08] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,114,91,0.13),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(230,189,115,0.14),transparent_34%)]" />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Mangia Grill & Cream"
            title="La heladeria como final editorial, no como anexo."
            description="Conos, affogato, sundae, banana split, waffle, cholado, malteadas, brownies, toppings y sabores conviven como una experiencia visual propia."
          />
          <Reveal>
            <MediaFrame
              src="/images/Heladeria/sabores.jpg"
              alt="Vitrina de sabores Mangia"
              className="aspect-[16/12] rounded-[2rem]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {heroItems.map((item, index) => (
            <MenuCard key={getMenuItemKey("cream-experience", item, index)} item={item} index={index} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
