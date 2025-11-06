"use client";

// import MagneticCursor from "./components/MagneticCursor";
import MenuWrapper from "./components/MenuWrapper";
import NeonCursor from './components/NeonCursor';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVGMaskEffectDemo } from "./pages/SVGMaskEffectDemo";

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

  return (
    <>
      <main className="relative text-[#b7ab98] flex items-center justify-center overflow-hidden">
        <MenuWrapper />
        {/* <NeonCursor /> */}
        <SVGMaskEffectDemo />
        {/* <MagneticCursor /> */}
      </main>

      <section style={{ height: "100vh", background: "#111", color: "#fff" }}>
        <h1 style={{ padding: "200px 40px" }}>Welcome to The Harsh Galaxy 🚀</h1>
      </section>
      <section
        className="fade-section"
        style={{
          height: "100vh",
          background: "#222",
          color: "#fff",
          padding: "200px 40px",
        }}
      >
        <h2>Scroll down to see smooth magic 💫</h2>
      </section>
    </>
  );
}
