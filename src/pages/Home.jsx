import { useLanguage } from '../contexts/LanguageContext';
import './Home.css';

function Home() {
  const { t } = useLanguage();
  
  const hotelSections = [
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      alt: 'Hotel exterior',
      title: t('homeArchitecture'),
      text: t('homeArchitectureText'),
      reverse: false
    },
    {
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      alt: 'Luxury hotel lobby',
      title: t('homeLobby'),
      text: t('homeLobbyText'),
      reverse: true
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      alt: 'Hotel restaurant',
      title: t('homeDining'),
      text: t('homeDiningText'),
      reverse: false
    },
    {
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      alt: 'Hotel pool',
      title: t('homeRecreation'),
      text: t('homeRecreationText'),
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
                  <img src={section.image} alt={section.alt} />
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
