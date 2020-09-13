import React from 'react';
import CarouselComp from '../components/Carousel';
import { menuBoard } from '../constants/carousels';


function MenuBoard (props) {
  return (
    <div className='menu-board'>
      <div className='menu-board--text-container'>
        <h1>Digital Menu Boards</h1>
        <h3>Contact us for a quote</h3>
        <a href="tel:647-955-8399">647-955-8399</a>
        <br/>
        <a className="email" href="mailto: lu@iconnectht.com">lu@iconnectht.com</a>
      </div>

      <CarouselComp images={menuBoard} autoPlay />
    </div>
  );
}

export default MenuBoard;
