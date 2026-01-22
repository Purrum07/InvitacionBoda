export default function GiftRegistry() {
  return (
    <section className="py-24 bg-neutral-50 px-6 text-center">
      <h2 className="text-3xl md:text-4xl mb-6 font-[var(--font-playfair)] text-neutral-900">
        Mesa de regalos
      </h2>

      <p className="max-w-2xl mx-auto mb-14 text-neutral-600 leading-relaxed">
        Su presencia es nuestro mejor regalo.  
        Si desean obsequiarnos algo más, pueden hacerlo a través de nuestras mesas de regalos.
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Liverpool */}
        <a
          href="https://www.liverpool.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-medium mb-4 text-neutral-900">
            Liverpool
          </h3>
          <p className="text-neutral-600 mb-6">
            Mesa de regalos Liverpool
          </p>
          <span className="inline-block px-6 py-3 border border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition">
            Ver mesa
          </span>
        </a>

        {/* Amazon */}
        <a
          href="https://www.amazon.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-medium mb-4 text-neutral-900">
            Amazon
          </h3>
          <p className="text-neutral-600 mb-6">
            Lista de regalos Amazon
          </p>
          <span className="inline-block px-6 py-3 border border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition">
            Ver lista
          </span>
        </a>
      </div>
    </section>
  );
}
