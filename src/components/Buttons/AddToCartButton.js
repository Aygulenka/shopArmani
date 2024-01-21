import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartButton.css'; // Создайте файл стилей CartButton.css
import { useCart } from '../Hooks/CartContext';

const CartButton = ({ itemName, itemInfo }) => {
    const { addToCart, removeFromCart, isCart } = useCart();
  
    const toggleCart = () => {
      if (isCart(itemName)) {
        removeFromCart(itemName);
      } else {
        addToCart(itemName, itemInfo);
      }
    };

  return (
<div className={`cart-button ${isCart(itemName) ? 'carted' : ''}`} onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default CartButton;
