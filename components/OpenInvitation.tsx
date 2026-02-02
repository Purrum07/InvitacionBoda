"use client";

interface OpenInvitationProps {
  onOpen: () => void;
}

export default function OpenInvitation({ onOpen }: OpenInvitationProps) {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <button
        onClick={onOpen}
        className="border border-white px-10 py-4 text-xl tracking-[0.3em] hover:bg-white hover:text-black transition"
      >
        ABRIR INVITACIÓN
      </button>
    </main>
  );
}
