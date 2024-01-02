import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';

import './About.css';

const About = ({ id, onChangeVisibility = () => {}, isVisible }) => {
  const [t] = useTranslation();

  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} className="About" isVisible={isVisible}>
      <div className="item">
        <p>{t('about.content')}</p>
      </div>
    </SectionWithSensor>
  );
};

About.propTypes = {
  id: PropTypes.string,
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default About;
