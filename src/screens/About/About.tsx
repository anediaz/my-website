import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';

import './About.css';

interface AboutProps {
  id: string,
  onChangeVisibility?: (visible: boolean, id:string) => void,
}

export const About = ({ id, onChangeVisibility = () => {} }: AboutProps) => {
  const [t] = useTranslation();

  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} className="About">
      <div className="item">
        <p>{t('about.content')}</p>
      </div>
    </SectionWithSensor>
  );
};
