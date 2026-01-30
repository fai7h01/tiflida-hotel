import { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel({ images, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.length > 1 && (
          <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>
            ‹
          </button>
        )}
        
        <div className="carousel-slide">
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
          {images[currentIndex].caption && (
            <div className="carousel-caption">
              <p>{images[currentIndex].caption}</p>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <button className="carousel-button carousel-button-next" onClick={goToNext}>
            ›
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
