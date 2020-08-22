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

const aLittleAboutUs = {
  title: 'A Little About Us',
  points: [
    'Over twenty years of experience in the consumer electronics service, installation, connection and integration industry',
    'We put great emphasis on quality workmanship and professional service',
    'Customers will be able to enjoy the latest innovations in home theatre technology without the worry and the stress of having to do it themselves',
    "iConnect's service will ensure a proper and seamless installation of your electronic components providing you with years of enjoyment and entertainment",
    'Our service is available throughout the GTA',
  ]
}

const projectorInstall = {
  title: 'Projector and big screen installation',
  points: [
    'Screen Installation',
    'Projector installation',
    'In Wall speaker installation',
    'Multi zone installation',
    'Custom Theatre seating',
  ]
}

const rates = {
  title: 'Rates',
  points: [
    'Custom hourly rate  $ 100 hr',
    'Two man team $150 hr',
    'Service Call $150 (includes 1 hr)'
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
