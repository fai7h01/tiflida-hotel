import { useLanguage } from '../contexts/LanguageContext';
import './Booking.css';

function Booking() {
  const { t } = useLanguage();
  
  const handleBooking = (e) => {
    e.preventDefault();
    // In a real application, this would submit to a booking system
    alert('Thank you for your interest! Our booking system will be available soon. Please contact us at info@tiflida.ge or call +995 032 2 77 02 18 to make a reservation.');
  };

  return (
    <div className="booking">
      <section className="booking-hero">
        <div className="container">
          <h1>{t('bookingTitle')}</h1>
          <p>{t('bookingSubtitle')}</p>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          <div className="booking-form-container">
            <h2>{t('bookingReservation')}</h2>
            <form className="booking-form" onSubmit={handleBooking}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkin">{t('bookingCheckin')}</label>
                  <input type="date" id="checkin" name="checkin" required />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout">{t('bookingCheckout')}</label>
                  <input type="date" id="checkout" name="checkout" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guests">{t('bookingGuests')}</label>
                  <select id="guests" name="guests" required>
                    <option value="">{t('bookingGuests')}</option>
                    <option value="1">1 {t('bookingGuests').includes('Guest') ? 'Guest' : 'სტუმარი'}</option>
                    <option value="2">2 {t('bookingGuests').includes('Guest') ? 'Guests' : 'სტუმარი'}</option>
                    <option value="3">3 {t('bookingGuests').includes('Guest') ? 'Guests' : 'სტუმარი'}</option>
                    <option value="4">4 {t('bookingGuests').includes('Guest') ? 'Guests' : 'სტუმარი'}</option>
                    <option value="5+">5+ {t('bookingGuests').includes('Guest') ? 'Guests' : 'სტუმარი'}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="room">{t('bookingRoom')}</label>
                  <select id="room" name="room" required>
                    <option value="">{t('bookingRoom')}</option>
                    <option value="deluxe">{t('roomsDeluxe')} - $150/night</option>
                    <option value="executive">{t('roomsExecutive')} - $250/night</option>
                    <option value="presidential">{t('roomsPresidential')} - $500/night</option>
                    <option value="family">{t('roomsFamily')} - $200/night</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="name">{t('bookingFullName')}</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t('contactEmail')}</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('bookingPhone')}</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="special">{t('bookingSpecial')}</label>
                <textarea id="special" name="special" rows="4" placeholder={t('bookingSpecialPlaceholder')}></textarea>
              </div>

              <button type="submit" className="booking-submit-button">{t('bookingRequest')}</button>
            </form>

            <div className="booking-info">
              <h3>{t('bookingNeedHelp')}</h3>
              <p>{t('bookingHelpText')}</p>
              <p><strong>{t('contactPhone')}:</strong> +995 032 2 77 02 18</p>
              <p><strong>{t('contactEmail')}:</strong> info@tiflida.ge</p>
              <p><strong>{t('bookingHours')}:</strong> {t('bookingHoursText')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
