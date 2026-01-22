"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";


export default function RSVP() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/gracias");
  };

  return (
    <section className="py-24 bg-white px-6">
      <h2 className="text-3xl md:text-4xl text-center mb-12 font-[var(--font-playfair)] text-neutral-900">
        Confirmación de asistencia
      </h2>

      {!confirmed ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm text-neutral-700">
              Nombre completo
            </label>
            <input
              required
              type="text"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-700">
              ¿Asistirás al evento?
            </label>
            <select
              required
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 "
            >
              <option value="" className="text-neutral-900">Selecciona una opción</option>
              <option value="yes" className="text-neutral-900">Sí, con gusto asistiré</option>
              <option value="no" className="text-neutral-900">Lamentablemente no podré asistir</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-700 ">
              Número de personas
            </label>
            <input
              type="number"
              min={1}
              max={5}
              defaultValue={1}
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-700">
              Mensaje (opcional)
            </label>
            <textarea
              rows={3}
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition"
          >
            Confirmar asistencia
          </button>
        </form>
      ) : (
        <div className="mt-20 py-32 bg-cover bg-center text-center text-white rounded-3xl"
          style={{ backgroundImage: "url('/images/DSCF0065.jpg')" }}
        >
          <h3 className="text-3xl font-[var(--font-playfair)] mb-6">
            ¡Gracias por confirmar!
          </h3>
          <p className="max-w-xl mx-auto text-lg leading-relaxed ">
            En los próximos días recibirás tu pase y la mesa asignada.
            <br />
            ¡Estamos felices de compartir este día contigo!
          </p>
        </div>
      )}
    </section>
  );
}
