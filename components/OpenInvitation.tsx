"use client";

import { useState } from "react";
import Hero from "./Hero";

export default function OpenInvitation() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <main className="h-screen w-screen flex items-center justify-center bg-black text-white">
        <button
          onClick={() => setIsOpen(true)}
          className="border border-white px-10 py-4 text-xl tracking-[0.3em] hover:bg-white hover:text-black transition"
        >
          ABRIR INVITACIÓN
        </button>
      </main>
    );
  }

  return <Hero />;
}
