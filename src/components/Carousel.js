import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import logo from '../assets/iconnectLogo.jpeg'
import confused from '../assets/confused.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComp (props) {
  return (
    <div>
      {console.log(CarouselComp)}
      <Carousel showArrows={true} >
        <div>
            <img src={logo} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={confused} />
            <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
