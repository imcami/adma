import React from 'react';
import Image from 'next/image';
import WorkTogetherBtn from './ui/WorkTogetherBtn';
function Hero() {
  return (
<section className="flex relative w-full h-screen items-center">
       <div className="relative w-full h-screen">
       <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
       <Image
         src="/img/coralvillageII/1.jpg"
         alt="background image adma real estate photography"
         layout="fill"
         objectFit="cover"
         quality={100}
         className="top-0 left-0 w-full h-full"
       />
       <div className="absolute inset-0 z-20 flex items-center justify-center">
         <div className="text-center text-[--tertiary] ">
           <h1 className="text-6xl font-semibold text-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-lime-500">Capturamos la Esencia de tu Propiedad</h1>
           <p className="mt-4 text-xl pt-4 pb-4">Fotos y videos profesionales para maximizar el valor de tu propiedad</p>
           <div className="mt-6  flex justify-center">
             <WorkTogetherBtn />
           </div>
         </div>
       </div>
     </div>
    </section>
  );
}

export default Hero;
