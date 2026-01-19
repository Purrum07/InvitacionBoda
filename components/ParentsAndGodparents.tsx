export default function ParentsAndGodparents() {
  return (
    <section className="py-24 bg-white text-center px-6">
      <h2 className="text-3xl md:text-4xl mb-16 font-[var(--font-playfair)]">
        Con la bendición de nuestros padres
      </h2>

      <div className="max-w-4xl mx-auto space-y-14">
        {/* Padres Novia */}
        <div>
          <p className="uppercase tracking-widest text-sm mb-4">
            Padres de la Novia
          </p>
          <p className="text-xl md:text-2xl">
            Blanca Imelda López Robledo
          </p>
          <p className="text-xl md:text-2xl">
            Gilberto Reyes Gómez
          </p>
        </div>

        {/* Padres Novio */}
        <div>
          <p className="uppercase tracking-widest text-sm mb-4">
            Padres del Novio
          </p>
          <p className="text-xl md:text-2xl">
            Blanca Estela Montes Arrieta
          </p>
          <p className="text-xl md:text-2xl">
            Mario Alberto Márquez Delgado
          </p>
        </div>

        {/* Padrinos */}
        <div>
          <p className="uppercase tracking-widest text-sm mb-4">
            Padrinos de la novia
          </p>
          <p className="text-xl md:text-2xl">
            Maribel Reyes Gómez
          </p>
          <p className="text-xl md:text-2xl">
            Javier Ortíz
          </p>
        </div>
        <div>
          <p className="uppercase tracking-widest text-sm mb-4">
            Padrinos del novio
          </p>
          <p className="text-xl md:text-2xl">
            Hilda Isabel Moontes Arrieta
          </p>
          <p className="text-xl md:text-2xl">
            Daniel Adame
          </p>
        </div>
      </div>
    </section>
  );
}