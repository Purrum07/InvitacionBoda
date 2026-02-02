"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿A qué hora debo llegar?",
    answer:
      "Te recomendamos llegar al menos 15 minutos antes del inicio de la ceremonia."
  },
  {
    question: "¿Habrá estacionamiento disponible?",
    answer:
      "Sí, el lugar cuenta con estacionamiento para todos los invitados."
  },
  {
    question: "¿Puedo llevar acompañante?",
    answer:
      "La invitación es válida únicamente para las personas indicadas."
  },
  {
    question: "¿Existe código de vestimenta?",
    answer:
      "Sí, el evento es de vestimenta formal."
  },
  {
    question: "¿Es un evento solo para adultos?",
    answer:
      "Sí, agradecemos su comprensión ya que el evento es exclusivamente para adultos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-neutral-900 mb-6">
          Preguntas frecuentes
        </h2>
        <div className="w-24 h-px bg-[#C6A15B] mx-auto" />
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center px-8 py-6 bg-neutral-50 hover:bg-neutral-100 transition"
              >
                <span className="text-lg font-[var(--font-playfair)] text-neutral-900 text-left">
                  {faq.question}
                </span>

                <span
                  className={`text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-[#C6A15B]" : "text-neutral-500"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 py-6" : "max-h-0"
                }`}
              >
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
