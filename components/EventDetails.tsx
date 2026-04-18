"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import { Variants } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function EventDetails() {
  return (
    <section className="py-32 px-6 bg-[#f6f4f0]">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`${playfair.className} text-4xl md:text-5xl text-[#556B2F] mb-6`}
          >
            Detalles del día
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-[#556B2F] mx-auto opacity-60 mb-8 origin-center"
          />

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className={`${cormorant.className} text-2xl md:text-3xl text-[#556B2F] mb-6`}
          >
            Nos encantaría que nos acompañaras <br></br> a celebrar este sacramento, <br></br>donde unimos nuestras vidas ante Dios
          </motion.h3>
        </div>

        <EventSection
          type="Religiosa"
          image="/images/church.jpeg"
          place="Parroquia del Inmaculado Corazón de María"
          time="4:00 PM"
          address="Calle Chac-Mool 1201, Nacional, 31120 Chihuahua, Chih."
          map="https://www.google.com/maps/search/?api=1&query=Parroquia+del+Inmaculado+Corazon+de+Maria"
        />

        <EventSection
          type="Recepción"
          image="/images/vanue.jpeg"
          place="Quinta San Gabriel"
          time="9:15 PM"
          address="C. Sierra Magisterial 6100, Los Nogales, 31380 Chihuahua, Chih."
          map="https://www.google.com/maps/search/?api=1&query=Quinta+San+Gabriel+Chihuahua"
        />

      </div>
    </section>
  );
}

/* ───────────────────────── */

function EventSection({
  type,
  image,
  place,
  time,
  address,
  map,
}: {
  type: string;
  image: string;
  place: string;
  time: string;
  address: string;
  map: string;
}) {

  const item: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="mb-32 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={item}
    >

      {/* Tipo evento */}
      <h3 className={`${playfair.className} text-3xl md:text-4xl italic text-[#556B2F] mb-10`}>
        {type}
      </h3>

      {/* Imagen */}
      <div className="w-full max-w-2xl mx-auto mb-10 overflow-hidden">
        <motion.img
          src={image}
          alt={place}
          className="w-full h-auto object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Info */}
      <div className="mb-10 space-y-3">

        <p className={`${montserrat.className} text-xl md:text-2xl text-[#556B2F]`}>
          {place}
        </p>

        <p className={`${montserrat.className} uppercase tracking-[0.25em] text-sm text-[#556B2F]`}>
          {time}
        </p>

        <p className={`${montserrat.className} text-[#556B2F] max-w-xl mx-auto leading-relaxed`}>
          {address}
        </p>

      </div>

      {/* Botón ubicación */}
      <motion.a
        href={map}
        target="_blank"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className={`${montserrat.className} inline-block mt-2 px-8 py-3 border border-[#556B2F] text-[#556B2F] text-sm tracking-[0.25em] uppercase transition-all duration-700 hover:bg-[#556B2F] hover:text-white hover:shadow-xl hover:-translate-y-1`}
      >
        Ver ubicación
      </motion.a>

    </motion.div>
  );
}