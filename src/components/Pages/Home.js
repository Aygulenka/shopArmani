import React, { Fragment } from 'react';
import skin from '../../skin.jpg'
import '../../App.css'
const Home = () => {


  return (
   <div className='content-container'>


    <div className="home">
      <h2>Welcome to Our Store</h2>
<img src={skin} className='photoHome'/>
    </div>
    </div>
  );
}

export default Home;
