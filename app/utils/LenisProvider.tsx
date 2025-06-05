"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import type { LenisOptions } from "@studio-freight/lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check for mobile devices (adjust max-width as per your requirement)
    const isMobile = window.innerWidth <= 768; // You can adjust 768px as needed for your breakpoint

    if (!isMobile) {
      // Initialize Lenis for non-mobile devices
      const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      } satisfies LenisOptions);

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Cleanup function to destroy Lenis on unmount
      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
}
