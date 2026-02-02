export default function GiftRegistry() {
  return (
    <section className="py-32 px-6 bg-neutral-50">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-neutral-900 mb-6">
          Mesa de regalos
        </h2>

        <div className="w-24 h-px bg-[#C6A15B] mx-auto mb-10" />

        <p className="max-w-2xl mx-auto text-neutral-600 leading-relaxed text-lg">
          Su presencia es nuestro mejor regalo.
          <br />
          Si desean obsequiarnos algo más, pueden hacerlo a través de nuestras mesas de regalos.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Liverpool */}
        <a
          href="https://www.liverpool.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-3xl border border-neutral-200 p-14 text-center transition hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="text-sm tracking-[0.3em] text-[#C6A15B] mb-4">
            MESA DE REGALOS
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6">
            Liverpool
          </h3>

          <p className="text-neutral-600 mb-10 leading-relaxed">
            Encuentra nuestra mesa de regalos
            <br />
            en Liverpool.
          </p>

          <span className="inline-block px-10 py-4 border border-neutral-900 rounded-full text-sm tracking-widest text-neutral-900 transition group-hover:bg-neutral-900 group-hover:text-white">
            VER MESA
          </span>
        </a>

        {/* Amazon */}
        <a
          href="https://www.amazon.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-3xl border border-neutral-200 p-14 text-center transition hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="text-sm tracking-[0.3em] text-[#C6A15B] mb-4">
            LISTA DE REGALOS
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6">
            Amazon
          </h3>

          <p className="text-neutral-600 mb-10 leading-relaxed">
            Descubre nuestra lista de regalos
            <br />
            en Amazon.
          </p>

          <span className="inline-block px-10 py-4 border border-neutral-900 rounded-full text-sm tracking-widest text-neutral-900 transition group-hover:bg-neutral-900 group-hover:text-white">
            VER LISTA
          </span>
        </a>
      </div>
    </section>
  );
}
