import type { Metadata } from "next";
import { ActionHeader } from "@/components/layout/action-header";
import { MenuExperience } from "@/components/menu/menu-experience";

export const metadata: Metadata = { title: "Menú", alternates: { canonical: "/menu" } };

export default function Page() {
  return <><ActionHeader /><main><MenuExperience /></main></>;
}

