import type { Metadata } from "next";
import { ActionHeader } from "@/components/layout/action-header";
import { DineInMenu } from "@/components/menu/dine-in-menu";

export const metadata: Metadata = { title: "Menú y pedidos", alternates: { canonical: "/menu" } };

export default function Page() {
  return <><ActionHeader /><main><DineInMenu /></main></>;
}
