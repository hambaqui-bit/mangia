import { Footer } from "@/components/layout/footer";
import { RestaurantJsonLd } from "@/components/layout/json-ld";
import { Navbar } from "@/components/layout/navbar";
import { GallerySection } from "@/components/gallery/gallery-section";
import { MenuExperience } from "@/components/menu/menu-experience";
import { CocktailsSection } from "@/components/sections/cocktails";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { IceCreamExperience } from "@/components/sections/ice-cream";
import { ReservationsSection } from "@/components/sections/reservations";
import { Storytelling } from "@/components/sections/storytelling";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <RestaurantJsonLd />
      <Navbar />
      <main className="overflow-x-clip bg-[#050403] text-white">
        <Hero />
        <Storytelling />
        <MenuExperience />
        <CocktailsSection />
        <IceCreamExperience />
        <GallerySection />
        <ReservationsSection />
        <TestimonialsSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
