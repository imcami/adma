import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const Checklist = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto flex flex-col rounded-xl items-center bg-gradient-to-b from-white to-gray-100 min-h-screen py-8 px-4 md:px-6 sm:px-4 sm:py-6"
      id="checklist"
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center sm:text-3xl">
        Prepara tu Hogar para la Fotografía Inmobiliaria
      </h1>
      <h2 className="text-2xl text-gray-600 mb-12 text-center sm:text-xl">
        Atrae compradores con imágenes impresionantes
      </h2>

      <div className="w-full max-w-4xl sm:max-w-full">
        <h3 className="text-3xl py-8 text-gray-700 border-b border-gray-300 sm:text-2xl">
          Lista de Verificación Pre-Sesión
        </h3>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="exterior"
            className="bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-2xl"
          >
            <AccordionTrigger className="text-xl bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 flex justify-between items-center sm:text-lg">
              <p className="text-gray-700 font-sans">
                ¿Cómo debo preparar el interior de la propiedad?
              </p>
            </AccordionTrigger>
            <AccordionContent className="bg-gray-50 p-6 text-lg sm:text-base">
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>
                  • Despejar el espacio: Retira objetos personales, como fotos
                  familiares y recuerdos, para que los posibles compradores
                  puedan imaginarse viviendo allí.
                </li>
                <li>
                  • Limpiar a fondo: Asegúrate de que todos los espacios estén
                  limpios. Presta especial atención a ventanas, pisos y baños.
                </li>
                <li>
                  • Iluminación: Abre cortinas y persianas para permitir la
                  entrada de luz natural.
                </li>
                <li>
                  • Organización del Mobiliario: Coloca los muebles de manera
                  que fluyan bien y no bloqueen el paso.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="interior"
            className="bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-2xl"
          >
            <AccordionTrigger className="text-xl bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 flex justify-between items-center sm:text-lg">
              <p className="text-gray-700 font-sans">
                ¿Cuál es la mejor manera para preparar el exterior?
              </p>
            </AccordionTrigger>
            <AccordionContent className="bg-gray-50 p-6 text-lg sm:text-base">
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>• Mantén el jardín o área exterior bien cuidado.</li>
                <li>• Corta el césped, recorta arbustos y retira hojas muertas.</li>
                <li>• Asegúrate de que la entrada sea acogedora.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Card className="mt-16 w-full max-w-3xl bg-gradient-to-r from-emerald-800 to-emerald-900 shadow-xl rounded-lg sm:max-w-full">
        <CardTitle className="text-2xl p-6 text-yellow-500 font-semibold sm:text-xl">
          Detalles Finales
        </CardTitle>
        <CardContent className="p-6">
          <ul className="space-y-4 text-lg text-yellow-400 leading-relaxed sm:text-base">
            <li>
              Agrega toallas limpias y bien dobladas en los baños, y asegúrate
              de que la cocina esté ordenada.
            </li>
            <li>Las mascotas deben estar fuera del hogar.</li>
            <li>
              <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                <strong>Revisión Final:</strong> Antes de la sesión, da un último vistazo a cada habitación para asegurarte de que todo esté en su lugar.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default Checklist;
