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
    question: "¿Habrá código de vestimenta?",
    answer:
      "Sí, el evento es de vestimenta formal."
  },
  {
    question: "¿Es un evento solo para adultos?",
    answer:
      "Sí, agradecemos su comprensión ya que el evento es solo para adultos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white px-6">
      <h2 className="text-3xl md:text-4xl text-center mb-16 font-[var(--font-playfair)] text-neutral-900">
        Preguntas frecuentes
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-neutral-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 transition"
            >
              <span className="text-neutral-900 font-medium">
                {faq.question}
              </span>
              <span className="text-neutral-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-neutral-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
