import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/TotalParts/Header';
import Home from './components/Pages/Home';
import Footer from './components/TotalParts/Footer';

import Profile from './components/Pages/Profile';
import FavoriteList from './components/Pages/FavoriteList';
import Cart from './components/Pages/Cart';

import SpecialOffers from './components/Pages/SpecialOffers'
import Partners from './components/Pages/Partners';
import Contacts from './components/Pages/Contacts';
import Delivery from './components/Pages/Delivery';
import WhereToBuy from './components/Pages/WhereToBuy';

import Leather from './components/Category/Leather/Leather';
import Chemistry from './components/Category/Chemistry/Chemistry';
import Tools from './components/Category/Tools/Tools';


import { itemInfo } from './components/Category/Chemistry/ChemistryItemInfo';
import RenderProductPage from './components/Pages/PartsProductPages/RenderProductPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leather" element={<Leather />} />
        <Route path="/chemistry" element={<Chemistry itemInfo={itemInfo} />} />
        <Route path="/layComp/:path" element={<RenderProductPage itemInfo={itemInfo} />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/where-to-buy" element={<WhereToBuy />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/favorite"
          element={<FavoriteList itemInfo={itemInfo} />}
        />
        <Route path="/cart" element={<Cart itemInfo={itemInfo} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
