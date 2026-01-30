import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const { t, language, changeLanguage } = useLanguage();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Tiflida Hotel</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className={isActive('/') ? 'active' : ''}>{t('navHome')}</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>{t('navAbout')}</Link>
          <Link to="/rooms" className={isActive('/rooms') ? 'active' : ''}>{t('navRooms')}</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>{t('navContact')}</Link>
          <a href="https://booking.example.com" target="_blank" rel="noopener noreferrer" className="booking-button-nav">{t('navBookNow')}</a>
          <div className="language-switcher">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button 
              className={`lang-btn ${language === 'ka' ? 'active' : ''}`}
              onClick={() => changeLanguage('ka')}
            >
              GE
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
