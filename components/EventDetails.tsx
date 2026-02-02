export default function EventDetails() {
  return (
    <section className="py-32 px-6 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-[#1C1C1C] mb-6">
            Detalles del día
          </h2>
          <div className="w-24 h-px bg-[#C6A15B] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <EventCard
            title="Ceremonia Religiosa"
            place="Parroquia del Inmaculado Corazón de María"
            time="4:00 PM"
            address="Calle Chac-Mool 1201, Nacional, 31120 Chihuahua, Chih."
            map="https://www.google.com/maps?q=Parroquia%20del%20Inmaculado%20Corazón%20de%20María&output=embed"
          />

          <EventCard
            title="Recepción"
            place="Quinta San Gabriel"
            time="9:00 PM"
            address="C. Sierra Magisterial 6100, Los Nogales, 31380 Chihuahua, Chih."
            map="https://www.google.com/maps?q=Quinta%20San%20Gabriel&output=embed"
          />
        </div>
      </div>
    </section>
  );
}

function EventCard({
  title,
  place,
  time,
  address,
  map,
}: {
  title: string;
  place: string;
  time: string;
  address: string;
  map: string;
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200">
      {/* Info */}
      <div className="p-10">
        <h3 className="text-2xl font-[var(--font-playfair)] text-[#1C1C1C] mb-6">
          {title}
        </h3>

        <p className="text-lg font-medium text-neutral-800 mb-2">
          {place}
        </p>

        <p className="text-sm tracking-wide text-[#C6A15B] mb-4">
          {time}
        </p>

        <p className="text-sm text-neutral-600 leading-relaxed">
          {address}
        </p>
      </div>

      {/* Mapa */}
      <div className="relative">
        <iframe
          src={map}
          className="w-full h-64 border-0 grayscale-[20%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      </div>
    </div>
  );
}
