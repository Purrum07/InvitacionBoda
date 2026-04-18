"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

interface RSVPProps {
  onConfirm: () => void;
}

/* Color principal */
const PRIMARY = "#556B2F";

export default function RSVP({ onConfirm }: RSVPProps) {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 🔥 nuevo estado

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        nombre: formData.get("nombre"),
        asistencia: formData.get("asistencia"),
        personas: formData.get("personas"),
        mensaje: formData.get("mensaje"),
        userAgent: navigator.userAgent,
      };

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwjSb8OjamYPVnzmUcUfLO3a1J7nNvqWccCfHzclqRjls9r0AKjcBfQoQITFzURhVN36g/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );

      const data = await res.json();

      if (!data.success) {
        setErrorMessage("Ya tenemos tu confirmación 🤍 ¡Gracias!");
        setShowModal(true);
        return;
      }

      onConfirm();

    } catch (error) {
      setErrorMessage("Hubo un problema al enviar tu confirmación");
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-36 px-6 bg-[#f6f4f0]">

      {/* Header */}
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
          Confirmación de asistencia
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-px mx-auto mb-8 opacity-60 origin-center"
          style={{ backgroundColor: PRIMARY }}
        />

        <p
          className={`${cormorant.className} max-w-xl mx-auto text-xl leading-relaxed`}
          style={{ color: PRIMARY, opacity: 0.8 }}
        >
          Será un honor contar con tu presencia en este día tan especial.
          <br />
          Por favor, ayúdanos confirmando tu asistencia.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto rounded-3xl p-12 md:p-16 backdrop-blur-md border shadow-lg"
        style={{
          backgroundColor: "rgba(255,255,255,0.65)",
          borderColor: "rgba(85,107,47,0.25)",
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Nombre */}
          <div>
            <label
              className={`${montserrat.className} block mb-3 text-sm tracking-widest`}
              style={{ color: PRIMARY, opacity: 0.7 }}
            >
              Nombre completo
            </label>
            <input
              required
              name="nombre"
              type="text"
              className="w-full rounded-full px-6 py-4 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#556B2F]/40"
              style={{
                border: "1px solid rgba(85,107,47,0.3)",
                backgroundColor: "rgba(255,255,255,0.85)",
                color: PRIMARY,
              }}
            />
          </div>

          {/* Asistencia */}
          <div>
            <label
              className={`${montserrat.className} block mb-3 text-sm tracking-widest`}
              style={{ color: PRIMARY, opacity: 0.7 }}
            >
              Confirmación
            </label>
            <select
              required
              name="asistencia"
              className={`${montserrat.className} w-full rounded-full px-6 py-4 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#556B2F]/40`}
              style={{
                border: "1px solid rgba(85,107,47,0.3)",
                backgroundColor: "rgba(255,255,255,0.85)",
                color: PRIMARY,
              }}
            >
              <option value="">Selecciona una opción</option>
              <option value="yes">Sí, con gusto asistiré</option>
              <option value="no">Lamentablemente no podré asistir</option>
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label
              className={`${montserrat.className} block mb-3 text-sm tracking-widest`}
              style={{ color: PRIMARY, opacity: 0.7 }}
            >
              Mensaje (Opcional)
            </label>
            <textarea
              name="mensaje"
              rows={3}
              className="w-full rounded-2xl px-6 py-4 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#556B2F]/40"
              style={{
                border: "1px solid rgba(85,107,47,0.3)",
                backgroundColor: "rgba(255,255,255,0.85)",
                color: PRIMARY,
              }}
            />
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`${montserrat.className} w-full py-5 rounded-full text-sm tracking-[0.25em] border transition-all duration-700 
              ${isLoading 
                ? "opacity-80 cursor-not-allowed" 
                : "hover:bg-[#556B2F] hover:text-white hover:shadow-xl"
              }`}
              style={{
                borderColor: PRIMARY,
                color: isLoading ? "#fff" : PRIMARY,
                backgroundColor: isLoading ? PRIMARY : "transparent",
              }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ENVIANDO...
                </span>
              ) : (
                "CONFIRMAR ASISTENCIA"
              )}
            </button>
          </div>

        </form>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#f6f4f0] rounded-3xl p-10 max-w-md w-full text-center border shadow-xl"
              style={{
                borderColor: "rgba(85,107,47,0.3)",
              }}
            >
              <h3 className="text-2xl mb-4" style={{ color: PRIMARY }}>
                Aviso
              </h3>

              <div className="w-16 h-px mx-auto mb-6 opacity-60 bg-[#556B2F]" />

              <p className="mb-8 leading-relaxed" style={{ color: PRIMARY, opacity: 0.8 }}>
                {errorMessage}
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="px-8 py-3 border text-sm tracking-[0.25em] uppercase transition-all duration-700 hover:bg-[#556B2F] hover:text-white"
                style={{
                  borderColor: PRIMARY,
                  color: PRIMARY,
                }}
              >
                ACEPTAR
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}