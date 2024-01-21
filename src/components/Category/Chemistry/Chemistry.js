import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import FavoriteButton from '../../Buttons/FavoriteButton';
import AddToCartButton from '../../Buttons/AddToCartButton';
import Pagination from '../../Hooks/Pagination';
import { itemInfo } from './ChemistryItemInfo';

import './Chemistry.css';


const Chemistry = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = itemInfo.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='block-che'>
      <h2 className='name'>ХИМИЯ</h2>
      <div className="parent">
        {currentProducts.map((product, index) => (
          <div key={index} className={`div${index + 1}`}>
            <AddToCartButton itemName={product.title} itemInfo={product.content} />
            <FavoriteButton itemName={product.title} itemInfo={product.content} className='fav0rite-icon' />
            <Link to={`/layComp/${product.path}`} className='link'>{product.title}</Link>
            {product.content.image && (
              <img src={product.content.image} alt={product.title} className='img-product' />
            )}
          </div>
        ))}
      </div>
      <Pagination productsPerPage={productsPerPage} totalProducts={itemInfo.length} paginate={paginate} />
    </div>
  );
};

export default Chemistry;