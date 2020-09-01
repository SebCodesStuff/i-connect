import React from 'react';
import stereo from '../assets/stereo.jpg'
import BulletList from '../components/BulletList'

const installation = {
  title: 'Audio System Installation from $149',
  points: [
    'Sound system setup',
    'Connect up to 3 components',
    'Speaker positioning for best sound (concealment extra)',
    'Audio calibration with existing mic',
    'Tutorial'
  ],
}

function Stereo (props) {
  return (
    <div className='stereo'>
      <div className='stereo--img--container'>
        <img className='stereo--img' src={stereo} alt='high end stereo' />
      </div>
      <div className='stereo--package-container'>
        <BulletList content={installation} />
        <div className='stereo--booking--container'>
          <h3>Call now to book and appointment!</h3>
          <a href="tel:647-955-8399">647-955-8399</a>
        </div>
      </div>
    </div>
  );
}

export default Stereo;
