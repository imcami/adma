import React from "react";
import SectionHeading from "./SectionHeading";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

function ContactForm() {
  return (
    <div className="mb-22 px-4 sm:px-8 lg:px-16">
      <SectionHeading>Contactanos</SectionHeading>
      <p className="flex flex-col sm:flex-row text-justify m-3 p-3 font-light text-md sm:max-w-3xl">
        Contáctanos en&nbsp;
        <a className="underline" href="mailto:admareph@gmail.com">
          admareph@gmail.com
        </a>
        &nbsp;o mediante este formulario.
      </p>
      <form className="flex flex-col gap-4 mt-10">
        <input
          className="h-14 px-4 rounded-lg border border-black w-full sm:max-w-lg"
          type="email"
          placeholder="Tu correo electrónico"
        />
        <textarea
          className="h-40 p-4 rounded-lg border border-black w-full sm:max-w-lg my-3"
          placeholder="Déjanos tu mensaje y te responderemos a la brevedad"
        />
        <Button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] sm:w-[10rem] bg-yellow-200 text-black rounded-full shadow-md transition-all hover:bg-yellow-300 focus:scale-110 outline-none"
          type="submit"
        >
          Enviar{" "}
          <Send className="animate-pulse ml-3 text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
