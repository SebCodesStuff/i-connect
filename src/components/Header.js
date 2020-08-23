import React from 'react';
import { links } from '../constants/links';
import { Link } from "react-router-dom";

function Header(props) {
  const { setCurrentTab, selected } = props;
  const renderLinks = (links) => {
    return links.map(link => {
      const { title, url } = link;
      const active = selected === link;
      const activeClass = active ? '-active' : '';
      return (
      <Link className={`links${activeClass}`} to={url} onClick={() => setCurrentTab(link)} >
        {title}
      </Link>
      );
    })
  }

  return (
    <div className="header">
      <h1>iConnect We Service Toronto and the GTA</h1>
      <a className='header-number' href="tel:647-955-8399">647-955-8399</a>
      <div className="link-container">
        {renderLinks(links)}
      </div>
    </div>
  );
}

export default Header;
