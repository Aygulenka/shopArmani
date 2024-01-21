import React from 'react';

const ProductCharacteristics = ({ characteristics, isCharacteristicsExpanded }) => (
  <div className='character'>
    <h5 onClick={characteristics.toggle}>
      Характеристики {isCharacteristicsExpanded ? <span className='expandCollapse'>cвернуть</span> : <span className='expandCollapse'>pазвернуть</span>}
    </h5>
    {isCharacteristicsExpanded && (
      <div>
        {characteristics.list.map((char, index) => (
          <React.Fragment key={index}>
            <p className='gray'>{char.label}</p>
            <p className='black'>{char.value}</p>
          </React.Fragment>
        ))}
      </div>
    )}
  </div>
);

export default ProductCharacteristics;
