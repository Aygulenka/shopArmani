import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faHeart, faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className='mobile'>
      <div className='phone-icon'>
        <Link to="/contacts"> 
        <FontAwesomeIcon icon={faPhone} className="icon"/> 
        </Link>
        <p>контакты</p>
        </div>
      <div className="profile-icon">
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} className="icon"/>
        </Link>
        <p>профиль</p>
      </div>
      <div className="favorite-icon">
        <Link to="/favorite">
          <FontAwesomeIcon icon={faHeart} className="icon"/>
        </Link>
        <p>избранное</p>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
        </Link>
        <p>корзина</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;