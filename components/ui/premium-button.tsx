import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  target?: string;
};

export function PremiumButton({
  href,
  children,
  variant = "solid",
  className,
  target,
}: PremiumButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={cn(
        "group relative isolate inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full px-6 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform focus:outline-none focus:ring-2 focus:ring-[#d8b87b]/45 focus:ring-offset-2 focus:ring-offset-[#050403] active:translate-y-[1px] md:min-h-[3.35rem] md:px-7",
        variant === "solid"
          ? "border border-[#f8dca4]/50 bg-[linear-gradient(135deg,#f6d998_0%,#d6a957_48%,#f1c879_100%)] text-[#130d08] shadow-[inset_0_1px_0_rgba(255,255,255,0.58),inset_0_-10px_24px_rgba(91,49,10,0.14),0_18px_45px_rgba(230,189,115,0.18),0_2px_10px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.68),inset_0_-12px_26px_rgba(91,49,10,0.12),0_26px_70px_rgba(230,189,115,0.26),0_5px_18px_rgba(0,0,0,0.32)]"
          : "border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.105),rgba(255,255,255,0.035))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-2xl hover:-translate-y-0.5 hover:border-[#e6bd73]/35 hover:bg-white/[0.105] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_70px_rgba(0,0,0,0.36)]",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-x-5 top-px h-px bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-70" />
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.36)_45%,transparent_62%)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-60" />
      <span className="relative">{children}</span>
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.08] ring-1 ring-black/[0.06] transition duration-500 group-hover:translate-x-1 group-hover:bg-black/[0.12] group-hover:ring-black/10 group-active:translate-x-0">
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </a>
  );
}
