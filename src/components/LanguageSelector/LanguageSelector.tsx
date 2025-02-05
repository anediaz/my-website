import './LanguageSelector.css';
import { LANGUAGES, LocaleType } from '../../service/constants';

interface LanguageSelectorProps {
  language: LocaleType;
  handleLanguageClick: (v:LocaleType) => void;
}

export const LanguageSelector = ({ language, handleLanguageClick }: LanguageSelectorProps) => {
  const isActive = (lang:LocaleType) => `language ${LANGUAGES[lang]} ${lang === language ? 'active' : ''}`;

  return (
    <div className="LanguageSelector" role="menuitem">
      <ul>
        {Object.entries(LANGUAGES).map(([id, title]) => (
          <li
            className={isActive(id as LocaleType)}
            title={title}
            onClick={() => handleLanguageClick(id as LocaleType)}
            key={id}
            role="menuitem"
            onKeyDown={() => { }}
            aria-label={`language-item-${title}`}
          >
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
};
