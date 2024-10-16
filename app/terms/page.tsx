import React from 'react';

const TermsAndConditions = () => {
  return (
    <section id='terms' className='flex flex-col items-center justify-center py-32'>
      <div className="p-6 max-w-3xl mx-auto bg-gradient-to-b from-[--foreground] to-lime-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">Términos y Condiciones</h1>

        <h2 className="text-xl font-semibold mt-4 text-white">1. Introducción</h2>
        <p className="text-gray-200">
          Bienvenido a nuestro portafolio. Al acceder y utilizar nuestros servicios,
          aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo,
          por favor, no utilices nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-white">2. Servicios Ofrecidos</h2>
        <ul className="list-disc list-inside ml-4 text-gray-200">
          <li>Edición y postproducción de fotografías.</li>
          <li>Creación de páginas web para el sector de bienes raíces.</li>
          <li>Producción de videos profesionales.</li>
          <li>Servicios de fotografía profesional.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-white">3. Propiedad Intelectual</h2>
        <p className="text-gray-200">
          Todo el contenido, incluyendo pero no limitado a fotografías, videos, diseños
          y textos, es propiedad del fotógrafo. No está permitido copiar, distribuir
          o modificar dicho contenido sin el consentimiento previo y por escrito del fotógrafo.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-white">4. Condiciones de Edición</h2>
        <p className="text-gray-200">
          - El fotógrafo se reserva el derecho de realizar cambios y ajustes en las
          fotografías y videos según su criterio artístico.
        </p>
        <p className="text-gray-200">
          - El cliente podrá solicitar cambios específicos, pero el fotógrafo no
          garantiza que todos los cambios serán realizados. Cada sesión incluye un total de 2 revisiones de edición; cualquier revisión adicional tendrá un costo adicional.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-white">5. Creación de Páginas Web</h2>
        <p className="text-gray-200">
          - El fotógrafo se compromete a ofrecer servicios de creación de páginas web
          de bienes raíces de acuerdo con las especificaciones acordadas.
        </p>
        <p className="text-gray-200">
          - Los plazos de entrega y costos serán discutidos y acordados por ambas
          partes antes de iniciar el proyecto.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-white">6. Limitación de Responsabilidad</h2>
        <p className="text-gray-200">
          El fotógrafo no será responsable de ningún daño indirecto, incidental o
          consecuente que surja de la utilización de los servicios ofrecidos.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-white">7. Ley Aplicable</h2>
        <p className="text-gray-200">
          Estos términos y condiciones se rigen por las leyes de la República
          Dominicana. Cualquier disputa relacionada con estos términos se resolverá
          en los tribunales competentes de la República Dominicana.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-white">8. Modificaciones a los Términos</h2>
        <p className="text-gray-200">
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento. Los cambios serán efectivos una vez publicados en el
          sitio web.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-white">9. Aceptación de los Términos</h2>
        <p className="text-gray-200">
          Al utilizar nuestros servicios, aceptas estos términos y condiciones en su totalidad.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
