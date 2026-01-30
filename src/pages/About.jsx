import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

function About() {
  const { t } = useLanguage();
  
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>{t('aboutTitle')}</h1>
          <p>{t('aboutSubtitle')}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>{t('aboutStory')}</h2>
            <p>{t('aboutStoryText1')}</p>
            <p>{t('aboutStoryText2')}</p>
          </div>

          <div className="about-section">
            <h2>{t('aboutMission')}</h2>
            <p>{t('aboutMissionText')}</p>
          </div>

          <div className="about-section">
            <h2>{t('aboutValues')}</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>{t('aboutExcellence')}</h3>
                <p>{t('aboutExcellenceText')}</p>
              </div>
              <div className="value-item">
                <h3>{t('aboutHospitality')}</h3>
                <p>{t('aboutHospitalityText')}</p>
              </div>
              <div className="value-item">
                <h3>{t('aboutInnovation')}</h3>
                <p>{t('aboutInnovationText')}</p>
              </div>
              <div className="value-item">
                <h3>{t('aboutSustainability')}</h3>
                <p>{t('aboutSustainabilityText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
