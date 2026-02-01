import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';
import './Rooms.css';

function Rooms() {
  const { t } = useLanguage();
  
  const rooms = [
    {
      name: t('roomsDouble'),
      description: t('roomsDoubleDesc'),
      features: t('roomsFeatures.double', { returnObjects: true }) || ['Double bed', 'City view', 'Free WiFi', 'Mini bar', 'Work desk', 'Private bathroom'],
      images: [
        {
          url: '/rooms/double/main.png',
          alt: 'Double Room',
          caption: 'Double Room - Main view'
        },
        {
          url: '/rooms/double/ALXR_345-220.jpg',
          alt: 'Double Room',
          caption: 'Double Room - Interior'
        },
        {
          url: '/rooms/double/ALXR_7789-180.png',
          alt: 'Double Room',
          caption: 'Double Room - Additional view'
        }
      ]
    },
    {
      name: t('roomsTwin'),
      description: t('roomsTwinDesc'),
      features: t('roomsFeatures.twin', { returnObjects: true }) || ['Two single beds', 'City view', 'Free WiFi', 'Mini bar', 'Work desk', 'Private bathroom'],
      images: [
        {
          url: '/rooms/twin/main.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room - Main view'
        },
        {
          url: '/rooms/twin/ALXR_345-194.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room - Interior'
        },
        {
          url: '/rooms/twin/ALXR_345-202.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room - Details'
        },
        {
          url: '/rooms/twin/ALXR_345-231.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room - Additional view'
        }
      ]
    },
    {
      name: t('roomsFamily'),
      description: t('roomsFamilyDesc'),
      features: t('roomsFeatures.family', { returnObjects: true }) || ['Multiple beds', 'Family area', 'Extra space', 'Kids amenities', 'Free WiFi', 'Private bathroom'],
      images: [
        {
          url: '/rooms/family/main.jpg',
          alt: 'Family Room',
          caption: 'Family Room - Main view'
        },
        {
          url: '/rooms/family/ALXR_345-191.jpg',
          alt: 'Family Room',
          caption: 'Family Room - Interior view 1'
        },
        {
          url: '/rooms/family/ALXR_345-192.jpg',
          alt: 'Family Room',
          caption: 'Family Room - Interior view 2'
        },
        {
          url: '/rooms/family/ALXR_345-193.jpg',
          alt: 'Family Room',
          caption: 'Family Room - Details'
        },
        {
          url: '/rooms/family/ALXR_345-218.jpg',
          alt: 'Family Room',
          caption: 'Family Room - Additional space'
        },
        {
          url: '/rooms/family/ALXR_345-224.jpg',
          alt: 'Family Room',
          caption: 'Family Room - Comfortable area'
        },
        {
          url: '/rooms/family/ALXR_345-225.jpg',
          alt: 'Family Room',
          caption: 'Family Room - Spacious layout'
        }
      ]
    }
  ];

  // Day photos from rooms
  const allRoomImages = rooms.flatMap((room, roomIndex) =>
    room.images.map((img, imgIndex) => ({
      ...img,
      caption: `${room.name} - ${img.caption}`
    }))
  );

  // Night photos - Family room (room1)
  const nightFamilyImages = [
    {
      url: '/rooms/night/room1/family.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7595.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7598.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7603.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7607.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7608.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7613.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7616.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7619.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7621.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    },
    {
      url: '/rooms/night/room1/0V0A7623.JPG',
      alt: 'Family Room - Night',
      caption: `${t('roomsFamily')} - Night`
    }
  ];

  // Night photos - Double room (room2)
  const nightDoubleImages = [
    {
      url: '/rooms/night/room2/double.JPG',
      alt: 'Double Room - Night',
      caption: `${t('roomsDouble')} - Night`
    },
    {
      url: '/rooms/night/room2/0V0A7625.JPG',
      alt: 'Double Room - Night',
      caption: `${t('roomsDouble')} - Night`
    },
    {
      url: '/rooms/night/room2/0V0A7626.JPG',
      alt: 'Double Room - Night',
      caption: `${t('roomsDouble')} - Night`
    },
    {
      url: '/rooms/night/room2/0V0A7627.JPG',
      alt: 'Double Room - Night',
      caption: `${t('roomsDouble')} - Night`
    },
    {
      url: '/rooms/night/room2/0V0A7633.JPG',
      alt: 'Double Room - Night',
      caption: `${t('roomsDouble')} - Night`
    },
    {
      url: '/rooms/night/room2/0V0A7637.JPG',
      alt: 'Double Room - Night',
      caption: `${t('roomsDouble')} - Night`
    },
    {
      url: '/rooms/night/room2/0V0A7638.JPG',
      alt: 'Double Room - Night',
      caption: `${t('roomsDouble')} - Night`
    }
  ];

  // Day lobby photos (ლობი)
  const dayLobbyImages = [
    { url: '/gallery/day/lobby/ALXR_345-196.jpg', alt: 'Lobby', caption: 'Lobby' },
    { url: '/gallery/day/lobby/ALXR_345-197.jpg', alt: 'Lobby', caption: 'Lobby' },
    { url: '/gallery/day/lobby/ALXR_345-198.jpg', alt: 'Lobby', caption: 'Lobby' },
    { url: '/gallery/day/lobby/ALXR_345-203.jpg', alt: 'Lobby', caption: 'Lobby' },
    { url: '/gallery/day/lobby/ALXR_345-227.jpg', alt: 'Lobby', caption: 'Lobby' },
    { url: '/gallery/day/lobby/ALXR_345-228.jpg', alt: 'Lobby', caption: 'Lobby' },
    { url: '/gallery/day/lobby/ALXR_345-232.jpg', alt: 'Lobby', caption: 'Lobby' },
    { url: '/gallery/day/lobby/DSC02883.jpg', alt: 'Lobby', caption: 'Lobby' }
  ];

  // Day other photos (ფოლი)
  const dayOtherImages = [
    { url: '/gallery/day/other/ALXR_345-195.jpg', alt: 'Hotel', caption: 'Hotel' },
    { url: '/gallery/day/other/ALXR_345-199.jpg', alt: 'Hotel', caption: 'Hotel' }
  ];

  // Night facade photos
  const nightFacadeImages = [
    { url: '/gallery/night/facade/0V0A7653.JPG', alt: 'Facade - Night', caption: 'Facade - Night' },
    { url: '/gallery/night/facade/0V0A7654.JPG', alt: 'Facade - Night', caption: 'Facade - Night' },
    { url: '/gallery/night/facade/0V0A7655.JPG', alt: 'Facade - Night', caption: 'Facade - Night' },
    { url: '/gallery/night/facade/0V0A7663.JPG', alt: 'Facade - Night', caption: 'Facade - Night' },
    { url: '/gallery/night/facade/ALXR_345-205.jpg', alt: 'Facade - Night', caption: 'Facade - Night' }
  ];

  // Night hall photos
  const nightHallImages = [
    { url: '/gallery/night/hall/0V0A7578.JPG', alt: 'Hall - Night', caption: 'Hall - Night' },
    { url: '/gallery/night/hall/0V0A7582.JPG', alt: 'Hall - Night', caption: 'Hall - Night' }
  ];

  // Night lobby photos
  const nightLobbyImages = [
    { url: '/gallery/night/lobby/0V0A7499.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7511.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7515.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7522.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7533.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7539.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7541.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7543.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7544.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7556.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/0V0A7562.JPG', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/ALXR_345-188.jpg', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/ALXR_345-214.jpg', alt: 'Lobby - Night', caption: 'Lobby - Night' },
    { url: '/gallery/night/lobby/ALXR_7789-114.png', alt: 'Lobby - Night', caption: 'Lobby - Night' }
  ];

  // Combine all images for gallery
  const allGalleryImagesRaw = [
    ...allRoomImages, 
    ...nightFamilyImages, 
    ...nightDoubleImages,
    ...dayLobbyImages,
    ...dayOtherImages,
    ...nightFacadeImages,
    ...nightHallImages,
    ...nightLobbyImages
  ];

  // Remove duplicates based on URL and filename (case-insensitive)
  const seenUrls = new Set();
  const seenFilenames = new Set();
  const allGalleryImages = allGalleryImagesRaw.filter((img) => {
    // Normalize URL to lowercase for case-insensitive comparison
    const normalizedUrl = img.url.toLowerCase().replace(/\/+/g, '/');
    
    // Extract filename from URL
    const filename = normalizedUrl.split('/').pop().toLowerCase();
    
    // Check if we've seen this exact URL before
    if (seenUrls.has(normalizedUrl)) {
      return false; // Duplicate URL, skip it
    }
    
    // Check if we've seen this filename before (same image in different folder)
    if (seenFilenames.has(filename)) {
      return false; // Duplicate filename, skip it (same image in different location)
    }
    
    seenUrls.add(normalizedUrl);
    seenFilenames.add(filename);
    return true; // First occurrence, keep it
  });

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
          <Carousel images={allGalleryImages} autoPlay={true} interval={4000} />
        </div>
      </section>

      <section className="amenities">
        <div className="container">
          <h2>{t('roomsAmenities')}</h2>
          <div className="amenities-grid">
            <div className="amenity-item">🍽️ Fine Dining Restaurant</div>
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
