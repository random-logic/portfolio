"use client";

import {useEffect, useState} from "react";

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<"xl" | "md" | "sm">("sm"); // dummy value

  function getBreakpoint() {
    const width = window?.innerWidth ?? 0;
    if (width >= 1280) return "xl";
    if (width >= 768) return "md";
    return "sm";
  }

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint());
    handleResize(); // initially handle resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return breakpoint;
}
