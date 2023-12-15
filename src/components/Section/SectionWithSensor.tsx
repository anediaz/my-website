import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Section } from './Section';
import { SectionType } from '../../service/constants';

interface SectionWithSensorProps {
  id: SectionType;
  children: React.ReactNode;
  onChangeVisibility?: (visible:boolean, id:SectionType) => void;
  title?: string,
  className: string;
}

export const SectionWithSensor = ({
  children, onChangeVisibility = () => {}, id, title, className,
}:SectionWithSensorProps) => (
  <VisibilitySensor
    scrollCheck
    partialVisibility
    onChange={(visible: boolean) => onChangeVisibility(visible, id)}
  >
    <Section title={title} id={id} className={className}>
      <>{children}</>
    </Section>
  </VisibilitySensor>
);
