"use client";

import {useEffect, useState} from "react";

// Standard breakpoints
export const SM = 640;
export const MD = 768;
export const LG = 1024;
export const XL = 1280;
export const XL2 = 1536;

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // initially handle resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return screenWidth;
}
