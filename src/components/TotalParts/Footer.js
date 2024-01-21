import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// ... импорт остальных компонентов и библиотек

import './Footer.css';

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Закрывать меню, если клик произошел вне области меню
      if (menuOpen && !event.target.closest('.menu-icon')) {
        setMenuOpen(false);
      }
    };

    // Добавить обработчик события при монтировании компонента
    document.addEventListener('click', handleDocumentClick);

    // Удалить обработчик события при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [menuOpen]); // Зависимость, чтобы обновлять эффект при изменении menuOpen
  return (
    <footer className="footer">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="icon-menu" />
        {menuOpen && (
          <div className="menu">
            {/* Ссылки на разделы меню */}
           <div > Категории </div>
           <Link to="/leather" className="nested-list">Кожа</Link>
            <Link to="/chemistry" className="nested-list">Химия</Link>
           <Link to="/tools" className="nested-list">Инструменты и аксессуары</Link>
            
            <Link to="/special-offers">Акции</Link>
            <Link to="/partners">Партнерам</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/delivery">Доставка и оплата</Link>
            <Link to="/where-to-buy">Где купить</Link>
          </div>
        )}
        <p>меню</p>
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
    </footer>
  );
};

export default Footer;