import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImageWithLoader, LoaderInline } from '../../components';
import ms from './ms.png';
import paquier from './paquier.png';

import './Graphic.css';

interface GraphicProps {
  translate: (key:string) => string,
  goToArticle: (pageName: string) => void;
  work: string,
  image: string;
}

const Graphic = ({
  goToArticle, work, translate, image,
}: GraphicProps) => (
  <div className="body">
    <ImageWithLoader id={`work-${work}`} className="clickableImage" src={image} alt={translate(`works.graphic.${work}.title`)} loader={<LoaderInline size={50} />} onClick={() => goToArticle(work)} />
    <div className="description">
      <div className="project">{translate(`works.graphic.${work}.title`)}</div>
      <div className="infos">
        <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => goToArticle(work)}>
          {translate(`works.graphic.${work}.content`)}
        </div>
      </div>
    </div>
  </div>
);

interface GraphicWorksProps {
  goToArticle: (pageName: string) => void;
  className: string;
}
export const GraphicWorks = ({ className, goToArticle }: GraphicWorksProps) => {
  const works = [{ name: 'microsoft', image: ms }, { name: 'paquier', image: paquier }];
  const [t] = useTranslation();

  return (
    <div className={`graphic ${className}`}>
      <div className="articles">
        {works.map(({ name, image }) => (<Graphic goToArticle={goToArticle} work={name} image={image} translate={t} key={name} />))}
      </div>
      <div className="illustrations" aria-label='work-other-graphic'>
        <Link to="/illustrations" target="_blank">
          <i className="fa fa-eye">&nbsp;</i>
          {t('works.graphic.other')}
        </Link>
      </div>
    </div>
  );
};
