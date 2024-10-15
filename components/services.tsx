import { Button } from '@nextui-org/button';
import Image from 'next/image';
import React from 'react';

const Images = [
  {
    id: 1,
    title: 'Fotografía de Real Estate',
    description:
      'Utilizamos equipos y técnicas de última generación para capturar imágenes impresionantes y de alta calidad que resaltan el carácter y el encanto de su propiedad. Mejoramos y editamos meticulosamente cada imagen para asegurar que los colores resalten, los detalles brillen y el producto final exude profesionalismo.',
    link: '/img/PL/p1.webp',
  },
  {
    id: 2,
    title: 'Videos y fotos con drone',
    description:
      'Nuestros servicios de fotografía y video aéreo brindan una perspectiva única desde arriba, que agrega un toque de lujo e interés a tus anuncios, al tiempo que muestra la proximidad a características geográficas importantes como la playa y el océano.',
    link: '/img/pile.png',
  },
  {
    id: 4,
    title: 'Creación de página web Real Estate',
    description: 'Creación de una página web para real estate.',
    link: '/img/website.webp',
  },
];

function Services() {
  return (
    <div className='flex flex-col gap-16 items-center w-full'>
      <p className='text-sm font-serif font-light text-yellow-200 text-clip bg-slate-700 shadow-2xl rounded-xl px-4 py-2'>
        ¡Vende más rápido!
      </p>

      <h1 className='text-4xl font-semibold text-center'>
        Tu satisfacción es nuestra prioridad
      </h1>

      <p className='text-xl text-center text-gray-700 sm:max-w-3xl'>
        Incrementamos el valor de tus propiedades enfocándonos en cada detalle. 
        El cliente podrá visualizar su futuro hogar o negocio.
      </p>

      <div className='w-full px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {Images.map((image) => (
            <div 
              key={image.id} 
              className='flex flex-col justify-between rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out h-full bg-white'
            >
              <div className='relative h-64 w-full'>
                <Image
                  src={image.link}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div className='p-6 flex-1'>
                <h2 className='font-semibold text-xl mb-3 font-sans text-gray-800'>{image.title}</h2>
                <p className='text-gray-700 text-lg font-sans leading-relaxed'>{image.description}</p>
              </div>
              <div className='p-6 flex justify-end mt-auto'>
                <Button className='bg-[--tertiary] hover:bg-[--secondary] hover:text-[--foreground] font-sans hover:border-2 font-bold py-2 px-6 rounded-xl'>
                  Cotizar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
