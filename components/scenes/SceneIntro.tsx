"use client";

import { useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import Image from "next/image";

import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
    weight: "400",
    subsets: ["latin"],
});

export default function SceneIntro() {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP((gsap) => {
        const tl = gsap.timeline();

        tl.fromTo(
            logoRef.current,
            { y: 50, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
        )
            .fromTo(
                textRef.current,
                { y: 50, opacity: 0, filter: "blur(10px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
                "-=0.8"
            );
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative z-10 bg-[var(--background)]">
            <div className="text-center flex flex-col items-center">
                <div ref={logoRef} className="mb-[-4rem] md:mb-[-8rem] z-20">
                    <Image
                        src="/images/logo-fiedufest.png"
                        alt="The 8th Annual FIEDUFEST"
                        width={1000}
                        height={500}
                        priority
                        className="w-96 md:w-[850px] h-auto drop-shadow-2xl"
                    />
                </div>
                <h1 ref={textRef} className={`${audiowide.className} text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--foreground)] to-[var(--muted-foreground)] relative z-10`}>
                    INFINITY
                </h1>
                <p className="mt-8 text-[var(--muted-foreground)] text-sm tracking-[0.3em] uppercase font-bold opacity-80">
                    Scroll to Explore
                </p>
            </div>
        </section>
    );
}
