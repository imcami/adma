"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Policy = () => {
  return (
    <section id='policy' className='flex flex-col items-center justify-center py-32'>
      <motion.div
        className="p-6 max-w-3xl mx-auto bg-[--foreground]  rounded-lg shadow-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Política de Privacidad
        </motion.h1>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestros servicios.
        </motion.p>

        <h2 className="text-xl font-semibold mt-4">1. Información Recopilada</h2>
        <p>
          Recopilamos información personal que nos proporciona directamente, como su nombre, correo electrónico y detalles del proyecto cuando se comunica con nosotros.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Uso de la Información</h2>
        <p>
          Utilizamos su información personal únicamente para responder a sus consultas, ofrecerle nuestros servicios y mejorar la calidad de nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Protección de Datos</h2>
        <p>
          Tomamos medidas razonables para proteger su información personal de accesos no autorizados, uso indebido o divulgación.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Compartir Información</h2>
        <p>
          No compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar los servicios solicitados o cuando la ley lo requiera.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Cookies</h2>
        <p>
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede desactivar las cookies a través de la configuración de su navegador.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Cambios en la Política</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán efectivos una vez publicados en nuestro sitio web.
        </p>

        <h2 className="text-xl font-semibold mt-4">7. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta política de privacidad, puede ponerse en contacto con nosotros a través de nuestro correo electrónico.
        </p>
      </motion.div>
    </section>
  );
};

export default Policy;
