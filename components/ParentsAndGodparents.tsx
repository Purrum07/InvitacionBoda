export default function ParentsAndGodparents() {
  return (
    <section className="py-24 bg-white text-center px-6 text-neutral-900">
      <h2 className="text-3xl md:text-4xl mb-16 font-[var(--font-playfair)]">
        Con la bendición de nuestros padres
      </h2>

      <div className="max-w-4xl mx-auto space-y-14">
        {/* Padres Novia */}
        <div>
          <p className="uppercase tracking-widest text-sm mb-4 text-neutral-600">
            Padres de la Novia
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Blanca Imelda López Robledo
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Gilberto Reyes Gómez
          </p>
        </div>

        {/* Padres Novio */}
        <div>
          <p className="uppercase tracking-widest text-sm mb-4 text-neutral-600">
            Padres del Novio
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Blanca Estela Montes Arrieta
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Mario Alberto Márquez Montes
          </p>
        </div>

        {/* Padrinos */}
        <div>
          <p className="uppercase tracking-widest text-sm mb-4 text-neutral-600">
            Padrinos
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Maribel Reyes Gómez
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Javier Ortíz
          </p>
        </div>
        <div>
          <p className="uppercase tracking-widest text-sm mb-4 text-neutral-600">
            Padrinos
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Hilda Isabel Moontes Arrieta
          </p>
          <p className="text-xl md:text-2xl font-medium">
            Daniel Adame
          </p>
        </div>
      </div>
    </section>
  );
}
