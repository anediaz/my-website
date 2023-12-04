import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import profileImage from './profile.jpg';
import {
  jsonData,
} from '../../service';
import { ImageWithLoader } from '../ImageWithLoader/ImageWithLoader';
import { LoaderInline } from '../Loader/LoaderInline';
import { ReactComponent as GiphyLogo } from './giphy.svg';
import { LocaleType } from '../../service/constants';

interface HeaderProps {
  id: string;
  language: LocaleType;
}

export const Header = ({
  id, language,
}: HeaderProps) => {
  const [t] = useTranslation();
  const { header, skills } = jsonData;
  const getSocial = () => {
    const socialContent = header.social.map(({
      id: socialId, url, className, isSvg,
    }) => (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={`${t(`header.social.${socialId}`)}`}
        title={`${t(`header.social.${socialId}`)}`}
        className={isSvg ? className : undefined}
      >
        {isSvg ? <GiphyLogo /> : <i className={`fa ${className}`} />}
      </a>
    ));

    return (
      <>
        <div className="social">
          <i className="fa fa-envelope mail">
            <a href={`mailto:${header.mail}?`} target="_top">
              {` ${header.mail}`}
            </a>
          </i>
          <div className="social-icons">
            {socialContent}
            <a href={header.url[language]} aria-label="resume">
              <i className="fa fa-file-text-o" title={`${t('header.resumeTitle')}`} />
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="Header" id={id}>
      <div className="name">
        <h2>{header.name}</h2>
        <div className="presentation">
          {skills.map((skill) => (
            <div key={skill}>{t(`header.skill.${skill}`)}</div>
          ))}
        </div>
      </div>
      <div className="infos">
        <ImageWithLoader className="pic" src={profileImage} alt="profile" loader={<LoaderInline size={50} />} />
        {getSocial()}
      </div>
    </div>
  );
};
