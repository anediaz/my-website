import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ImageWithLoader, LoaderInline } from '../../components';
import image from './ms.png';
import './Graphic.css';

const Graphic = ({ data, className, goToMicrosoft }) => {
  const [t] = useTranslation();

  return (
    <div className={`graphic ${className}`}>
      <div className="body">
        <ImageWithLoader cls="clickableImage" alt={data.alt} image={image} loader={<LoaderInline height="50" width="50" />} onClick={goToMicrosoft} />
        <div className="description">
          <div className="project">{t('works.graphic.title')}</div>
          <div className="infos">
            <div role="button" tabIndex="0" onKeyPress={() => {}} onClick={goToMicrosoft}>
              {t('works.graphic.content')}
            </div>
          </div>
        </div>
      </div>
      <div className="illustrations">
        <Link to="/illustrations" target="_blank">
          <i className="fa fa-eye">&nbsp;</i>
          {t('works.graphic.other')}
        </Link>
      </div>
    </div>
  );
};

Graphic.propTypes = {
  data: PropTypes.exact({
    alt: PropTypes.string,
  }),
  className: PropTypes.string,
  goToMicrosoft: PropTypes.func,
};

export default Graphic;
