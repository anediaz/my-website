import React from 'react';
import './LanguageSelector.css';
import { LANGUAGES, LocaleType, LanguageItem } from '../../service/constants';

interface LanguageSelectorProps {
  items: LanguageItem[];
  language: LocaleType;
  handleLanguageClick: (v:LocaleType) => void;
}

export const LanguageSelector = ({ language, items, handleLanguageClick }: LanguageSelectorProps) => {
  const isActive = (lang:LocaleType) => `language ${LANGUAGES[lang]} ${lang === language ? 'active' : ''}`;

  return (
    <div className="LanguageSelector" role="menuitem">
      <ul>
        {items.map(({ id, title }) => (
          <li
            className={isActive(id)}
            title={title}
            onClick={() => handleLanguageClick(id)}
            key={id}
            role="menuitem"
            onKeyDown={() => {}}
          >
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
};
