import { Quote } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site";
import { slugify } from "@/lib/menu";

export function TestimonialsSection() {
  return (
    <section className="bg-[#050403] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social proof"
          title="Una experiencia pensada para volver con gente."
          description="La propuesta combina producto contundente, ambiente de noche y postres que cierran la visita con memoria visual."
        />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={`testimonial-${slugify(testimonial.name)}-${index}`}>
              <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                <Quote className="h-6 w-6 text-[#e6bd73]" aria-hidden="true" />
                <p className="mt-6 text-pretty text-lg leading-8 text-white/74">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-serif text-xl text-white">{testimonial.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/36">{testimonial.context}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
