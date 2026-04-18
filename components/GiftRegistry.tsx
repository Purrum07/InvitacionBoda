"use client";

import { motion, Variants } from "framer-motion";
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

/* Color principal */
const PRIMARY = "#556B2F";

export default function GiftRegistry() {
  return (
    <section className="py-32 px-6 bg-[#f6f4f0]">

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
          Mesa de regalos
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-px mx-auto mb-10 opacity-60 origin-center"
          style={{ backgroundColor: PRIMARY }}
        />

        <p
          className={`${cormorant.className} max-w-2xl mx-auto leading-relaxed text-xl`}
          style={{ color: PRIMARY, opacity: 0.8 }}
        >
          El mejor regalo es compartir este día contigo. <br />
          Si deseas hacernos un obsequio,
          hemos preparado estas mesas de regalo
          con opciones pensadas con mucho cariño.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* Amazon */}
        <motion.a
          variants={item}
          whileHover={{
            y: -6,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.4 }}
          href="https://www.amazon.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-3xl border p-14 text-center transition-all duration-700 backdrop-blur-md overflow-hidden"
          style={{
            borderColor: "rgba(85,107,47,0.3)",
            backgroundColor: "rgba(255,255,255,0.65)",
          }}
        >
          <h3
            className={`${montserrat.className} text-2xl mb-6`}
            style={{ color: PRIMARY }}
          >
            Amazon
          </h3>

          <span
            className={`${montserrat.className} inline-block px-10 py-4 border text-sm tracking-widest transition-all duration-700`}
            style={{ borderColor: PRIMARY, color: PRIMARY }}
          >
            VER LISTA
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-3xl transition-all duration-700 group-hover:bg-[#556B2F]/5" />
        </motion.a>

        {/* Liverpool */}
        <motion.a
          variants={item}
          whileHover={{
            y: -6,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.4 }}
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51978975"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-3xl border p-14 text-center transition-all duration-700 backdrop-blur-md overflow-hidden"
          style={{
            borderColor: "rgba(85,107,47,0.3)",
            backgroundColor: "rgba(255,255,255,0.65)",
          }}
        >
          <h3
            className={`${montserrat.className} text-2xl mb-6`}
            style={{ color: PRIMARY }}
          >
            Liverpool
          </h3>

          <span
            className={`${montserrat.className} inline-block px-10 py-4 border text-sm tracking-widest transition-all duration-700`}
            style={{ borderColor: PRIMARY, color: PRIMARY }}
          >
            VER MESA
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-3xl transition-all duration-700 group-hover:bg-[#556B2F]/5" />
        </motion.a>

      </motion.div>
    </section>
  );
}

/* Animaciones */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};