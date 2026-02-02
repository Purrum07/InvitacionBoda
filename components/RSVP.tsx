"use client";

interface RSVPProps {
  onConfirm: () => void;
}

export default function RSVP({ onConfirm }: RSVPProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <section className="py-36 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-neutral-900 mb-6">
          Confirmación de asistencia
        </h2>
        <div className="w-24 h-px bg-[#C6A15B] mx-auto mb-8" />
        <p className="max-w-xl mx-auto text-neutral-600 text-lg leading-relaxed">
          Será un honor contar con tu presencia en este día tan especial.
          <br />
          Por favor, ayúdanos confirmando tu asistencia.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-neutral-50 rounded-3xl border border-neutral-200 p-12 md:p-16">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Nombre */}
          <div>
            <label className="block mb-3 text-sm tracking-widest text-neutral-700">
              NOMBRE COMPLETO
            </label>
            <input
              required
              type="text"
              className="w-full bg-white border border-neutral-300 rounded-full px-6 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            />
          </div>

          {/* Asistencia */}
          <div>
            <label className="block mb-3 text-sm tracking-widest text-neutral-700">
              CONFIRMACIÓN
            </label>
            <select
              required
              className="w-full bg-white border border-neutral-300 rounded-full px-6 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            >
              <option value="">Selecciona una opción</option>
              <option value="yes">Sí, con gusto asistiré</option>
              <option value="no">Lamentablemente no podré asistir</option>
            </select>
          </div>

          {/* Personas */}
          <div>
            <label className="block mb-3 text-sm tracking-widest text-neutral-700">
              NÚMERO DE PERSONAS
            </label>
            <input
              type="number"
              min={1}
              max={5}
              defaultValue={1}
              className="w-full bg-white border border-neutral-300 rounded-full px-6 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block mb-3 text-sm tracking-widest text-neutral-700">
              MENSAJE (OPCIONAL)
            </label>
            <textarea
              rows={3}
              className="w-full bg-white border border-neutral-300 rounded-2xl px-6 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            />
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-5 rounded-full bg-neutral-900 text-white tracking-widest text-sm transition hover:bg-neutral-800"
            >
              CONFIRMAR ASISTENCIA
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
