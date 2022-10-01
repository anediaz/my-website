import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import './HamburgerMenu.css';

const HamburgerMenu = ({ menuItems, activeItem, onSelectItem = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getClassName = (id) => `menuItem ${id === activeItem ? 'active' : ''}`;
  const findActive = () => menuItems.find(({ id }) => id === activeItem) || {};
  const handleSelectItem = (id) => {
    onSelectItem(id);
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`HamburgerMenu ${menuOpen ? 'open' : ''}`}>
      {/* The <div> element has a child <button> element that allows keyboard interaction */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div id="menuToggle" onClick={() => setMenuOpen(!menuOpen)} alt="toggleMenu" role="button" tabIndex={0}>
        <input type="checkbox" checked={menuOpen} readOnly />
        <span />
        <span />
        <span />
        <ul id="menu">
          {menuItems.map(({ id, name }) => (
            <div
              key={id}
              className={getClassName(id)}
              onClick={() => handleSelectItem(id)}
              role="menuitem"
              tabIndex={0}
              onKeyDown={() => {}}
            >
              <li>
                {name}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="activeText">{findActive().name}</div>
    </nav>
  );
};
HamburgerMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  activeItem: PropTypes.string,
  onSelectItem: PropTypes.func,

};
export default HamburgerMenu;
