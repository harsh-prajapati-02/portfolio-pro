"use client";

import MenuWrapper from "./components/MenuWrapper";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVGMaskEffectDemo } from "./pages/SVGMaskEffectDemo";
import Character from '@/app/components/Character';
import About from '@/app/components/About';
import MagneticIcons from "./components/MagneticIcons";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".fade-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

  return (
    <>
      <main className="relative text-[#b7ab98] flex items-center justify-center overflow-hidden">
        <MenuWrapper />
        {/* <NeonCursor /> */}
        <SVGMaskEffectDemo />
        {/* <MagneticCursor /> */}
      </main>

      <Character paragraph={paragraph} />
      <MagneticIcons />
      <About />
    </>
  );
}
