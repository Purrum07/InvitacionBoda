export default function DressCode() {
  return (
    <section className="py-32 px-6 bg-neutral-50">
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-neutral-900 mb-6">
          Código de vestimenta
        </h2>
        <div className="w-24 h-px bg-[#C6A15B] mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formal */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-14 text-center">
          <p className="text-sm tracking-[0.3em] text-[#C6A15B] mb-4">
            DRESS CODE
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6">
            Formal
          </h3>

          <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto">
            Los invitamos a vestir de manera formal para acompañarnos
            en una celebración elegante y especial.
          </p>
        </div>

        {/* Adults only */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-14 text-center">
          <p className="text-sm tracking-[0.3em] text-[#C6A15B] mb-4">
            IMPORTANTE
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6">
            Evento solo para adultos
          </h3>

          <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto">
            Con mucho cariño, hemos decidido que este evento
            sea exclusivamente para adultos.
          </p>
        </div>
      </div>
    </section>
  );
}
