import React from 'react';
import { Link } from 'react-router-dom';

import { useFavorites } from '../Hooks/FavoritesContext';

import AddToCartButton from '../Buttons/AddToCartButton';
import FavoriteButton from '../Buttons/FavoriteButton';

import './FavoriteList.css';

const FavoriteList = ({ itemInfo }) => {
  const { favorites } = useFavorites();

  return (
    <div className="content-container">
      <h2 className='name'>Избранное</h2>
      <div className="favorite-list">
   {favorites.map((itemName, index) => {
  const item = itemInfo.find((item) => item.content && item.content.itemName === itemName);

  if (item && item.content) {
    return (
      <div key={index} className={`div${index + 1}`}>
        <AddToCartButton itemName={itemName} itemInfo={item.content} />
        <FavoriteButton itemName={itemName} itemInfo={item.content} className='fav0rite-icon' />
        <div className="black-border">
                  {item.content.image && <img src={item.content.image} alt={itemName} className='img-product'/>}
                  <Link to={`/layComp/${item.content.path}`}>
                    <p>{item.content.fullName}</p>
                  </Link>
                </div>
      </div>
    );
  } else {
    console.error(`Item "${itemName}" not found in itemInfo.`);
    return null;
  }
})}


      </div>
    </div>
  );
};

export default FavoriteList;
