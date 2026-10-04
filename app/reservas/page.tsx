import type { Metadata } from "next";
import { ActionHeader } from "@/components/layout/action-header";
import { ReservationsSection } from "@/components/sections/reservations";

export const metadata: Metadata = { title: "Reservar mesa", alternates: { canonical: "/reservas" } };

export default function Page() {
  return <><ActionHeader /><main><ReservationsSection /></main></>;
}
