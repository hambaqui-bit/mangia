import { siteConfig } from "@/data/site";

export function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    servesCuisine: ["Grill", "Burgers", "Cocktails", "Ice cream"],
    priceRange: "$$",
    image: `${siteConfig.url}/images/hero/hero-main.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrera 12 # 3-90",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"],
        opens: "17:00",
        closes: "22:30",
      },
    ],
    sameAs: [siteConfig.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
