"use client";

import { useRef } from "react";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (!audioRef.current) {
      const audio = new Audio("/audio/song.mp3");

      audio.loop = true;           // 🔥 LOOP ACTIVADO
      audio.volume = 0.7;          // opcional (mejor UX)
      
      audioRef.current = audio;
    }

    audioRef.current
      .play()
      .catch(() => {
        // evita error si el navegador bloquea autoplay
      });
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  return { play, pause };
}