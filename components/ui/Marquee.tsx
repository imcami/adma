import { Sparkles } from "lucide-react";
import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap  bg-gray-300 text-black py-2">
      <div className="animate-marquee inline-block">
        <div className="flex">
          <Sparkles className="text-yellow-300 flex justify-between" />
          <span className="mx-5">Fotografía de Inmuebles</span>
        </div>
        <div className="flex">
          <Sparkles className="text-yellow-300 flex justify-between" />
          <span className="mx-5">Fotografía de Producto</span>
        </div>
        <div className="flex">
          <Sparkles className="text-yellow-300 flex justify-between" />
          <span className="mx-5">Videos con Drone</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
