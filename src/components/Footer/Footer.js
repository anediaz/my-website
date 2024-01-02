import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  jsonData,
} from '../../service';
import './Footer.css';

const Footer = () => {
  const [t] = useTranslation();
  const { webSiteInfo } = jsonData;

  const clickableText = (
    <a href={webSiteInfo.url} target="_blank" rel="noopener noreferrer" key={2}>
      {webSiteInfo.author}
    </a>
  );
  const footerText = t('webSiteInfo').split('$author');
  return (
    <div className="Footer">
      {footerText[0] && <div key={1}>{footerText[0]}</div>}
      {clickableText}
      {footerText[1] && <div key={3}>{footerText[1]}</div>}
    </div>
  );
};

export default Footer;
