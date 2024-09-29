"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/navbar";
import WorkTogetherBtn  from "../components/ui/WorkTogetherBtn";
import Marquee from "@/components/ui/Marquee";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="w-full border-gray-300 my-2"></div>

      {/* Main */}
      <main className="flex flex-col gap-16 items-center sm:items-start w-full">
        {/* Sección de Inicio */}
        <section id="inicio" className="w-full flex flex-col items-center">
          <h1 className="text-4xl text-center m-3 p-3 font-light">
            Real Estate Photography
          </h1>
          <p className="text-justify text-xl m-3 p-3 font-light w-full sm:max-w-3xl">
            Capturar la esencia de una propiedad va más allá de una simple
            cámara; requiere un ojo artístico y atención al detalle. Nuestros
            servicios de fotografía inmobiliaria destacan lo mejor de tu
            propiedad, ayudando a los compradores a imaginar su hogar ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div>
               <WorkTogetherBtn/>
            </div>
          
            <Button
              variant={"secondary"}
              className="border-2 p-3 flex rounded-xl hover:bg-yellow-200 hover:text-black "
            >
              Saber más
            </Button>
          </div>
        </section>
        <div className="w-full border-gray-300 my-20"></div>

        {/* Sección Proyectos */}
        <section id="proyectos" className="flex flex-col items-center gap-8 p-8 bg-gray-50 w-full">
          <div className="w-full">
            <h1 className="text-4xl text-center m-3 p-3 font-light w-full">
              Nuestros Proyectos
            </h1>
            <p className="text-justify text-xl m-3 p-3 font-light w-full sm:max-w-3xl">
              Hemos trabajado con una amplia gama de propiedades en Bávaro,
              Punta Cana y sus alrededores. Desde apartamentos modernos hasta
              villas de lujo, nuestro equipo se adapta a las necesidades de cada
              proyecto.
            </p>
            <Button className="flex items-center bg-yellow-200 text-black rounded-full px-5 py-3 mt-5 shadow-md transition-all hover:bg-yellow-300">
              Ver más proyectos <ArrowRight className="animate-pulse ml-3" />
            </Button>
          </div>
        </section>
        <div className="w-full border-gray-300 my-20"></div>
        <Marquee />
        {/* Sección Nosotros */}
        <section id="nosotros" className="flex flex-col items-center gap-8 p-8 bg-gray-100 w-full">
          <div className="w-full">
            <h1 className="text-4xl text-center m-3 p-3 font-light w-full">
              Nosotros
            </h1>
            <p className="text-justify text-xl m-3 p-3 font-light w-full sm:max-w-3xl">
              Nuestro equipo de fotógrafos inmobiliarios está formado por
              profesionales apasionados por la fotografía y el diseño. Juntos,
              creamos imágenes que cuentan historias y muestran la belleza de
              cada propiedad.
            </p>
            <Button className="flex items-center bg-yellow-200 text-black rounded-full px-5 py-3 mt-5 shadow-md transition-all hover:bg-yellow-300">
              Conoce al equipo <ArrowRight className="animate-pulse ml-3" />
            </Button>
          </div>
        </section>
        <div className="w-full border-gray-300 my-20"></div>

        {/* Sección Contacto */}
        <section id="contacto" className="flex flex-col items-center gap-8 p-8 bg-gray-50 w-full">
          <div className="w-full">
            <h1 className="text-4xl text-center m-3 p-3 font-light w-full">
              Contacto
            </h1>
            <p className="text-justify text-xl m-3 p-3 font-light w-full sm:max-w-3xl">
              ¿Listo para llevar tus fotos inmobiliarias al siguiente nivel?
              Contáctanos para reservar una sesión de fotos o para obtener más
              información sobre nuestros servicios.
            </p>
            <Button className="flex items-center bg-yellow-200 text-black rounded-full px-5 py-3 mt-5 shadow-md transition-all hover:bg-yellow-300">
              Contáctanos <ArrowRight className="animate-pulse ml-3" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex gap-6 text-sm flex-wrap items-center justify-center w-full">
        <div>
          <p className="text-center text-gray-500 font-light">
            &copy; {new Date().getFullYear()} ADMA | Todos los derechos
            reservados
          </p>
        </div>
        <div>
          <a
            href="#"
            className="text-center text-gray-500 font-light hover:text-black"
          >
            Política de privacidad
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-center text-gray-500 font-light hover:text-black"
          >
            Términos y condiciones
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-center text-gray-500 font-light hover:text-black"
          >
            Contacto
          </a>
        </div>
        <div>
          <p className="text-gray-500 font-light">Hecho por Lo Nero Camila</p>
        </div>
      </footer>
    </div>
  );
}
