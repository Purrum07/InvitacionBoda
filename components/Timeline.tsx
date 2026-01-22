const events = [
  { time: "4:30 PM", title: "Llegada de invitados", icon: "💐" },
  { time: "5:00 PM", title: "Ceremonia religiosa", icon: "⛪" },
  { time: "6:15 PM", title: "Sesión de fotos", icon: "📸" },
  { time: "7:00 PM", title: "Recepción", icon: "🥂" },
  { time: "8:30 PM", title: "Cena", icon: "🍽️" },
  { time: "9:30 PM", title: "Primer baile", icon: "💃🕺" },
  { time: "10:00 PM", title: "Fiesta", icon: "🎉" },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white px-6">
    <h2 className="text-3xl md:text-4xl text-center mb-16 font-[var(--font-playfair)] text-neutral-900">
      Programa del día
    </h2>

    <div className="max-w-3xl mx-auto relative">
      {/* Línea vertical al centro (fondo) */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-200 -translate-x-1/2 z-0" />

      <ul className="space-y-14 relative z-10">
        {events.map((event, index) => (
          <li
  key={index}
  className="flex flex-col items-center text-center"
>
  {/* Punto */}
  <span className="w-4 h-4 bg-neutral-900 rounded-full mb-4" />

  {/* Hora con fondo */}
  <div className="bg-white px-4 py-1 mb-2">
    <p className="text-sm text-neutral-600">
      {event.time}
    </p>
  </div>

  {/* Evento con fondo */}
  <div className="bg-white px-6 py-2">
    <p className="text-lg font-medium text-neutral-900">
      {event.icon} {event.title}
    </p>
  </div>
</li>
        ))}
      </ul>
    </div>
  </section>
  );
}
