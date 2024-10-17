import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./button";

const Example = () => {
  return (
    <div className="bg-neutral-200 ">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const target = targetRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSticky(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
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
    setSelectedCardIndex((prev) =>
      prev !== null && prev < cards.length - 1 ? prev + 1 : 0
    );
  };

  const handlePreviousImage = () => {
    setSelectedCardIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : cards.length - 1
    );
  };
  const scrollCarousel = (direction: "left" | "right"): void => {
    const container = targetRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -container.clientWidth / 2 : container.clientWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  

  return (
    <>
<section ref={targetRef} className="relative h-[100vh] bg-[--secondary]">
  <div
    className={`sticky top-0 flex  h-screen items-center overflow-x-hidden transition-all duration-300 ${
      isSticky ? "bg-[--secondary]" : ""
    }`}
  >
    <Button
      onClick={() => scrollCarousel("left")}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black bg-opacity-50 rounded-lg hover:bg-gray-400 w-16 h-16 m-6" // Aumento del margen
    >
      <ChevronLeft size={32} className="text-white" />
    </Button>

    <div className="flex gap-2 overflow-hidden relative w-full">
      {cards.map((card, index) => (
        <Card card={card} key={card.id} onClick={() => handleImageClick(index)} />
      ))}
    </div>

    <Button
      onClick={() => scrollCarousel("right")}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black bg-opacity-50 rounded-lg hover:bg-gray-400 w-16 h-16 m-6" // Aumento del margen
    >
      <ChevronRight size={32} />
    </Button>
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
      currentIndex={selectedCardIndex}
    />
    
      )}
    </>
  );
};

const Card = ({ card, onClick }: { card: CardType; onClick: () => void }) => {
  return (
    <div
      className="group relative w-[980vw] hover:scale sm:w-[450px] mt-32  bg-lime-900 cursor-pointer"
      onClick={onClick}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[60vw] sm:h-[450px]"
      ></div>

      <div className="p-4">
        <p className="text-2xl sm:text-4xl font-black uppercase text-[--secondary]">
          {card.title}
        </p>
        <p className="text-md sm:text-lg text-[--secondary]">
          {card.description}
        </p>
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
  currentIndex, 
}: {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title: string;
  description: string;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number; 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-full mx-auto w-[70vh] sm:w-auto">
        <button
          className="absolute top-2 right-9 text-black text-semibold text-4xl z-10"
          onClick={onClose}
        >
          &times;
        </button>

        <Image
          src={imageUrl ?? "/img/PL/p6.webp"}
          layout="responsive"
          width={3200}
          height={2000}
          alt={title}
          className="w-full h-auto object-cover"
        />

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          <p className="text-lg text-black">{description}</p>
          <p className="text-lg text-black">{currentIndex + 1} / {cards.length}</p>
        </div>

        <div className="absolute inset-y-0 flex justify-between items-center w-full  px-8">
          <button
            onClick={onPrevious}
            className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
          >
            <ChevronLeft size={34} />
          </button>
          <button
            onClick={onNext}
            className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
          >
            <ChevronRight size={34} />
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
    description:
      "Nos dedicamos a pensar las fotos en base de la experiencia del usuario.",
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
