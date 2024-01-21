import React from 'react';

const ProductPackaging = ({ packaging, isPackagingExpanded }) => (
  <div className='character'>
    <h5 onClick={packaging.toggle}>
      Упаковка {isPackagingExpanded ? <span className='expandCollapse'>cвернуть</span> : <span className='expandCollapse'>pазвернуть</span>}
    </h5>
    {isPackagingExpanded && (
      <div>
        {packaging.list.map((pack, index) => (
          <React.Fragment key={index}>
            <p className='gray'>{pack.label}</p>
            <p className='black'>{pack.value}</p>
          </React.Fragment>
        ))}
      </div>
    )}
  </div>
);

export default ProductPackaging;
