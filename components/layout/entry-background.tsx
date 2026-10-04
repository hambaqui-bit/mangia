"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function EntryBackground() {
  const video = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  async function togglePlayback() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      try { await element.play(); } catch { setPlaying(false); }
    } else {
      element.pause();
    }
  }

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#101312]">
        <Image src="/images/interior/entrada-video-poster.jpg" alt="" fill sizes="100vw" priority className="object-cover object-center" />
        {enabled && !failed && <video ref={video} autoPlay muted loop playsInline preload="metadata" poster="/images/interior/entrada-video-poster.jpg" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} className="absolute inset-0 h-full w-full object-cover object-center"><source src="/videos/mangia-entrada.mp4" type="video/mp4" /></video>}
        <div className="absolute inset-0 bg-[#080c0a]/65" />
      </div>
      {enabled && !failed && <button type="button" onClick={togglePlayback} title={playing ? "Pausar video de fondo" : "Reproducir video de fondo"} aria-label={playing ? "Pausar video de fondo" : "Reproducir video de fondo"} className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#101312]/80 text-white/80 backdrop-blur-sm transition-colors hover:bg-[#26312b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7dacb]">{playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}</button>}
    </>
  );
}
