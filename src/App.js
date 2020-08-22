import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { links } from './constants/links';
import logo from './assets/iconnectLogo.jpeg'
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState(links[0]);
  const overlayText = 'OVER 30 YEARS OF EXPERIENCE WITH EXCEPTIONAL SERVICE.'

  return (
    <div className="background">
      <Header setCurrentTab={setCurrentTab} selected={currentTab} />
      <div className='container'>
        <img className='logo' src={logo} />
        <div className='overlay'>{overlayText}</div>
        <Home />
      </div>
    </div>
  );
}

export default App;
