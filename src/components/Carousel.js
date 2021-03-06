import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComp ({ images, width = 80, autoPlay }) {
  return (
    <div className='carousel--container'>
      <Carousel 
        showArrows={true}
        dynamicHeight={true}
        useKeyboardArrows={true}
        swipeable={true}
        thumbWidth={width}
        infiniteLoop={true}
        stopOnHover={true}
        autoPlay={autoPlay}
      >
      {images.map(url => {
        const getAlt = url.split('.')[0]
        return (
        <div>
            <img src={url}  alt={getAlt}/>
        </div>
        );
      })}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
