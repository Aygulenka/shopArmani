import React from 'react';
import './Styles.css'

const Contacts = () => {
  const phoneNumber = '+79252045775';
  const telegramUsername = 'jabrailofficial';
  const mail = '2045775@gmail.com';

  const handleTelegramClick = () => {
    const telegramLink = `https://t.me/${telegramUsername.replace('@', '')}`;
    window.open(telegramLink, '_blank');
  };

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber.replace('+', '')}`;
    window.open(whatsappLink, '_blank');
  };

  const handleEmailClick = () => {
    const emailLink = `mailto:${mail}`;
    window.location.href = emailLink;
  };

  return (
    <div className="content-container">
      <div className= 'block'>
      <h2 className='text-centre' >Контакты</h2>
      <p>Телефон: {phoneNumber}</p>
      <button onClick={handleTelegramClick}>Open in Telegram</button>
      <button onClick={handleWhatsAppClick}>Open in WhatsApp</button>
      <p>Почта: {mail}</p>
      <button onClick={handleEmailClick}>Открыть почту</button>
    </div>
    </div>
  );
}

export default Contacts;
