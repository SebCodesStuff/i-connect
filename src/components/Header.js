import React from 'react';
import { links } from '../constants/links';
import { Link, useLocation } from "react-router-dom";

function Header () {
  const { pathname } = useLocation();
  const renderLinks = (links) => {
    return links.map(link => {
      const { title, url } = link;
      const active = pathname === url;
      const activeClass = active ? '-active' : '';
      return (
      <Link
        className={`links${activeClass}`}
        to={url}
        key={url}
      >
        {title}
      </Link>
      );
    })
  }

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
          {renderLinks(links)}
        </div>
      </div>
    </>
  );
}

export default Header;
