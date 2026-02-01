import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';
import './Rooms.css';

function Rooms() {
  const { t } = useLanguage();
  
  const rooms = [
    {
      name: t('roomsDouble'),
      description: t('roomsDoubleDesc'),
      features: Array.isArray(t('roomsFeatures.double', { returnObjects: true })) 
        ? t('roomsFeatures.double', { returnObjects: true })
        : ['Double bed', 'City view', 'Free WiFi', 'Mini bar', 'Work desk', 'Private bathroom'],
      images: [
        {
          url: '/rooms/double/main.png',
          alt: 'Double Room',
          caption: 'Double Room'
        },
        {
          url: '/rooms/double/ALXR_345-220.jpg',
          alt: 'Double Room',
          caption: 'Double Room'
        },
        {
          url: '/rooms/double/ALXR_7789-180.png',
          alt: 'Double Room',
          caption: 'Double Room'
        }
      ]
    },
    {
      name: t('roomsTwin'),
      description: t('roomsTwinDesc'),
      features: Array.isArray(t('roomsFeatures.twin', { returnObjects: true })) 
        ? t('roomsFeatures.twin', { returnObjects: true })
        : ['Two single beds', 'City view', 'Free WiFi', 'Mini bar', 'Work desk', 'Private bathroom'],
      images: [
        {
          url: '/rooms/twin/main.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room'
        },
        {
          url: '/rooms/twin/ALXR_345-194.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room'
        },
        {
          url: '/rooms/twin/ALXR_345-202.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room'
        },
        {
          url: '/rooms/twin/ALXR_345-231.jpg',
          alt: 'Twin Room',
          caption: 'Twin Room'
        }
      ]
    },
    {
      name: t('roomsFamily'),
      description: t('roomsFamilyDesc'),
      features: Array.isArray(t('roomsFeatures.family', { returnObjects: true })) 
        ? t('roomsFeatures.family', { returnObjects: true })
        : ['Multiple beds', 'Family area', 'Extra space', 'Kids amenities', 'Free WiFi', 'Private bathroom'],
      images: [
        {
          url: '/rooms/family/main.jpg',
          alt: 'Family Room',
          caption: 'Family Room'
        },
        {
          url: '/rooms/family/ALXR_345-191.jpg',
          alt: 'Family Room',
          caption: 'Family Room'
        },
        {
          url: '/rooms/family/ALXR_345-192.jpg',
          alt: 'Family Room',
          caption: 'Family Room'
        },
        {
          url: '/rooms/family/ALXR_345-193.jpg',
          alt: 'Family Room',
          caption: 'Family Room'
        },
        {
          url: '/rooms/family/ALXR_345-218.jpg',
          alt: 'Family Room',
          caption: 'Family Room'
        },
        {
          url: '/rooms/family/ALXR_345-224.jpg',
          alt: 'Family Room',
          caption: 'Family Room'
        },
        {
          url: '/rooms/family/ALXR_345-225.jpg',
          alt: 'Family Room',
          caption: 'Family Room'
        }
      ]
    }
  ];

  // Day photos from rooms (excluding main images as they're already shown on room cards)
  const allRoomImages = rooms.flatMap((room, roomIndex) =>
    room.images
      .filter((img) => {
        const filename = img.url.split('/').pop().toLowerCase();
        return !filename.startsWith('main.');
      })
      .map((img, imgIndex) => ({
        ...img,
        caption: room.name
      }))
  );

  // Night photos - Family room (room1)
  const nightFamilyImages = [
    {
      url: '/rooms/night/room1/family.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7595.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7598.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7603.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7607.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7608.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7613.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7616.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7619.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    },
    {
      url: '/rooms/night/room1/0V0A7621.JPG',
      alt: 'Family Room - Night',
      caption: t('roomsFamily')
    }
  ];

  // Night photos - Double room (room2)
  const nightDoubleImages = [
    {
      url: '/rooms/night/room2/double.JPG',
      alt: 'Double Room - Night',
      caption: t('roomsDouble')
    },
    {
      url: '/rooms/night/room2/0V0A7625.JPG',
      alt: 'Double Room - Night',
      caption: t('roomsDouble')
    },
    {
      url: '/rooms/night/room2/0V0A7633.JPG',
      alt: 'Double Room - Night',
      caption: t('roomsDouble')
    },
    {
      url: '/rooms/night/room2/0V0A7637.JPG',
      alt: 'Double Room - Night',
      caption: t('roomsDouble')
    },
    {
      url: '/rooms/night/room2/0V0A7638.JPG',
      alt: 'Double Room - Night',
      caption: t('roomsDouble')
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
    { url: '/gallery/day/other/ALXR_345-195.jpg', alt: 'Hotel', caption: '' },
    { url: '/gallery/day/other/ALXR_345-199.jpg', alt: 'Hotel', caption: '' }
  ];

  // Night facade photos
  const nightFacadeImages = [
    { url: '/gallery/night/facade/0V0A7663.JPG', alt: 'Facade - Night', caption: '' },
    { url: '/gallery/night/facade/ALXR_345-205.jpg', alt: 'Facade - Night', caption: '' }
  ];

  // Night hall photos
  const nightHallImages = [
    { url: '/gallery/night/hall/0V0A7582.JPG', alt: 'Hall - Night', caption: 'Hall' }
  ];

  // Night lobby photos
  const nightLobbyImages = [
    { url: '/gallery/night/lobby/0V0A7499.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/0V0A7522.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/0V0A7533.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/0V0A7539.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/0V0A7543.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/0V0A7544.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/0V0A7556.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/0V0A7562.JPG', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/ALXR_345-188.jpg', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/ALXR_345-214.jpg', alt: 'Lobby - Night', caption: 'Lobby' },
    { url: '/gallery/night/lobby/ALXR_7789-114.png', alt: 'Lobby - Night', caption: 'Lobby' }
  ];

  // Helper function to sort images: "0V0" photos first, then others
  const sortImagesByFilename = (images) => {
    return [...images].sort((a, b) => {
      const filenameA = a.url.split('/').pop().toLowerCase();
      const filenameB = b.url.split('/').pop().toLowerCase();
      const is0V0A = filenameA.startsWith('0v0');
      const is0V0B = filenameB.startsWith('0v0');
      
      if (is0V0A && !is0V0B) return -1; // 0V0 photos first
      if (!is0V0A && is0V0B) return 1;
      return filenameA.localeCompare(filenameB); // Alphabetical within same group
    });
  };

  // Sort night photo arrays so "0V0" photos come first
  const sortedNightFamilyImages = sortImagesByFilename(nightFamilyImages);
  const sortedNightDoubleImages = sortImagesByFilename(nightDoubleImages);
  const sortedNightFacadeImages = sortImagesByFilename(nightFacadeImages);
  const sortedNightHallImages = sortImagesByFilename(nightHallImages);
  const sortedNightLobbyImages = sortImagesByFilename(nightLobbyImages);

  // Combine all images for gallery - Night photos first, then day photos
  const allGalleryImagesRaw = [
    ...sortedNightFamilyImages, 
    ...sortedNightDoubleImages,
    ...sortedNightFacadeImages,
    ...sortedNightHallImages,
    ...sortedNightLobbyImages,
    ...allRoomImages, 
    ...dayLobbyImages,
    ...dayOtherImages
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
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      onLoad={(e) => {
                        e.target.style.opacity = '1';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
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
