import React, { useState } from 'react';

const images = ['3.png', '3.png', '3.png', '3.png', '3.png'];

const ScrollableImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex max-h-[345px] h-full space-x-5 text-white">
      {/* Left scrollable sidebar */}
      <div className="w-2 bg-[#081817] rounded-lg mr-2 relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
          <div
            className="w-1 bg-[#5DFFF5] rounded-full absolute left-0.5 cursor-pointer"
            style={{ height: '20%', top: `${selectedImage * 20}%` }}
          ></div>
        </div>
      </div>

      <div className="sm:space-x-5 flex max-sm:gap-3 max-sm:flex-col-reverse">
        <div className="flex sm:flex-col overflow-hidden gap-y-3">
          {images.map((image, index) => (
            <div
              className="max-w-[106px] box-sh w-full h-full max-h-[106px] border-2 border-[#5DFFF5] rounded-md bg-[#5DFFF5] cursor-pointer"
              key={image}
              onClick={() => setSelectedImage(index)}
            >
              <img
                className="w-full rounded-md h-full object-cover"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="w-full box-sh max-sm:flex-wrap max-w-[615px] max-sm:h-72 max-h-[345px] border-2 border-[#5DFFF5] rounded-md">
          <img
            className="w-full object-cover h-full rounded-md"
            src="video.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollableImageGallery;
