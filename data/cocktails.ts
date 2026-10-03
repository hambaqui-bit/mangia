import type { MenuItem } from "@/types/menu";

export const cocktails: MenuItem[] = [
  {
    name: "Blue Margarita",
    description: "Tequila, arándano, jugo de limón y soda.",
    price: "$20.000",
    image: "/images/cocktails/blue-margarita.jpg",
    featured: true,
  },
  {
    name: "Frozen Daiquiri",
    description: "Ron blanco, fresa, jugo de limón e hielo.",
    price: "$20.000",
    image: "/images/cocktails/frozen-daiquiri.jpg",
  },
  {
    name: "Piña Colada",
    description: "Ron blanco, piña, leche condensada y crema de coco, coronada con cereza.",
    price: "$20.000",
    image: "/images/cocktails/pina-colada.jpg",
  },
  {
    name: "Mimosa",
    description: "Vino espumoso, jugo de naranja y cereza.",
    price: "$17.000",
    image: "/images/cocktails/mimosa.jpg",
  },
];
