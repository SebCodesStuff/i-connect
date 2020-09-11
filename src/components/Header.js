import React, { useState } from 'react';
import { links } from '../constants/links';
import { Link, useLocation } from "react-router-dom";
import hamburger from '../assets/hamburger.png'
import close from '../assets/close.png'


function Header () {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLinks = (links) => {
    return links.map(link => {
      const { title, url } = link;
      const active = pathname === url;
      const activeClass = active ? '__active' : '';
      const open = menuOpen ? '' : 'links__closed';
      return (
      <Link
        className={`links${activeClass} ${open}`}
        to={url}
        key={url}
      >
        {title}
      </Link>
      );
    })
  }

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  const menuIcon = menuOpen ? close : hamburger
  const menuClass = menuOpen ? 'open' : 'closed';

  return (
    <>
      <div className="header">
        <div className="header--container">
          <h1>iConnect We Service Toronto and the GTA</h1>
          <a className='header-number' href="tel:647-955-8399">647-955-8399</a>

        </div>
      </div>
      <div className="link--background">
        <div className="link--container">
          <img className={`link--menu ${menuClass}`} alt="hamburger menu" src={menuIcon} onClick={handleClick} />
          {renderLinks(links)}
        </div>
      </div>
    </>
  );
}

export default Header;
