import React from 'react';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

const Contacts = {
  phoneNumber,
  handleTelegramClick,
  handleWhatsAppClick,
  handleEmailClick,
  mail
};

export default Contacts;
