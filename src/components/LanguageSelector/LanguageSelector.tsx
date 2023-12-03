import React from 'react';
import './LanguageSelector.css';
import { LANGUAGES, LocaleType } from '../../service/constants';

interface Item {
  id: LocaleType;
  title: string;
}

interface LanguageSelectorProps {
  items: Item[];
  language: LocaleType;
  handleLanguageClick: (v:LocaleType) => void;
}

export const LanguageSelector = ({ language, items, handleLanguageClick }: LanguageSelectorProps) => {
  const isActive = (lang:LocaleType) => `language ${LANGUAGES[lang]} ${lang === language ? 'active' : ''}`;

  return (
    <div className="LanguageSelector">
      <ul>
        {items.map(({ id, title }) => (
          <li
            className={isActive(id)}
            title={title}
            onClick={() => handleLanguageClick(id)}
            key={id}
            role="presentation"
          >
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
};
