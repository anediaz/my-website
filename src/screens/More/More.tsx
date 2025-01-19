import { useTranslation } from 'react-i18next';
import { SectionWithSensor, ImageSection } from '../../components';
import { MoreData } from '../../service/data';
import './More.css';
import { LOCALES, SectionType } from '../../service/constants';

interface MoreProps {
  id: SectionType;
  onChangeVisibility: (visible: boolean, id:SectionType) => void,
}

export const More = ({ id, onChangeVisibility = () => {} }:MoreProps) => {
  const [t] = useTranslation();

  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} className="More" title={t(`${id}.title`)}>
      {MoreData.map(
        ({ item, content, contentItems }) => (
          <div className="more" key={item}>
            <div className="more-title">{t(`more.${item}`)}</div>
            {content && <div className="more-content">{t(`more.${item}.content`)}</div>}
            {contentItems ? (
              <div className="more-content-items">
                {LOCALES.map((contentItem) => (
                  <div key={contentItem} className="more-content-item">{t(`more.${item}.${contentItem}`)}</div>
                ))}
              </div>
            ) : null}
          </div>
        ),
      )}
      <ImageSection />
    </SectionWithSensor>
  );
};
