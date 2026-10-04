import type { Metadata } from "next";
import { ActionHeader } from "@/components/layout/action-header";
import { MenuExperience } from "@/components/menu/menu-experience";

export const metadata: Metadata = { title: "Pedir a domicilio", alternates: { canonical: "/domicilios" } };

export default function Page() {
  return <><ActionHeader /><main><MenuExperience purpose="delivery" /></main></>;
}

