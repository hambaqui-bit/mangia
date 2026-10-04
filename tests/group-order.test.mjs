import assert from "node:assert/strict";
import test from "node:test";
import { buildDeliveryMessage, buildGroupMessage, decorationMessage, formatPesos, orderTotal } from "../lib/group-order.ts";
import { buildWhatsAppReservationUrl } from "../lib/utils.ts";

const lines = [
  { key: "burger", name: "Pulled Pork", category: "Hamburguesas", unitPrice: 35000, quantity: 3, note: "Sin cebolla" },
  { key: "perro", name: "Pulled Pork", category: "Perros", unitPrice: 23000, quantity: 2, note: "" },
  { key: "drink", name: "Limonada", category: "Bebidas", unitPrice: 6000, quantity: 4, note: "" },
];
const details = { name: " Grupo Barrera ", date: "2026-10-05", time: "19:30", people: "9", notes: "Cumpleaños" };

test("precuenta uses every quantity and includes beverages", () => {
  assert.equal(orderTotal(lines), 175000);
  assert.equal(orderTotal([]), 0);
  assert.equal(formatPesos(175000), "$175.000");
  assert.equal(orderTotal([{ ...lines[0], quantity: 1 }]), 35000);
});

test("WhatsApp distinguishes same-name products and preserves notes and visit details", () => {
  const message = buildGroupMessage(lines, details);
  assert.match(message, /Pulled Pork \(Hamburguesas\)/);
  assert.match(message, /Pulled Pork \(Perros\)/);
  assert.match(message, /\$35\.000 c\/u = \$105\.000/);
  assert.match(message, /Nota: Sin cebolla/);
  assert.match(message, /Fecha: 05\/10\/2026/);
  assert.match(message, /Hora de llegada: 19:30/);
  assert.match(message, /Personas: 9/);
  assert.match(message, /Notas del grupo: Cumpleaños/);
  assert.match(message, /Organizador \/ grupo: Grupo Barrera\n/);
  assert.equal(decodeURIComponent(encodeURIComponent(message)), message);
});

test("message states estimated price, payment on arrival and confirmation required", () => {
  const message = buildGroupMessage(lines, details);
  assert.match(message, /Precuenta estimada: \$175\.000 COP/);
  assert.match(message, /Pago al llegar al restaurante/);
  assert.match(message, /NO está pagado/);
  assert.match(message, /Pedido y reserva pendientes de confirmación/);
});

test("decoration is optional, includes no price, and does not change the bill", () => {
  const decoration = { enabled: true, occasion: "Cumpleaños", notes: "Globos verdes" };
  const message = buildGroupMessage(lines, { ...details, decoration });
  assert.match(message, /Precuenta estimada: \$175\.000 COP/);
  assert.match(message, /solicito cotización por WhatsApp/);
  assert.match(message, /Ocasión de decoración: Cumpleaños/);
  assert.match(message, /Detalles de decoración: Globos verdes/);
  assert.match(message, /Decoración no incluida en la precuenta/);
  assert.equal(decorationMessage(), "");
  assert.equal(decorationMessage({ ...decoration, enabled: false }), "");
  assert.doesNotMatch(buildGroupMessage(lines, { ...details, decoration: { ...decoration, enabled: false } }), /Globos verdes|Decoración/);
  assert.match(decorationMessage({ enabled: true, occasion: "", notes: "" }), /solicito cotización/);
});

test("reservations include decoration only when requested", () => {
  const input = { name: "Prueba", baseUrl: "https://wa.me/573182294491" };
  assert.doesNotMatch(decodeURIComponent(buildWhatsAppReservationUrl(input)), /Decoración/);
  const decoration = decorationMessage({ enabled: true, occasion: "", notes: "" });
  assert.match(new URL(buildWhatsAppReservationUrl({ ...input, decoration })).searchParams.get("text"), /Decoración: solicito cotización por WhatsApp/);
});

const delivery = { name: "Prueba", phone: "3001234567", address: "Calle de prueba 1", neighborhood: "Centro", reference: "Puerta verde", payment: "cash", cashChange: "200000", notes: "Sin cubiertos" };

test("delivery message includes address, subtotal and shipping confirmation without restaurant payment", () => {
  const message = buildDeliveryMessage(lines, delivery);
  assert.match(message, /Precuenta de productos: \$175\.000 COP/);
  assert.match(message, /Envío NO incluido/);
  assert.match(message, /Barrio: Centro/);
  assert.match(message, /Teléfono: 3001234567/);
  assert.match(message, /Dirección: Calle de prueba 1/);
  assert.match(message, /Referencia: Puerta verde/);
  assert.match(message, /Forma de pago: Efectivo/);
  assert.match(message, /Solicito cambio para: \$200\.000/);
  assert.match(message, /NO está pagado/);
  assert.doesNotMatch(message, /Pago al llegar|Decoración|Personas:|Hora de llegada/);
});

test("transfer asks for bank details only after confirmation and ignores stale cash amount", () => {
  const message = buildDeliveryMessage(lines, { ...delivery, payment: "transfer" });
  assert.match(message, /Forma de pago: Transferencia/);
  assert.match(message, /datos para transferir después de confirmar/);
  assert.doesNotMatch(message, /Solicito cambio/);
  assert.doesNotMatch(buildDeliveryMessage(lines, { ...delivery, cashChange: "", reference: "", notes: "" }), /Solicito cambio|Referencia:|Notas:/);
  assert.equal(decodeURIComponent(encodeURIComponent(message)), message);
});
