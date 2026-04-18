"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
});

interface ThankYouProps {
  onBack: () => void;
}

/* Color principal */
const PRIMARY = "#556B2F";

export default function ThankYou({ onBack }: ThankYouProps) {
  return (
    <section
      className="fixed inset-0 flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/images/final3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay SIN blur */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative px-10 py-16 rounded-3xl max-w-xl w-full shadow-2xl border"
        style={{
          backgroundColor: "rgba(255,255,255,0.85)", // 🔥 más transparente
          borderColor: "rgba(85,107,47,0.25)",
        }}
      >
        {/* Título */}
        <h2
          className={`${playfair.className} text-4xl md:text-5xl mb-6`}
          style={{ color: PRIMARY }}
        >
          ¡Gracias por confirmar!
        </h2>

        {/* Línea */}
        <div
          className="w-20 h-px mx-auto mb-8 opacity-60"
          style={{ backgroundColor: PRIMARY }}
        />

        {/* Texto */}
        <p
          className={`${cormorant.className} text-xl leading-relaxed mb-10`}
          style={{ color: PRIMARY, opacity: 1 }}
        >
          En unos días recibirás tu pase y la mesa asignada.
        </p>

        {/* Botón */}
        <button
          onClick={onBack}
          className={`${montserrat.className} px-10 py-4 rounded-full text-sm tracking-[0.25em] border border-[#556B2F] text-[#556B2F] transition-all duration-700 hover:bg-[#556B2F] hover:text-white hover:shadow-xl`}
        >
          VOLVER AL INICIO
        </button>
      </motion.div>
    </section>
  );
}