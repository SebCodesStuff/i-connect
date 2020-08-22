import React, { useState } from 'react';
import ImgSection from '../components/ImgSection';
import BulletList from '../components/BulletList';

const letUsShop = {
  title: 'Let us do the shopping for you',
  points: [
    'We will assess your Home Theater or Electronic needs',
    'Provide you and recommend the appropriate equipment for your location',
    'Do the system setup and integration for smooth operation',
    'Provide support and tutorial',
    'We specialize in projectors and projector screens 100" and above',
    'Custom seating',
    'Networking and whole home audio with system control',
  ],
}

function Home() {
  return (
    <div className="Home">
      <p><p className='emphasize'>iConnect</p> offers a one stop complete solution for your electronic needs
        We carry a wide range of popular brands at very competitive pricing.
      </p>
      <ImgSection />
      <p><p className='emphasize'>iConnect</p> offers a one stop complete solution for your electronic needs
        We carry a wide range of popular brands at very competitive pricing.
      </p>
      <BulletList title={letUsShop.title} points={letUsShop.points} />
    </div>
  );
}

export default Home;
