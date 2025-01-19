import { useTranslation } from 'react-i18next';
import './Menu.css';
import { Link } from 'react-router-dom';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import {
  LocaleType, SectionType, SECTIONS,
} from '../../service/constants';

interface MenuProps {
  language: LocaleType;
  languageClickHandler: (l:LocaleType) => void;
  selectedItem: string;
  selectItemHandler: (v:SectionType|undefined) =>void
  closable?: boolean;
  isPageMenu?: boolean;
}

export const Menu = ({
  selectedItem,
  language,
  languageClickHandler = () => {},
  selectItemHandler,
  closable,
  isPageMenu,
}: MenuProps) => {
  const [t] = useTranslation();
  const getClass = (id:string) => `item ${selectedItem === id ? 'active' : ''}`;

  const buildMenu = () => SECTIONS.map((item:SectionType) => (
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
    <div className={`Menu${closable ? ' closable' : ''}`} role="menu">
      <LanguageSelector
        language={language}
        handleLanguageClick={languageClickHandler}
      />
      {isPageMenu ? null : buildMenu()}
      <Link to="/illustrations" target="_blank" className="item illustrations" title={t('menu.title.illustrations')} role="menuitem">
        <span>{t('menu.portfolio')}</span>
        <i className="fa fa-image" />
      </Link>
      <Link to="/animations" target="_blank" className="item animations" title={t('menu.title.animations')} role="menuitem">
        <span>{t('menu.animations')}</span>
        <i className="fa fa fa-file-video-o" />
      </Link>
      {closable ? (
        <button className="closeButton" type="button" onClick={() => selectItemHandler(undefined)} role="menuitem">
          <i className="fa fa-hand-o-left" />
          {t('menu.closable')}
        </button>
      ) : null}
    </div>
  );
};
