export default function DressCode() {
  return (
    <section className="py-24 bg-neutral-50 px-6">
      <h2 className="text-3xl md:text-4xl text-center mb-16 font-[var(--font-playfair)] text-neutral-900">
        Código de vestimenta
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* Dress Code */}
        <div className="bg-white p-10 rounded-2xl shadow-sm">
          <div className="text-5xl mb-6">👗🤵</div>
          <h3 className="text-xl font-medium mb-4 text-neutral-900">
            Formal
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            Agradecemos vestir de manera formal para acompañarnos
            en este día tan especial.
          </p>
        </div>

        {/* Adults Only */}
        <div className="bg-white p-10 rounded-2xl shadow-sm">
          <div className="text-5xl mb-6">🤍</div>
          <h3 className="text-xl font-medium mb-4 text-neutral-900">
            Evento solo para adultos
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            Con mucho cariño, hemos decidido que este evento
            sea únicamente para adultos.
          </p>
        </div>
      </div>
    </section>
  );
}
