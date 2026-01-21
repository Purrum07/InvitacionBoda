export default function EventDetails() {
  return (
    <section className="py-24 bg-neutral-100 px-6">
      <h2 className="text-3xl md:text-4xl text-center mb-16 font-[var(--font-playfair)] text-neutral-900">
        Detalles del día
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Ceremonia */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl mb-4 font-[var(--font-playfair)] text-neutral-600">
              Ceremonia Religiosa
            </h3>

            <p className="mb-2 font-medium text-neutral-700">
              Parroquia del Inmaculado Corazón de María | Chihuahua
            </p>

            <p className="mb-2 text-neutral-700">
              🕔 4:00 PM
            </p>

            <p className="mb-6 text-neutral-600">
              Calle Chac-Mool 1201, Nacional, 31120 Chihuahua, Chih.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Parroquia%del%Inmaculado%Corazón%de%Maria&output=embed"
            className="w-full h-64 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          
        </div>

        {/* Recepción */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl mb-4 font-[var(--font-playfair)] text-neutral-600">
              Recepción
            </h3>

            <p className="mb-2 font-medium text-neutral-700">
              Quinta San Gabriel
            </p>

            <p className="mb-2 text-neutral-700">
              🕖 9:00 PM
            </p>

            <p className="mb-6 text-neutral-600">
              C. Sierra magisterial 6100, Los Nogales, 31380 Chihuahua, Chih.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Quinta%San%Gabriel&output=embed"
            className="w-full h-64 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
