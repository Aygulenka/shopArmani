import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../Hooks/CartContext';

import FavoriteButton from '../Buttons/FavoriteButton'
import AddToCartButton from '../Buttons/AddToCartButton';

import './Cart.css';
import '../../App.css'


const Cart = ({ itemInfo }) => {
  const { cartes } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    calculateTotalPrice();
  }, [cartes, itemInfo, itemQuantities]);

  const calculateTotalPrice = () => {
    let total = 0;

    cartes.forEach((itemName) => {
      const item = itemInfo.find((item) => item.content && item.content.itemName === itemName);
      const quantity = itemQuantities[itemName] || 1;

      if (item && item.content) {
        total += parseFloat(item.content.price) * quantity;
      }
    });

    setTotalPrice(total);
  };

  const handleQuantityChange = (itemName, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: newQuantity,
    }));
  };

  const handleIncreaseQuantity = (itemName) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: (prevQuantities[itemName] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (itemName) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: Math.max((prevQuantities[itemName] || 0) - 1, 0),
    }));
  };

  const handleRemoveItem = (itemName) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: 0,
    }));
  };

  return (
    <div className="content-container">
      <h2 className="name">Корзина</h2>
      <div className="favorite-list cart-table">
        {cartes.map((itemName, index) => {
          const item = itemInfo.find((item) => item.content && item.content.itemName === itemName);
          const quantity = itemQuantities[itemName] || 1;

          if (item && item.content) {
            return (
              <div key={index} className={`div${index + 1}`}>
                <div className="black-border">
                  <AddToCartButton itemName={itemName} itemInfo={item.content} className="favorite-button-cart" />
                  <FavoriteButton itemName={itemName} itemInfo={item.content} className="cart-button-cart" />
                  
                  {item.content.image && <img src={item.content.image} alt={itemName} className='img-product'/>}
                  <Link to={`/layComp/${item.content.path}`}>
                    <p>{item.content.fullName}</p>
                  </Link>
                </div>
                <div className="cart-cell">
                  <span className="gray">Цена:</span>
                  <span className="black">{item.content.price}</span>
                </div>
                <div className="cart-cell quantity-input">
                  <button onClick={() => handleDecreaseQuantity(itemName)}>-</button>
                  <input
                    type="number"
                    min="0"
                    className='cart-input'
                    value={quantity}
                    onChange={(e) => handleQuantityChange(itemName, parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => handleIncreaseQuantity(itemName)}>+</button>
                </div>
                <div className="cart-cell">
                  <span className="gray">Общая цена:</span>
                  <span className="black">{(item.content.price * quantity).toFixed(2)}</span>
                </div>
                <div className="cart-cell">
                  <button onClick={() => handleRemoveItem(itemName)}>Удалить</button>
                </div>
              </div>
            );
          }

          console.error(`Item "${itemName}" not found in itemInfo.`, itemInfo);
          return null;
        })}
      </div>
      <div className="full-price">
        <p>Итого: {totalPrice.toFixed(2)} руб.</p>
      </div>
    </div>
  );
};

export default Cart;

