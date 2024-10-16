"use client";
import React, { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const contactRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, email, message }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setSuccess(true);
        setError("");
        setName("");
        setLastname("");
        setEmail("");
        setMessage("");
      } else {
        setError("Error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Hubo un problema al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // Aquí se eliminó setInView
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className="min-h-screen mt-0 flex flex-col items-center justify-center mb-32  sm:px-8 lg:px-16 bg-cover bg-center backdrop-blur"
      style={{ backgroundImage: "url('/img/CVII/2.webp')" }}
    >
      <div>
        <SectionHeading>
          <span className="text-4xl"> Contáctanos </span>
        </SectionHeading>
        <div>
          <p className="flex flex-col text-lg sm:flex-row text-justify m-3 p-3 font-light text-md sm:max-w-3xl ">
            Contáctanos en&nbsp;
            <a className="underline" href="mailto:adma.reph@gmail.com">
              adma.reph@gmail.com
            </a>
            &nbsp;o mediante este formulario.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 mt-10 w-full max-w-lg bg-white bg-opacity-90 p-6 rounded-lg shadow-lg"
      >
        <motion.input
          required
          className="h-14 px-4 rounded-lg border border-black w-full focus:outline-lime-600 hover:bg-gray-200 transition duration-300"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
        />

        <motion.input
          required
          className="h-14 px-4 rounded-lg border border-black w-full focus:outline-lime-600 hover:bg-gray-200 transition duration-300"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email: you@email.com"
        />

        <motion.textarea
          required
          maxLength={500}
          className="h-40 p-4 rounded-lg border border-black w-full my-3 focus:outline-lime-600 hover:bg-gray-200 transition duration-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Déjanos tu mensaje y te responderemos a la brevedad"
        />

        <Button
          className="group flex items-center justify-center gap-2 h-[3rem] font-sans text-md  w-[8rem] sm:w-[10rem] bg-lime-900 text-white rounded-full shadow-md transition-all hover:bg-lime-700 focus:scale-110"
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
          <Send className="animate-pulse ml-3 f text-[--secondary] text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-green-600">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Nos pondremos en contacto contigo a la brevedad.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button
                    onClick={() => setSuccess(false)}
                    className="bg-green-500 text-white hover:bg-green-600"
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-red-600">
                  ¡Tu mensaje no ha sido enviado, por favor intenta nuevamente!
                </h3>
                <p className="mt-2 text-sm text-gray-600">{error}</p>
                <div className="mt-4 flex justify-end">
                  <Button
                    onClick={() => setError("")}
                    className="bg-red-500 text-white hover:bg-red-600"
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

export default ContactForm;
