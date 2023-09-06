import React from 'react';
import Navbar from './Navbar';


 const Header = () => {
  return (
  <div className='banner'>
    <Navbar/>

    <div className='banner__content'>
      <div className='container'>
        <div className='banner__text'>
      
        <h3>pizza Devlivery </h3>
        <h1> MAESTRO PIZZINNI</h1>
        <p>
          Lorn ipsum dolor sit amet consectetur adipisicing elit.
           Excepturi minus ut mollitie error molestiae quia.
        </p>
        <div className='banner__btn'>
          <a href="/"className='btn btn-smart'>
            DEVLIVERY NOW
            </a>
        </div>
      </div>
    </div>
    </div>
    </div>
    );
  
  
};
export default Header 