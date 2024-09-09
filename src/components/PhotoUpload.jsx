import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

export default function PhotoUpload() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const totalPhotos = 4;

  const nextPhoto = () => {
    setCurrentPhoto(prevIndex => (prevIndex + 1) % totalPhotos);
  };

  const prevPhoto = () => {
    setCurrentPhoto(prevIndex => (prevIndex - 1 + totalPhotos) % totalPhotos);
  };

  return (
    <div className="bg-[#17302E] box-sh py-2 px-4 border border-[#3C7D77] space-y-1 text-white rounded-lg shadow-2xl md:max-w-md mx-auto">
      <div className="flex justify-between items-center w-full">
        <p className="text-[9px] font-medium">photovalorant.png</p>
        <X className="w-3 h-3 cursor-pointer" />
      </div>
      <div className="relative">
        <div className="rounded-lg overflow-hidden">
          <img
            src="sl.png"
            alt="Avatar"
            className="w-full max-h-[223px] h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-black bg-opacity-50 rounded-full px-3 py-1">
          <ChevronLeft
            className="text-white cursor-pointer"
            onClick={prevPhoto}
          />
          <span className="text-white mx-2">{currentPhoto + 1}</span>
          <ChevronRight
            className="text-white cursor-pointer"
            onClick={nextPhoto}
          />
        </div>
      </div>
      <div className="flex justify-center space-x-2 pt-2">
        {[...Array(totalPhotos)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-12 rounded ${
              index === currentPhoto ? 'bg-[#75FFF6]' : 'bg-[#091312]'
            }`}
          />
        ))}
      </div>
      <p className="text-[#75FFF6] text-center mt-2 text-[12px] font-medium">
        минимум {totalPhotos} фото
      </p>
    </div>
  );
}
