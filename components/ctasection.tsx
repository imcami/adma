import { Button } from "@nextui-org/button";
import { ArrowDown } from "lucide-react";
import React from "react";

function Ctasection() {
  return (
    <div className='py-16 pt-14'>
    <div className="container">
        <div className="bg-gradient-to-r text-[--primary] from-lime-800 to-lime-800 rounded-xl m-3 py-8 px-10 text-center relative">
      <h2 className='text-2xl font-serif'>Creemos algo impresionante juntos</h2>
      <p className="text-sm mt-2 py-4 ">
        Estas listo para potencioar tu negocio? Contactanos y hablemos de tus
        como podemos ayudarte.
      </p>
      <Button className='bg-lime-400 text-lime-900 font-semibold inline-flex items-center px-6 h-12 rounded-xl'>
        <span>Contactanos</span>
        <ArrowDown className="size-4"/> 
      </Button>
      </div>
    </div>
    </div>
  );
}

export default Ctasection;
