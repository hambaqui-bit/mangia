import type { MenuCategory, MenuItem } from "@/types/menu";

export type MenuGroup = "all" | "food" | "drinks" | "cream";
export type MenuOrder = "menu" | "price-asc" | "price-desc";
export type CatalogItem = MenuItem & {
  key: string;
  group: MenuGroup;
  categoryId: string;
  categoryTitle: string;
  categoryDescription: string;
};

const drinks = new Set(["bebidas", "granizados", "sodas-italianas", "cervezas", "cocktails"]);
const cream = new Set(["heladeria", "conos-1-bola", "conos-2-bolas", "affogato", "sundae", "banana-split", "waffle-ice-cream", "cholado", "parfait", "malteadas", "brownies-con-helado", "toppings", "sabores"]);
const desserts = new Set(["affogato", "sundae", "banana-split", "waffle-ice-cream", "cholado", "parfait", "brownies-con-helado"]);
const cones = new Set(["heladeria", "conos-1-bola", "conos-2-bolas"]);

export function createCatalog(categories: MenuCategory[]): CatalogItem[] {
  return categories.flatMap((category) => {
    const group: MenuGroup = drinks.has(category.id) ? "drinks" : cream.has(category.id) ? "cream" : "food";
    const categoryId = cones.has(category.id) ? "cones" : desserts.has(category.id) ? "desserts" : category.id;
    const categoryTitle = categoryId === "cones" ? "Conos" : categoryId === "desserts" ? "Postres" : category.id === "cocktails" ? "Cocteles" : category.id === "toppings" ? "Adicionales de heladería" : category.title;
    return category.items.map((item, index) => ({ ...item, key: `${category.id}-${index}`, group, categoryId, categoryTitle, categoryDescription: category.description }));
  });
}

export function normalizeMenuText(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Expand known terms without inventing ingredients or dietary claims.
const synonyms: Record<string, string[]> = {
  burger: ["hamburguesa"], burgers: ["hamburguesa"], hamburguesa: ["burger"],
  cocktail: ["coctel"], cocktails: ["coctel"], coctel: ["cocktail"], cocteles: ["cocktail"],
  helado: ["heladeria"], helados: ["heladeria"], "ice cream": ["heladeria"],
};

export function menuPrice(item: MenuItem): number | null {
  return item.price && /^\$[\d.]+$/.test(item.price) ? Number(item.price.replace(/[^\d]/g, "")) : null;
}

export function filterCatalog(items: CatalogItem[], filters: { query: string; group: MenuGroup; category: string; order: MenuOrder }): CatalogItem[] {
  const query = normalizeMenuText(filters.query.trim());
  const tokens = query === "ice cream" ? [query] : query.split(/\s+/).filter(Boolean);
  const filtered = items.filter((item) => {
    if (filters.group !== "all" && item.group !== filters.group) return false;
    if (filters.category === "featured" ? !item.featured : filters.category !== "all" && item.categoryId !== filters.category) return false;
    const text = normalizeMenuText([item.name, item.description, item.categoryTitle, item.group === "cream" ? "heladeria" : ""].join(" "));
    return tokens.every((token) => [token, ...(synonyms[token] ?? [])].some((term) => text.includes(term)));
  });
  if (filters.order === "menu") return filtered;
  return filtered.sort((a, b) => {
    const left = menuPrice(a);
    const right = menuPrice(b);
    if (left === null) return right === null ? 0 : 1;
    if (right === null) return -1;
    return filters.order === "price-asc" ? left - right : right - left;
  });
}
