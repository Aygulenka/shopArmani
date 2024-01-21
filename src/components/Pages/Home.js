import React from 'react';


const Home = () => {
  // Здесь можно использовать состояние или получать данные с сервера
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: 'product1.jpg' },
    // Добавь еще продуктов
  ];

  return (
    <div className="home">
      <h2>Welcome to Our Store</h2>

    </div>
  );
}

export default Home;
