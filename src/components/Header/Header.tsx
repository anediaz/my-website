import { useTranslation } from 'react-i18next';
import './Header.css';
import profileImage from './profile.jpg';
import { HeaderData } from '../../service/data';
import { ImageWithLoader } from '../ImageWithLoader/ImageWithLoader';
import { LoaderInline } from '../Loader/LoaderInline';
import GiphyLogo from "./giphy.svg";
import { LocaleType, SKILLS } from '../../service/constants';

interface HeaderProps {
  id: string;
  language: LocaleType;
}

export const Header = ({
  id, language,
}: HeaderProps) => {
  const [t] = useTranslation();
  const getSocial = () => {
    const socialContent = HeaderData.social.filter(({id}) => id !== 'twitter').map(({
      id: socialId, url, className, isSvg,
    }) => (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={`${t(`header.social.${socialId}`)}`}
        title={`${t(`header.social.${socialId}`)}`}
        className={isSvg ? className : undefined}
        aria-label={`header-social-${socialId}`}
      >
        {isSvg ? <GiphyLogo/> : <i className={`fa ${className}`}/>}
      </a>
    ));

    return (
      <>
        <div className="social">
          <i className="fa fa-envelope mail">
            <a href={`mailto:${HeaderData.mail}?`} aria-label="header-social-mail" target="_top">
              {` ${HeaderData.mail}`}
            </a>
          </i>
          <div className="social-icons">
            {socialContent}
            <a href={HeaderData.url[language]}>
              <i className="fa fa-file-text-o" aria-label="header-social-resume" title={`${t('header.resumeTitle')}`} />
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="Header" id={id}>
      <div className="name">
        <h2 aria-label="website-title">{HeaderData.name}</h2>
        <div className="presentation" aria-label="website-subtitle">
          {SKILLS.map((skill:string) => (
            <div key={skill}>{t(`header.skill.${skill}`)}</div>
          ))}
        </div>
      </div>
      <div className="infos">
        <ImageWithLoader id="profile-image" className="pic" src={profileImage} aria-label="header-profile-pic" alt="profile" loader={<LoaderInline size={50} />} />
        {getSocial()}
      </div>
    </div>
  );
};
