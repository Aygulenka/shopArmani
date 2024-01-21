// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
  };

export const CartProvider = ({ children }) => {
  const [cartes, setCartes] = useState([]);

  const addToCart = (product) => {
    setCartes((prevCartes) => [...prevCartes, product]);
  };
  const removeFromCart = (product) => {
    setCartes((prevCartes) => prevCartes.filter((item) => item !== product));
  };

  const isCart = (product) => {
    return cartes.includes(product);
  }; 
  return (
    <CartContext.Provider value={{ cartes, addToCart, removeFromCart, isCart }}>
      {children}
    </CartContext.Provider>
  );
};


