import React from 'react';
import ImgSection from '../components/ImgSection';
import BulletList from '../components/BulletList';
import CarouselComp from '../components/Carousel';
import confused from '../assets/confused.jpg'

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
      <BulletList content={letUsShop} />
      <section>
        <h2>Call or text <a href="tel:647-955-8399">647-955-8399</a></h2>
        <p>Free over the phone quotes <br/>An in-home quote is  $149 and is credited towards any booked work</p>
        <a href = "mailto: lu@iconnectht.com">lu@iconnectht.com</a>
      </section>
      <BulletList content={aLittleAboutUs} />
      <BulletList content={projectorInstall} />
      <CarouselComp />
      <section>
        <h2>Troubleshooting/service call</h2>
        <p>Audio video,computer and wireless networking<br/>$149 for the first hour and $50 perhalf hour afterwards</p>
        <img src={confused} alt='confused about which wire does what'/>
      </section>
      {/* Carousel here */}
      <BulletList content={rates} />
      <section>
        <h2>*Lifetime warranty on the labor*</h2>
        <p>Free over the phone quotes</p>
        <a href="tel:647-955-8399">647-955-8399</a>
        <a href = "mailto: lu@iconnectht.com">lu@iconnectht.com</a>
      </section>
      <section>
        <h2>Certifications</h2>
        <p>We accept Visa , Mastercard and American Express. <br/>Click below for payment</p>
        <p>Scarborough Home Theatre Services - Toronto Electronics Installations</p>
        <a href="tel:647-955-8399">647-955-8399</a>
        <a href = "mailto: lu@iconnectht.com">lu@iconnectht.com</a>
      </section>
      {/* Secure Paymentrs button */}
      {/* Carousel */}
    </div>
  );
}

export default Home;
