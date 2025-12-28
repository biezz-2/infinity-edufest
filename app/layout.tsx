"use client";

import { useSmoothScroll } from "@/lib/lenis";
import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import InfinityLoader from "@/components/ui/InfinityLoader";

// Load CursorParticles only on client-side to avoid hydration mismatch
const CursorParticles = dynamic(() => import("@/components/CursorParticles"), {
  ssr: false,
});

const AudioManager = dynamic(() => import("@/components/AudioManager"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased no-scrollbar`}>
        {isLoading ? (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]">
            <InfinityLoader />
          </div>
        ) : (
          <>
            <CursorParticles />
            <AudioManager isLoading={isLoading} />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
