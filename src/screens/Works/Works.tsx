import { useTranslation } from 'react-i18next';
import { SectionWithSensor } from '../../components';
import './Works.css';

import { Web } from './Web';
import { GraphicWorks } from './Graphic';
import { Conferences } from './Conferences';
import { WorksData, TalksData } from '../../service/data';
import { SectionType } from '../../service/constants';

interface WorksProps {
  id: SectionType;
  onChangeVisibility: (visible: boolean, id:SectionType) => void;
  goToArticle: (pageName:string) => void;
}

export const Works = ({
  id, onChangeVisibility = () => {}, goToArticle,
}: WorksProps) => {
  const [t] = useTranslation();

  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={id} title={t(`${id}.title`)} className="Works">
      <Web className="work" key={1} data={{ url: WorksData.developer.url }} />
      <GraphicWorks className="work" key={2} goToArticle={goToArticle} />
      <Conferences
        media={TalksData}
        className="work"
        key={4}
      />
    </SectionWithSensor>
  );
};
