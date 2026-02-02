"use client";

import { useEffect, useState } from "react";

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
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-[#1C1C1C] mb-6">
          Falta muy poco
        </h2>

        <div className="w-24 h-px bg-[#C6A15B] mx-auto mb-20"></div>

        {/* Cuadrantes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <TimeBox label="DÍAS" value={timeLeft.days} />
          <TimeBox label="HORAS" value={timeLeft.hours} />
          <TimeBox label="MINUTOS" value={timeLeft.minutes} />
          <TimeBox label="SEGUNDOS" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── */

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="border border-neutral-200 rounded-3xl py-12 px-6 bg-[#FAFAF9] transition-all duration-700 hover:scale-105">
      <div className="text-5xl md:text-6xl font-[var(--font-playfair)] text-[#1C1C1C] mb-4">
        {value}
      </div>
      <div className="text-xs tracking-[0.35em] text-[#5A5A5A] font-montserrat">
        {label}
      </div>
    </div>
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