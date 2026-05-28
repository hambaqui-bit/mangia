import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#e6bd73] md:text-xs">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance font-serif text-4xl leading-[0.96] text-white md:text-6xl xl:text-7xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/64 md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
