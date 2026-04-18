"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function OpenInvitation({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) return;

    setOpen(true);

    // 🔥 activamos el hero ANTES de que termine el fade
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <main
      onClick={handleClick}
      className="h-screen w-screen flex items-center justify-center px-6 cursor-pointer"
      style={{
        background: "radial-gradient(circle, #f6f4f0 50%, #eae3d9)",
      }}
    >
      <div className="w-[min(90vw,380px)] h-[240px] relative">

        {/* ✉️ BASE */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "#f3ede4",
            boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
          }}
        />

        {/* 🔺 SOLAPA */}
        <motion.div
          initial={false}
          animate={open ? { rotateX: -170 } : { rotateX: 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            transformOrigin: "top",
            perspective: 1200,
          }}
          className="absolute top-0 left-0 w-full h-[120px] z-10"
        >
          <div
            className="w-full h-full rounded-t-2xl"
            style={{
              background: "#efe6d8",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
          />
        </motion.div>

        {/* 💎 SELLO */}
        <motion.div
          initial={false}
          animate={
            open
              ? { scale: 0.85, opacity: 0, y: -20 }
              : { scale: 1, opacity: 1, y: 0 }
          }
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 top-[90px] -translate-x-1/2 z-20"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              border: "2px solid #556B2F",
              color: "#556B2F",
              letterSpacing: "0.2em",
              fontSize: "13px",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            M & S
          </div>
        </motion.div>

        {/* ✍️ TEXTO */}
        <div className="absolute -bottom-16 w-full text-center">
          <p className="text-[#556B2F]/80 text-sm italic tracking-wide mb-2">
            Estás invitado a nuestra boda
          </p>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#556B2F]/50 text-xs tracking-[0.3em]"
          >
            TOCA PARA ABRIR
          </motion.p>
        </div>

        {/* ✨ FADE */}
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute inset-0 bg-[#f6f4f0] z-30 rounded-2xl"
          />
        )}
      </div>
    </main>
  );
}