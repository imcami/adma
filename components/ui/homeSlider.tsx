import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Example = () => {
  return (
    <div className="bg-neutral-200 ">
      
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-30%"]);

  const [isSticky, setIsSticky] = useState(false);
  const [stickyDuration, setStickyDuration] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(true);
            setStickyDuration(true);
            setTimeout(() => {
              setStickyDuration(false);
            }, 3000);
          } else {
            setIsSticky(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const handleImageClick = (index: number) => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCardIndex(null);
  };

  const handleNextImage = () => {
    setSelectedCardIndex((prev) => (prev !== null && prev < cards.length - 1 ? prev + 1 : 0));
  };

  const handlePreviousImage = () => {
    setSelectedCardIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : cards.length - 1));
  };

  return (
    <>
      <section ref={targetRef} className="relative h-[100vh] bg-[--secondary]">
        <div className={`sticky top-0 flex h-screen items-center overflow-hidden transition-all duration-300 ${isSticky || stickyDuration ? "bg-[--secondary]" : ""}`}>
          <motion.div style={{ x }} className="flex gap-4 ">
            {cards.map((card, index) => (
              <Card card={card} key={card.id} onClick={() => handleImageClick(index)} />
            ))}
          </motion.div>
        </div>
      </section>

      {isModalOpen && selectedCardIndex !== null && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          imageUrl={cards[selectedCardIndex].url} 
          title={cards[selectedCardIndex].title} 
          description={cards[selectedCardIndex].description}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          totalImages={cards.length}
          currentIndex={selectedCardIndex}
        />
      )}
    </>
  );
};

const Card = ({ card, onClick }: { card: CardType; onClick: () => void }) => {
  return (
    <div className="group relative w-[450px] mt-52 overflow-hidden bg-lime-900 cursor-pointer" onClick={onClick}>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[450px] transition-transform duration-300 group-hover:scale-110"
      ></div>

      <div className="p-4">
        <p className="text-4xl font-black uppercase text-[--secondary]">{card.title}</p>
        <p className="text-lg text-[--secondary]">{card.description}</p>
      </div>
    </div>
  );
};

const Modal = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  onNext,
  onPrevious,
  totalImages,
  currentIndex,
}: {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title: string;
  description: string;
  onNext: () => void;
  onPrevious: () => void;
  totalImages: number;
  currentIndex: number;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 scroll-smooth">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-auto mx-auto">
       
        <button
          className="absolute top-2 right-2 text-black text-xl z-10"
          onClick={onClose}
        >
          &times;
        </button>
        
       
        <Image
          src={imageUrl}
          layout="responsive" 
          width={3200} 
          height={2000} 
          alt={title} 
          className="w-full h-auto object-cover" 
          style={{ maxHeight: '80vh' }} 
        />

        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold text-black">{title}</h2> 
          <p className="text-lg text-black">{description}</p>
        </div>
        
        <div className="absolute inset-y-0 flex justify-between items-center w-full px-4">
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
          >
            {"<"}
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex === totalImages - 1}
            className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

type CardType = {
  url: string;
  title: string;
  description: string; 
  id: number;
};

const cards: CardType[] = [
  {
    url: "/img/CVII/6.webp",
    title: "Beautiful Place",
    description: "A beautiful place to live and relax.",
    id: 1,
  },
  {
    url: "/img/CVI/1.webp",
    title: "Modern Home",
    description: "A sleek and modern home in the city.",
    id: 2,
  },
  {
    url: "/img/PL/p3.webp",
    title: "Perfecto para tu Airbnb",
    description: "Convierte tu propiedad en un Airbnb de lujo",
    id: 3,
  },
  {
    url: "/img/PL/p2.webp",
    title: "Fotos pensadas al detalle",
    description: "Nos dedicamos a pensar las fotos en base de la experiencia del usuario.",
    id: 4,
  },
  {
    url: "/img/CVII/2.webp",
    title: "Interiores",
    description: "Fotografías de interiores de alta calidad",
    id: 5,
  },
  { 
    url: "/img/CVII/1.webp",
    title: "Fotografía de arquitectura",
    description: "A modern kitchen with elegant finishes.",
    id: 6,
  },
];

export default Example; 
