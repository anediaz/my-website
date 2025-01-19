import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';

import './About.css';
import { SectionType } from '../../service/constants';

interface AboutProps {
  id: SectionType,
  onChangeVisibility?: (visible: boolean, id:SectionType) => void,
}

export const About = ({ id, onChangeVisibility }: AboutProps) => {
  const [t] = useTranslation();

  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} className="About">
      <div className="item">
        <p>{t('about.content')}</p>
      </div>
    </SectionWithSensor>
  );
};
