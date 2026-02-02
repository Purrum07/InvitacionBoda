"use client";

import { useRef } from "react";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/song.mp3");
      audioRef.current.loop = true;
    }
    audioRef.current.play();
  };

  return { play };
}
