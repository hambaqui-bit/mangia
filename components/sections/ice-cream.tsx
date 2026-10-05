import { menuCategories } from "@/data/menu";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { MenuCard } from "@/components/menu/menu-card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  const heroItems = iceCream.filter((category) => category.id !== "sabores").flatMap((category) => category.items).filter((item) => item.image).slice(0, 4);
  const flavors = menuCategories.find((category) => category.id === "sabores")?.items ?? [];

  return (
    <section id="cream-experience" className="relative overflow-hidden bg-[#120b08] py-12 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,114,91,0.13),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(230,189,115,0.14),transparent_34%)]" />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
          <SectionHeading
            eyebrow="Mangia Grill & Cream"
            title="Helados y postres Mangia"
            description="Conos, banana split, cholados, malteadas y postres con tus sabores favoritos."
          />
            <div className="mt-7 space-y-5">
              {flavors.map((flavor) => <div key={flavor.name} className="border-t border-white/20 pt-4">
                <h3 className="text-xl font-semibold leading-7 text-white">{flavor.name}</h3>
                <p className="mt-2 text-base leading-7 text-white/85">{flavor.description}</p>
              </div>)}
            </div>
            <Link href="/menu#carta-sabores" className="mt-5 inline-flex min-h-12 items-center gap-3 text-base font-medium text-[#e6bd73] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Ver precios de conos y bolas <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <Reveal>
            <Image
              src="/images/Heladeria/sabores-actualizados.png"
              alt="Sabores de helado Gourmet y Exclusivos de Mangia"
              width={1414}
              height={2000}
              className="mx-auto h-auto w-full max-w-xl rounded-lg"
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 576px, 50vw"
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
