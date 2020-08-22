import React from 'react';
import { links } from '../constants/links';

function Header(props) {
  const { setCurrentTab, selected } = props;
  const renderLinks = (links) => {
    return links.map(link => {
      const active = selected === link;
      const activeClass = active ? '-active' : '';
      return (
      <div className={`links${activeClass}`} onClick={() => setCurrentTab(link)}>
        {link}
      </div>
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
