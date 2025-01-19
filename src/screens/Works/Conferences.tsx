import { useTranslation } from 'react-i18next';
import { MediaSection, MediaProps } from '../../components';
import './Conferences.css';

interface ConferencesProps {
  media: MediaProps[];
  className?: string;
}

export const Conferences = ({
  media, className,
}:ConferencesProps) => {
  const [t] = useTranslation();

  return (
    <div className={`conferences ${className}`}>
      <div className="body">
        <div className="description">
          <div className="project">{t('works.speaker.title')}</div>
          <div className="infos">
            <div>{t('works.speaker.content')}</div>
          </div>
        </div>
      </div>
      <MediaSection media={media} />
    </div>
  );
};
