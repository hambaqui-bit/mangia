export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buildWhatsAppReservationUrl(input: {
  name?: string;
  date?: string;
  time?: string;
  people?: string;
  note?: string;
  baseUrl: string;
}) {
  const message = encodeURIComponent(
    [
      "Hola Mangia, quiero hacer una reserva.",
      `Nombre: ${input.name || "N/D"}`,
      `Fecha: ${input.date || "N/D"}`,
      `Hora: ${input.time || "N/D"}`,
      `Personas: ${input.people || "N/D"}`,
      `Ocasion: ${input.note || "N/D"}`,
    ].join("\n"),
  );

  return `${input.baseUrl}?text=${message}`;
}
