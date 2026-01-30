import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: t('contactSuccessMessage') || 'Your message has been sent successfully! We will get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || t('contactErrorMessage') || 'Failed to send message. Please try again later.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: t('contactErrorMessage') || 'Failed to send message. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contactTitle')}</h1>
          <p>{t('contactSubtitle')}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{t('contactGetInTouch')}</h2>
              <p>{t('contactMessage')}</p>
              
              <div className="info-item">
                <h3>📍 {t('contactAddress')}</h3>
                <p>123 Hotel Street<br />City, Country 12345</p>
              </div>

              <div className="info-item">
                <h3>📞 {t('contactPhone')}</h3>
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="info-item">
                <h3>✉️ {t('contactEmail')}</h3>
                <p>info@tiflidahotel.com</p>
              </div>

              <div className="info-item">
                <h3>🕒 {t('contactHours')}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{t('contactHoursText')}</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>{t('contactSendMessage')}</h2>
              {submitStatus.type && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contactName')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contactEmail')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t('contactSubject')}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('contactMessageField')}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (t('contactSending') || 'Sending...') : t('contactSend')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>{t('contactFindUs')}</h2>
          <p className="map-description">{t('contactFindUsDesc')}</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576678!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
