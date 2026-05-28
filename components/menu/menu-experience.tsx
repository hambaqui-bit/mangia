import { menuCategories } from "@/data/menu";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCategoryKey } from "@/lib/menu";
import { MenuCategorySection } from "./menu-category-section";

export function MenuExperience() {
  const categoryPreview = menuCategories.slice(0, 6);

  return (
    <>
      <section id="menu" className="relative overflow-hidden bg-[#070504] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(230,189,115,0.12),transparent_44%)]" />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Menu experience"
            title="Una carta extensa, curada como una historia de mesa."
            description="La experiencia se divide en fuego, bar frio, cocktails y heladeria. Cada bloque tiene ritmo editorial para evitar una grilla plana y mantener apetito visual durante todo el scroll."
            align="center"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categoryPreview.map((category, index) => (
              <a
                key={getCategoryKey(category, index)}
                href={`#${category.id}`}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#e6bd73]/35 hover:bg-white/[0.07]"
              >
                <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[#e6bd73]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-3xl leading-none text-white">
                  {category.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/56">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {menuCategories.map((category, index) => (
        <MenuCategorySection key={getCategoryKey(category, index)} category={category} index={index} />
      ))}
    </>
  );
}
