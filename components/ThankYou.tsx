"use client";

import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white px-6 animate-fade-in-up">
      <div className="text-center ">
        <h1 className="text-4xl md:text-5xl font-[var(--font-playfair)] mb-6">
          ¡Gracias por confirmar!
        </h1>

        <p className="max-w-xl mx-auto text-lg text-neutral-200 mb-12 leading-relaxed">
          Nos llena de alegría saber que nos acompañarás en este día tan especial.
          <br />
          En los próximos días recibirás tu pase y la mesa asignada.
        </p>

        <button
          onClick={() => router.push("/")}
          className="px-10 py-4 border border-white rounded-full hover:bg-white hover:text-neutral-900 transition"
        >
          Volver al inicio
        </button>
      </div>
    </main>
  );
}
