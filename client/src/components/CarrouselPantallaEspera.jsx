import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    '/assets/img_carrousel_pantalla_espera/img1.jpg', 
    '/assets/img_carrousel_pantalla_espera/img2.jpg', 
    '/assets/img_carrousel_pantalla_espera/img3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 20000);

    return () => clearInterval(intervalId);
  }, []); 
  return (
      <div className="relative w-full max-w-lg mx-auto h-[80vh] overflow-hidden">

      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-full h-full object-contain rounded-lg"
      />
      
    </div>
  );
};

export default Carousel;
