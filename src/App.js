import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Calibration from './pages/Calibration';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Install from './pages/Install';
import Stereo from './pages/Stereo';
import logo from './assets/iconnectLogo.jpeg'

function App () {
  const overlayText = 'OVER 30 YEARS OF EXPERIENCE WITH EXCEPTIONAL SERVICE.'
  return (
    <Router>
      <div className="background">
        <Header />
        <div className='container'>
          <img className='logo' alt='iconnect logo' src={logo} />
          <div className='overlay'>{overlayText}</div>
          <Switch>
            <Route path="/tv-install-packages">
              <Install />
            </Route>
            <Route path="/home-stereo-set-up">
              <Stereo />
            </Route>
            <Route path="/TV-CALIBRATION">
              <Calibration />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
