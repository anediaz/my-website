import { useTranslation } from 'react-i18next';
import { FooterData } from '../../service/data';

import './Footer.css';

export const Footer = () => {
  const [t] = useTranslation();

  const clickableText = (
    <a href={FooterData.url} target="_blank" rel="noopener noreferrer" key={2}>
      {FooterData.author}
    </a>
  );
  const footerText = t('webSiteInfo').split('$author');
  return (
    <div className="Footer">
      <div key={1}>{footerText[0]}</div>
      {clickableText}
      <div key={3}>{footerText[1]}</div>
    </div>
  );
};
