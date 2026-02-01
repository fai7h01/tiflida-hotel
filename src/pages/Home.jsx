import { useLanguage } from '../contexts/LanguageContext';
import './Home.css';

function Home() {
  const { t } = useLanguage();
  
  const hotelSections = [
    {
      image: '/reception.jpg',
      alt: 'Hotel reception',
      title: t('homeReception'),
      text: t('homeReceptionText'),
      reverse: false
    },
    {
      image: '/lobby.jpg',
      alt: 'Luxury hotel lobby',
      title: t('homeLobby'),
      text: t('homeLobbyText'),
      reverse: true
    },
    {
      image: '/dining2.jpg',
      alt: 'Hotel restaurant',
      title: t('homeDining'),
      text: t('homeDiningText'),
      reverse: false
    },
    {
      image: '/cozy.jpg',
      alt: 'Cozy place for guests',
      title: t('homeCozy'),
      text: t('homeCozyText'),
      reverse: true
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{t('homeWelcome')}</h1>
          <p>{t('homeSubtitle')}</p>
          <div className="hero-buttons">
            <a href="#features" className="cta-button">{t('homeExplore')}</a>
            <a href="https://booking.example.com" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-booking">{t('homeBookNow')}</a>
          </div>
        </div>
      </section>

      <section className="image-text-sections">
        {hotelSections.map((section, index) => (
          <div key={index} className={`image-text-section ${section.reverse ? 'reverse' : ''}`}>
            <div className="container">
              <div className="image-text-content">
                <div className="image-text-image">
                  <img 
                    src={section.image} 
                    alt={section.alt} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="image-text-text">
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>{t('homeWhyChoose')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏨</div>
              <h3>{t('homeLuxuriousRooms')}</h3>
              <p>{t('homeLuxuriousRoomsText')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>{t('homeFineDining')}</h3>
              <p>{t('homeFineDiningText')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏊</div>
              <h3>{t('homeRecreationFeature')}</h3>
              <p>{t('homeRecreationFeatureText')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>{t('homePrimeLocation')}</h3>
              <p>{t('homePrimeLocationText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <h2>{t('homeTestimonials')}</h2>
          <div className="testimonial-content">
            <p className="testimonial-text">
              {t('homeTestimonialText')}
            </p>
            <p className="testimonial-author">{t('homeTestimonialAuthor')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
