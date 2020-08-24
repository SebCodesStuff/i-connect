import React from 'react';
import wallMountedTv from '../assets/wallMountedTv.jpg'
import BulletList from '../components/BulletList'

const basic = {
  title: 'Basic TV Install $149.99',
  points: [
    'Mount TV on wall',
    'No set up',
    'No component connection',
  ],
}

const advanced = {
  title: 'Advanced TV Install $199.99',
  points: [
    'Mount TV on wall',
    'All wires dressed neatly',
    'Connection of up to 3 components',
    'Program & unify remote control to TV & Source',
    'Internet connection of TV to a pre-existing network',
    'Basic system tutorial',
    '* Audio system is extra',
    '* Fireplace is extra'
  ],
}

const premium = {
  title: 'Premium TV Install $249.99',
  points: [
    'Mount TV on wall with all wires concealed behind drywall (low voltage only)',
    'Connection of 3 components to the TV (audio system is extra)',
    'Unify remote control to TV & source',
    'Internet connection of TV to a pre-existing network',
    'Basic system tutorial',
    'Fireplace is extra'
  ],
}

function Install (props) {
  return (
    <div className='install'>
      <img src={wallMountedTv} alt='Wall mounted TV' />
      <h1>TV Install Packages</h1>
      <BulletList content={basic} />
      <BulletList content={advanced} />
      <BulletList content={premium} />
    </div>
  );
}

export default Install;
