"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/* Color principal */
const PRIMARY = "#556B2F";

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
    question: "¿Se permite la entrada a niños?",
    answer:
      "No, es exclusivo para adultos. Muchas gracias por su comprensión."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-[#f6f4f0]">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2
          className={`${playfair.className} text-4xl md:text-5xl mb-6`}
          style={{ color: PRIMARY }}
        >
          Pregunta frecuentes
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-px mx-auto opacity-60 origin-center"
          style={{ backgroundColor: PRIMARY }}
        />
      </motion.div>

      {/* LISTA */}
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -2 }}
              className="border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500"
              style={{
                borderColor: "rgba(85,107,47,0.2)",
                backgroundColor: "rgba(255,255,255,0.65)",
              }}
            >

              {/* PREGUNTA */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center px-8 py-6"
              >
                <span
                  className={`${montserrat.className} text-lg md:text-xl text-left`}
                  style={{ color: PRIMARY }}
                >
                  {faq.question}
                </span>

                {/* ICONO ANIMADO */}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-2xl"
                  style={{ color: PRIMARY }}
                >
                  +
                </motion.span>
              </button>

              {/* RESPUESTA */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="overflow-hidden px-8"
                  >
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="pb-6"
                    >
                      <p
                        className={`${montserrat.className} leading-relaxed`}
                        style={{ color: PRIMARY, opacity: 0.85 }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* Animaciones */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};