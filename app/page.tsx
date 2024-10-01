"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Contact } from "lucide-react";
import { Button } from "@nextui-org/button";
import Navbar from "../components/navbar";
import WorkTogetherBtn from "../components/ui/WorkTogetherBtn";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  const text = "Framer Motion is a really cool tool".split(" ");
  const [isVisible, setIsVisible] = useState(false);

  // Simular el efecto de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 segundo antes de mostrar el texto

    return () => clearTimeout(timer);
  }, []);
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
    <motion.div className="mt-3">
      <Navbar />
      <div className="w-full border-gray-300 my-48"></div>

      <main className="flex flex-col gap-16 items-center w-full">
        <motion.section
          initial={{ x: "-100%", opacity: 0 }} // Desde la izquierda
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }} // Sale hacia la derecha
          transition={{ duration: 2 }}
          id="inicio"
          className="w-full flex flex-col items-center"
        >
          <motion.h1
            initial={{ y: 0 }} // Estado inicial
            animate={isVisible ? { opacity: 100 } : { opacity: 80 }} // Animación
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-light text-center text-black w-1/2"
          >
            Contrata tu sesión de fotos para vender o alquilar tu propiedad
          </motion.h1>

          <p className="flex justify-center text-justify text-xl mt-8 text-gray-700 w-full sm:max-w-3xl">
            Incrementamos el valor de tus propiedades{" "}
          </p>
          <p className="flex justify-center text-justify text-xl mb-8  text-gray-700 w-full sm:max-w-3xl">
            con fotos y videos profesionales
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div>
              <WorkTogetherBtn />
            </div>

            <Button
              variant="flat"
              className=" p-3 flex rounded-xl hover:bg-yellow-200 hover:text-black hover:shadow-xl shadow-md transition duration-300"
            >
              Saber más
            </Button>
          </div>
        </motion.section>

        <div className="w-full border-gray-300 my-20"></div>

        <motion.section
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1.35 }}
          id="proyectos"
        >
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
        </motion.section>

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
      <a
        href="https://wa.me/8495153010?text=Hola%20quiero%20recibir%20mas%20información%20sobre%20sesiones%20de%20fotos%20para%20una%20propiedad%20%20Hello!%20I%20would%20like%20to%20receive%20more%20information%20about%20photoshoots%20for%20a%20property"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed  bottom-12 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp style={{ fontSize: "52px" }} />
      </a>
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
    </motion.div>
  );
}
