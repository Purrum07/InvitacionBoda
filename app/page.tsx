"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ThankYou from "@/components/ThankYou";
import AudioController from "@/components/AudioController";

type View = "hero" | "thankyou";

export default function Home() {
  const [view, setView] = useState<View>("hero");
  const audio = AudioController();

  return (
    <>
      {/* HERO CON SOBRE INTEGRADO */}
      {view === "hero" && (
        <Hero
          onOpen={() => {
            audio.play(); // 🎵 inicia música cuando abre sobre
          }}
          onConfirm={() => setView("thankyou")}
        />
      )}

      {/* THANK YOU */}
      {view === "thankyou" && (
        <ThankYou onBack={() => setView("hero")} />
      )}
    </>
  );
}