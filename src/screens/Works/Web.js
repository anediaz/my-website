import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ImageWithLoader, LoaderInline } from '../../components';
import image from './latestProject.png';

const Web = ({ data, className }) => {
  const [t] = useTranslation();

  return (
    <div className={`web ${className}`}>
      <div className="body">
        <ImageWithLoader cls="clickableImage" alt={t('works.developer.title')} url={data.url} image={image} loader={<LoaderInline height="50" width="50" />} />
        <div className="description">
          <div className="project">{t('works.developer.title')}</div>
          <div className="infos">
            <div>{t('works.developer.info')}</div>
            <div>{t('works.developer.role')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Web.propTypes = {
  data: PropTypes.exact({
    url: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};
export default Web;
