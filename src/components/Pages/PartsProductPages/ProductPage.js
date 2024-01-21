import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductState from '../Category/pages/useProductState';
import ProductCharacteristics from '../Category/pages/ProductCharacteristics';
import ProductPackaging from '../Category/pages/ProductPackaging';
import AddToCartButton from '../Buttons/AddToCartButton';
import FavoriteButton from '../Buttons/FavoriteButton';

const ProductPage = ({ itemName, itemInfo }) => {
  const navigate = useNavigate();

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
  } = useProductState(itemName, itemInfo);

  const characteristicsList = itemInfo[itemName].characteristicsList || [];
  const packagingList = itemInfo[itemName].packagingList || [];

  return (
    <div className="content-container">
      <div className='block'>
        <div className='minheader'>
          <h3>{itemInfo[itemName].fullName}</h3>
          <div className='image-container'>
            {/* Здесь используйте правильный источник изображения */}
            <img src={itemInfo[itemName].image} alt="Product" />
          </div>
        </div>

        <div
          className={`divPhoto ${isZoomed ? 'zoomed' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <img
            src={itemInfo[itemName].image}
            alt={itemName}
            className="img-product"
            style={{ transformOrigin: `${position.x}% ${position.y}%` }}
          />
          <AddToCartButton itemName={itemName} itemInfo={itemInfo} />
          {isAddedToCart && <p>Product added to cart!</p>}
          <FavoriteButton itemName={itemName} itemInfo={itemInfo} className='fav0rite-icon' />
        </div>
        <p className='price'>Цена: {itemInfo[itemName].price}</p>

        <h5>Подробнее о {itemInfo[itemName].fullName}</h5>
        <p className='black'>{itemInfo[itemName].podrobnee}</p>
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

export default ProductPage;
