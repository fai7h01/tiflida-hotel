import { useState } from 'react';
import './ImageGallery.css';

function ImageGallery({ images, columns = 3 }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return null;
  }

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="image-gallery" style={{ '--columns': columns }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img
              src={image.url}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="gallery-image"
            />
            {image.caption && (
              <div className="gallery-caption">{image.caption}</div>
            )}
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-nav-prev" onClick={goToPrevious}>
              ‹
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt || `Image ${selectedImage + 1}`}
              className="modal-image"
            />
            <button className="modal-nav modal-nav-next" onClick={goToNext}>
              ›
            </button>
            {images[selectedImage].caption && (
              <div className="modal-caption">
                {images[selectedImage].caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
