import { Button } from '@nextui-org/button';
import React from 'react';

const Images = [
  {
    id: 1,
    title: 'Fotografía de Real Estate',
    description:
      'Utilizamos equipos y técnicas de última generación para capturar imágenes impresionantes y de alta calidad que resaltan el carácter y el encanto de su propiedad. Mejoramos y editamos meticulosamente cada imagen para asegurar que los colores resalten, los detalles brillen y el producto final exude profesionalismo.',
    link: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: 'Videos y fotos con drone',
    description:
      'Nuestros servicios de fotografía y video aéreo brindan una perspectiva única desde arriba, que agrega un toque de lujo e interés a tus anuncios, al tiempo que muestra la proximidad a características geográficas importantes como la playa y el océano.',
    link: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    title: 'Creación de página web Real Estate',
    description: 'Creación de una página web para mostrar tus propiedades.',
    link: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
  },
];

function Services() {
  return (
    <div className='flex flex-col gap-16 items-center w-full'>
      {/* Mensaje de encabezado */}
      <p className='text-sm font-serif font-light text-yellow-200 text-clip bg-slate-700 shadow-2xl rounded-xl px-4 py-2'>
        ¡Vende más rápido!
      </p>

      {/* Título principal */}
      <h1 className='text-4xl font-semibold text-center'>
        Todo lo que necesitas para vender o alquilar tu propiedad
      </h1>

      {/* Descripción principal */}
      <p className='text-md text-center text-gray-700 sm:max-w-3xl'>
        Incrementamos el valor de tus propiedades enfocándonos en cada detalle. 
        El cliente podrá visualizar su futuro hogar o negocio.
      </p>

      {/* Galería de imágenes */}
      <div className='w-full px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {Images.map((image) => (
            <div key={image.id} className='flex flex-col justify-between rounded overflow-hidden shadow-lg h-full'>
              <img
                src={image.link}
                alt={image.title}
                className='w-full h-64 object-cover'
              />
              <div className='px-6 py-4 flex-1'>
                <div className='font-light font-serif text-xl mb-2'>{image.title}</div>
                <p className='text-gray-700 text-base'>{image.description}</p>
              </div>
              <div className='px-6 py-4 flex justify-end gap-4 mt-auto'>
                <Button className='bg-[--foreground] hover:bg-[--secondary] hover:text-[--foreground] hover:border-2  font-bold py-2 px-4 rounded'>
                  Ejemplos
                </Button>
                <Button className='bg-[--foreground] hover:bg-[--secondary] hover:text-[--foreground] hover:border-2 font-bold py-2 px-4 rounded'>
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
