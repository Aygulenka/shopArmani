import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { itemInfo } from '../Category/Chemistry/ChemistryItemInfo';
import '../../App.css';

// ... (ваш импорт)

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const resultsContainerRef = useRef(null);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const results = itemInfo.filter((item) =>
      item.content.fullName.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleItemClick = (itemName) => {
    
    navigate(`/layComp/${encodeURIComponent(itemName.toLowerCase())}`);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleClickOutsideResults = (e) => {
    if (resultsContainerRef.current && !resultsContainerRef.current.contains(e.target)) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideResults);

    return () => {
      document.removeEventListener('click', handleClickOutsideResults);
    };
  }, []);
 
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Поиск по полному имени"
        value={searchQuery}
        onChange={handleSearchChange}
        className='search-input'
      />
{searchResults.length > 0 && (
  <ul ref={resultsContainerRef} className="search-results">
    {searchResults.map(({ content }) => (
      <li key={content.itemName} onClick={() => handleItemClick(content.path)}>
        <Link to={`/layComp/${content.path}`}>{content.fullName}</Link>
      </li>
    ))}
  </ul>
)}
    </div>
  );
};

export default Search;
