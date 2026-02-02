"use client";

import { useState } from "react";
import OpenInvitation from "@/components/OpenInvitation";
import Hero from "@/components/Hero";
import ThankYou from "@/components/ThankYou";
import AudioController from "@/components/AudioController";

type View = "open" | "hero" | "thankyou";

export default function Home() {
  const [view, setView] = useState<View>("open");
  const audio = AudioController();

  return (
    <>
      {view === "open" && (
        <OpenInvitation
          onOpen={() => {
            audio.play();       // 🎵 inicia música aquí
            setView("hero");
          }}
        />
      )}

      {view === "hero" && (
        <Hero
          onConfirm={() => setView("thankyou")}
        />
      )}

      {view === "thankyou" && (
        <ThankYou
          onBack={() => setView("open")}
        />
      )}
    </>
  );
}
