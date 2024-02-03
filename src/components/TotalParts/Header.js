import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart, faBars} from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import logo from '../photo/logo.jpg';
import './Header.css';
import './Contact.css'
import Search from '../Buttons/Search';
import Contacts from '../Pages/ContactsInfo';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Реализуй логику поиска товара по каталогу
    // Можешь использовать состояние или вызвать функцию для поиска на сервере
    console.log(`Searching for: ${searchTerm}`);
  };
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
    <header className="header">
      {/* Компьютерная версия */}

      <div className="header-menu">
<div>
<div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className='compLogo'/>
        </Link>
      </div>
      <div className='contacts'>
      <p >            <Link to="/special-offers" className="customer">  Акции</Link></p>
<p>        <Link to="/contacts" className="customer">  Контакты</Link></p>
<p><Link to="/delivery" className="customer">  Доставка и оплата</Link></p>
<p><Link to="/where-to-buy" className="customer">  Где купить</Link></p>
        <p>Телефон: <a href={`tel:${Contacts.phoneNumber}`}>{Contacts.phoneNumber}</a></p>
        <button onClick={Contacts.handleTelegramClick} className='menu-contact'><FontAwesomeIcon icon={faTelegram} className="icon-telegram" /></button>
        <button onClick={Contacts.handleWhatsAppClick}className='menu-contact'><FontAwesomeIcon icon={faWhatsapp} className="icon-whatsapp"/></button>
        </div>

        <div className='comp-menu'>


        <div className="catalog">
          <button className="menu-button-catalog">
          <FontAwesomeIcon icon={faBars} />
           <span className='faBars'>КАТАЛОГ</span> </button>
          <div className="nested-menu">
            <Link to="/leather" className="nested-list">Кожа</Link>
            <Link to="/chemistry" className="nested-list">Химия</Link>
            <Link to="/tools" className="nested-list">Инструменты и аксессуары</Link>
          </div>
        </div>
        <div className="search">
          {/* <FontAwesomeIcon icon={faSearch} onClick={handleSearch} /> */}
          <Search />
        </div>
        {/* <div className="customer">
          <button className="menu-button">
          <span className='menu-cust'>Покупателям</span></button>
          <div className="nested-menu">
            <Link to="/special-offers">Акции</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/delivery">Доставка и оплата</Link>
            <Link to="/where-to-buy">Где купить</Link>
          </div>
        </div> */}


        <div className="profile">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} className="icon"/>
          </Link>
          {/* <p>профиль</p> */}
        </div>
        <div className="favorites-cart">
          <div className="favorite-icon">
            <Link to="/favorite">
              <FontAwesomeIcon icon={faHeart} className="icon"/>
            </Link>
            {/* <p>избранное</p> */}
          </div>
          </div>
          <div className="cart-icon">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
            </Link>
            {/* <p>корзина</p> */}
          </div>
        </div>
      </div>  
      {/* Мобильная версия */}
      <div className="mobile-menu">
<div className='men-logo'>


     <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
       </div>
       <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="icon-menu" />
        {menuOpen && (
          <div className="menu">
            {/* Ссылки на разделы меню */}
            <div className="catalog">
          <button className="menu-button-catalog">
           <span className='faBars'>Категории</span> </button>
          <div className="nested-menu">
            <Link to="/leather" className="nested-list">Кожа</Link>
            <Link to="/chemistry" className="nested-list">Химия</Link>
            <Link to="/tools" className="nested-list">Инструменты и аксессуары</Link>
          </div>
        </div>
            <Link to="/special-offers" className='menuCl'>Акции</Link>
            <Link to="/partners" className='menuCl'>Партнерам</Link>
            <Link to="/contacts" className='menuCl'>Контакты</Link>
            <Link to="/delivery" className='menuCl'>Доставка и оплата</Link>
            <Link to="/where-to-buy" className='menuCl'>Где купить</Link>
            <Link to="/profile" className='menuCl'>Профиль</Link>
            <Link to="/favorite" className='menuCl'>Избранное</Link>
            <Link to="/cart" className='menuCl'>Корзина</Link>
          </div>
        )}
      </div>
      </div>
      <div className="search">
        {/* <FontAwesomeIcon icon={faSearch} onClick={handleSearch} /> */}

       <Search />
       </div>
</div>
      </div>
    </header>
  );
}

export default Header;

