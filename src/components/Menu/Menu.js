import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Menu.css';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Menu = ({
  selectedItem,
  language,
  languageItems,
  languageClickHandler = () => {},
  menuItems,
  selectItemHandler = () => {},
  closable,
}) => {
  const [t] = useTranslation();
  const getClass = (id) => `item ${selectedItem === id ? 'active' : ''}`;

  const buildMenu = () => menuItems.map((item) => (
    <div
      className={getClass(item)}
      onClick={() => selectItemHandler(item)}
      key={item}
      role="menuitem"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      <div className="text">
        {t(`menu.${item}`)}
      </div>
    </div>
  ));

  return (
    <div className="Menu">
      <LanguageSelector
        language={language}
        handleLanguageClick={languageClickHandler}
        languageItems={languageItems}
      />
      {menuItems && buildMenu()}
      <Link to="/illustrations" target="_blank" className="item illustrations" title={t('menu.title.illustrations')}>
        {t('menu.portfolio')}
      </Link>
      {closable && (
      <button className="closeButton" type="button" onClick={selectItemHandler}>
        <i className="fa fa-hand-o-left" />
        {t('menu.closable')}
      </button>
      )}
    </div>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  language: PropTypes.string.isRequired,
  languageClickHandler: PropTypes.func.isRequired,
  languageItems: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedItem: PropTypes.string.isRequired,
  selectItemHandler: PropTypes.func.isRequired,
  closable: PropTypes.bool,
};

export default Menu;
