"use client";

import { ClipboardList, Minus, Plus, Send, Trash2, X } from "lucide-react";
import { useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import { DecorationOption } from "@/components/ui/decoration-request";
import { buildDeliveryMessage, buildGroupMessage, formatPesos, orderTotal, type DecorationRequest, type DeliveryDetails, type GroupDetails, type OrderLine } from "@/lib/group-order";

const field = "min-h-11 w-full rounded-lg border border-white/25 bg-[#181a19] px-3 py-2 text-sm text-white focus-visible:outline-2 focus-visible:outline-[#b7dacb]";
const iconButton = "flex h-11 w-11 shrink-0 items-center justify-center rounded-md hover:bg-white/10 disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-[#b7dacb]";

export function OrderQuantity({ name, quantity, onChange, delivery = false }: { name: string; quantity: number; onChange: (quantity: number) => void; delivery?: boolean }) {
  return quantity ? (
    <div role="group" aria-label={`Cantidad de ${name}`} className="mt-3 flex w-fit items-center rounded-lg border border-[#96c5b2]/40 text-[#b7dacb]">
      <button type="button" aria-label={`Quitar uno de ${name}`} title="Quitar uno" className={iconButton} onClick={() => onChange(quantity - 1)}><Minus className="h-4 w-4" aria-hidden="true" /></button>
      <span className="w-9 text-center text-sm font-semibold tabular-nums" aria-live="polite">{quantity}</span>
      <button type="button" aria-label={`Agregar uno de ${name}`} title="Agregar uno" className={iconButton} disabled={quantity >= 999} onClick={() => onChange(quantity + 1)}><Plus className="h-4 w-4" aria-hidden="true" /></button>
    </div>
  ) : (
    <button type="button" aria-label={`Agregar ${name} ${delivery ? "al pedido" : "al grupo"}`} onClick={() => onChange(1)} className="mt-3 flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-3 text-sm text-[#b7dacb] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#b7dacb]"><Plus className="h-4 w-4 shrink-0" aria-hidden="true" />{delivery ? "Agregar al pedido" : "Agregar al grupo"}</button>
  );
}

export function GroupOrder({ lines, onQuantity, onNote, mode = "group" }: { lines: OrderLine[]; onQuantity: (key: string, quantity: number) => void; onNote: (key: string, note: string) => void; mode?: "group" | "delivery" }) {
  const delivery = mode === "delivery";
  const title = delivery ? "Mi domicilio" : "Pedido del grupo";
  const dialog = useRef<HTMLDialogElement>(null);
  const [details, setDetails] = useState<GroupDetails>({ name: "", date: "", time: "", people: "", notes: "" });
  const [decoration, setDecoration] = useState<DecorationRequest>({ enabled: false, occasion: "", notes: "" });
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({ name: "", phone: "", address: "", neighborhood: "", reference: "", payment: "cash", cashChange: "", notes: "" });
  const total = orderTotal(lines);
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Bogota", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

  function updateDetails(key: Exclude<keyof GroupDetails, "decoration">, value: string) {
    setDetails((current) => ({ ...current, [key]: value }));
  }

  function updateDelivery(key: Exclude<keyof DeliveryDetails, "payment">, value: string) {
    setDeliveryDetails((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <button type="button" onClick={() => dialog.current?.showModal()} className="flex min-h-11 items-center gap-2 rounded-lg border border-[#96c5b2]/50 bg-[#202622] px-3 py-2 text-sm font-medium text-[#b7dacb] hover:bg-[#2b3530] focus-visible:outline-2 focus-visible:outline-[#b7dacb]">
        <ClipboardList className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{title}{count ? ` (${count})` : ""}</span>
        {count > 0 && <span className="border-l border-white/20 pl-2 tabular-nums">{formatPesos(total)}</span>}
      </button>
      <dialog ref={dialog} aria-labelledby="group-order-title" className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%_-_24px)] max-w-2xl overflow-y-auto rounded-lg border border-white/20 bg-[#101312] p-0 text-white shadow-2xl backdrop:bg-black/75" onClick={(event) => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close(); } }}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-white/15 bg-[#101312] px-4 py-3 sm:px-6">
          <h2 id="group-order-title" className="text-xl font-semibold">{title}</h2>
          <button type="button" aria-label="Cerrar pedido" title="Cerrar" onClick={() => dialog.current?.close()} className={iconButton}><X className="h-5 w-5" aria-hidden="true" /></button>
        </div>
        {lines.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <ClipboardList className="mx-auto mb-4 h-8 w-8 text-[#96c5b2]" aria-hidden="true" />
            <p className="text-lg">{delivery ? "Aún no tienes productos seleccionados" : "Tu grupo aún no tiene productos seleccionados"}</p>
            <button type="button" onClick={() => dialog.current?.close()} className="mt-5 min-h-11 rounded-lg bg-[#b7dacb] px-4 text-sm font-semibold text-[#102b20]">Elegir del menú</button>
          </div>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); if (!lines.length) return; const message = delivery ? buildDeliveryMessage(lines, deliveryDetails) : buildGroupMessage(lines, { ...details, decoration }); window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); }}>
            <div className="px-4 pb-5 sm:px-6">
              <ul className="divide-y divide-white/15">
                {lines.map((line) => (
                  <li key={line.key} className="py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0"><p className="text-xs text-[#96c5b2]">{line.category}</p><h3 className="mt-1 font-semibold">{line.name}</h3><p className="mt-1 text-sm text-white/65">{formatPesos(line.unitPrice)} c/u</p></div>
                      <div className="flex shrink-0 items-center gap-1"><span className="text-sm font-semibold tabular-nums text-[#f0d49a]">{formatPesos(line.unitPrice * line.quantity)}</span><button type="button" aria-label={`Eliminar ${line.name} (${line.category})`} title="Eliminar producto" className={iconButton} onClick={() => onQuantity(line.key, 0)}><Trash2 className="h-4 w-4" aria-hidden="true" /></button></div>
                    </div>
                    <OrderQuantity name={`${line.name} (${line.category})`} quantity={line.quantity} onChange={(quantity) => onQuantity(line.key, quantity)} />
                    <label htmlFor={`note-${line.key}`} className="mb-1 mt-3 block text-xs text-white/65">Nota para este producto (opcional)</label>
                    <input id={`note-${line.key}`} value={line.note} onChange={(event) => onNote(line.key, event.target.value)} maxLength={300} className={field} placeholder="Sin cebolla, término de la carne…" />
                  </li>
                ))}
              </ul>
              <div className="border-y border-[#96c5b2]/40 py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-semibold">Precuenta estimada</h3><p data-order-total className="text-2xl font-semibold tabular-nums text-[#f0d49a]">{formatPesos(total)} <span className="text-xs">COP</span></p></div>
                <p className="mt-3 font-medium text-[#b7dacb]">{delivery ? "Envío no incluido. Valor por confirmar por WhatsApp." : "Pagas al llegar a Mangia, en el restaurante."}</p>
                <p className="mt-1 text-sm leading-6 text-white/65">No se cobra en la web. Solo incluye productos seleccionados; cambios y adicionales se confirman con Mangia.</p>
              </div>
              {delivery ? (
                <div className="mt-5 grid gap-4">
                  <label className="text-sm">Nombre<input required autoComplete="name" maxLength={100} pattern=".*\S.*" value={deliveryDetails.name} onChange={(event) => updateDelivery("name", event.target.value)} className={`${field} mt-1`} /></label>
                  <label className="text-sm">Teléfono<input required type="tel" autoComplete="tel" inputMode="tel" maxLength={25} pattern="[+]?[0-9 ]{7,24}" value={deliveryDetails.phone} onChange={(event) => updateDelivery("phone", event.target.value)} className={`${field} mt-1`} /></label>
                  <label className="text-sm">Dirección<input required autoComplete="street-address" maxLength={200} pattern=".*\S.*" value={deliveryDetails.address} onChange={(event) => updateDelivery("address", event.target.value)} className={`${field} mt-1`} /></label>
                  <label className="text-sm">Barrio<input required maxLength={100} pattern=".*\S.*" value={deliveryDetails.neighborhood} onChange={(event) => updateDelivery("neighborhood", event.target.value)} className={`${field} mt-1`} /></label>
                  <label className="text-sm">Referencia (opcional)<input maxLength={200} value={deliveryDetails.reference} onChange={(event) => updateDelivery("reference", event.target.value)} className={`${field} mt-1`} /></label>
                  <fieldset><legend className="text-sm">Forma de pago</legend><div className="mt-2 flex flex-wrap gap-5">{([ ["cash", "Efectivo"], ["transfer", "Transferencia"] ] as const).map(([value, label]) => <label key={value} className="flex min-h-11 items-center gap-2 text-sm"><input type="radio" name="delivery-payment" value={value} checked={deliveryDetails.payment === value} onChange={() => setDeliveryDetails((current) => ({ ...current, payment: value }))} className="h-4 w-4 accent-[#b7dacb]" />{label}</label>)}</div></fieldset>
                  {deliveryDetails.payment === "cash" ? <label className="text-sm">Cambio para (opcional)<input type="number" min="1" step="1" inputMode="numeric" value={deliveryDetails.cashChange} onChange={(event) => updateDelivery("cashChange", event.target.value)} className={`${field} mt-1`} placeholder="Valor del billete en pesos" /></label> : <p className="text-sm leading-6 text-[#b7dacb]">Los datos para transferir se comparten por WhatsApp después de confirmar el pedido.</p>}
                  <label className="text-sm">Notas del pedido (opcional)<textarea rows={2} maxLength={1000} value={deliveryDetails.notes} onChange={(event) => updateDelivery("notes", event.target.value)} className={`${field} mt-1 resize-y`} /></label>
                </div>
              ) : <div className="mt-5 grid grid-cols-2 gap-4">
                <label className="col-span-2 text-sm">Nombre del organizador o grupo<input required autoComplete="name" value={details.name} onChange={(event) => updateDetails("name", event.target.value)} maxLength={100} pattern=".*\S.*" className={`${field} mt-1`} /></label>
                <label className="text-sm">Fecha de visita<input required type="date" min={today} value={details.date} onChange={(event) => updateDetails("date", event.target.value)} className={`${field} mt-1 [color-scheme:dark]`} /></label>
                <label className="text-sm">Hora de llegada<input required type="time" value={details.time} onChange={(event) => updateDetails("time", event.target.value)} className={`${field} mt-1 [color-scheme:dark]`} /></label>
                <label className="col-span-2 text-sm">Número de personas<input required type="number" min="1" max="999" step="1" inputMode="numeric" value={details.people} onChange={(event) => updateDetails("people", event.target.value)} className={`${field} mt-1`} /></label>
                <label className="col-span-2 text-sm">Notas del grupo (opcional)<textarea rows={2} maxLength={1000} value={details.notes} onChange={(event) => updateDetails("notes", event.target.value)} className={`${field} mt-1 resize-y`} /></label>
              </div>}
              {!delivery && <DecorationOption id="group-decoration" value={decoration} onChange={setDecoration} />}
              <p className="mt-4 text-sm leading-6 text-white/70">{delivery ? "Domiciliario propio. Cobertura, envío, disponibilidad y tiempo estimado por confirmar con Mangia." : "Pedido y reserva pendientes de confirmación de disponibilidad por Mangia."}</p>
            </div>
            <div className="sticky bottom-0 border-t border-white/15 bg-[#101312] px-4 py-3 sm:px-6">
              <button type="submit" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#b7dacb] px-3 py-3 text-sm font-semibold text-[#102b20] hover:bg-[#cce8dc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7dacb]"><Send className="h-4 w-4 shrink-0" aria-hidden="true" />Enviar pedido para confirmar</button>
            </div>
          </form>
        )}
      </dialog>
    </>
  );
}
