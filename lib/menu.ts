import type { MenuCategory, MenuItem } from "@/types/menu";

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getMenuItemSlug(item: MenuItem) {
  return item.slug ?? slugify(item.name);
}

export function getMenuItemKey(categoryId: string, item: MenuItem, index: number) {
  return `${categoryId}-${getMenuItemSlug(item)}-${index}`;
}

export function getCategoryKey(category: MenuCategory, index: number) {
  return `${category.id}-${slugify(category.title)}-${index}`;
}

export function getFeaturedIndex(items: MenuItem[]) {
  const explicitFeaturedIndex = items.findIndex((item) => item.featured);

  if (explicitFeaturedIndex >= 0) {
    return explicitFeaturedIndex;
  }

  const imageIndex = items.findIndex((item) => item.image);

  return imageIndex >= 0 ? imageIndex : 0;
}

export function getSupportingItems(items: MenuItem[]) {
  const featuredIndex = getFeaturedIndex(items);

  return {
    featuredItem: items[featuredIndex],
    supportingItems: items.filter((_, itemIndex) => itemIndex !== featuredIndex),
  };
}
