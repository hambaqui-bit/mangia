"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, LoaderCircle, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { experiences } from "@/data/experiences";
import { siteConfig } from "@/data/site";

const iconButton = "flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white hover:bg-white/10 disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7dacb]";

function StoryPhoto({ story }: { story: typeof experiences[number] }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  return (
    <>
      {!loaded && !failed && <LoaderCircle aria-label="Cargando foto" className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-spin text-[#b7dacb]" />}
      {!failed ? <Image key={attempt} src={story.src} alt={story.alt} fill sizes="(min-width: 640px) 520px, 100vw" className="object-contain" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} /> : <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center"><p className="text-sm text-white/80">No pudimos cargar esta foto</p><button type="button" onClick={() => { setFailed(false); setLoaded(false); setAttempt((value) => value + 1); }} className="flex min-h-11 items-center gap-2 rounded-lg border border-white/25 px-4 text-sm"><RotateCcw className="h-4 w-4" aria-hidden="true" />Reintentar</button></div>}
    </>
  );
}

export function ExperienceStories() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function move(direction: number) {
    setIndex((current) => Math.max(0, Math.min(experiences.length - 1, current + direction)));
  }

  return (
    <section id="experiencias" aria-labelledby="experiences-title" className="scroll-mt-20 border-y border-white/15 bg-[#101312] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-8 gap-y-5">
        <button type="button" aria-label="Abrir Experiencias de Mangia" aria-haspopup="dialog" onClick={() => { setIndex(0); setOpen(true); dialog.current?.showModal(); }} className="group flex w-28 shrink-0 flex-col items-center gap-2 rounded-lg py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7dacb]">
          <span className="rounded-full border-2 border-[#f4b6cc] p-1 transition-colors group-hover:border-[#b7dacb]"><Image src={experiences[0].src} alt="" width={92} height={92} className="h-[92px] w-[92px] rounded-full object-cover object-[50%_55%]" /></span>
          <span className="text-sm font-medium text-white">Experiencias</span>
        </button>
        <div className="min-w-0 flex-1">
          <h2 id="experiences-title" className="font-serif text-3xl text-white">Momentos en Mangia</h2>
          <p className="mt-2 text-sm text-white/65">{experiences.length} recuerdos compartidos</p>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="mt-3 flex min-h-11 w-fit items-center gap-2 text-sm text-[#f4b6cc] hover:text-white focus-visible:outline-2 focus-visible:outline-[#f4b6cc]"><InstagramIcon className="h-5 w-5 shrink-0" />Ver más en Instagram</a>
        </div>
      </div>

      <dialog ref={dialog} aria-labelledby="story-title" onClose={() => setOpen(false)} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } else if (event.key === "Home" || event.key === "End") { event.preventDefault(); setIndex(event.key === "Home" ? 0 : experiences.length - 1); } }} onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close(); } }} className="fixed inset-0 m-auto h-dvh max-h-dvh w-full max-w-none overflow-hidden border-0 bg-[#080a09] p-0 text-white backdrop:bg-black/85 sm:h-[calc(100dvh_-_32px)] sm:max-w-[520px] sm:rounded-lg sm:border sm:border-white/20">
        {open && <div className="grid h-full grid-rows-[auto_minmax(0,1fr)_auto]">
          <header className="px-4 pb-3 pt-[max(12px,env(safe-area-inset-top))]">
            <div className="flex items-center justify-between gap-3"><h2 id="story-title" className="text-lg font-semibold">Experiencias</h2><p role="status" aria-live="polite" aria-atomic="true" className="ml-auto text-sm tabular-nums text-white/70">{index + 1} / {experiences.length}</p><button type="button" title="Cerrar experiencias" aria-label="Cerrar experiencias" className={iconButton} onClick={() => dialog.current?.close()}><X className="h-5 w-5" aria-hidden="true" /></button></div>
            <div aria-hidden="true" className="mt-2 flex gap-1">{experiences.map((story, position) => <span key={story.src} className={`h-1 min-w-0 flex-1 rounded-full ${position <= index ? "bg-[#b7dacb]" : "bg-white/25"}`} />)}</div>
          </header>
          <div className="relative min-h-0 touch-pan-y" onPointerDown={(event) => { if (event.pointerType !== "touch") return; pointer.current = { x: event.clientX, y: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerCancel={() => { pointer.current = null; }} onPointerUp={(event) => { const start = pointer.current; pointer.current = null; if (!start) return; const dx = event.clientX - start.x; const dy = event.clientY - start.y; if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1); }}>
            <StoryPhoto key={index} story={experiences[index]} />
          </div>
          <footer className="flex items-center justify-between gap-2 border-t border-white/15 px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-3">
            <button type="button" title="Experiencia anterior" aria-label="Experiencia anterior" disabled={index === 0} className={iconButton} onClick={() => move(-1)}><ChevronLeft className="h-6 w-6" aria-hidden="true" /></button>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center gap-2 text-sm text-[#f4b6cc] focus-visible:outline-2 focus-visible:outline-[#f4b6cc]"><InstagramIcon className="h-5 w-5 shrink-0" />Ver más en Instagram</a>
            {index === experiences.length - 1 ? <button type="button" title="Volver a la primera experiencia" aria-label="Volver a la primera experiencia" className={iconButton} onClick={() => setIndex(0)}><RotateCcw className="h-5 w-5" aria-hidden="true" /></button> : <button type="button" title="Siguiente experiencia" aria-label="Siguiente experiencia" className={iconButton} onClick={() => move(1)}><ChevronRight className="h-6 w-6" aria-hidden="true" /></button>}
          </footer>
        </div>}
      </dialog>
    </section>
  );
}
