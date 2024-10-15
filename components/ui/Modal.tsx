import Image from "next/image";
import React from "react";

const Modal = ({ isOpen, onClose, imageUrl }: { isOpen: boolean; onClose: () => void; imageUrl: string | null }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative ">
        <button
          className="absolute top-6 right-2  text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <Image src={imageUrl ?? '' } alt="Modal" className="p-8 max-w-full max-h-screen" />
      </div>
    </div>
  );
};

export default Modal;
