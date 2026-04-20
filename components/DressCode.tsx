"use client";

import { motion, Variants } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/* Color principal */
const PRIMARY = "#556B2F";

export default function DressCode() {
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
          Código de vestimenta
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-px mx-auto opacity-60 origin-center"
          style={{ backgroundColor: PRIMARY }}
        />

        <br />
        <br />
        <br />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <motion.img
            src="/images/DressCode.jpeg"
            alt="Dress Code"
            className="w-80 md:w-112 opacity-90"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* Formal */}
        <motion.div
          variants={item}
          whileHover={{
            y: -6,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl p-14 text-center backdrop-blur-md border transition-all duration-700"
          style={{
            backgroundColor: "rgba(255,255,255,0.65)",
            borderColor: "rgba(85,107,47,0.25)",
          }}
        >
          <h3
            className={`${montserrat.className} text-2xl mb-1`}
            style={{ color: PRIMARY }}
          >
            Formal
          </h3>

          <p
            className={`${montserrat.className} leading-relaxed max-w-sm mx-auto`}
            style={{ color: PRIMARY, opacity: 0.8 }}
          >
            Los invitamos a vestir de manera formal para acompañarnos
            en una celebración elegante y especial.
          </p>
        </motion.div>

        {/* Adults only */}
        <motion.div
          variants={item}
          whileHover={{
            y: -6,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl p-14 text-center backdrop-blur-md border transition-all duration-700"
          style={{
            backgroundColor: "rgba(255,255,255,0.65)",
            borderColor: "rgba(85,107,47,0.25)",
          }}
        >
          <p
            className={`${montserrat.className} leading-relaxed max-w-sm mx-auto`}
            style={{ color: PRIMARY, opacity: 0.8 }}
          >
            Con mucho cariño hemos preparado esta celebración, por lo que amablemente les pedimos no asistir con niños.
            Agradecemos mucho su comprensión.
          </p>
        </motion.div>

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