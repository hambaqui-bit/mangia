"use client";

import type { DecorationRequest } from "@/lib/group-order";

const field = "mt-2 min-h-11 w-full rounded-lg border border-white/25 bg-[#181a19] px-3 py-2 text-sm text-white focus-visible:outline-2 focus-visible:outline-[#b7dacb]";

export function DecorationOption({ id, value, onChange }: { id: string; value: DecorationRequest; onChange: (value: DecorationRequest) => void }) {
  return (
    <div className="mt-5 border-y border-white/15 py-3">
      <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm font-medium text-white">
        <input type="checkbox" checked={value.enabled} onChange={(event) => onChange({ ...value, enabled: event.target.checked })} aria-controls={`${id}-details`} aria-expanded={value.enabled} className="h-5 w-5 shrink-0 accent-[#b7dacb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7dacb]" />
        Me interesa una decoración (opcional)
      </label>
      {value.enabled && (
        <div id={`${id}-details`} className="pb-2 pt-3">
          <p className="text-sm leading-6 text-[#b7dacb]">La decoración se cotiza y coordina por WhatsApp. Su valor no está incluido en la precuenta.</p>
          <label htmlFor={`${id}-occasion`} className="mt-4 block text-sm text-white/75">Ocasión (opcional)</label>
          <select id={`${id}-occasion`} value={value.occasion} onChange={(event) => onChange({ ...value, occasion: event.target.value })} className={field}>
            <option value="">Selecciona</option>
            <option>Cumpleaños</option>
            <option>Aniversario</option>
            <option>Propuesta</option>
            <option>Otra celebración</option>
          </select>
          <label htmlFor={`${id}-notes`} className="mt-4 block text-sm text-white/75">Detalles de la decoración (opcional)</label>
          <textarea id={`${id}-notes`} value={value.notes} onChange={(event) => onChange({ ...value, notes: event.target.value })} rows={3} maxLength={600} className={`${field} resize-y`} />
        </div>
      )}
    </div>
  );
}
