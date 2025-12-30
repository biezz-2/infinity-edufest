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
    const taglineRef = useRef<HTMLParagraphElement>(null);

    useGSAP((gsap) => {
        const tl = gsap.timeline();

        // High-end cinematic reveal matching the Intro transition
        tl.fromTo(
            logoRef.current,
            {
                scale: 0.8,
                opacity: 0,
                filter: "blur(20px) brightness(2)"
            },
            {
                scale: 1,
                opacity: 1,
                filter: "blur(0px) brightness(1)",
                duration: 1.5,
                ease: "expo.out"
            }
        )
            .fromTo(
                textRef.current,
                {
                    y: 80,
                    opacity: 0,
                    filter: "blur(15px)",
                    rotateX: -45
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    rotateX: 0,
                    duration: 1.2,
                    ease: "power4.out"
                },
                "-=1.0"
            )
            .fromTo(
                taglineRef.current,
                { opacity: 0, y: 20 },
                { opacity: 0.6, y: 0, duration: 1, ease: "power2.out" },
                "-=0.5"
            );
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative z-10 bg-gradient-to-b from-[var(--background)] to-[var(--background-accent)]">
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
                <h1 ref={textRef} className={`${audiowide.className} text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--foreground)] to-[var(--muted-foreground)] relative z-10 select-none`}>
                    INFINITY
                </h1>
                <div ref={taglineRef} className="mt-8 flex flex-col items-center gap-4">
                    <div className="w-12 h-[1px] bg-[#ff0088] opacity-50" />
                    <p className="text-[10px] tracking-[0.6em] uppercase text-[var(--muted-foreground)] font-bold">
                        Scroll to Explore
                    </p>
                </div>
            </div>
        </section>
    );
}
