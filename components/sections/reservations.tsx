"use client";

import { CalendarDays, Clock3, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { PremiumButton } from "@/components/ui/premium-button";
import { siteConfig, whatsappUrl } from "@/data/site";
import { slugify } from "@/lib/menu";
import { buildWhatsAppReservationUrl } from "@/lib/utils";

export function ReservationsSection() {
  const [form, setForm] = useState({ name: "", date: "", time: "", people: "", note: "" });

  function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(
      buildWhatsAppReservationUrl({ ...form, baseUrl: whatsappUrl }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="reserve" className="relative overflow-hidden bg-[#070504] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(230,189,115,0.16),transparent_42%)]" />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[linear-gradient(135deg,rgba(230,189,115,0.12),rgba(255,255,255,0.03))] p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#e6bd73]">Reserva premium</p>
              <h2 className="mt-5 font-serif text-4xl leading-none text-white md:text-6xl">
                Cierra la noche con una mesa lista.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
                Envia tu solicitud por WhatsApp con fecha, hora y numero de personas. Rapido, claro y directo al equipo.
              </p>
              <div className="mt-9 grid gap-3">
                {[
                  [MapPin, siteConfig.address],
                  [Clock3, siteConfig.hours],
                  [Phone, siteConfig.phone],
                ].map(([Icon, value], index) => (
                  <div key={`reserve-meta-${slugify(String(value))}-${index}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/18 p-4">
                    <Icon className="h-5 w-5 shrink-0 text-[#e6bd73]" aria-hidden="true" />
                    <p className="text-sm text-white/70">{String(value)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href={siteConfig.mapsUrl} target="_blank" variant="ghost">Ver mapa</PremiumButton>
                <PremiumButton href={siteConfig.instagram} target="_blank" variant="ghost">Instagram</PremiumButton>
              </div>
            </div>

            <form onSubmit={submitReservation} className="p-6 md:p-10">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/68">
                  Nombre
                  <input
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition focus:border-[#e6bd73]/70"
                    autoComplete="name"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Fecha
                  <span className="relative">
                    <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/36" />
                    <input
                      value={form.date}
                      onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))}
                      type="date"
                      className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition focus:border-[#e6bd73]/70"
                    />
                  </span>
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Hora
                  <select
                    value={form.time}
                    onChange={(event) => setForm((prev) => ({ ...prev, time: event.target.value }))}
                    className="min-h-12 rounded-2xl border border-white/10 bg-[#15100c] px-4 text-white outline-none transition focus:border-[#e6bd73]/70"
                  >
                    <option value="">Selecciona</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Personas
                  <input
                    value={form.people}
                    onChange={(event) => setForm((prev) => ({ ...prev, people: event.target.value }))}
                    type="number"
                    min="1"
                    className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition focus:border-[#e6bd73]/70"
                  />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm text-white/68">
                Ocasion o nota
                <textarea
                  value={form.note}
                  onChange={(event) => setForm((prev) => ({ ...prev, note: event.target.value }))}
                  rows={5}
                  className="resize-none rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-white outline-none transition focus:border-[#e6bd73]/70"
                />
              </label>
              <button
                type="submit"
                className="group relative mt-5 min-h-[3.35rem] w-full overflow-hidden rounded-2xl border border-[#f8dca4]/50 bg-[linear-gradient(135deg,#f6d998_0%,#d6a957_48%,#f1c879_100%)] px-6 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#130d08] shadow-[inset_0_1px_0_rgba(255,255,255,0.58),inset_0_-10px_24px_rgba(91,49,10,0.14),0_18px_45px_rgba(230,189,115,0.18),0_2px_10px_rgba(0,0,0,0.28)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.68),inset_0_-12px_26px_rgba(91,49,10,0.12),0_26px_70px_rgba(230,189,115,0.26),0_5px_18px_rgba(0,0,0,0.32)] focus:outline-none focus:ring-2 focus:ring-[#d8b87b]/45 focus:ring-offset-2 focus:ring-offset-[#050403] active:translate-y-[1px]"
              >
                <span className="pointer-events-none absolute inset-x-5 top-px h-px bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-70" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.36)_45%,transparent_62%)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-60" />
                <span className="relative">Reservar ahora por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
