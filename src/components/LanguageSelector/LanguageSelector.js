import React from 'react';
import * as PropTypes from 'prop-types';
import './LanguageSelector.css';
import { LANGUAGES } from '../../service/constants';

const LanguageSelector = ({ language, languageItems, handleLanguageClick }) => {
  const isActive = (lang) => `language ${LANGUAGES[lang]} ${lang === language ? 'active' : ''}`;

  return (
    <div className="LanguageSelector">
      <ul>
        {languageItems.map(({ id, title }) => (
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

LanguageSelector.propTypes = {
  languageItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  language: PropTypes.string.isRequired,
  handleLanguageClick: PropTypes.func.isRequired,
};

export default LanguageSelector;
