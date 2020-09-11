import React from 'react';
import GoogleMapReact from 'google-map-react';

const mapsKey = process.env.REACT_APP_MAPS_KEY;

function ContactUs (props) {
  const center = {
    lat: 43.7682271,
    lng: -79.18324559999999
  }
  
  return (
    <div className='contact-us'>
      <div className='contact-us--header'>
        <h1>Contact Us</h1>
        <a href="tel:647-955-8399">647-955-8399</a>
        <a className="email" href="mailto: lu@iconnectht.com">lu@iconnectht.com</a>
      </div>
      <div style={{ height: '80vh', width: '70vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={center}
          defaultZoom={16}
        >
          <div
            className='contact-us--marker'
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
      </div>

    </div>
  );
}

export default ContactUs;
