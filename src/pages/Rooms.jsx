import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';
import './Rooms.css';

function Rooms() {
  const { t } = useLanguage();
  
  const rooms = [
    {
      name: t('roomsDeluxe'),
      description: t('roomsDeluxeDesc'),
      features: t('roomsFeatures.deluxe', { returnObjects: true }) || ['King-size bed', 'City view', 'Free WiFi', 'Mini bar', 'Work desk'],
      price: '$150/night',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          alt: 'Deluxe Room',
          caption: 'Deluxe Room with modern amenities'
        },
        {
          url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
          alt: 'Deluxe Room bathroom',
          caption: 'Elegant bathroom in Deluxe Room'
        }
      ]
    },
    {
      name: t('roomsExecutive'),
      description: t('roomsExecutiveDesc'),
      features: t('roomsFeatures.executive', { returnObjects: true }),
      price: '$250/night',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          alt: 'Executive Suite',
          caption: 'Executive Suite living area'
        },
        {
          url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
          alt: 'Executive Suite bedroom',
          caption: 'Spacious bedroom in Executive Suite'
        }
      ]
    },
    {
      name: t('roomsPresidential'),
      description: t('roomsPresidentialDesc'),
      features: t('roomsFeatures.presidential', { returnObjects: true }),
      price: '$500/night',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1595576508898-0a2c81e8e8b3?w=800&h=600&fit=crop',
          alt: 'Presidential Suite',
          caption: 'Luxurious Presidential Suite'
        },
        {
          url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
          alt: 'Presidential Suite balcony',
          caption: 'Private balcony with panoramic views'
        }
      ]
    },
    {
      name: t('roomsFamily'),
      description: t('roomsFamilyDesc'),
      features: t('roomsFeatures.family', { returnObjects: true }),
      price: '$200/night',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          alt: 'Family Room',
          caption: 'Family Room with multiple beds'
        },
        {
          url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          alt: 'Family Room area',
          caption: 'Spacious family area'
        }
      ]
    }
  ];

  const allRoomImages = rooms.flatMap((room, roomIndex) =>
    room.images.map((img, imgIndex) => ({
      ...img,
      caption: `${room.name} - ${img.caption}`
    }))
  );

  return (
    <div className="rooms">
      <section className="rooms-hero">
        <div className="container">
          <h1>{t('roomsTitle')}</h1>
          <p>{t('roomsSubtitle')}</p>
        </div>
      </section>

      <section className="rooms-content">
        <div className="container">
          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <div key={index} className="room-card">
                {room.images && room.images.length > 0 && (
                  <div className="room-image-container">
                    <img 
                      src={room.images[0].url} 
                      alt={room.name}
                      className="room-card-image"
                    />
                  </div>
                )}
                <div className="room-card-content">
                  <div className="room-header">
                    <h2>{room.name}</h2>
                    <span className="room-price">{room.price}</span>
                  </div>
                  <p className="room-description">{room.description}</p>
                  <ul className="room-features">
                    {room.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a href="https://booking.example.com" target="_blank" rel="noopener noreferrer" className="room-button">{t('roomsBookNow')}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rooms-gallery-section">
        <div className="container">
          <h2>{t('roomsGallery')}</h2>
          <p className="gallery-description">{t('roomsGalleryDesc')}</p>
          <Carousel images={allRoomImages} autoPlay={true} interval={4000} />
        </div>
      </section>

      <section className="amenities">
        <div className="container">
          <h2>{t('roomsAmenities')}</h2>
          <div className="amenities-grid">
            <div className="amenity-item">🏊 Swimming Pool</div>
            <div className="amenity-item">💆 Spa & Wellness</div>
            <div className="amenity-item">🍽️ Fine Dining Restaurant</div>
            <div className="amenity-item">🏋️ Fitness Center</div>
            <div className="amenity-item">🚗 Valet Parking</div>
            <div className="amenity-item">📡 Free WiFi</div>
            <div className="amenity-item">🏢 Business Center</div>
            <div className="amenity-item">🎉 Event Spaces</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rooms;
