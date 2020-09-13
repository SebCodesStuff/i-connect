import React from 'react';
import CarouselComp from '../components/Carousel';
import { security } from '../constants/carousels';


function Security (props) {
  return (
    <div className='menu-board'>
      <div className='menu-board--text-container'>
        <h1>Home Security Installation</h1>
        <h3>Contact us for a quote</h3>
        <a href="tel:647-955-8399">647-955-8399</a>
        <br/>
        <a className="email" href="mailto: lu@iconnectht.com">lu@iconnectht.com</a>
      </div>

      <CarouselComp images={security} autoPlay />
    </div>
  );
}

export default Security;
