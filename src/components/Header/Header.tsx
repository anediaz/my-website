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
      >
        {isSvg ? <GiphyLogo /> : <i className={`fa ${className}`} />}
      </a>
    ));

    return (
      <>
        <div className="social">
          <i className="fa fa-envelope mail">
            <a href={`mailto:${HeaderData.mail}?`} target="_top">
              {` ${HeaderData.mail}`}
            </a>
          </i>
          <div className="social-icons">
            {socialContent}
            <a href={HeaderData.url[language]} aria-label="resume">
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
        <h2>{HeaderData.name}</h2>
        <div className="presentation">
          {SKILLS.map((skill:string) => (
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
