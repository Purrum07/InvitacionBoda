"use client";

export default function ParentsAndGodparents() {
  return (
    <section className="py-32 px-6 bg-[#FAFAF9]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-[#1C1C1C] mb-6">
          Con la bendición de nuestros padres
        </h2>

        <div className="w-24 h-px bg-[#C6A15B] mx-auto mb-16"></div>

        {/* Padres */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="uppercase tracking-[0.3em] text-sm text-[#5A5A5A] mb-6 font-montserrat">
              Padres de la novia
            </h3>
            <p className="text-xl text-[#1C1C1C] font-[var(--font-playfair)]">
              Gilberto Reyes Gómez <br />
              Blanca Imelda López Robledo
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.3em] text-sm text-[#5A5A5A] mb-6 font-montserrat">
              Padres del novio
            </h3>
            <p className="text-xl text-[#1C1C1C] font-[var(--font-playfair)]">
              Mario Alberto Márquez Montes<br />
              Blanca Estela Montes Arrieta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
