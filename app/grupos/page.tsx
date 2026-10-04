import type { Metadata } from "next";
import { ActionHeader } from "@/components/layout/action-header";
import { MenuExperience } from "@/components/menu/menu-experience";

export const metadata: Metadata = { title: "Pedido para grupos", alternates: { canonical: "/grupos" } };

export default function Page() {
  return <><ActionHeader /><main><MenuExperience purpose="group" /></main></>;
}

