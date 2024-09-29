"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Contact } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/navbar";
import WorkTogetherBtn from "../components/ui/WorkTogetherBtn";
import Marquee from "@/components/ui/Marquee";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
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
    <div className="mt-3">
      <Navbar />
      <div className="w-full border-gray-300 my-48"></div>

      {/* Main */}
      <main className="flex flex-col gap-16 items-center w-full">
        {/* Sección de Inicio */}
        <section
          id="inicio"
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-6xl text-center m-3 p-3  text-dark-blue">
            Real Estate Photography
          </h1>
          <p className="text-justify text-xl m-3 p-3  text-gray-700 w-full sm:max-w-3xl">
            Capturar la esencia de una propiedad va más allá de una simple
            cámara; requiere un ojo artístico y atención al detalle. Nuestros
            servicios de fotografía inmobiliaria destacan lo mejor de tu
            propiedad, ayudando a los compradores a imaginar su hogar ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div>
              <WorkTogetherBtn />
            </div>

            <Button
              variant={"secondary"}
              className="border-2 border-gray-400 p-3 flex rounded-xl hover:bg-yellow-200 hover:text-black shadow-md transition duration-300"
            >
              Saber más
            </Button>
          </div>
        </section>

        <div className="w-full border-gray-300 my-20"></div>

        {/* Sección Proyectos */}
        <section id="proyectos">
          <div className="w-full text-center">
            <SectionHeading>Proyectos</SectionHeading>
            <p className="text-center text-xl m-3 p-3 font-light w-full sm:max-w-3xl">
              Hemos trabajado con una amplia gama de propiedades en Bávaro,
              Punta Cana y sus alrededores. Desde apartamentos modernos hasta
              villas de lujo, nuestro equipo se adapta a las necesidades de cada
              proyecto.
            </p>
            <Button className="flex justify-center items-center mx-auto bg-yellow-200 text-black rounded-full px-5 py-3 mt-5 shadow-md transition-all hover:bg-yellow-300">
              Ver más proyectos <ArrowRight className="animate-pulse ml-3" />
            </Button>
          </div>
        </section>

        <div className="w-full border-gray-300 my-20"></div>
        {/* <Marquee /> */}
        {/* Sección Nosotros */}

        <section
          id="nosotros"
          className="flex flex-col items-center gap-8 p-8  bg-fuzzy  "
        >
          <div className="w-full">
            <SectionHeading>Nosotros</SectionHeading>

            <p className="flex flex-col text-justify text-xl m-3 p-3 font-light sm:max-w-3xl">
              Somos un equipo de fotógrafos y videógrafos apasionados por la
              fotografía inmobiliaria. Nuestro objetivo es capturar la esencia
              de cada propiedad, resaltando sus mejores características y
              creando una experiencia visual única.
            </p>
            <Button className="flex justify-center items-center mx-auto bg-yellow-200 text-black rounded-full px-5 py-3 mt-5 shadow-md transition-all hover:bg-yellow-300">
              Conoce al equipo <ArrowRight className="animate-pulse ml-3" />
            </Button>
          </div>
        </section>

        <div className="w-full border-gray-300 my-20"></div>

        {/* Sección Contacto */}
        <section id="contacto" className="flex flex-col items-center mb-32 ">
          <div className="w-full">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex gap-6 text-sm flex-wrap items-center justify-center w-full mb-12">
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
