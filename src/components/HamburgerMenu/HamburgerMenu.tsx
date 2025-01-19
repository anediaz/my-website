import { useState } from 'react';
import './HamburgerMenu.css';

interface MenuItemsProps {
  id: string,
  name: string
}

interface HamburgerMenuProps {
  menuItems: MenuItemsProps[],
  activeItem: string,
  onSelectItem?: (v:string) => void,
}

export const HamburgerMenu = ({ menuItems, activeItem, onSelectItem = () => {} }: HamburgerMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getClassName = (id:string) => `menuItem ${id === activeItem ? 'active' : ''}`;
  const findActive = ():MenuItemsProps|undefined => menuItems.find(({ id }) => id === activeItem);
  const handleSelectItem = (id:string) => {
    onSelectItem(id);
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`HamburgerMenu ${menuOpen ? 'open' : ''}`}>
      {/* The <div> element has a child <button> element that allows keyboard interaction */}
      <div id="menuToggle" onClick={() => setMenuOpen(!menuOpen)} onKeyPress={() => setMenuOpen(!menuOpen)} role="button" tabIndex={0}>
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
      <div className="activeText">{findActive()?.name}</div>
    </nav>
  );
};
