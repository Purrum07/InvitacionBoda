"use client";

import { useRef } from "react";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const MAX_DURATION = 5 * 60 * 1000; // ⏱ 5 minutos en ms

  const play = () => {
    if (!audioRef.current) {
      const audio = new Audio("/audio/song.mp3");

      audio.loop = true;
      audio.volume = 0.7;

      // 👇 pausa si cambia de pestaña/app
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          audio.pause();
        } else {
          audio.play().catch(() => {});
        }
      });

      // 👇 pausa si se sale de la página
      window.addEventListener("beforeunload", () => {
        audio.pause();
      });

      audioRef.current = audio;
    }

    audioRef.current.play().catch(() => {});

    // 🔥 temporizador global (clave)
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        audioRef.current?.pause();
      }, MAX_DURATION);
    }
  };

  const pause = () => {
    audioRef.current?.pause();

    // opcional: limpiar timer si pausas manualmente
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return { play, pause };
}