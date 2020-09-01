import React from 'react';
import { paths } from '../constants/brandsPath';
import Marantz from '../assets/brands/Marantz.jpg';
import Jamo from '../assets/brands/Jamo.png';

function ImgSection() {
  return (
    <>
      <div className="ImgSection">
        {paths.map(obj => {
          const { path, alt } = obj;
          return <img src={path} alt={alt} key={path} />
        })}
      </div>
      <p>More Brands Available</p>
      <img src={Marantz} alt='Marantz' />
      <img className='ImgSection--Jamo' src={Jamo} alt='Jamo' />
    </>
  );
}

export default ImgSection;
