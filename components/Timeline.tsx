const events = [
  { time: "4:30 PM", title: "Llegada de invitados" },
  { time: "5:00 PM", title: "Ceremonia religiosa" },
  { time: "6:15 PM", title: "Sesión de fotos" },
  { time: "7:00 PM", title: "Recepción" },
  { time: "8:30 PM", title: "Cena" },
  { time: "9:30 PM", title: "Primer baile" },
  { time: "10:00 PM", title: "Fiesta" },
];

export default function Timeline() {
  return (
    <section className="py-32 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-[#1C1C1C] mb-6">
          Programa del día
        </h2>
        <div className="w-24 h-px bg-[#C6A15B] mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Línea central */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#C6A15B]/40 -translate-x-1/2" />

        <ul className="space-y-24 relative">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                key={index}
                className={`relative flex ${
                  isLeft ? "justify-start pr-12" : "justify-end pl-12"
                }`}
              >
                {/* Punto */}
                <span className="absolute left-1/2 top-6 w-4 h-4 bg-[#C6A15B] rounded-full -translate-x-1/2 z-10" />

                {/* Card */}
                <div
                  className={`
                    max-w-sm bg-white border border-neutral-200 rounded-2xl px-8 py-6
                    ${isLeft ? "text-right" : "text-left"}
                  `}
                >
                  <p className="text-sm tracking-wide text-[#C6A15B] mb-2">
                    {event.time}
                  </p>

                  <p className="text-lg font-[var(--font-playfair)] text-neutral-900">
                    {event.title}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
