import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../Hooks/FavoritesContext';

const FavoriteButton = ({ itemName, itemInfo }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const toggleFavorites = () => {
    if (itemInfo) {
      if (isFavorite(itemName)) {
        removeFromFavorites(itemName);
      } else {
        addToFavorites(itemName, itemInfo);
      }
    } else {
      console.error("itemInfo is not defined.");
    }
  };

  return (
    <div className={`fav0rite-icon ${isFavorite(itemName) ? 'favorited' : ''}`} onClick={toggleFavorites}>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default FavoriteButton;
