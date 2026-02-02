"use client";

interface ThankYouProps {
  onBack: () => void;
}

export default function ThankYou({ onBack }: ThankYouProps) {
  return (
    <section
      className="fixed inset-0 flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/images/DSCF0065.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md px-10 py-16 rounded-3xl max-w-xl animate-fade-in">
        <h2 className="text-4xl font-[var(--font-playfair)] text-neutral-900 mb-6">
          ¡Gracias por confirmar!
        </h2>

        <p className="text-neutral-700 mb-10">
          En unos días recibirás tu pase y la mesa asignada.
        </p>

        <button
          onClick={onBack}
          className="px-10 py-4 border border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition"
        >
          Volver al inicio
        </button>
      </div>
    </section>
  );
}
