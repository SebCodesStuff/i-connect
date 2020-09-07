import React from 'react';
import tvCalibration from '../assets/tvCalibration.jpg'

function Calibration (props) {
  return (
    <div className='tv-calibration'>
      <h1>TV Calibration $199.99</h1>
      <img className='tv-calibration--img' src={tvCalibration} alt='Tv being calibrated' />
    </div>
  );
}

export default Calibration;
