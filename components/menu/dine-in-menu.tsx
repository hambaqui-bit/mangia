"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { menuCategories } from "@/data/menu";
import { createCatalog, filterCatalog, type CatalogItem } from "@/lib/menu-catalog";
import { cn } from "@/lib/utils";

// Brownies follow malteadas in the original carta; keep that position when grouping desserts.
const catalog = menuCategories.flatMap((category) => createCatalog([category]).map((item) =>
  category.id === "brownies-con-helado" ? { ...item, categoryId: category.id, categoryTitle: category.title } : item
));
const categories = Array.from(new Map(catalog.map((item) => [item.categoryId, item.categoryTitle])));
const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7dacb]";

export function DineInMenu() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0]?.[0]);
  const [product, setProduct] = useState<CatalogItem | null>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const results = useMemo(() => filterCatalog(catalog, { query, group: "all", category: "all", order: "menu" }), [query]);
  const sections = useMemo(() => categories.flatMap(([id, title]) => {
    const items = results.filter((item) => item.categoryId === id);
    return items.length ? [{ id, title, items }] : [];
  }), [results]);

  useEffect(() => {
    if (query.trim()) resultsRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [query]);

  useEffect(() => {
    let frame = 0;
    const elements = sections.map(({ id }) => document.getElementById(`carta-${id}`)).filter((element): element is HTMLElement => Boolean(element));
    function update() {
      frame = 0;
      const bottom = toolbarRef.current?.getBoundingClientRect().bottom ?? 180;
      const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const current = atEnd ? elements.at(-1) : elements.find((element) => element.getBoundingClientRect().bottom > bottom + 24);
      if (current) setActiveCategory(current.id.replace("carta-", ""));
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [sections]);

  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>(`[href="#carta-${activeCategory}"]`);
    if (!nav || !link) return;
    const left = link.offsetLeft;
    if (left < nav.scrollLeft || left + link.offsetWidth > nav.scrollLeft + nav.clientWidth) {
      nav.scrollTo({ left: left - 16, behavior: "instant" });
    }
  }, [activeCategory]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!product || !dialog) return;
    const scrollPosition = window.scrollY;
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
    };
  }, [product]);

  function clearSearch() {
    setQuery("");
    searchRef.current?.focus();
  }

  return (
    <div className="dine-in-menu min-h-screen bg-[#101312] pb-12 text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl">Nuestra carta</h1>
        <p className="text-right text-xs leading-5 text-white/65">Precios en<br className="sm:hidden" /> pesos colombianos</p>
      </div>

      <div ref={toolbarRef} className="sticky top-[68px] z-30 border-y border-white/15 bg-[#101312]">
        <div className="mx-auto max-w-[1200px] px-4 pt-3 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-white/60" aria-hidden="true" />
            <label htmlFor="carta-search" className="sr-only">Buscar en toda la carta</label>
            <input ref={searchRef} id="carta-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar en la carta" className={cn("h-11 w-full rounded-lg border border-white/20 bg-[#181a19] pl-11 pr-12 text-base text-white placeholder:text-white/60 [&::-webkit-search-cancel-button]:appearance-none", focus)} />
            {query && <button type="button" onClick={clearSearch} title="Limpiar búsqueda" aria-label="Limpiar búsqueda" className={cn("absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-lg text-white/80", focus)}><X className="h-5 w-5" aria-hidden="true" /></button>}
          </div>
          <nav ref={navRef} aria-label="Categorías de la carta" className="carta-categories relative mt-1 flex gap-5 overflow-x-auto">
            {sections.map(({ id, title }) => (
              <a key={id} href={`#carta-${id}`} aria-current={activeCategory === id ? "location" : undefined} className={cn("flex min-h-12 shrink-0 items-center border-b-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#b7dacb]", activeCategory === id ? "border-[#b7dacb] font-semibold text-[#b7dacb]" : "border-transparent text-white/75 hover:text-white")}>{title}</a>
            ))}
          </nav>
        </div>
      </div>

      <div ref={resultsRef} className="mx-auto max-w-[1200px] scroll-mt-[180px] px-4 sm:px-6 lg:px-8">
        <p role="status" aria-live="polite" aria-atomic="true" className={query.trim() ? "mt-5 text-sm text-white/70" : "sr-only"}>{results.length} {results.length === 1 ? "producto" : "productos"}{query.trim() ? ` para “${query.trim()}”` : " en la carta"}</p>
        {sections.map(({ id, title, items }, sectionIndex) => (
          <section key={id} id={`carta-${id}`} aria-labelledby={`titulo-${id}`} className="carta-section pt-6">
            <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
              <h2 id={`titulo-${id}`} className={cn("font-serif text-3xl", items[0].group === "cream" ? "text-[#f4b6cc]" : "text-white")}>{title}</h2>
              <span aria-hidden="true" className="text-xs tabular-nums text-white/55">{items.length}</span>
            </div>
            {id === "hamburguesas" && <p className="mb-4 text-sm leading-6 text-white/75">{items[0].categoryDescription}</p>}
            <div className="grid items-start gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {items.map((item) => (
                <article key={item.key} data-menu-product className={cn("min-w-0", item.image ? "overflow-hidden rounded-lg border border-white/15 bg-[#181a19]" : "border-b border-white/15")}>
                  <button type="button" onClick={() => setProduct(item)} aria-label={`Ver ${item.name}, ${item.price ?? item.categoryTitle}`} aria-haspopup="dialog" className={cn("block w-full text-left focus-visible:outline-offset-[-3px]", focus)}>
                    <div className={cn(item.image && "grid grid-cols-[112px_minmax(0,1fr)] sm:block")}>
                      {item.image && <div className="relative aspect-square w-28 self-start sm:aspect-[16/10] sm:w-full"><Image src={item.image} alt={item.name} fill sizes="(max-width: 639px) 112px, (max-width: 1023px) 46vw, (max-width: 1200px) 30vw, 360px" preload={item.key === catalog[0]?.key} className={item.imageFit === "contain" ? "object-contain" : "object-cover"} /></div>}
                      <div className={item.image ? "min-w-0 p-3 sm:p-4" : "min-w-0 py-4"}>
                        <h3 className="text-base font-semibold leading-6">{item.name}</h3>
                        {item.description && <p className="mt-1.5 line-clamp-3 text-sm leading-5 text-white/75">{item.description}</p>}
                        <div className="mt-3 flex items-center justify-between gap-2">
                          {item.price && <p className="text-base font-semibold tabular-nums text-[#f0d49a]">{item.price}</p>}
                          <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-white/55" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            {!query.trim() && items[0].group === "food" && sections[sectionIndex + 1]?.items[0].group === "drinks" && <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-white/15 py-3 text-sm">
              <a href="#carta-bebidas" className={cn("flex min-h-11 items-center gap-2 text-[#b7dacb]", focus)}>Para acompañar <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="#carta-desserts" className={cn("flex min-h-11 items-center gap-2 text-[#f4b6cc]", focus)}>¿Algo dulce para cerrar? <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>}
          </section>
        ))}
        {!results.length && <div className="py-12 text-center"><Search className="mx-auto mb-4 h-6 w-6 text-[#b7dacb]" aria-hidden="true" /><p className="text-base">No encontramos productos con esa búsqueda</p><button type="button" onClick={clearSearch} className={cn("mt-3 min-h-11 text-sm text-[#b7dacb] underline underline-offset-4", focus)}>Ver toda la carta</button></div>}
      </div>

      <dialog ref={dialogRef} aria-labelledby="carta-product-name" onClose={() => setProduct(null)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="carta-product fixed inset-x-0 bottom-0 top-auto m-0 max-h-[85dvh] w-full max-w-none overflow-y-auto rounded-t-lg border border-white/20 bg-[#181a19] p-0 text-white backdrop:bg-black/75 sm:inset-0 sm:m-auto sm:max-w-lg sm:rounded-lg">
        {product && <div className="relative">
          <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Cerrar producto" title="Cerrar producto" className={cn("absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-[#101312] text-white", focus)}><X className="h-5 w-5" aria-hidden="true" /></button>
          {product.image && <div className="relative aspect-[4/3] w-full"><Image src={product.image} alt={product.name} fill sizes="(max-width: 639px) 100vw, 512px" className={product.imageFit === "contain" ? "object-contain" : "object-cover"} /></div>}
          <div className={cn("p-5 pb-8", !product.image && "pt-16")}>
            <p className="mb-2 text-sm text-[#b7dacb]">{product.categoryTitle}</p>
            <h2 id="carta-product-name" className="pr-1 font-serif text-3xl leading-tight">{product.name}</h2>
            {product.price && <p className="mt-3 text-xl font-semibold tabular-nums text-[#f0d49a]">{product.price}</p>}
            {product.description && <p className="mt-4 text-base leading-7 text-white/80">{product.description}</p>}
          </div>
        </div>}
      </dialog>
    </div>
  );
}
