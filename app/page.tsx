"use client";
import { useState, useEffect } from "react";
import Loader from "../components/ui/loader";
import Navbar from "../components/navbar";
import ContactForm from "@/components/ContactForm";
import Services from "@/components/services";
import Reviews from "../components/reviews";
import Ctasection from "@/components/ctasection";
import Slider from "../components/ui/homeSlider";
import Hero from "@/components/hero";
import Checklist from "@/components/checklist";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={scrolled ? "scrolled-class" : ""}>
      {loading ? (
        <Loader />
      ) : (
        <>
        

          {/* Sección de inicio */}
          <main className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            <Hero />
          </main>

          {/* Sección Slider */}
          <section className="w-full flex flex-col items-center justify-center min-h-screen ">
            <Slider />
          </section>

          {/* Sección Servicios */}
          <section id="servicios" className="flex flex-col items-center justify-center py-20">
            <Services />
          </section>

          {/* Sección Checklist */}
          <section className="w-full flex flex-col items-center justify-center min-h-screen ">
            <Checklist />
          </section>

          <div className="w-full border-gray-300 my-20"></div>

          <section id="nosotros" className="flex flex-col items-center justify-center ">
            <Ctasection />
          </section>
          <section >
            <Reviews />
          </section>

          <section id="contacto" className="flex flex-col items-center ">
            <div className="w-full">
              <ContactForm />
            </div>
          </section>
          <a
            href="https://wa.me/8495153010?text=Hola%20quiero%20recibir%20mas%20información%20sobre%20sesiones%20de%20fotos%20para%20una%20propiedad%20%20Hello!%20I%20would%20like%20to%20receive%20more%20information%20about%20photoshoots%20for%20a%20property"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-12 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 backdrop-blur-md bg-opacity-80 transition-colors duration-300 z-[9999]"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp style={{ fontSize: "52px" }} />
          </a>


          <footer className="flex gap-6 text-sm flex-wrap items-center justify-center w-full mb-12">
            <div>
              <Link
                href="/policy"
                className="text-center text-gray-500 font-light hover:text-black"
              >
                Política de privacidad
              </Link>
            </div>
            <div>
              <Link
                href="/terms"
                className="text-center text-gray-500 font-light hover:text-black"
              >
                Términos y condiciones 
              </Link>
            </div>
            <div>
              <p className="text-center text-gray-500 font-light">
                ADMA {new Date().getFullYear()} &copy; | Todos los derechos
                reservados
              </p>
            </div>
          
            <div>
              <p className="text-gray-500 font-light">Hecho por Lo Nero Camila</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
