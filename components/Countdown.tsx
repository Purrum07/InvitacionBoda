"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-05-16T16:00:00"); // ajusta hora si quieres

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = WEDDING_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        weeks: 0,
        days: 0,
        hours: 0,
        seconds: 0,
      };
    }

    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 7)) /
        (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const seconds = Math.floor(
      (difference % (1000 * 60 * 60)) / 1000
    );

    return { weeks, days, hours, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-neutral-900 text-white text-center">
    <h2 className="text-3xl md:text-4xl mb-14 font-[var(--font-playfair)]">
      Falta muy poco
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
      <TimeBox label="Semanas" value={timeLeft.weeks} />
      <TimeBox label="Días" value={timeLeft.days} />
      <TimeBox label="Horas" value={timeLeft.hours} />
      <TimeBox label="Segundos" value={timeLeft.seconds} />
    </div>
  </section>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-gray-300 py-8 rounded-lg">
      <div className="text-4xl mb-2 font-bold">{value}</div>
      <div className="tracking-widest text-sm uppercase">
        {label}
      </div>
    </div>
  );
}