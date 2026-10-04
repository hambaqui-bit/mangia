"use client";

import { useEffect } from "react";

// Keep previously shared section links working after the home-page change.
export function LegacyLinks() {
  useEffect(() => {
    const navigate = () => {
      const routes: Record<string, string> = { "#menu": "/menu", "#reserve": "/reservas", "#experience": "/conoce-mangia#experience", "#cocktails-feature": "/conoce-mangia#cocktails-feature", "#cream-experience": "/conoce-mangia#cream-experience", "#gallery": "/conoce-mangia#gallery" };
      if (routes[window.location.hash]) window.location.replace(routes[window.location.hash]);
    };
    navigate();
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);
  return null;
}
