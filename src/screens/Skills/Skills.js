/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';
import { formatContent } from '../../service/utils';
import {
  jsonData,
} from '../../service';
import './Skills.css';

const Skills = ({ id, onChangeVisibility = () => {}, isVisible }) => {
  const [t] = useTranslation();
  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} title={t(`${id}.title`)} className="Skills" isVisible={isVisible}>
      {jsonData.skills.map((skill, index) => (
        <div className="skill" key={index}>
          {formatContent(t(`skills.content.${skill}`), t(`skills.content.${skill}.highlight`), 'highlight-marker')}
        </div>
      ))}
    </SectionWithSensor>
  );
};

Skills.propTypes = {
  id: PropTypes.string,
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default Skills;
