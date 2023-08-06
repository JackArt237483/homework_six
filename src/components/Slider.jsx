import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} className="slider-image" />
      <div className="slider-buttons">
        <button onClick={goToPrevImage} disabled={currentImageIndex === 0}>
          Назад
        </button>
        <button onClick={goToNextImage} disabled={currentImageIndex === images.length - 1}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default Slider

