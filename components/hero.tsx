import React from 'react';
import Image from 'next/image';
import WorkTogetherBtn from './ui/WorkTogetherBtn';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="flex relative w-full h-screen items-center">
      <div className="relative w-full h-screen">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }} 
          className="absolute inset-0 bg-black z-10"
        ></motion.div>

        {/* Imagen de fondo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.1 }}
        >
          <Image
            src="/img/CVII/1.webp"
            alt="background image adma real estate photography"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="top-0 left-0 w-full h-full"
          />
        </motion.div>

        {/* Contenido del hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8"
        >
          <div className="text-center text-[--tertiary] w-full md:w-1/2">
          <div className=' items-center pt-0'>
            <Image
              src="/logo-transparente.png"
              alt="ADMA Real Estate Photography Logo"
              width={600}
              height={200}
             
              className="inline-block "
            />
          </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-lime-300">
              Capturamos la Esencia de tu Propiedad
            </h1>
            <p className="mt-4 text-md sm:text-lg md:text-xl pt-4 pb-4 w-full sm:w-2/3 md:w-1/2 mx-auto">
              Fotos y videos profesionales para maximizar el valor de tu propiedad
            </p>
            <div className="mt-6 flex justify-center">
              <WorkTogetherBtn />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
