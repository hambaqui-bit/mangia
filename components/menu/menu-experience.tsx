"use client";

import Image from "next/image";
import { Beer, GlassWater, IceCreamBowl, LayoutGrid, Martini, Search, Snowflake, Sparkles, UtensilsCrossed, X, ChevronDown, FilterX } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { GroupOrder, OrderQuantity } from "@/components/menu/group-order";
import { useMemo, useRef, useState } from "react";
import { menuCategories } from "@/data/menu";
import { siteConfig } from "@/data/site";
import { createCatalog, filterCatalog, menuPrice, type CatalogItem, type MenuGroup, type MenuOrder } from "@/lib/menu-catalog";
import { cn } from "@/lib/utils";

const catalog = createCatalog(menuCategories);
const groups = [
  { id: "food", label: "Comida", icon: UtensilsCrossed },
  { id: "drinks", label: "Bebidas", icon: GlassWater },
  { id: "cream", label: "Heladería", icon: IceCreamBowl },
  { id: "all", label: "Todo", icon: LayoutGrid },
] as const;
const control = "min-h-11 w-full rounded-lg border border-white/20 bg-[#181a19] px-3 text-xs text-white sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6bd73]";

const drinkIcons = { bebidas: GlassWater, granizados: Snowflake, "sodas-italianas": Sparkles, cervezas: Beer, cocktails: Martini };

function Product({ item, showCategory = true, quantity, onQuantity }: { item: CatalogItem; showCategory?: boolean; quantity: number; onQuantity: (quantity: number) => void }) {
  const addControl = menuPrice(item) !== null && <OrderQuantity name={`${item.name} (${item.categoryTitle})`} quantity={quantity} onChange={onQuantity} />;
  if (item.group === "drinks" && !item.image) {
    return (
      <article data-menu-product className="min-w-0 border-b border-white/15 py-4">
        {showCategory && <p className="mb-2 text-xs font-medium text-[#96c5b2]">{item.categoryTitle}</p>}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <h3 className="min-w-0 text-base font-medium leading-6 text-white">{item.name}</h3>
          <p className="text-base font-semibold leading-6 tabular-nums text-[#f0d49a]">{item.price}</p>
        </div>
        {item.description && <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>}
        {addControl}
      </article>
    );
  }
  return (
    <article data-menu-product className={cn("min-w-0", item.image ? "overflow-hidden rounded-lg border border-white/15 bg-[#181a19]" : "border-b border-white/15 py-4")}>
      <div className={cn(item.image && "grid grid-cols-[96px_minmax(0,1fr)] sm:block")}>
        {item.image && (
          <div className="relative aspect-square w-24 self-start sm:aspect-[16/10] sm:w-full">
            <Image src={item.image} alt={item.name} fill sizes="(max-width: 639px) 96px, (max-width: 1023px) 50vw, 33vw" className={item.imageFit === "contain" ? "object-contain" : "object-cover"} />
          </div>
        )}
        <div className={cn("min-w-0", item.image && "p-3 sm:p-5")}>
          <p className="mb-1 text-xs font-medium text-[#96c5b2]">{item.categoryTitle}</p>
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
            <h3 className="min-w-0 text-base font-semibold leading-snug text-white sm:text-lg">{item.name}</h3>
            {item.price && <p className="shrink-0 text-base font-semibold tabular-nums text-[#f0d49a]">{item.price}</p>}
          </div>
          {item.description && (
            <details className="mt-3">
              <summary className="flex min-h-8 w-fit cursor-pointer list-none items-center gap-1 text-sm text-white/75 focus-visible:outline-2 focus-visible:outline-[#e6bd73] [&::-webkit-details-marker]:hidden">
                {item.categoryId === "sabores" ? "Ver sabores" : "Ver detalles"}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </summary>
              <p className="mt-2 text-sm leading-6 text-white/80">{item.description}</p>
            </details>
          )}
          {addControl}
        </div>
      </div>
    </article>
  );
}

export function MenuExperience() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<MenuGroup>("all");
  const [category, setCategory] = useState("featured");
  const [order, setOrder] = useState<MenuOrder>("menu");
  const [selection, setSelection] = useState<Record<string, { quantity: number; note: string }>>({});
  const lines = catalog.flatMap((item) => {
    const selected = selection[item.key];
    const unitPrice = menuPrice(item);
    return selected && unitPrice !== null ? [{ key: item.key, name: item.name, category: item.categoryTitle, unitPrice, ...selected }] : [];
  });

  function changeQuantity(key: string, quantity: number) {
    setSelection((current) => {
      const next = { ...current };
      if (quantity <= 0) delete next[key];
      else next[key] = { quantity: Math.min(999, Math.floor(quantity)), note: current[key]?.note ?? "" };
      return next;
    });
  }

  function changeNote(key: string, note: string) {
    setSelection((current) => current[key] ? { ...current, [key]: { ...current[key], note } } : current);
  }
  const searchRef = useRef<HTMLInputElement>(null);
  const categories = useMemo(() => Array.from(new Map(catalog.filter((item) => group === "all" || item.group === group).map((item) => [item.categoryId, item.categoryTitle]))), [group]);
  const results = useMemo(() => filterCatalog(catalog, { query, group, category, order }), [query, group, category, order]);
  const activeCategory = category === "featured" ? "Selección Mangia" : categories.find(([id]) => id === category)?.[1];
  const drinkSections = Array.from(new Set(results.map((item) => item.categoryId))).map((id) => ({ id, items: results.filter((item) => item.categoryId === id) }));

  function resetFilters() {
    setQuery("");
    setGroup("all");
    setCategory("all");
    setOrder("menu");
  }

  return (
    <section id="menu" aria-labelledby="menu-title" className="menu-browser relative scroll-mt-20 bg-[#101312] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-sm font-medium text-[#96c5b2]">Menú Mangia</p>
            <h2 id="menu-title" className="font-serif text-4xl leading-tight text-white md:text-5xl">¿Qué se te antoja hoy?</h2>
          </div>
          <div className="flex flex-col gap-3">
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-3 text-[#f4b6cc] hover:text-[#ffe1ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4b6cc]">
              <InstagramIcon className="h-5 w-5 shrink-0" />
              <span className="text-sm font-medium">Síguenos en Instagram<span className="block text-xs font-normal">{siteConfig.instagramHandle}</span></span>
            </a>
            <p className="text-xs text-white/65">Precios en pesos colombianos</p>
          </div>
        </div>

        <div className="sticky top-[68px] z-30 -mx-4 border-y border-white/15 bg-[#101312] px-4 py-3 sm:-mx-1 sm:px-1">
          <label htmlFor="menu-search" className="sr-only">Buscar en el menú</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-white/60" aria-hidden="true" />
            <input
              ref={searchRef}
              id="menu-search"
              type="search"
              value={query}
              onChange={(event) => { setQuery(event.target.value); if (category === "featured") setCategory("all"); }}
              placeholder="Hamburguesa, picada, helado…"
              className={cn(control, "h-12 pl-11 pr-24 [&::-webkit-search-cancel-button]:appearance-none")}
            />
            {query && <button type="button" aria-label="Limpiar búsqueda" title="Limpiar búsqueda" onClick={() => { setQuery(""); searchRef.current?.focus(); }} className="absolute right-12 top-1 flex h-10 w-10 items-center justify-center rounded-lg text-white/75 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#e6bd73]"><X className="h-5 w-5" aria-hidden="true" /></button>}
            <button type="button" aria-label="Limpiar filtros" title="Limpiar filtros" onClick={resetFilters} className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-lg text-[#b7dacb] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#e6bd73]"><FilterX className="h-5 w-5" aria-hidden="true" /></button>
          </div>

          <div role="group" aria-label="Tipo de producto" className="my-3 grid grid-cols-4 gap-1 rounded-lg bg-[#202622] p-1">
            {groups.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" aria-pressed={group === id} onClick={() => { setGroup(id); setCategory("all"); }} className={cn("flex min-h-11 items-center justify-center gap-1.5 rounded-md px-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6bd73] sm:text-sm", group === id ? "bg-[#b7dacb] text-[#102b20]" : "text-white/80 hover:bg-white/10")}>
                <Icon className="hidden h-4 w-4 shrink-0 min-[390px]:block" aria-hidden="true" />{label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,135px)] gap-2 sm:grid-cols-[minmax(0,1fr)_200px] lg:grid-cols-[minmax(0,1fr)_200px_auto]">
            <div className="min-w-0">
              <label htmlFor="menu-category" className="mb-1 block text-xs text-white/65">Categoría</label>
              <select id="menu-category" value={category} onChange={(event) => setCategory(event.target.value)} className={control}>
                <option value="all">Todas</option>
                <option value="featured">Selección Mangia</option>
                {categories.map(([id, title]) => <option key={id} value={id}>{id === "toppings" ? "Extras heladería" : title}</option>)}
              </select>
            </div>
            <div className="min-w-0">
              <label htmlFor="menu-order" className="mb-1 block text-xs text-white/65">Ordenar por</label>
              <select id="menu-order" value={order} onChange={(event) => setOrder(event.target.value as MenuOrder)} className={control}>
                <option value="menu">Carta</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
              </select>
            </div>
            <div className="col-span-2 self-end lg:col-span-1">
              <GroupOrder lines={lines} onQuantity={changeQuantity} onNote={changeNote} />
            </div>
          </div>
        </div>

        <div className="my-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{activeCategory ?? groups.find((item) => item.id === group)?.label}</h3>
            <p role="status" aria-live="polite" aria-atomic="true" className="mt-1 break-words text-sm text-white/65">{results.length} {results.length === 1 ? "resultado" : "resultados"}{query.trim() ? " para “" + query.trim() + "”" : ""}</p>
          </div>
        </div>

        {results.length && group === "drinks" && order === "menu" ? (
          <div className="space-y-10">
            {drinkSections.map(({ id, items }) => {
              const Icon = drinkIcons[id as keyof typeof drinkIcons] ?? GlassWater;
              const hasPhotos = items.some((item) => item.image);
              return (
                <section key={id} aria-label={items[0].categoryTitle}>
                  {drinkSections.length > 1 && <div className="mb-3 flex items-center gap-3 border-b border-[#96c5b2]/25 pb-3">
                    <Icon className="h-5 w-5 shrink-0 text-[#96c5b2]" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-white">{items[0].categoryTitle}</h3>
                  </div>}
                  <div className={cn("grid items-start gap-x-10", hasPhotos ? "gap-y-4 sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")}>
                    {items.map((item) => <Product key={item.key} item={item} showCategory={false} quantity={selection[item.key]?.quantity ?? 0} onQuantity={(quantity) => changeQuantity(item.key, quantity)} />)}
                  </div>
                </section>
              );
            })}
          </div>
        ) : results.length ? (
          <div className={cn("grid items-start gap-x-6 gap-y-4", group === "drinks" ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
            {results.map((item) => <Product key={item.key} item={item} quantity={selection[item.key]?.quantity ?? 0} onQuantity={(quantity) => changeQuantity(item.key, quantity)} />)}
          </div>
        ) : (
          <div className="py-12 text-center">
            <Search className="mx-auto mb-4 h-7 w-7 text-[#96c5b2]" aria-hidden="true" />
            <p className="text-lg font-medium text-white">No encontramos productos con esa búsqueda</p>
            <button type="button" onClick={resetFilters} className="mt-4 min-h-11 text-sm text-[#b7dacb] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#e6bd73]">Ver todo el menú</button>
          </div>
        )}

        {category === "featured" && <button type="button" onClick={() => setCategory("all")} className="mt-8 min-h-12 rounded-lg border border-[#b7dacb]/50 px-5 text-sm font-semibold text-[#b7dacb] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#e6bd73]">Ver todo el menú</button>}
      </div>
    </section>
  );
}
