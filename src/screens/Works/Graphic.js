import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ImageWithLoader, LoaderInline } from '../../components';
import ms from './ms.png';
import paquier from './paquier.png';

import './Graphic.css';

const Graphic = ({
  goToArticle, work, translate, image,
}) => (
  <div className="body">
    <ImageWithLoader cls="clickableImage" image={image} alt={translate(`works.graphic.${work}.title`)} loader={<LoaderInline height="50" width="50" />} onClick={() => goToArticle(work)} />
    <div className="description">
      <div className="project">{translate(`works.graphic.${work}.title`)}</div>
      <div className="infos">
        <div role="button" tabIndex="0" onKeyPress={() => {}} onClick={() => goToArticle(work)}>
          {translate(`works.graphic.${work}.content`)}
        </div>
      </div>
    </div>
  </div>
);

Graphic.propTypes = {
  translate: PropTypes.func,
  goToArticle: PropTypes.func,
  work: PropTypes.string,
  image: PropTypes.node,

};

const GraphicWorks = ({ className, goToArticle }) => {
  const works = [{ name: 'microsoft', image: ms }, { name: 'paquier', image: paquier }];
  const [t] = useTranslation();

  return (
    <div className={`graphic ${className}`}>

      <div className="articles">
        {works.map(({ name, image }) => (<Graphic goToArticle={goToArticle} work={name} image={image} translate={t} key={name} />))}
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

GraphicWorks.propTypes = {
  className: PropTypes.string,
  goToArticle: PropTypes.func,
};

export default GraphicWorks;
