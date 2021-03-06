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
import MenuBoard from './pages/MenuBoard';
import Security from './pages/Security';


function App () {
  const overlayText = 'OVER 30 YEARS OF EXPERIENCE WITH EXCEPTIONAL SERVICE.'
  return (
    <Router>
      <div className="background">
        <Header />
        <div className='container'>
          <div className='logo-container'>
            <div className='overlay'>{overlayText}</div>
          </div>
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
            <Route path="/menu-boards">
              <MenuBoard />
            </Route>
            <Route path="/security">
              <Security />
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
