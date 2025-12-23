import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Aseguramos que siempre haya al menos 5 espacios para el grid
  const displayImages = [...images];
  while (displayImages.length < 5) {
    displayImages.push(images[0] || '/placeholder.jpg');
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative group">
        {/* Main Image */}
        <div className="md:col-span-2 md:row-span-2 h-full cursor-pointer relative" onClick={() => { setSelectedImage(0); setIsOpen(true); }}>
          <img src={displayImages[0]} alt="Vista principal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
        </div>

        {/* Secondary Images */}
        <div className="hidden md:block h-full cursor-pointer relative" onClick={() => { setSelectedImage(1); setIsOpen(true); }}>
          <img src={displayImages[1]} alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="hidden md:block h-full cursor-pointer relative" onClick={() => { setSelectedImage(2); setIsOpen(true); }}>
          <img src={displayImages[2]} alt="Detalle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          <div className="absolute top-0 right-0 p-2 bg-brand-dark/80 text-white rounded-bl-lg backdrop-blur-sm">
            <Maximize2 size={16} />
          </div>
        </div>
        <div className="hidden md:block h-full cursor-pointer relative" onClick={() => { setSelectedImage(3); setIsOpen(true); }}>
          <img src={displayImages[3]} alt="Habitación" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="hidden md:block h-full cursor-pointer relative" onClick={() => { setSelectedImage(4); setIsOpen(true); }}>
          <img src={displayImages[4]} alt="Exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          {images.length > 5 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-medium text-lg backdrop-blur-[2px]">
              +{images.length - 5} más
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-brand-dark hover:bg-slate-50 transition-colors flex items-center gap-2"
        >
          <Maximize2 size={16} />
          Ver todas las fotos
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            >
              <X size={32} />
            </button>

            <div className="w-full max-w-6xl max-h-[90vh] flex flex-col items-center">
              <img 
                src={images[selectedImage]} 
                alt={`Imagen ${selectedImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              <div className="mt-6 flex gap-2 overflow-x-auto max-w-full pb-2 px-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
