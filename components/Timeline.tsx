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

/* Eventos con imagen */
const events = [
  { time: "4:00 PM", title: "Misa", image: "/images/misa.jpg" },
  { time: "9:15 PM", title: "Llegada de invitados", image: "/images/invitados.jpg" },
  { time: "9:45 PM", title: "Entrada de novios", image: "/images/entrada.jpg" },
  { time: "10:00 PM", title: "Primer baile", image: "/images/baile.jpg" },
  { time: "10:30 PM", title: "Brindis", image: "/images/brindis.jpg" },
  { time: "11:00 PM", title: "Fiesta", image: "/images/fiesta.jpg" },
];

export default function Timeline() {
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
          className={`${playfair.className} text-4xl sm:text-5xl mb-6`}
          style={{ color: PRIMARY }}
        >
          Itinerario
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

      {/* CONTENEDOR */}
      <motion.div
        className="max-w-2xl mx-auto relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* Línea animada */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-top"
          style={{ backgroundColor: PRIMARY, opacity: 0.3 }}
        />

        <ul className="space-y-24 relative">
          {events.map((event, index) => (
            <motion.li
              key={index}
              variants={item}
              className="relative flex flex-col items-center text-center"
            >

              {/* CONTENIDO */}
              <div className="relative z-10 bg-[#f6f4f0] px-6 py-4 rounded-xl">

                {/* IMAGEN */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-max sm:w-14 sm:h-max overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* TEXTO */}
                <div className="space-y-2">
                  <p
                    className={`${montserrat.className} uppercase tracking-[0.25em] text-lg`}
                    style={{ color: PRIMARY }}
                  >
                    {event.time}
                  </p>

                  <p
                    className={`${playfair.className} text-lg sm:text-2xl`}
                    style={{ color: PRIMARY }}
                  >
                    {event.title}
                  </p>
                </div>

              </div>

            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

/* Animaciones */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.9, // más lento y elegante
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