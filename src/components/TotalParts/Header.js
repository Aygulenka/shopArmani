import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../photo/logo.jpg'
import './Header.css'
import Search from '../Buttons/Search';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Реализуй логику поиска товара по каталогу
    // Можешь использовать состояние или вызвать функцию для поиска на сервере
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
        {/* <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
        <Search />
      </div>
    </header>
  );
}

export default Header;
