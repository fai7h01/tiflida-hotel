import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tiflida Hotel</h3>
            <p>{t('footerTagline')}</p>
          </div>
          <div className="footer-section">
            <h3>{t('footerContact')}</h3>
            <p>Ujarma II turn 1</p>
            <p>Tbilisi, Georgia</p>
            <p>{t('contactPhone')}: +995 032 2 77 02 18</p>
            <p>{t('contactEmail')}: info@tiflida.ge</p>
          </div>
          <div className="footer-section">
            <h3>{t('footerFollow')}</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Tiflida Hotel. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
