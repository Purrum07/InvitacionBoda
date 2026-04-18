"use client";

import { useEffect, useState } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const WEDDING_DATE = new Date("2026-05-16T16:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-50 px-6 relative"
      style={{
        backgroundColor: "#f6f4f0",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${cormorant.className} text-4xl md:text-5xl sm:text-3xl italic mb-6 text-[#556B2F]`}
        >
          Nuestro gran día se acerca
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-[#556B2F] mx-auto mb-20 opacity-60 origin-center"
        ></motion.div>

        {/* Cuadrantes */}
        <div
          className={`${montserrat.className} text-4xl md:text-5xl grid grid-cols-3 md:grid-cols-3 gap-10`}
        >
          <TimeBox label="DÍAS" value={timeLeft.days} />
          <TimeBox label="HORAS" value={timeLeft.hours} />
          <TimeBox label="MINUTOS" value={timeLeft.minutes} />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── */

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group border border-[#556B2F]/30 rounded-3xl py-6 px-4 bg-white/60 backdrop-blur-md transition-all duration-700 hover:bg-[#556B2F] hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Número con animación */}
      <div className="relative h-[60px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute text-5xl md:text-6xl text-[#556B2F] group-hover:text-white"
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Label */}
      <div
        className={`${montserrat.className} text-[10px] sm:text-xs tracking-[0.25em] text-[#556B2F]/70 mt-2 transition-colors duration-700 group-hover:text-white text-center`}
        style={{ letterSpacing: "0.2em" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

/* ───────────────────────── */

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = WEDDING_DATE.getTime() - now;

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}