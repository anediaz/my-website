import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SectionWithSensor, ImageSection } from '../../components';
import {
  jsonData,
} from '../../service';
import './More.css';

const More = ({ id, onChangeVisibility = () => {}, isVisible }) => {
  const [t] = useTranslation();

  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} className="More" title={t(`${id}.title`)} isVisible={isVisible}>
      {jsonData.more.map(
        ({ item, content, contentItems }) => (
          <div className="more" key={item}>
            <div className="more-title">{t(`more.${item}`)}</div>
            {content && <div className="more-content">{t(`more.${item}.content`)}</div>}
            {contentItems && (
            <div className="more-content-items">
              {['eu', 'fr', 'en', 'es'].map((contentItem, index) => (
              // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="more-content-item">{t(`more.${item}.${contentItem}`)}</div>
              ))}
            </div>
            )}
          </div>
        ),
      )}
      <ImageSection />
    </SectionWithSensor>
  );
};

More.propTypes = {
  id: PropTypes.string,
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default More;
