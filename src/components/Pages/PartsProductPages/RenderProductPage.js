import React from 'react';
import {useParams } from 'react-router-dom';

import ProductCharacteristics from './ProductCharacteristics';
import ProductPackaging from './ProductPackaging';

import AddToCartButton from '../../Buttons/AddToCartButton';
import FavoriteButton from '../../Buttons/FavoriteButton';

import useProductState from './useProductState';

import './photoPages.css';

const RenderProductPage = ({ itemInfo }) => {

  const { path } = useParams();

  // Find the selected product based on the path
  const selectedProductInfo = itemInfo.find(item => item.path === path);

  if (!selectedProductInfo) {
    return <div>Product not found</div>;
  }

  const itemName = selectedProductInfo.content.itemName;

  // Деструктурируем объект хука и вызываем его внутри функции-компонента
  const RenderProduct = () => {
    const {
      isZoomed,
      position,
      isCharacteristicsExpanded,
      toggleCharacteristics,
      isPackagingExpanded,
      togglePackaging,
      isAddedToCart,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
      handleAddToCart,
    } = useProductState(itemName, itemInfo);

    const {
      fullName,
      logo,
      image,
      price,
      characteristicsList,
      packagingList,
      podrobnee,
    } = selectedProductInfo.content;

    return (
      <div className="content-container">
        <div className='block'>
          <div className='minheader'>
            <h3>{fullName}</h3>
            <div className='image-container'>
              <img src={logo} alt="Product" />
            </div>
          </div>

          <div
            className={`divPhoto ${isZoomed ? 'zoomed' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <img
              src={image}
              alt={itemName}
              className="img-product"
              style={{ transformOrigin: `${position.x}% ${position.y}%` }}
            />
            <AddToCartButton itemName={itemName} itemInfo={itemInfo} handleAddToCart={handleAddToCart} />
            {isAddedToCart && <p>Product added to cart!</p>}
            <FavoriteButton itemName={itemName} itemInfo={itemInfo} className='fav0rite-icon' />
          </div>
          <p className='price'>Цена: {price}</p>

          <h5>Подробнее о {fullName}</h5>
          <p className='black'>{podrobnee}</p>
          <ProductCharacteristics
            characteristics={{
              list: characteristicsList,
              toggle: toggleCharacteristics,
            }}
            isCharacteristicsExpanded={isCharacteristicsExpanded}
          />
          <ProductPackaging
            packaging={{
              list: packagingList,
              toggle: togglePackaging,
            }}
            isPackagingExpanded={isPackagingExpanded}
          />
        </div>
      </div>
    );
  };

  return <RenderProduct />;
};

export default RenderProductPage;
