import { useTranslation } from 'react-i18next';
import { ImageWithLoader, LoaderInline } from '../../components';
import image from './latestProject.png';

interface WebProps {
  data: {
    url: string;
  };
  className?: string;
}

export const Web = ({ data, className }: WebProps) => {
  const [t] = useTranslation();

  return (
    <div className={`web ${className}`}>
      <div className="body">
        <ImageWithLoader id="work-last-dev-project" className="clickableImage" alt={t('works.developer.title')} url={data.url} src={image} loader={<LoaderInline size={50} />} />
        <div className="description">
          <div className="project" aria-label="work-last-dev-project">{t('works.developer.title')}</div>
          <div role="button" tabIndex={0} onKeyPress={() => {}} onClick={() => window.open(data.url)}>
            <div className="infos" aria-label='work-last-dev-project'>
              <div>{t('works.developer.info')}</div>
              <div>{t('works.developer.role')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
