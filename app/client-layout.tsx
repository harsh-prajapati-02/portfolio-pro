"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { initLenis } from "@/lib/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = initLenis();

        const updateScroll = (time: number) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(updateScroll);

        return () => {
            gsap.ticker.remove(updateScroll);
        };
    }, []);

    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
        </div>
    );
}
