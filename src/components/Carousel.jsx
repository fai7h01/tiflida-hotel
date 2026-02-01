import { useState, useEffect, useRef } from 'react';
import './Carousel.css';

function Carousel({ images, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const imagesLengthRef = useRef(images?.length || 0);

  // Update ref when images length changes
  useEffect(() => {
    imagesLengthRef.current = images?.length || 0;
  }, [images?.length]);

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || imagesLengthRef.current <= 1 || isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLengthRef.current);
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoPlay, interval, isPaused]);

  // Preload next and previous images for smoother transitions
  useEffect(() => {
    if (imagesLengthRef.current > 1 && images) {
      const length = imagesLengthRef.current;
      
      // Preload next 2 images
      for (let i = 1; i <= 2; i++) {
        const nextIndex = (currentIndex + i) % length;
        if (images[nextIndex]?.url) {
          const img = new Image();
          img.src = images[nextIndex].url;
        }
      }
      
      // Preload previous image
      const prevIndex = (currentIndex - 1 + length) % length;
      if (images[prevIndex]?.url) {
        const prevImg = new Image();
        prevImg.src = images[prevIndex].url;
      }
    }
  }, [currentIndex, images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const length = imagesLengthRef.current;
      return prevIndex === 0 ? length - 1 : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLengthRef.current);
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < imagesLengthRef.current) {
      setCurrentIndex(index);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (!images || images.length === 0) {
    return null;
  }

  const imagesLength = images.length;

  return (
    <div 
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-container">
        {imagesLength > 1 && (
          <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>
            ‹
          </button>
        )}
        
        <div className="carousel-slide">
          <img 
            key={currentIndex}
            src={images[currentIndex]?.url || ''} 
            alt={images[currentIndex]?.alt || `Slide ${currentIndex + 1}`}
            className="carousel-image"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={(e) => {
              console.error('Failed to load image:', images[currentIndex]?.url);
              e.target.style.display = 'none';
            }}
            onLoad={(e) => {
              // Ensure image is displayed after loading
              e.target.style.opacity = '1';
            }}
            style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
          />
          {images[currentIndex]?.caption && (
            <div className="carousel-caption">
              <p>{images[currentIndex].caption}</p>
            </div>
          )}
        </div>

        {imagesLength > 1 && (
          <button className="carousel-button carousel-button-next" onClick={goToNext}>
            ›
          </button>
        )}
      </div>

      {imagesLength > 1 && (
        <div className="carousel-controls">
          {imagesLength <= 10 ? (
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
          ) : (
            <div className="carousel-progress-container">
              <div className="carousel-progress-bar">
                <div 
                  className="carousel-progress-fill" 
                  style={{ width: `${((currentIndex + 1) / imagesLength) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          <div className="carousel-counter">
            {currentIndex + 1} / {imagesLength}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
