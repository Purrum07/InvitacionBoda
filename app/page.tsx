"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ThankYou from "@/components/ThankYou";
import AudioController from "@/components/AudioController";

type View = "hero" | "thankyou";

export default function Home() {
  const [view, setView] = useState<View>("hero");
  const [asistencia, setAsistencia] = useState<string | null>(null);
  const audio = AudioController();


  return (
    <>
      {/* HERO CON SOBRE INTEGRADO */}
      {view === "hero" && (
        <Hero
        key={view}
          onOpen={() => {
            audio.play(); // 🎵 inicia música cuando abre sobre
          }}
          onConfirm={(value) => {
            setAsistencia(value);   // 👈 guardas si es "yes" o "no"
            setView("thankyou");
          }}
        />
      )}

      {/* THANK YOU */}
      {view === "thankyou" && (
        <ThankYou
          asistencia={asistencia!}
          onPauseAudio={audio.pause}
          onBack={() => setView("hero")}
        />
      )}
    </>
  );
}