import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FavoritesProvider } from './components/./Hooks/FavoritesContext'
import { CartProvider } from './components/Hooks/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
<CartProvider>
    <App />
    </CartProvider>
  </FavoritesProvider>
);

