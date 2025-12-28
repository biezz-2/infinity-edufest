"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";

interface AudioManagerProps {
    isLoading?: boolean;
}

export default function AudioManager({ isLoading = false }: AudioManagerProps) {
    // Initial volume 0.25
    const [volume, setVolume] = useState(0.25);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        const audio = new Audio("/sounds/Aidentity.mp3");
        audio.loop = true;
        audio.volume = volume;
        audioRef.current = audio;

        const handleInteraction = () => {
            setHasInteracted(true);
            if (audio.paused && !isLoading) {
                audio.play().catch(e => console.log("Audio play failed", e));
            }
            // Remove all listeners once interaction happens
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            audio.pause();
            audioRef.current = null;
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Also trigger play when loading finishes IF interaction already happened
    useEffect(() => {
        if (!isLoading && hasInteracted && audioRef.current && audioRef.current.paused) {
            audioRef.current.play().catch(e => console.log("Audio play failed after load", e));
        }
    }, [isLoading, hasInteracted]);

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            if (newVolume > 0 && audioRef.current.paused && hasInteracted && !isLoading) {
                audioRef.current.play().catch(e => console.log("Audio play failed on volume change", e));
            }
        }
    };

    return (
        <div
            className={`fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[9999] transition-opacity duration-500 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <Slider value={volume} onChange={handleVolumeChange} />
        </div>
    );
}
