/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';
import { formatContent } from '../../helpers';
import {
  jsonData,
} from '../../service';
import './Skills.css';
import { SectionType } from '../../service/constants';

interface SkillsProps {
  id: SectionType,
  onChangeVisibility: (visible: boolean, id:SectionType) => void,
}

export const Skills = ({ id, onChangeVisibility = () => {} }: SkillsProps) => {
  const [t] = useTranslation();
  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} title={t(`${id}.title`)} className="Skills">
      {jsonData.skills.map((skill, index) => (
        <div className="skill" key={index}>
          {formatContent(t(`skills.content.${skill}`), t(`skills.content.${skill}.highlight`), 'highlight-marker')}
        </div>
      ))}
    </SectionWithSensor>
  );
};
