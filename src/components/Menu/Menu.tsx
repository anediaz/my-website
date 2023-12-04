import React from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.css';
import { Link } from 'react-router-dom';
import { LanguageItem, LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { LocaleType } from '../../service/constants';

interface MenuProps {
  menuItems: string[];
  language: LocaleType;
  languageClickHandler: (l:string) => void;
  languageItems: LanguageItem[];
  selectedItem: string;
  selectItemHandler: (v?:string) => void;
  closable?:boolean;
}

export const Menu = ({
  selectedItem,
  language,
  languageItems,
  languageClickHandler = () => {},
  menuItems,
  selectItemHandler,
  closable,
}: MenuProps) => {
  const [t] = useTranslation();
  const getClass = (id:string) => `item ${selectedItem === id ? 'active' : ''}`;

  const buildMenu = () => menuItems.map((item:string) => (
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
    <div className={`Menu${closable ? ' closable' : ''}`}>
      <LanguageSelector
        language={language}
        handleLanguageClick={languageClickHandler}
        items={languageItems}
      />
      {menuItems && buildMenu()}
      <Link to="/illustrations" target="_blank" className="item illustrations" title={t('menu.title.illustrations')}>
        <span>{t('menu.portfolio')}</span>
        <i className="fa fa-image" />
      </Link>
      <Link to="/animations" target="_blank" className="item animations" title={t('menu.title.animations')}>
        <span>{t('menu.animations')}</span>
        <i className="fa fa fa-file-video-o" />
      </Link>
      {closable && (
      <button className="closeButton" type="button" onClick={() => selectItemHandler()}>
        <i className="fa fa-hand-o-left" />
        {t('menu.closable')}
      </button>
      )}
    </div>
  );
};
