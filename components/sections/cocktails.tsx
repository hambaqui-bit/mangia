import { cocktails } from "@/data/cocktails";
import { Stagger } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/ui/section-heading";
import { MenuCard } from "@/components/menu/menu-card";
import { getMenuItemKey } from "@/lib/menu";

export function CocktailsSection() {
  return (
    <section id="cocktails-feature" className="relative overflow-hidden bg-[#090505] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,124,255,0.14),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(230,189,115,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Signature cocktails"
          title="Bar frio, color medido y una noche que empieza en la copa."
          description="Cocktails con lectura visual limpia: frozen, tropicales y elegantes sin caer en exceso decorativo."
        />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cocktails.map((item, index) => (
            <MenuCard key={getMenuItemKey("cocktails-feature", item, index)} item={item} index={index} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
