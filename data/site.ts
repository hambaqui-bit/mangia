import type { NavItem, Testimonial } from "@/types/site";

export const siteConfig = {
  name: "Mangia Grill & Cream",
  shortName: "Mangia",
  description:
    "Gastrobar premium en Aguachica con grill, cocktails, heladeria artesanal y una experiencia nocturna cinematografica.",
  url: "https://mangiagrillandcream.com",
  address: "Carrera 12 # 3-90, Aguachica, Cesar",
  city: "Aguachica",
  region: "Cesar",
  country: "CO",
  phone: "+57 318 229 4491",
  whatsappNumber: "573182294491",
  instagram: "https://instagram.com/mangiagrillandcream",
  instagramHandle: "@mangiagrillandcream",
  mapsUrl: "https://maps.google.com/?q=Carrera%2012%20%23%203-90%20Aguachica%20Cesar",
  hours: "Jueves a martes, 5:00 PM - 10:30 PM",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const navItems: NavItem[] = [
  { label: "Experiencia", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Cocktails", href: "#cocktails" },
  { label: "Heladeria", href: "#heladeria" },
  { label: "Reservas", href: "#reserve" },
];

export const experiencePillars = [
  {
    label: "Grill",
    value: "Carnes, burgers y picadas con fuego, textura y abundancia elegante.",
  },
  {
    label: "Cream",
    value: "Helados, malteadas y postres pensados para cerrar con impacto.",
  },
  {
    label: "Night",
    value: "Cocktails, luces bajas y una atmosfera social de gastrobar premium.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "La comida llega con presencia, los cocktails se sienten especiales y el ambiente tiene energia de noche grande.",
    name: "Mesa Mangia",
    context: "Experiencia de grupo",
  },
  {
    quote:
      "La carta funciona para plan familiar, antojo premium o celebracion. Eso es dificil de lograr con tanto estilo.",
    name: "Cliente frecuente",
    context: "Grill & cream",
  },
  {
    quote:
      "Los postres y las burgers son el tipo de producto que uno quiere fotografiar antes de probar.",
    name: "Visita de fin de semana",
    context: "Aguachica",
  },
];
