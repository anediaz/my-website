import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MediaSection } from '../../components';
import './Conferences.css';

const Conferences = ({
  media, className,
}) => {
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

Conferences.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      youtubeId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
  className: PropTypes.string,
};
export default Conferences;
