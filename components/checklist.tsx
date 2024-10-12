import React from "react";
import { Button } from "./ui/button";
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
      className="w-full top-0 flex justify-center flex-col items-center bg-[--tertiary] bg-opacity-90 backdrop-blur-md h-[90rem]"
      id="checklist"
    >
      <h1 className="text-4xl font-semibold text-shadow-xl top-0">
        Prepara tu Hogar para la Fotografía Inmobiliaria
      </h1>
      <h1 className="text-2xl">
        Atrae compradores con imágenes impresionantes
      </h1>

      <div className="">
        <h2 className="text-xl py-12">Lista de Verificación Pre-Sesión</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="exterior">
            <AccordionTrigger className=" bg-white text-xl ">
              <p className="text-black  items-center flex justify-center">
                Exterior
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className='text-lg'>Retira vehículos de la entrada.</li>
                <li className='text-lg'>Limpia las ventanas.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="interior">
            <AccordionTrigger className=" bg-white text-xl ">
              <p className="text-black  items-center flex justify-center">
                Interior
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className='text-lg'>Reemplaza bombillas fundidas.</li>
                <li className='text-lg'>Elimina pertenencias personales.</li>
                {/* Agregar más puntos */}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Secciones adicionales para Cocina y Baños */}
        </Accordion>
      </div>

      <Card className="mt-32 bg-[--secondary]">
        <CardTitle className="text-lg flex ml-6 ">
          Mejores Prácticas a Considerar
        </CardTitle>
        <CardContent>
          <ul >
            <li className='text-xl'>Se recomienda un recorrido con el fotógrafo.</li>
            <li className='text-xl'>Las mascotas deben estar fuera del hogar.</li>
          </ul>
        </CardContent>
      </Card>
      <div className="pt-12">
        <Button
          className="font-sans pt-3 h-12 px-6 items-center"
          variant="default"
        >
          ¡Contáctanos para Consejos de Estilismo Expertos!
        </Button>
      </div>
    </section>
  );
};

export default Checklist;
