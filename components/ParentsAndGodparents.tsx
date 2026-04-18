"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Variants } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ParentsAndGodparents() {
  return (
    <section
      className="py-32 px-6"
      style={{
        backgroundColor: "#f6f4f0",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${playfair.className} text-4xl md:text-5xl text-[#556B2F] mb-6`}
        >
          Con la bendición de Dios y el amor de nuestros padres
        </motion.h2>

        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-[#556B2F] mx-auto mb-16 opacity-60 origin-center"
        ></motion.div>

        {/* Padres */}
        <motion.div
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 1.1, // más pausado y elegante
                delayChildren: 0.4
              }
            }
          }}
        >
          <AnimatedText text="Mario Alberto Márquez Delgado" />
          <AnimatedText text="&" small />
          <AnimatedText text="Blanca Estela Montes Arrieta" />

          <div className="h-6"></div>

          <AnimatedText text="Gilberto Reyes Gómez" />
          <AnimatedText text="&" small />
          <AnimatedText text="Blanca Imelda López Robledo" />
        </motion.div>

      </div>
    </section>
  );
}

/* ───────────────────────── */

function AnimatedText({
  text,
  small = false
}: {
  text: string;
  small?: boolean;
}) {

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      variants={item}
      className={`${montserrat.className} ${small
          ? "text-base text-[#556B2F]/70"
          : "text-base sm:text-lg md:text-2xl text-[#556B2F]"
        }`}
    >
      {text}
    </motion.p>
  );
}