export type OrderLine = {
  key: string;
  name: string;
  category: string;
  unitPrice: number;
  quantity: number;
  note: string;
};

export type DecorationRequest = { enabled: boolean; occasion: string; notes: string };

export function decorationMessage(decoration?: DecorationRequest): string {
  if (!decoration?.enabled) return "";
  return [
    "Decoración: solicito cotización por WhatsApp.",
    ...(decoration.occasion ? [`Ocasión de decoración: ${decoration.occasion}`] : []),
    ...(decoration.notes.trim() ? [`Detalles de decoración: ${decoration.notes.trim()}`] : []),
    "Decoración no incluida en la precuenta; precio y condiciones por confirmar con Mangia.",
  ].join("\n");
}

export type GroupDetails = {
  name: string;
  date: string;
  time: string;
  people: string;
  notes: string;
  decoration?: DecorationRequest;
};

export const formatPesos = (amount: number) => "$" + new Intl.NumberFormat("es-CO").format(amount);

export function orderTotal(lines: OrderLine[]): number {
  return lines.reduce((total, line) => total + line.unitPrice * line.quantity, 0);
}

export function buildGroupMessage(lines: OrderLine[], details: GroupDetails): string {
  const [year, month, day] = details.date.split("-");
  return [
    "*Pedido de grupo para confirmar - Mangia*",
    `Organizador / grupo: ${details.name.trim()}`,
    `Fecha: ${day}/${month}/${year}`,
    `Hora de llegada: ${details.time}`,
    `Personas: ${details.people}`,
    "",
    ...lines.map((line) => `${line.quantity} x ${line.name} (${line.category})\n${formatPesos(line.unitPrice)} c/u = ${formatPesos(line.unitPrice * line.quantity)}${line.note.trim() ? "\nNota: " + line.note.trim() : ""}`),
    "",
    `*Precuenta estimada: ${formatPesos(orderTotal(lines))} COP*`,
    "Solo productos seleccionados; cambios y adicionales se confirman con Mangia.",
    details.notes.trim() ? `Notas del grupo: ${details.notes.trim()}` : "",
    decorationMessage(details.decoration),
    "",
    "*Pago al llegar al restaurante. Este pedido NO está pagado.*",
    "Pedido y reserva pendientes de confirmación de disponibilidad por Mangia.",
  ].join("\n");
}
