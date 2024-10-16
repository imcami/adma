'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const images = [
  {
    id: 1,
    src: '/notfound/1.png',
    alt: 'Image 1 - Not Found - ADMA Real Estate Photography',
  },
  {
    id: 2,
    src: '/notfound/2.png',
    alt: 'Image 2 - Not Found - ADMA Real Estate Photography',
  },
  {
    id: 3,
    src: '/notfound/3.png',
    alt: 'Image 3 - Not Found - ADMA Real Estate Photography',
  },
  {
    id: 4,
    src: '/notfound/4.png',
    alt: 'Image 4 - Not Found - ADMA Real Estate Photography',
  },
  {
    id: 5,
    src: '/notfound/5.png',
    alt: 'Image 5 - Not Found - ADMA Real Estate Photography',
  },
  {
    id: 6,
    src: '/notfound/6.png',
    alt: 'Image 6 - Not Found - ADMA Real Estate Photography',
  }
];

// Define el tipo de los objetos de imagen
interface ImageType {
  id: number;
  src: string;
  alt: string;
}

const Custom404 = () => {
 
  const [randomImage, setRandomImage] = useState<ImageType | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
  <div className='text-center mt-[30vh] flex justify-center flex-col ' >
      <div className="flex justify-center flex-wrap gap-4">
        {randomImage && (
          <div className="flex justify-center">
            <Image
              width={500}
              height={500}
              src={randomImage.src}
              alt={randomImage.alt}
            />
          </div>
        )}
      </div>
     
      <p className="text-xl">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button className="m-10 h-12  text-xl ">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Custom404;
