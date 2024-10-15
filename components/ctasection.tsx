import { Button } from "@nextui-org/button";
import { ArrowDown, BriefcaseBusiness, Minimize, Zap } from "lucide-react";
import React from "react";

interface data {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const data: data[] = [
  {
    id: 1,
    icon: <Zap />,
    title: "Entrega Rápida",
    description:
      "Entendemos que el tiempo es esencial en el mercado inmobiliario. Nuestro flujo de trabajo eficiente garantiza que recibas tus imágenes editadas en un plazo de 48 horas, lo que te permite promocionar y vender tus propiedades rápidamente.",
  },
  {
    id: 2,
    icon: <BriefcaseBusiness />,
    title: "Profesionalismo",
    description:
      "Estamos comprometidos a ofrecer el más alto nivel de profesionalismo y servicio al cliente. Somos puntuales, corteses y atentos a tus necesidades.",
  },
  {
    id: 3,
    icon: <Minimize />,
    title: "Atención al detalle",
    description:
      "Nuestra prioridad es presentar la propiedad de la mejor manera posible, poniendo especial atención a los detalles al capturar las fotografías y durante la edición. Nos esforzamos por resaltar la belleza de la propiedad, manteniendo siempre su esencia y naturalidad.",
  },
];

function Ctasection() {
  return (
    <div className="w-full">
      <div
        className="
          w-full 
          h-[100vh] 
          mx-auto 
          flex 
          flex-col 
          items-center 
          justify-center 
          text-center 
          bg-gradient-to-r 
          from-emerald-800 
          to-emerald-900 
          shadow-lg 
          text-[--primary] 
          relative
          py-16
        "
      >
        <h2 className="text-4xl text-white font-bold">
          ¿Por qué elegir nuestros servicios?
        </h2>
        <p className="text-lg text-gray-300 mt-4 mb-12 max-w-2xl">
          Desbloquea el verdadero potencial de tus anuncios de propiedades con
          nuestros excepcionales servicios de fotografía inmobiliaria.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-6 max-w-6xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="
                bg-white 
                p-6 
                rounded-lg 
                shadow-md 
                transition-all 
                hover:shadow-xl 
                hover:scale-105 
                text-left 
              "
            >
              <div className="mb-4 text-emerald-800 text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ctasection;
