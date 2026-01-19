"use client";

import { useState } from "react";

export default function OpenInvitation() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <button
          onClick={() => setOpen(true)}
          className="border px-8 py-4 text-xl tracking-widest"
        >
          ABRIR INVITACIÓN
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
      Invitación abierta 🎉
    </div>
  );
}