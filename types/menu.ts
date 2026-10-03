export type MenuCategoryId =
  | "entradas"
  | "carnes"
  | "cerdo"
  | "pollo"
  | "hamburguesas"
  | "papas"
  | "picadas"
  | "perros"
  | "infantil"
  | "desgranados"
  | "adicionales"
  | "bebidas"
  | "granizados"
  | "sodas-italianas"
  | "cervezas"
  | "cocktails"
  | "heladeria"
  | "conos-1-bola"
  | "conos-2-bolas"
  | "affogato"
  | "sundae"
  | "banana-split"
  | "waffle-ice-cream"
  | "cholado"
  | "parfait"
  | "malteadas"
  | "brownies-con-helado"
  | "toppings"
  | "sabores";

export type MenuTone = "ember" | "charcoal" | "cream" | "crimson";

export type MenuItem = {
  id?: string;
  slug?: string;
  name: string;
  description?: string;
  price?: string;
  image?: string;
  imageFit?: "contain";
  tags?: string[];
  featured?: boolean;
};

export type MenuCategory = {
  id: MenuCategoryId;
  eyebrow: string;
  title: string;
  description: string;
  tone: MenuTone;
  items: MenuItem[];
};
