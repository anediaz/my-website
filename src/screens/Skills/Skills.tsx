import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';
import { formatContent } from '../../helpers';
import './Skills.css';
import { SectionType, SKILLS } from '../../service/constants';

interface SkillsProps {
  id: SectionType,
  onChangeVisibility: (visible: boolean, id:SectionType) => void,
}

export const Skills = ({ id, onChangeVisibility = () => {} }: SkillsProps) => {
  const [t] = useTranslation();
  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} title={t(`${id}.title`)} className="Skills">
      {SKILLS.map((skill, index) => (
        <div className="skill" key={index}>
          {formatContent(t(`skills.content.${skill}`), t(`skills.content.${skill}.highlight`), 'highlight-marker')}
        </div>
      ))}
    </SectionWithSensor>
  );
};
