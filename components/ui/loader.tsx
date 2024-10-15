// components/Loader.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa'; 

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <motion.h1
        className="text-6xl font-bold"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ADMA
      </motion.h1>
      <p className="mt-4 text-xl">Estamos cargando imágenes increíbles</p>
      <motion.div
        className="mt-4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <FaCamera size={60} className="text-lime-600" />
      </motion.div>
    </div>
  );
};

export default Loader;
