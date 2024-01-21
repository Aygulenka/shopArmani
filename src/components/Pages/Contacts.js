import React from 'react';
import Contacts from './ContactsInfo';
import './Styles.css';
import '../TotalParts/Contact.css'
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactsPages = () => {
  return (
    <div className="content-container">
      <div className="block">
        <h2 className="text-centre">Контакты</h2>

        <p>Телефон: <a href={`tel:${Contacts.phoneNumber}`}>{Contacts.phoneNumber}</a></p>
        <button onClick={Contacts.handleTelegramClick} className='menu-contact'><FontAwesomeIcon icon={faTelegram} className="icon-telegram" /></button>
        <button onClick={Contacts.handleWhatsAppClick}className='menu-contact'><FontAwesomeIcon icon={faWhatsapp} className="icon-whatsapp"/></button>
<p>Почта: <a href={`mailto:${Contacts.mail}`}>{Contacts.mail}</a></p>
        <button onClick={Contacts.handleEmailClick}>Открыть почту</button>

    </div>
    </div>
  );
};

export default ContactsPages;
